import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CocktailPage } from './cocktail/cocktail.page';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cocktail',
    loadChildren: () => import('./cocktail/cocktail.module').then( m => m.CocktailPageModule)
  },
  {
    path: 'cocktail/:id',
    loadChildren: () => import('./cocktail/cocktail.module').then(m => m.CocktailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
