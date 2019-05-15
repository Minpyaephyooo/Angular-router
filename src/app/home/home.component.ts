import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myStr : string = 'My test String';
  myNum : number = 20;
  data : string = 'Ending';

  addData(){
    alert(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
