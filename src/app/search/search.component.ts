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

  pushData(resp, city, num) {
    let self = this
    let sort = null
    let search = (di, name) => {
      let ret = null
      resp.forEach((item) => {
        if (item.StopName.Zh_tw == name) {
          ret = Math.round(item.EstimateTime/60)
        }
      })
      return ret
    }
    this.http.get<any[]>(`https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/${city}/${num}?$format=JSON`, {headers: GetAuthorizationHeader()}).subscribe((data)=>{
      sort = data
      sort[0].Stops.forEach((item) => {
        let time = search(0, item.StopName.Zh_tw)
        self.showgo.push(`  ${item.StopName.Zh_tw} - ${time} 分鐘`)
      })
      sort[1].Stops.forEach((item) => {
        let time = search(1, item.StopName.Zh_tw)
        self.showback.push(`  ${item.StopName.Zh_tw} - ${time} 分鐘`)
      })
    })
  }

  search() {
    let tpurl = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei?$filter=RouteName/Zh_tw eq '${this.num}'&$format=JSON`
    let ntpurl = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei?$filter=RouteName/Zh_tw eq '${this.num}'&$format=JSON`
    this.showgo = []
    this.showback = []
    let self = this
    this.http.get<any[]>(tpurl, {headers: GetAuthorizationHeader()}).subscribe((resp)=>{
      console.log(resp)
      if (resp.length == 0) {
        this.http.get<any[]>(ntpurl, {headers: GetAuthorizationHeader()}).subscribe((resp)=>{
          if (resp.length == 0) {
            alert("沒這路公車")
          } else {
            this.pushData(resp, "NewTaipei", self.num)
          }
        })
      } else {
        this.pushData(resp, "Taipei", self.num)
      }
    })

  }

}
