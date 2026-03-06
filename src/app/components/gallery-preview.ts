import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';
import { GALLERY_ITEMS } from '../data/content';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, RevealDirective],
  styles: [`
    /* ─── Scroll container ─── */
    .carousel {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      touch-action: pan-x;
      scrollbar-width: none;
      /* Peek effect: padding shows edges of next/prev cards */
      padding: 0 24px 0 24px;
      /* Negative margin so first/last cards touch the edge */
      margin: 0 -24px;
    }
    .carousel::-webkit-scrollbar { display: none; }

    /* ─── Card ─── */
    .c-card {
      flex: 0 0 72vw;
      max-width: 300px;
      height: 400px;
      scroll-snap-align: start;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,0.08);
      background: #0f172a;
    }

    @media (max-width: 400px) {
      .c-card { flex: 0 0 80vw; height: 360px; }
    }

    @media (min-width: 768px) {
      .carousel { padding: 0; margin: 0; }
      .c-card { flex: 0 0 calc(33.333% - 8px); max-width: none; height: 340px; }
    }

    @media (min-width: 1024px) {
      .c-card { flex: 0 0 calc(25% - 9px); height: 360px; }
    }

    /* ─── Card image ─── */
    .c-card img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      display: block;
    }
    .c-card:hover img { transform: scale(1.06); }

    /* ─── Gradient overlay ─── */
    .c-card .c-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(
        to top,
        rgba(2, 6, 23, 0.92) 0%,
        rgba(2, 6, 23, 0.3) 45%,
        transparent 100%
      );
    }

    /* ─── Card label ─── */
    .c-card .c-label {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: 20px;
    }

    /* ─── Expand indicator ─── */
    .c-card .c-expand {
      position: absolute; top: 12px; right: 12px;
      width: 32px; height: 32px;
      border-radius: 10px;
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center;
      opacity: 0;
      transform: scale(0.8);
      transition: all 0.3s ease;
    }
    .c-card:hover .c-expand { opacity: 1; transform: scale(1); }
  `],
  template: `
    <section class="py-16 relative">

      <!-- Glow -->
      <div style="position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;">
        <div class="absolute -right-32 top-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div class="absolute -left-32 bottom-0 w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10">

        <!-- Header inside container -->
        <div class="container mx-auto px-6">
          <div class="flex items-end justify-between mb-6">
            <div appReveal="left">
              <p class="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-1">Наші моменти</p>
              <h2 class="text-2xl md:text-4xl font-black text-white">ЖИВІ ЕМОЦІЇ</h2>
            </div>
            <a appReveal="right" routerLink="/gallery"
               class="flex-shrink-0 text-sm font-bold text-slate-400 hover:text-fuchsia-400 transition-colors flex items-center gap-1 group">
              Всі фото
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>
        </div>

        <!-- Carousel — goes full width with px padding for peek -->
        <div class="container mx-auto px-6">
          <div appReveal class="carousel">
            <div *ngFor="let item of items; let i = index"
                 class="c-card"
                 routerLink="/gallery">
              <img [src]="item.image" [alt]="item.title" loading="lazy">
              <div class="c-overlay"></div>

              <!-- Expand icon (desktop hover) -->
              <div class="c-expand">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
              </div>

              <!-- Label -->
              <div class="c-label">
                <p style="font-size:10px;font-weight:700;color:rgb(232,121,249);text-transform:uppercase;letter-spacing:0.12em;margin-bottom:4px;">
                  {{item.category}}
                </p>
                <p style="font-size:15px;font-weight:700;color:white;line-height:1.25;">
                  {{item.title}}
                </p>
              </div>

              <!-- Index badge -->
              <div style="position:absolute;top:12px;left:12px;background:rgba(0,0,0,0.4);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:3px 8px;">
                <span style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.7);">{{i + 1}}/{{items.length}}</span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  `
})
export class GalleryPreviewComponent {
  items = GALLERY_ITEMS;
}
