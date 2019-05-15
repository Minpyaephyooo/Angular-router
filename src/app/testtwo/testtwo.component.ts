import { Component, OnInit } from '@angular/core';
import { BmserviceService } from '../sysgen/bmservice.service';

@Component({
  selector: 'app-testtwo',
  templateUrl: './testtwo.component.html',
  styleUrls: ['./testtwo.component.css']
})
export class TesttwoComponent implements OnInit {
  data;

  constructor(private bm:BmserviceService ) { }

  ngOnInit() {
    this.data = this.bm.getData();
  }

}
