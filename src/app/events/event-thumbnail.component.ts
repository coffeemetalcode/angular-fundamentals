import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})

export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    // const isEarlyStart = this.event && this.event.time === '8:00';
    // return {
    //   green: isEarlyStart, bold: isEarlyStart
    // };

    if (this.event && this.event.time === '8:00') { return 'green bold'; }
    return '';
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00') {
      return { color: '#003300', 'font-weight': 'bold'};
    } else {
      return {};
    }
  }

}
