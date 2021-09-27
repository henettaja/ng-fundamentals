import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../shared/toastr.service';
import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div>
        <h1>Upcoming events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail
                (click)="handleThumbnailClick(event.name)"
                [event]="event"></event-thumbnail>
            </div>    
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: IEvent[] = []

    constructor(
        private toastr: ToastrService,
        private route: ActivatedRoute) {}

    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName)
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }
}