import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming events</h1>
        <hr>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/src/assets/images/angular.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'UK'
        }
    }
}