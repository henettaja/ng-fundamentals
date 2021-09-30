import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
  EventDetailsComponent,
  EventThumbnailComponent,
  EventsListComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
} from './events'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  CollapsibleWellComponent,
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  ModalTriggerDirective,
  SimpleModalComponent,
} from './shared'

const toastr: Toastr = (window as any).toastr
const jQuery = (window as any).$

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    NavBarComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    Error404Component,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    { provide: 'canDeactivateCreateEvent', useValue: CheckDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function CheckDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    )
  } else {
    return true
  }
}
