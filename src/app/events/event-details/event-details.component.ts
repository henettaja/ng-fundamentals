import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/events/shared/event.service';
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl: 'event-details.component.html',
    styles: [`
        .container {padding: 0 20px;}
        .event-image {height: 100px;}
    `]
})

export class EventDetailsComponent implements OnInit {

    event!: IEvent

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.event = this.eventService.getEvent(Number(this.route.snapshot.params['id']))
    }
}