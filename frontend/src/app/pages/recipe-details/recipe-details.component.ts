import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faBookmark,
  faHeart,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import {
  faMobile,
  faShareNodes,
  faStar as faStarSol,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent {
  productId!: string;
  faStarSol = faStarSol;
  faStar = faStar;
  faHeart = faHeart;
  faBookmark = faBookmark;
  faMobile = faMobile;
  faShareNodes = faShareNodes;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      // Fetch additional data or perform logic based on productId
    });
  }
}
