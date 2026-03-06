import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

/**
 * Reveal directive — adds 'is-visible' class when element enters the viewport.
 * Usage: <div appReveal>           -> fade up (default)
 *        <div appReveal="left">    -> slide from left
 *        <div appReveal="right">   -> slide from right
 *        <div appReveal="scale">   -> scale in
 *        [delay]="200"             -> delay in ms
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') direction: 'up' | 'left' | 'right' | 'scale' | '' = 'up';
  @Input() delay = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.el.nativeElement;

    // Set initial hidden state via inline style
    const dir = this.direction || 'up';
    el.style.opacity = '0';
    el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${this.delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${this.delay}ms`;

    if (dir === 'up')    el.style.transform = 'translateY(40px)';
    if (dir === 'left')  el.style.transform = 'translateX(-40px)';
    if (dir === 'right') el.style.transform = 'translateX(40px)';
    if (dir === 'scale') el.style.transform = 'scale(0.88)';

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: immediately show
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            this.observer?.unobserve(el); // animate once
          }
        });
      },
      { threshold: 0.12 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
