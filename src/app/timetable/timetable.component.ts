import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})

export class TimetableComponent implements OnInit {
  display: string[] = ['no', 'mon', 'tue', 'wed', 'thu', 'fri'];
  DayTable = [
    {no: 1, mon: '體育', tue: '英文', wed: '資訊', thu: '國文', fri: '家政'},
    {no: 2, mon: '美術', tue: '化學', wed: '資訊', thu: '地理', fri: '公民'},
    {no: 3, mon: '數學', tue: '國文', wed: '數學', thu: '專題', fri: '公民'},
    {no: 4, mon: '英文', tue: '輔導', wed: '化學', thu: '專題', fri: '歷史'},
    {no: null, mon: '午休', tue: '午休', wed: '午休', thu: '午休', fri: '午休'},
    {no: 5, mon: '國文', tue: '數學', wed: '英文', thu: '體育', fri: '國文'},
    {no: 6, mon: '地科', tue: '音樂', wed: '地科', thu: '數學', fri: '班會'},
    {no: 7, mon: '國防', tue: '歷史', wed: '地理', thu: '英文', fri: '綜合活動'},
    {no: 8, mon: '地科', tue: '英文', wed: '歷史', thu: '數學', fri: null},
    {no: 9, mon: '國文', tue: null, wed: null, thu: null, fri: null},
  ];
  constructor() { }

  ngOnInit() {
  }

}
