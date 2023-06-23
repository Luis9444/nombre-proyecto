import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cocktails!: any[];
  filteredCocktails!: any[];
  searchTerm!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/search.php?s=`)
      .subscribe((response: any) => {
        this.cocktails = response.drinks;
        this.filteredCocktails = this.cocktails;
      });
  }

  filterCocktails() {
    this.filteredCocktails = this.cocktails.filter(cocktail =>
      cocktail.strDrink.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
