import { Component, OnInit } from '@angular/core';
import { BackBus, GetAuthorizationHeader, GetUrl, Mode, SetMode} from '../allbus'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-back-bus',
  templateUrl: './back-bus.component.html',
  styleUrls: ['./back-bus.component.css']
})
export class BackBusComponent implements OnInit {
  bus = BackBus

  constructor(private http: HttpClient) {
    SetMode(2)
  }

  ngOnInit() {
    this.init()
    setInterval(()=> {
       this.init()
     }, 20*1000)
  }

  init(): void {
    if (Mode !== 1) {
      BackBus.forEach((bus)=>{
        let url = GetUrl(bus)
        this.http.get(url, {headers: GetAuthorizationHeader()}).subscribe((resp)=>{
          let item = resp[0]
          let status = item.StopStatus;
          bus.time = Math.round(item.EstimateTime/60)
          if (status == 2) {
            bus.time = -2
          } else if (status == 3) {
            bus.time = -3
          } else if (status == 4) {
            bus.time = -4
          }
          if (isNaN(bus.time)) {
            bus.time = -1
          }
        })
      })
    }
  }
}
