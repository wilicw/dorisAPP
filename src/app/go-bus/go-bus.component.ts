import { Component, OnInit } from '@angular/core';
import { GoBus, GetAuthorizationHeader, GetUrl } from '../allbus'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-go-bus',
  templateUrl: './go-bus.component.html',
  styleUrls: ['./go-bus.component.css']
})
export class GoBusComponent implements OnInit {
  bus = GoBus

  constructor(private http: HttpClient) {
    setInterval(()=> {
       this.ngOnInit()
     }, 60*1000)
  }

  ngOnInit() {
    this.init()
  }

  init(): void {
    GoBus.forEach((bus)=>{
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
