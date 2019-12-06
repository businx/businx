import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'businx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
