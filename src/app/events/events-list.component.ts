import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})

export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '8/28/2019',
    time: '10:00 am',
    price: 100.00,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
