import { Component, OnInit } from '@angular/core';
import { GoBus, GoBusTime } from '../allbus'
@Component({
  selector: 'app-go-bus',
  templateUrl: './go-bus.component.html',
  styleUrls: ['./go-bus.component.css']
})
export class GoBusComponent implements OnInit {
  bus = GoBus

  constructor() {
    setInterval(()=> {
       this.ngOnInit()
     }, 60*1000)
  }

  ngOnInit() {
    this.init()
  }

  init(): void {
    GoBusTime()
  }
}
