import { Component, Inject, OnInit } from '@angular/core'
import { IEvent } from './shared/event.model'
import { ActivatedRoute } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../shared'

@Component({
  template: `
    <div>
      <h1>Upcoming events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = []

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data.events
  }
}
