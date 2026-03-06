import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Clock } from 'lucide-angular';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="schedule" class="py-20 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-sm font-bold text-fuchsia-500 uppercase tracking-widest mb-2">Твій час сяяти</h2>
          <h3 class="text-4xl font-black">ТИЖНЕВИЙ РОЗКЛАД</h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div *ngFor="let dayGroup of schedule" class="bg-white/5 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <h4 class="text-xl font-bold mb-6 flex items-center gap-3">
              <lucide-icon [img]="clockIcon" class="w-5 h-5 text-cyan-400"></lucide-icon>
              {{dayGroup.day}}
            </h4>
            
            <div class="space-y-4">
              <div *ngFor="let cls of dayGroup.classes" class="p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors">
                <div class="text-xs font-bold text-slate-500 mb-1">{{cls.time}}</div>
                <div class="font-bold text-slate-200">{{cls.style}}</div>
                <div class="text-xs text-cyan-400/70 mt-1 flex items-center gap-1">
                   Викладач: {{cls.coach}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ScheduleComponent {
  @Input() schedule: any[] = [];
  
  readonly clockIcon = Clock;
}
