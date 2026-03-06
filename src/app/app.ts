import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import separate components for better project structure
import { HeaderComponent } from './components/header';
import { HeroComponent } from './components/hero';
import { StylesComponent } from './components/styles';
import { ScheduleComponent } from './components/schedule';
import { ContactsComponent } from './components/contacts';
import { FooterComponent } from './components/footer';
import { DANCE_STYLES, SCHEDULE, CONTACTS } from './data/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    StylesComponent,
    ScheduleComponent,
    ContactsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /**
   * Main component for Adjanta Dance Center.
   * Manages global data and coordinates sub-components.
   */
  protected readonly title = signal('adjanta.itkamianets.com');
  protected readonly danceStyles = DANCE_STYLES;
  protected readonly schedule = SCHEDULE;
  protected readonly contacts = CONTACTS;

  // Dummy property to force refresh of the IDE's Angular Language Service
  protected readonly isInitialized = signal(true);
}
