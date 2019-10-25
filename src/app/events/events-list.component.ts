import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;
@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
      private eventService: EventService,
      private toastrService: ToastrService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
    // this.events = this.eventService.getEvents().subscribe(
    //   events => { this.events = events }
    // );
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
