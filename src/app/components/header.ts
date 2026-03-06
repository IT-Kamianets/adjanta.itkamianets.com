import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="fixed top-0 z-50 w-full transition-all duration-500 border-b"
      [ngClass]="{
        'bg-slate-950/80 backdrop-blur-xl border-white/5 py-3 shadow-2xl shadow-fuchsia-500/5': isScrolled(),
        'bg-transparent border-transparent py-6': !isScrolled()
      }"
    >
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between relative">
          
          <!-- Logo (Left) -->
          <div class="z-10 w-32 md:w-48">
            <a href="#" class="flex items-center group transition-all duration-300">
              <div class="relative">
                <div class="absolute inset-0 bg-fuchsia-500 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img src="/logo.png" alt="Adjanta Logo" class="w-12 h-12 md:w-14 md:h-14 object-contain relative z-10 group-hover:scale-105 transition-transform duration-500">
              </div>
            </a>
          </div>

          <!-- Navigation (Center - Desktop Only) -->
          <nav class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-white/5 border border-white/10 px-8 py-2.5 rounded-full backdrop-blur-md shadow-inner">
            <div class="flex items-center gap-10 text-sm font-semibold tracking-wide">
              <a href="#styles" class="text-slate-300 hover:text-fuchsia-400 transition-all duration-300 relative group">
                Стилі
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#schedule" class="text-slate-300 hover:text-fuchsia-400 transition-all duration-300 relative group">
                Розклад
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contacts" class="text-slate-300 hover:text-fuchsia-400 transition-all duration-300 relative group">
                Контакти
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </nav>

          <!-- CTA (Right) -->
          <div class="z-10 w-32 md:w-48 flex justify-end items-center gap-4">
            <a href="#contacts" class="hidden md:flex px-6 py-2.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-fuchsia-600/20 hover:scale-105 active:scale-95 whitespace-nowrap">
              Записатися
            </a>
            
            <!-- Mobile Menu Toggle -->
            <button class="md:hidden flex flex-col items-end gap-1.5 p-2 group">
              <div class="w-8 h-0.5 bg-fuchsia-500 group-hover:w-6 transition-all duration-300"></div>
              <div class="w-6 h-0.5 bg-cyan-400"></div>
              <div class="w-4 h-0.5 bg-fuchsia-500 group-hover:w-8 transition-all duration-300"></div>
            </button>
          </div>

        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  protected readonly isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
}
