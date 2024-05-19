import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Tag } from '../models/Tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit{

  @Input()
  foodPageTags?:string[]

  @Input()
  justifyContent:string = 'center';

  tags?: Tag[];

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags){
      this.tags = this.foodService.getAllTags();
    }
  }

}