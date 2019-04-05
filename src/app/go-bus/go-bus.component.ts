import { Component, OnInit } from '@angular/core';
import { GoBus, GetAuthorizationHeader, GetUrl, Mode, SetMode} from '../allbus'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-go-bus',
  templateUrl: './go-bus.component.html',
  styleUrls: ['./go-bus.component.css']
})
export class GoBusComponent implements OnInit {
  bus = GoBus

  constructor(private http: HttpClient) {
    SetMode(1)
  }

  ngOnInit() {
    this.init()
    setInterval(()=> {
       this.init()
     }, 20*1000)
  }

  init(): void {
    if (Mode != 2) {
      GoBus.forEach((bus)=>{
        let url = GetUrl(bus)
        this.http.get<any[]>(url, {headers: GetAuthorizationHeader()}).subscribe((resp)=>{
          resp.forEach((item)=>{
            let status = item.StopStatus;
            if(item.RouteName.Zh_tw == bus.num) {
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
            }
          })
        })
      })
    }
  }
}
