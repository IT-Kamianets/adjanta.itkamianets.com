import { Component, OnInit, OnDestroy, signal, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GALLERY_ITEMS } from '../data/content';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [`
    @keyframes heroFadeIn {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-content {
      animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .slide-img {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      transition: opacity 0.7s ease;
    }
  `],
  template: `
    <section class="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

      <!-- Background glows -->
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/15 blur-[140px] rounded-full pointer-events-none -z-0"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <!-- ===== MOBILE: Photo on top ===== -->
      <div class="lg:hidden relative w-full h-64 shrink-0 mt-20">
        <div *ngFor="let item of slides; let i = index"
             class="absolute inset-0 transition-opacity duration-700"
             [ngClass]="i === currentSlide() ? 'opacity-100 z-10' : 'opacity-0 z-0'">
          <img [src]="item.image" [alt]="item.title" class="slide-img">
        </div>
        <!-- Gradient bottom blend -->
        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none"></div>
        <!-- Mobile dot indicators -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-row gap-2">
          <div *ngFor="let item of slides; let i = index"
               (click)="goToSlide(i)"
               class="rounded-full cursor-pointer transition-all duration-300"
               [ngClass]="i === currentSlide()
                 ? 'w-6 h-2 bg-fuchsia-500'
                 : 'w-2 h-2 bg-white/30'">
          </div>
        </div>
      </div>

      <!-- ===== LEFT: Text Content ===== -->
      <div class="relative z-10 flex items-center w-full lg:w-1/2 px-6 md:px-12 lg:px-16 pt-6 lg:pt-32 pb-12 lg:pb-16">
        <div class="hero-content w-full max-w-xl mx-auto lg:mx-0">

          <h1 class="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-4 lg:mb-6">
            <span class="block text-white">ВІДКРИЙ СВІЙ</span>
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400">
              ВНУТРІШНІЙ РИТМ
            </span>
          </h1>

          <p class="text-slate-400 text-base lg:text-lg leading-relaxed mb-8 lg:mb-10">
            Професійне навчання танцям для дітей та підлітків (від 3 до 18 років).
            Приєднуйся до спільноти, де творчість зустрічається з дисципліною та стилем.
          </p>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 mb-8 lg:mb-12">
            <a routerLink="/" fragment="contacts"
               class="text-center px-6 py-3.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-fuchsia-600/25 active:scale-95 cursor-pointer">
              Приєднатися до сім'ї
            </a>
            <a routerLink="/" fragment="schedule"
               class="text-center px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all backdrop-blur-md active:scale-95 cursor-pointer">
              Переглянути розклад
            </a>
          </div>

          <!-- Stats -->
          <div class="flex items-center gap-6 lg:gap-8">
            <div>
              <div class="text-2xl lg:text-3xl font-black text-white">150+</div>
              <div class="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Учнів</div>
            </div>
            <div class="w-px h-8 lg:h-10 bg-white/10"></div>
            <div>
              <div class="text-2xl lg:text-3xl font-black text-white">4</div>
              <div class="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Напрямки</div>
            </div>
            <div class="w-px h-8 lg:h-10 bg-white/10"></div>
            <div>
              <div class="text-2xl lg:text-3xl font-black text-white">6</div>
              <div class="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Вікових груп</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== RIGHT: Full-height Slideshow (desktop only) ===== -->
      <div class="hidden lg:flex lg:w-1/2 relative flex-col">
        <div class="relative flex-1 overflow-hidden">
          <div *ngFor="let item of slides; let i = index"
               class="absolute inset-0 transition-opacity duration-700"
               [ngClass]="i === currentSlide() ? 'opacity-100 z-10' : 'opacity-0 z-0'">
            <img [src]="item.image" [alt]="item.title" class="slide-img">
          </div>
          <!-- Gradient overlay left edge -->
          <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
          <!-- Dot indicators -->
          <div class="absolute top-1/2 -translate-y-1/2 right-4 z-30 flex flex-col gap-2">
            <div *ngFor="let item of slides; let i = index"
                 (click)="goToSlide(i)"
                 class="rounded-full cursor-pointer transition-all duration-300"
                 [ngClass]="i === currentSlide()
                   ? 'w-2 h-8 bg-fuchsia-500'
                   : 'w-2 h-2 bg-white/30 hover:bg-white/60'">
            </div>
          </div>
        </div>
      </div>

    </section>
  `
})
export class HeroComponent implements OnInit, OnDestroy {

  private cdr = inject(ChangeDetectorRef);

  slides = GALLERY_ITEMS;
  currentSlide = signal(0);
  intervalMs = 4000;

  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.timer = setInterval(() => {
      this.currentSlide.update(v => (v + 1) % this.slides.length);
      this.cdr.markForCheck();
    }, this.intervalMs);
  }

  stopSlider() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  goToSlide(index: number) {
    this.stopSlider();
    this.currentSlide.set(index);
    this.cdr.markForCheck();
    this.startSlider();
  }
}
