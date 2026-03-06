import { Component, OnInit, OnDestroy, signal, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 100;
    }

    /* Mobile Menu Animation */
    @keyframes mobileMenuIn {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .mobile-menu-animate {
      animation: mobileMenuIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .desktop-nav { display: none; }
    .desktop-cta { display: none; }
    .burger-btn  { display: flex; }

    @media (min-width: 768px) {
      .desktop-nav { display: flex; }
      .desktop-cta { display: flex; }
      .burger-btn  { display: none; }
    }

    /* Hamburger lines transition */
    .burger-line {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `],
  template: `
    <header
      class="w-full transition-all duration-300"
      [style.background]="isScrolled() || isMenuOpen() ? 'rgba(2, 6, 23, 0.9)' : 'transparent'"
      [style.borderBottom]="isScrolled() || isMenuOpen() ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'"
      [style.backdropFilter]="isScrolled() || isMenuOpen() ? 'blur(16px)' : 'none'"
      [style.padding]="isScrolled() ? '12px 0' : '20px 0'"
      [style.boxShadow]="isScrolled() ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none'"
    >
      <div class="max-w-[1400px] mx-auto px-6">
        <div class="flex items-center justify-between">
          
          <!-- Logo -->
          <a routerLink="/" class="z-50 transition-transform hover:scale-105 active:scale-95" (click)="closeMenu()">
            <img src="/logo.png" alt="Adjanta Logo" class="h-10 md:h-12 w-auto object-contain">
          </a>

          <!-- Desktop Navigation -->
          <nav class="desktop-nav absolute left-1/2 -translate-x-1/2 items-center bg-white/5 border border-white/10 px-8 py-2.5 rounded-full backdrop-blur-md">
            <div class="flex items-center gap-10 text-sm font-semibold tracking-wide">
              <a routerLink="/" fragment="styles" class="text-slate-300 hover:text-fuchsia-400 transition-colors">Стилі</a>
              <a routerLink="/" fragment="schedule" class="text-slate-300 hover:text-fuchsia-400 transition-colors">Розклад</a>
              <a routerLink="/" fragment="contacts" class="text-slate-300 hover:text-fuchsia-400 transition-colors">Контакти</a>
              <a routerLink="/gallery" class="text-slate-300 hover:text-fuchsia-400 transition-colors">Галерея</a>
            </div>
          </nav>

          <!-- Right Side: CTA + Burger -->
          <div class="flex items-center gap-4 z-50">
            <a routerLink="/" fragment="contacts" class="desktop-cta px-6 py-2.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] transition-all active:scale-95">
              Записатися
            </a>

            <!-- Improved Burger Button -->
            <button class="burger-btn group relative h-10 w-10 flex-col items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer outline-none overflow-hidden" 
                    (click)="toggleMenu()"
                    aria-label="Toggle Menu">
              <div
                class="burger-line h-0.5 bg-fuchsia-400 rounded-full"
                [style.width]="isMenuOpen() ? '24px' : '28px'"
                [style.transform]="isMenuOpen() ? 'translateY(8px) rotate(45deg)' : 'none'">
              </div>
              <div
                class="burger-line h-0.5 bg-cyan-400 rounded-full"
                [style.width]="'24px'"
                [style.opacity]="isMenuOpen() ? '0' : '1'"
                [style.transform]="isMenuOpen() ? 'translateX(20px)' : 'none'">
              </div>
              <div
                class="burger-line h-0.5 bg-fuchsia-400 rounded-full"
                [style.width]="isMenuOpen() ? '24px' : '20px'"
                [style.transform]="isMenuOpen() ? 'translateY(-8px) rotate(-45deg)' : 'none'">
              </div>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div *ngIf="isMenuOpen()"
           class="mobile-menu-animate fixed inset-0 top-[100%] h-[100vh] w-full bg-slate-950/98 backdrop-blur-2xl border-t border-white/5 px-6 py-10 overflow-y-auto">
        <div class="flex flex-col gap-4 max-w-md mx-auto">
          <a routerLink="/" fragment="styles" (click)="closeMenu()"
             class="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-all">
            <span class="text-lg font-bold text-slate-200 group-hover:text-fuchsia-400">Стилі</span>
            <span class="text-fuchsia-500/50">→</span>
          </a>
          <a routerLink="/" fragment="schedule" (click)="closeMenu()"
             class="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-all">
            <span class="text-lg font-bold text-slate-200 group-hover:text-fuchsia-400">Розклад</span>
            <span class="text-fuchsia-500/50">→</span>
          </a>
          <a routerLink="/" fragment="contacts" (click)="closeMenu()"
             class="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-all">
            <span class="text-lg font-bold text-slate-200 group-hover:text-fuchsia-400">Контакти</span>
            <span class="text-fuchsia-500/50">→</span>
          </a>
          <a routerLink="/gallery" (click)="closeMenu()"
             class="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-all">
            <span class="text-lg font-bold text-slate-200 group-hover:text-fuchsia-400">Галерея</span>
            <span class="text-fuchsia-500/50">→</span>
          </a>
          <div class="mt-6">
            <a routerLink="/" fragment="contacts" (click)="closeMenu()"
               class="block text-center p-5 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-[0_10px_30px_rgba(192,38,211,0.3)] hover:shadow-[0_10px_40px_rgba(192,38,211,0.5)] transition-all">
              Записатися зараз
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  private onScroll = () => {
    if (typeof window === 'undefined') return;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const pastThreshold = scrollPosition > 10;
    
    if (this.isScrolled() !== pastThreshold) {
      this.isScrolled.set(pastThreshold);
      this.cdr.markForCheck();
    }
  };

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.onScroll();
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    
    // Prevent body scroll when menu is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
    }
    
    this.cdr.markForCheck();
  }

  closeMenu() {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
      this.cdr.markForCheck();
    }
  }
}
