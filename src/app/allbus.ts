import axios from 'axios';
import jsSHA from 'jssha';
let GoBus = [
  { num: '橘17' , way: 0, station: '中原路', City: 'NewTaipei', time: -5},
  { num: '786' , way: 0, station: '中平國中', City: 'NewTaipei', time: -5},
  { num: '783' , way: 0, station: '中平國中', City: 'NewTaipei', time: -5},
  { num: '652' , way: 0, station: '中平國中', City: 'Taipei', time: -5},
  { num: '786區' , way: 0, station: '中平國中', City: 'NewTaipei', time: -5},
  { num: '960' , way: 1, station: '中平國中', City: 'NewTaipei', time: -5}
];

let BackBus = [
  { num: '786' , way: 1, station: '捷運新莊站', City: 'NewTaipei', time: -5},
  { num: '783' , way: 1, station: '捷運新莊站', City: 'NewTaipei', time: -5},
  { num: '257' , way: 1, station: '新莊地政所', City: 'Taipei', time: -5},
  { num: '960' , way: 1, station: '捷運新莊站(地政事務所)', City: 'NewTaipei', time: -5},
  { num: '652' , way: 1, station: '捷運松江南京站', City: 'Taipei', time: -5},
  { num: '橘17' , way: 1, station: '捷運三民高中站(復興路)', City: 'NewTaipei', time: -5},
];

const getAuthorizationHeader = function() {
	let AppID = '1254bb3584c945f389f8ccc339727435';
	let AppKey = 'RAI3kFI573Hz9Fih0XsQnl_9XsA';
	let GMTString = new Date().toUTCString();
	let ShaObj = new jsSHA('SHA-1', 'TEXT');
	ShaObj.setHMACKey(AppKey, 'TEXT');
	ShaObj.update('x-date: ' + GMTString);
	let HMAC = ShaObj.getHMAC('B64');
	let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { 'Authorization': Authorization, 'X-Date': GMTString};
}
function BackBusTime() {
  console.log('Back')
  BackBus.forEach((bus)=>{
    let url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${bus.City}/${bus.num}?$filter=StopName%2FZh_tw%20eq%20'${bus.station}'&$top=30&$format=JSON&$select=Direction%2C%20EstimateTime%2CStopStatus`
    axios.get(url, {headers: getAuthorizationHeader()})
      .then((resp)=>{
        resp.data.forEach((item)=>{
          if (item.Direction == bus.way) {
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
          }
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  })
}

function GoBusTime() {
  console.log('Go')
  GoBus.forEach((bus)=>{
    let url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${bus.City}/${bus.num}?$filter=StopName%2FZh_tw%20eq%20'${bus.station}'&$top=30&$format=JSON&$select=Direction%2C%20EstimateTime%2CStopStatus`
    axios.get(url, {headers: getAuthorizationHeader()})
      .then((resp)=>{
        resp.data.forEach((item)=>{
          if (item.Direction == bus.way) {
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
          }
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  })
}

export {GoBus, BackBus, GoBusTime, BackBusTime}
