import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailPage } from './cocktail.page';

describe('CocktailPage', () => {
  let component: CocktailPage;
  let fixture: ComponentFixture<CocktailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CocktailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
