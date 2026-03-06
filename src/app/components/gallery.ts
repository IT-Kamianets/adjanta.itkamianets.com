import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY_ITEMS } from '../data/content';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    @keyframes pageEnter {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes cardEnter {
      from { opacity: 0; transform: scale(0.92) translateY(20px); }
      to   { opacity: 1; transform: scale(1)   translateY(0); }
    }
    @keyframes lightboxEnter {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes lightboxImgEnter {
      from { opacity: 0; transform: scale(0.92); }
      to   { opacity: 1; transform: scale(1); }
    }
    .page-enter {
      animation: pageEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .card-enter {
      opacity: 0;
      animation: cardEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .lightbox-enter {
      animation: lightboxEnter 0.3s ease both;
    }
    .lightbox-img-enter {
      animation: lightboxImgEnter 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
  `],
  template: `
    <section id="gallery" class="py-12 md:py-20 relative overflow-hidden page-enter">
      <!-- Background Elements -->
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
      
      <div class="w-full px-4 md:px-8 relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-3">
          <div>
            <h2 class="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">Наші моменти</h2>
            <h3 class="text-3xl md:text-4xl font-black">ГАЛЕРЕЯ</h3>
          </div>
          <p class="text-slate-400 text-sm md:text-base max-w-md">
            Енергія, емоції та драйв нашого танцювального життя в кожному кадрі.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 auto-rows-[160px] md:auto-rows-[250px]">
          <div *ngFor="let item of galleryItems; let i = index" 
               class="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 border border-white/5 cursor-pointer card-enter {{item.classes}}"
               [style.animation-delay]="(i * 80) + 'ms'"
               (click)="openLightbox(i)">
            
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10"></div>
            
            <img [src]="item.image" [alt]="item.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">

            <div class="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h4 class="text-xl font-bold text-white mb-1">{{item.title}}</h4>
              <p class="text-sm text-fuchsia-400 font-medium uppercase tracking-wider">{{item.category}}</p>
            </div>
            
            <!-- Hover overlay with expand icon -->
            <div class="absolute inset-0 bg-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
               <div class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div *ngIf="lightboxOpen"
         class="fixed inset-0 z-[9999] flex items-center justify-center lightbox-enter"
         (click)="closeLightbox()">

      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/90 backdrop-blur-md"></div>

      <!-- Content wrapper (stops click propagation) -->
      <div class="relative z-10 flex flex-col items-center max-w-5xl w-full px-4"
           (click)="$event.stopPropagation()">

        <!-- Top bar: title + close -->
        <div class="w-full flex items-center justify-between mb-4">
          <div>
            <p class="text-xs text-fuchsia-400 font-bold uppercase tracking-widest mb-1">
              {{ galleryItems[currentIndex].category }}
            </p>
            <h4 class="text-xl font-bold text-white">{{ galleryItems[currentIndex].title }}</h4>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-slate-400 text-sm">{{ currentIndex + 1 }} / {{ galleryItems.length }}</span>
            <button (click)="closeLightbox()"
                    class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Image -->
        <div class="relative w-full rounded-2xl overflow-hidden bg-slate-900"
             style="max-height: 70vh; aspect-ratio: 16/9;">
          <img [src]="galleryItems[currentIndex].image"
               [alt]="galleryItems[currentIndex].title"
               class="w-full h-full object-contain lightbox-img-enter">

          <!-- Prev button -->
          <button (click)="prev()"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-fuchsia-600/70 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <!-- Next button -->
          <button (click)="next()"
                  class="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-fuchsia-600/70 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        <!-- Thumbnail strip -->
        <div class="flex gap-2 mt-4 overflow-x-auto pb-1 w-full justify-center">
          <div *ngFor="let item of galleryItems; let i = index"
               (click)="currentIndex = i"
               class="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200"
               [ngClass]="i === currentIndex ? 'border-fuchsia-500 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-80'">
            <img [src]="item.image" [alt]="item.title" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent implements OnInit {

  lightboxOpen = false;
  currentIndex = 0;

  ngOnInit() {
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'Escape') this.closeLightbox();
  }

  galleryItems = GALLERY_ITEMS;
}
