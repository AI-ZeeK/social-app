import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';
import { AuthData } from './DTO/auth.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

interface NewUser extends User {
  token: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  private readonly secretKey = process.env.JWT_SECRET_KEY;
  //

  @Post('/register')
  async createUser(@Body() authData: AuthData): Promise<User> {
    try {
      const { username, email, password } = authData;
      if (!username || !email || !password)
        throw new HttpException('Invalid Credentials', HttpStatus.BAD_REQUEST);
      const hashedPassword = await this.hashPassword(password);
      const user = await this.authService.getOneUser({
        email,
      });

      if (user)
        throw new HttpException(
          'User already exists, Proceed to login',
          HttpStatus.BAD_REQUEST,
        );
      const token = this.generateToken(email);
      const userInfo = await this.authService.createUser({
        username,
        email: email.toLowerCase(),
        password: hashedPassword,
        token,
      });

      delete userInfo.password;
      return { ...userInfo };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  @Post('/login')
  async loginUser(@Body() authData: AuthData): Promise<User> {
    try {
      const { email, password } = authData;
      if (!email || !password)
        throw new HttpException('Invalid Credentials', HttpStatus.BAD_REQUEST);
      const user = await this.authService.getOneUser({
        email,
      });
      if (!user)
        throw new HttpException(
          "User Doesn't exist,Proceed to Register",
          HttpStatus.BAD_REQUEST,
        );
      const passwordMatch = await this.comparePasswords(
        password,
        user.password,
      );

      if (!passwordMatch)
        throw new HttpException(
          'Password is incorrect',
          HttpStatus.BAD_REQUEST,
        );
      const token = this.generateToken(email);

      const userInfo = await this.authService.updateUser(
        { id: user.id },
        { token },
      );
      delete userInfo.password;
      return userInfo;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  @Get('my/:id')
  async OneUser(@Param('id') id: string): Promise<User> {
    return this.authService.getOneUser({
      id,
    });
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  }
  generateToken(payload: any): string {
    try {
      const token = jwt.sign({ data: payload }, this.secretKey, {
        expiresIn: '3600s',
      });
      return token;
    } catch (error) {
      throw error;
    }
  }

  verifyToken(token: string): any {
    const decoded = jwt.verify(token, this.secretKey);
    return decoded;
  }
}
