import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Import separate components for better project structure
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { CONTACTS } from './data/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
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
  protected readonly contacts = CONTACTS;

  // Dummy property to force refresh of the IDE's Angular Language Service
  protected readonly isInitialized = signal(true);
}
