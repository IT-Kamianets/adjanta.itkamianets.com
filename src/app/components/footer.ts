import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Instagram, Facebook, Send, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <footer class="relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      <!-- Background Decorative Glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
      <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-600/10 blur-[100px] rounded-full"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          <!-- Column 1: Brand -->
          <div class="col-span-2 md:col-span-1">
            <a href="#" class="flex items-center mb-6 group">
              <img src="/logo.png" alt="Adjanta Logo" class="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500">
            </a>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              Ми створюємо простір, де кожен рух стає мистецтвом. Приєднуйся до найкращої танцювальної родини Кам'янця.
            </p>
            <div class="flex items-center gap-4">
              <a [href]="contacts.instagram" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500 transition-all duration-300">
                <lucide-icon [img]="instagramIcon" class="w-5 h-5"></lucide-icon>
              </a>
              <a [href]="contacts.facebook" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                <lucide-icon [img]="facebookIcon" class="w-5 h-5"></lucide-icon>
              </a>
              <a [href]="contacts.tiktok" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-slate-500 hover:text-white hover:border-slate-500 transition-all duration-300">
                <span class="font-black text-[10px]">TIKTOK</span>
              </a>
            </div>
          </div>

          <!-- Column 2: Navigation -->
          <div>
            <h4 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Навігація</h4>
            <ul class="space-y-4 text-sm">
              <li><a routerLink="/" fragment="styles" class="text-slate-400 hover:text-fuchsia-400 transition-colors">Напрямки танцю</a></li>
              <li><a routerLink="/" fragment="schedule" class="text-slate-400 hover:text-fuchsia-400 transition-colors">Розклад занять</a></li>
              <li><a routerLink="/" fragment="contacts" class="text-slate-400 hover:text-fuchsia-400 transition-colors">Записатися</a></li>
              <li><a routerLink="/gallery" class="text-slate-400 hover:text-fuchsia-400 transition-colors">Галерея</a></li>
            </ul>
          </div>

          <!-- Column 3: Contacts -->
          <div>
            <h4 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Контакти</h4>
            <ul class="space-y-4 text-sm">
              <li class="flex items-start gap-3 text-slate-400">
                <lucide-icon [img]="mapPinIcon" class="w-4 h-4 text-cyan-400 mt-0.5"></lucide-icon>
                <span>{{contacts.address}}</span>
              </li>
              <li class="text-slate-400">
                <a [href]="'tel:' + contacts.phone" class="hover:text-fuchsia-400 transition-colors">{{contacts.phoneFormatted}}</a>
              </li>
              <li class="text-slate-400">
                <a [href]="'mailto:' + contacts.email" class="hover:text-fuchsia-400 transition-colors">{{contacts.email}}</a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Newsletter/CTA -->
          <div>
            <h4 class="text-white font-bold mb-6 tracking-wider uppercase text-sm">Танцюй з нами</h4>
            <p class="text-slate-400 text-sm mb-4">Будь у курсі всіх новин та майстер-класів.</p>
            <div class="relative group">
              <input 
                type="email" 
                placeholder="Твій Email" 
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-fuchsia-500 transition-colors"
              >
              <button class="absolute right-2 top-2 bottom-2 px-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg text-white transition-colors">
                <lucide-icon [img]="sendIcon" class="w-4 h-4"></lucide-icon>
              </button>
            </div>
          </div>

        </div>

        <!-- Bottom Line -->
        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Танцювальний центр Adjanta. Всі права захищено.</p>
          <p class="flex items-center gap-1">
            Made with <span class="text-fuchsia-500 text-sm">♥</span> for dance community
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  @Input() contacts: any = {};
  
  readonly instagramIcon = Instagram;
  readonly facebookIcon = Facebook;
  readonly sendIcon = Send;
  readonly mapPinIcon = MapPin;
}
