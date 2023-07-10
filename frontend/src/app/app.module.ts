import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from './store/auth.actions';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { OneComponent } from './components/svg/one/one.component';
import { ProfileComponent } from './pages/profile/profile.component';
// import { AlertModule } from '@coreui/angular';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ModalComponent } from './components/modal/modal.component';

import { environment } from 'src/environments/environment.dev';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    OneComponent,
    ProfileComponent,
    EditProfileComponent,
    ModalComponent,
    RecipeDetailsComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxsModule.forRoot([AppState]),
    FormsModule,
    // AlertModule,
    RouterModule.forRoot([]),
    ButtonModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
