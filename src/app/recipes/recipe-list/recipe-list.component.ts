import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEK3iHtgxszGgw4euKVT7xxqw71bTLSID9wnmii7SURY_N0p1'
    ),
    new Recipe(
      'Test recipe2',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEK3iHtgxszGgw4euKVT7xxqw71bTLSID9wnmii7SURY_N0p1'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
