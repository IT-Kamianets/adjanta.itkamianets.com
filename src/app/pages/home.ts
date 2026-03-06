import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero';
import { StylesComponent } from '../components/styles';
import { ScheduleComponent } from '../components/schedule';
import { GalleryPreviewComponent } from '../components/gallery-preview';
import { ContactsComponent } from '../components/contacts';
import { DANCE_STYLES, SCHEDULE, CONTACTS } from '../data/content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    StylesComponent,
    ScheduleComponent,
    GalleryPreviewComponent,
    ContactsComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-styles [danceStyles]="danceStyles"></app-styles>
    <app-schedule [schedule]="schedule"></app-schedule>
    <app-gallery-preview></app-gallery-preview>
    <app-contacts [contacts]="contacts" [danceStyles]="danceStyles"></app-contacts>
  `
})
export class HomeComponent {
  protected readonly danceStyles = DANCE_STYLES;
  protected readonly schedule = SCHEDULE;
  protected readonly contacts = CONTACTS;
}
