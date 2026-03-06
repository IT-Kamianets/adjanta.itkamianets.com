import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Phone, Instagram, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="contacts" class="py-20">
      <div class="container mx-auto px-6">
        <div class="bg-gradient-to-br from-fuchsia-600/20 to-cyan-600/20 border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          <!-- Decoration -->
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-fuchsia-500/10 blur-[100px] rounded-full"></div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 class="text-4xl md:text-5xl font-black mb-8">ГОТОВІ <br><span class="text-fuchsia-500">ПОЧАТИ ТАНЦЮВАТИ?</span></h3>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <lucide-icon [img]="mapPinIcon" class="w-6 h-6 text-cyan-400"></lucide-icon>
                  </div>
                  <div>
                    <div class="text-sm font-bold text-slate-400 uppercase mb-1">Адреса</div>
                    <div class="text-lg">{{contacts.address}}</div>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <lucide-icon [img]="phoneIcon" class="w-6 h-6 text-fuchsia-500"></lucide-icon>
                  </div>
                  <div>
                    <div class="text-sm font-bold text-slate-400 uppercase mb-1">Телефон</div>
                    <a [href]="'tel:' + contacts.phone" class="text-lg hover:text-fuchsia-400 transition-colors">{{contacts.phoneFormatted}}</a>
                  </div>
                </div>

                <div class="flex items-center gap-4 mt-8">
                  <a [href]="contacts.instagram" target="_blank" class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-fuchsia-500/20 transition-colors">
                    <lucide-icon [img]="instagramIcon" class="w-6 h-6"></lucide-icon>
                  </a>
                  <a [href]="contacts.facebook" target="_blank" class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 transition-colors">
                    <lucide-icon [img]="facebookIcon" class="w-6 h-6"></lucide-icon>
                  </a>
                  <a [href]="contacts.tiktok" target="_blank" class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-slate-500/20 transition-colors">
                    <!-- Custom SVG for TikTok if needed, or keeping it consistent -->
                    <span class="font-black text-xs">TIKTOK</span>
                  </a>
                </div>
              </div>
            </div>

            <form class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Ім'я" class="w-full px-6 py-4 rounded-2xl bg-slate-950/50 border border-white/10 focus:border-fuchsia-500 outline-none transition-colors">
                <input type="tel" placeholder="Телефон" class="w-full px-6 py-4 rounded-2xl bg-slate-950/50 border border-white/10 focus:border-fuchsia-500 outline-none transition-colors">
              </div>
              <select class="w-full px-6 py-4 rounded-2xl bg-slate-950/50 border border-white/10 focus:border-fuchsia-500 outline-none transition-colors text-slate-400">
                <option value="">Оберіть напрямок</option>
                <option *ngFor="let style of danceStyles" [value]="style.id">{{style.title}}</option>
              </select>
              <textarea placeholder="Повідомлення (необов'язково)" rows="4" class="w-full px-6 py-4 rounded-2xl bg-slate-950/50 border border-white/10 focus:border-fuchsia-500 outline-none transition-colors resize-none"></textarea>
              <button class="w-full py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-fuchsia-600/20">
                Надіслати заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactsComponent {
  @Input() contacts: any = {};
  @Input() danceStyles: any[] = [];
  
  readonly mapPinIcon = MapPin;
  readonly phoneIcon = Phone;
  readonly instagramIcon = Instagram;
  readonly facebookIcon = Facebook;
}
