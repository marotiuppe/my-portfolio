import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { addDays } from 'date-fns';
@Component({
  selector: 'app-github-calendar',
  standalone: true,
  imports: [],
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.scss']
})
export class GithubCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewDate: Date = new Date();

}
