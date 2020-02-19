import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectRootComponent } from './project-root/project-root.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectRootComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipesComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
