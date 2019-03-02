import { Component, OnInit } from '@angular/core';
import { BackBus, BackBusTime } from '../allbus'

@Component({
  selector: 'app-back-bus',
  templateUrl: './back-bus.component.html',
  styleUrls: ['./back-bus.component.css']
})
export class BackBusComponent implements OnInit {
  bus = BackBus

  constructor() {
    setInterval(()=> {
       this.ngOnInit()
     }, 60*1000)
  }

  ngOnInit() {
    this.init()
  }

  init(): void {
    BackBusTime()
  }
}
