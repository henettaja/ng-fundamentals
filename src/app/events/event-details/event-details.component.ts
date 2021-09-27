import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventService } from 'src/app/events/shared/event.service'
import { IEvent, ISession } from '../shared/event.model'

@Component({
  templateUrl: 'event-details.component.html',
  styles: [
    `
      .container {
        padding: 0 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent
  addMode = false

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    )
    session.id = maxId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      Number(this.route.snapshot.params.id)
    )
  }
}
