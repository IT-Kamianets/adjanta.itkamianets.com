import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Phone, Instagram, Facebook } from 'lucide-angular';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RevealDirective],
  styles: [`
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.05); }
    }
    .glow-pulse { animation: pulse-slow 4s ease-in-out infinite; }

    .contact-input {
      width: 100%;
      padding: 14px 20px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      color: white;
      font-size: 15px;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .contact-input::placeholder { color: rgba(148, 163, 184, 0.6); }
    .contact-input:focus {
      border-color: rgba(192, 38, 211, 0.6);
      background: rgba(192, 38, 211, 0.05);
    }
    .contact-select {
      width: 100%;
      padding: 14px 20px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      color: rgba(148, 163, 184, 0.8);
      font-size: 15px;
      outline: none;
      transition: border-color 0.2s;
      appearance: none;
      cursor: pointer;
    }
    .contact-select:focus { border-color: rgba(192, 38, 211, 0.6); }
    .contact-select option { background: #0f172a; color: white; }
    .contact-textarea {
      width: 100%;
      padding: 14px 20px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      color: white;
      font-size: 15px;
      outline: none;
      resize: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .contact-textarea::placeholder { color: rgba(148, 163, 184, 0.6); }
    .contact-textarea:focus {
      border-color: rgba(192, 38, 211, 0.6);
      background: rgba(192, 38, 211, 0.05);
    }

    .social-btn {
      width: 48px; height: 48px;
      border-radius: 14px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      display: flex; align-items: center; justify-content: center;
      transition: all 0.25s;
      cursor: pointer; text-decoration: none;
    }
    .social-btn:hover { transform: translateY(-2px); }
    .social-btn-ig:hover  { background: rgba(232, 121, 249, 0.15); border-color: rgba(232, 121, 249, 0.4); }
    .social-btn-fb:hover  { background: rgba(59, 130, 246, 0.15); border-color: rgba(59, 130, 246, 0.4); }
    .social-btn-tk:hover  { background: rgba(148, 163, 184, 0.15); border-color: rgba(148, 163, 184, 0.4); }

    .contact-info-row {
      display: flex; align-items: flex-start; gap: 16px;
      padding: 18px 20px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px;
      transition: border-color 0.2s, background 0.2s;
    }
    .contact-info-row:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.1);
    }
  `],
  template: `
    <section id="contacts" class="py-24 relative overflow-hidden">

      <div class="absolute -top-40 -left-40 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none glow-pulse"></div>
      <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none glow-pulse" style="animation-delay:2s"></div>

      <div class="container mx-auto px-6 relative z-10">

        <!-- Section header -->
        <div appReveal class="text-center mb-14">
          <p class="text-xs font-bold text-cyan-400 uppercase tracking-[0.3em] mb-3">Зв'язатися з нами</p>
          <h2 class="text-4xl md:text-5xl font-black">
            ПОЧНИ СВІЙ
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400"> ШЛЯХ СЬОГОДНІ</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          <!-- LEFT: Contact info -->
          <div class="lg:col-span-2 flex flex-col gap-4">

            <div appReveal="left" [delay]="0" class="contact-info-row">
              <div style="width:44px;height:44px;border-radius:14px;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <lucide-icon [img]="mapPinIcon" class="w-5 h-5 text-cyan-400"></lucide-icon>
              </div>
              <div>
                <div class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Адреса</div>
                <div class="text-white font-medium leading-snug">{{contacts.address}}</div>
              </div>
            </div>

            <div appReveal="left" [delay]="100" class="contact-info-row">
              <div style="width:44px;height:44px;border-radius:14px;background:rgba(192,38,211,0.1);border:1px solid rgba(192,38,211,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <lucide-icon [img]="phoneIcon" class="w-5 h-5 text-fuchsia-400"></lucide-icon>
              </div>
              <div>
                <div class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Телефон</div>
                <a [href]="'tel:' + contacts.phone"
                   class="text-white font-medium hover:text-fuchsia-400 transition-colors text-lg">
                  {{contacts.phoneFormatted}}
                </a>
              </div>
            </div>

            <div appReveal="left" [delay]="200" class="contact-info-row">
              <div style="width:44px;height:44px;border-radius:14px;background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <div class="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email</div>
                <a [href]="'mailto:' + contacts.email"
                   class="text-white font-medium hover:text-purple-400 transition-colors">
                  {{contacts.email}}
                </a>
              </div>
            </div>

            <div appReveal="left" [delay]="300" class="flex items-center gap-3 mt-2">
              <a [href]="contacts.instagram" target="_blank" class="social-btn social-btn-ig">
                <lucide-icon [img]="instagramIcon" class="w-5 h-5 text-slate-300"></lucide-icon>
              </a>
              <a [href]="contacts.facebook" target="_blank" class="social-btn social-btn-fb">
                <lucide-icon [img]="facebookIcon" class="w-5 h-5 text-slate-300"></lucide-icon>
              </a>
              <a [href]="contacts.tiktok" target="_blank" class="social-btn social-btn-tk">
                <span class="font-black text-[9px] text-slate-300 tracking-tight">TIK<br>TOK</span>
              </a>
              <span class="text-slate-500 text-sm ml-1">Слідкуй за нами</span>
            </div>

          </div>

          <!-- RIGHT: Form card -->
          <div appReveal="right" [delay]="100" class="lg:col-span-3">
            <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:28px;padding:32px;">
              <h3 class="text-xl font-bold text-white mb-1">Надіслати заявку</h3>
              <p class="text-slate-400 text-sm mb-6">Ми зв'яжемося з вами протягом 24 годин</p>

              <form class="flex flex-col gap-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input class="contact-input" type="text" placeholder="Ваше ім'я" id="contact-name">
                  <input class="contact-input" type="tel" placeholder="+38 0__ ___ ____" id="contact-phone">
                </div>

                <div style="position:relative;">
                  <select class="contact-select" id="contact-style">
                    <option value="">Оберіть напрямок</option>
                    <option *ngFor="let style of danceStyles" [value]="style.id">{{style.title}}</option>
                  </select>
                  <div style="position:absolute;right:18px;top:50%;transform:translateY(-50%);pointer-events:none;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-400"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>

                <textarea class="contact-textarea" rows="3" placeholder="Повідомлення (необов'язково)" id="contact-message"></textarea>

                <button type="submit"
                        class="w-full py-4 font-bold text-white rounded-2xl transition-all duration-300 active:scale-95"
                        style="background:linear-gradient(135deg,#c026d3,#7c3aed);box-shadow:0 10px 40px rgba(192,38,211,0.3);"
                        onmouseover="this.style.boxShadow='0 14px 50px rgba(192,38,211,0.5)'"
                        onmouseout="this.style.boxShadow='0 10px 40px rgba(192,38,211,0.3)'">
                  Записатися на пробне заняття →
                </button>

                <p class="text-center text-slate-600 text-xs">
                  Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                </p>
              </form>
            </div>
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
