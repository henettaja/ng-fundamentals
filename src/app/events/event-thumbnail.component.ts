import { Component, Input } from '@angular/core'
import { IEvent } from './shared/event.model'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date: {{ event?.date | date: 'shortDate' }}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>price: {{ event?.price | currency: 'USD' }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">
        <div>Online URL: {{ event?.onlineUrl }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
      .thumbnail {
        min-height: 210px;
      }
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event!: IEvent

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return { color: '#003300', 'font-weight': 'bold' }
    } else {
      return {}
    }
  }
}
