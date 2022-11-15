import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NFx3l0aFA0pirt74f652WKoeu1VP4l1JOA&usqp=CAU'
  constructor() { }

  ngOnInit(): void {
  }

}
