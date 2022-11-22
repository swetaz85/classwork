import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  date: Date;
  pi = Math.PI;
  title = 'pipes';
  constructor() {
    this.date = new Date();
   }

  ngOnInit(): void {
  }

}
