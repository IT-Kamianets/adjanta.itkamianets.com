import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Music, Users, Zap } from 'lucide-angular';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-styles',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RevealDirective],
  template: `
    <section id="styles" class="py-20">
      <div class="container mx-auto px-6">
        <!-- Section header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div appReveal="left">
            <h2 class="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Наші напрямки</h2>
            <h3 class="text-4xl font-black">ОБЕРИ СВІЙ СТИЛЬ</h3>
          </div>
          <p appReveal="right" class="text-slate-400 max-w-md">
            Від вуличних бітів до сучасного потоку — ми пропонуємо широкий вибір класів для будь-якого рівня підготовки.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            *ngFor="let style of danceStyles; let i = index"
            appReveal="up" [delay]="i * 100"
            class="group relative p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 overflow-hidden"
          >
            <!-- Hover Glow -->
            <div class="absolute inset-0 bg-gradient-to-br transition-opacity duration-300 opacity-0 group-hover:opacity-100 {{style.color}}"></div>

            <div class="relative z-10">
              <div class="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <lucide-icon [img]="musicIcon" class="w-6 h-6 text-fuchsia-500"></lucide-icon>
              </div>
              <h4 class="text-2xl font-bold mb-2">{{style.title}}</h4>
              <div class="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase mb-4">
                <lucide-icon [img]="usersIcon" class="w-3 h-3"></lucide-icon>
                {{style.ageGroup}}
              </div>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                {{style.description}}
              </p>
              <button class="text-sm font-bold flex items-center gap-2 text-white group-hover:text-fuchsia-400 transition-colors">
                Дізнатися більше
                <lucide-icon [img]="zapIcon" class="w-4 h-4"></lucide-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class StylesComponent {
  @Input() danceStyles: any[] = [];

  readonly musicIcon = Music;
  readonly usersIcon = Users;
  readonly zapIcon = Zap;
}
