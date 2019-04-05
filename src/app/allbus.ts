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

const GetAuthorizationHeader = function() {
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

let SetMode = (mode)=>{
  Mode = mode
}

let Mode = 1

function GetUrl (bus) {
  let url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${bus.City}/${bus.num}?$filter=StopName/Zh_tw eq '${bus.station}' and Direction eq '${bus.way}'&$top=30&$format=JSON&$select=Direction%2C%20EstimateTime%2CStopStatus%2CRouteName`
  return url
}
export {GoBus, BackBus, GetAuthorizationHeader, GetUrl, Mode, SetMode}
