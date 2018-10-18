import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss']
})
export class BackgroundImageComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() iHeight = "50%";
  @Input() bgColor ="#f9f7f7";
  constructor() { }

  ngOnInit() {
  
  }

}
