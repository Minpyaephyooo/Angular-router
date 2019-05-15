import { Component, OnInit } from '@angular/core';
import { BmserviceService } from '../sysgen/bmservice.service';

@Component({
  selector: 'app-testone',
  templateUrl: './testone.component.html',
  styleUrls: ['./testone.component.css']
})
export class TestoneComponent implements OnInit {

  data;

  constructor(private bm: BmserviceService ) { }

  ngOnInit() {
    this.data = this.bm.getData();
  }

}
