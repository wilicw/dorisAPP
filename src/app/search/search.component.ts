import { Component, OnInit } from '@angular/core';
import { GetAuthorizationHeader} from '../allbus'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  num = '652'

  showgo = []
  showback = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.num = event.target.value;
  }

  search() {
    let tpurl = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei?$filter=RouteName/Zh_tw eq '${this.num}'&$format=JSON`
    let ntpurl = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei?$filter=RouteName/Zh_tw eq '${this.num}'&$format=JSON`
    this.showgo = []
    this.showback = []
    let self = this
    this.http.get(tpurl, {headers: GetAuthorizationHeader()}).subscribe((resp)=>{
      if (resp.length == 0) {
        this.http.get(ntpurl, {headers: GetAuthorizationHeader()}).subscribe((resp)=>{
          if (resp.length == 0) {
            alert("沒這路公車")
          } else {
            resp.forEach((item) => {
              if (item.Direction == 1) {
                self.showgo.push(`  ${item.StopName.Zh_tw} - ${Math.round(item.EstimateTime/60)} 分鐘`)
              } else {
                self.showback.push(`  ${item.StopName.Zh_tw} - ${Math.round(item.EstimateTime/60)} 分鐘`)
              }
            })
          }
        })
      } else {
        resp.forEach((item) => {
          if (item.Direction == 1) {
            self.showgo.push(`  ${item.StopName.Zh_tw} - ${Math.round(item.EstimateTime/60)} 分鐘`)
          } else {
            self.showback.push(`  ${item.StopName.Zh_tw} - ${Math.round(item.EstimateTime/60)} 分鐘`)
          }
        })
      }
    })

  }

}
