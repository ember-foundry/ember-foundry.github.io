import { Directive, ElementRef, OnInit, OnDestroy, signal, inject, input } from '@angular/core';

@Directive({
  selector: '[mbrSticky]',
  standalone: true,
  host: {
    '[class.sticky]': 'isPinned()',
    '[style.position]': '"sticky"',
    '[style.top]': 'stickyTopOffset()'
  }
})
export class StickyDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  public readonly stickyTopOffset = input<string>('0px');

  protected readonly isPinned = signal<boolean>(false);

  private observer?: IntersectionObserver;
  private sentinel?: HTMLElement;

  public ngOnInit(): void {
    this.setupStickyObserver();
  }

  private setupStickyObserver(): void {
    const host = this.elementRef.nativeElement;
    const topOffset = this.stickyTopOffset();

    this.sentinel = document.createElement('div');
    this.sentinel.setAttribute('aria-hidden', 'true');
    this.sentinel.style.position = 'absolute';
    this.sentinel.style.width = '1px';
    this.sentinel.style.height = '1px';
    this.sentinel.style.pointerEvents = 'none';

    host.parentNode?.insertBefore(this.sentinel, host);

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${topOffset} 0px 0px 0px`,
      threshold: 0
    };

    this.observer = new IntersectionObserver(([entry]) => {
      this.isPinned.set(!entry.isIntersecting);
    }, options);

    this.observer.observe(this.sentinel);
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
    this.sentinel?.remove();
  }
}
