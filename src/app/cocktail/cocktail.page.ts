import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.page.html',
  styleUrls: ['./cocktail.page.scss'],
})
export class CocktailPage implements OnInit {
  cocktail: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const cocktailId = this.route.snapshot.paramMap.get('id');
    this.http.get(`${environment.apiUrl}/lookup.php?i=${cocktailId}`)
      .subscribe((response: any) => {
        this.cocktail = response.drinks[0];
      });
  }
}
