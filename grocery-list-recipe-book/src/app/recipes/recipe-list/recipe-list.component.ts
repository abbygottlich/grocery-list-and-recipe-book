import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test.",
      "https://assets3.thrillist.com/v1/image/2848840/size/gn-gift_guide_variable_c.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test.",
      "https://assets3.thrillist.com/v1/image/2848840/size/gn-gift_guide_variable_c.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
