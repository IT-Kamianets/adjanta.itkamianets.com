import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <!-- Background Glows -->
      <div class="absolute top-0 -left-20 w-96 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-5xl md:text-8xl font-black tracking-tight leading-none mb-6">
          <span class="block">ВІДКРИЙ СВІЙ</span>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400">
            ВНУТРІШНІЙ РИТМ
          </span>
        </h1>

        <p class="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          Професійне навчання танцям для дітей та підлітків.
          Приєднуйся до найяскравішої спільноти, де творчість зустрічається з дисципліною та стилем.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="w-full sm:w-auto px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-fuchsia-600/20 hover:scale-105 active:scale-95">
            Приєднатися до сім'ї
          </button>
          <button class="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all backdrop-blur-md">
            Переглянути розклад
          </button>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
