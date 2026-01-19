import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren, Directive,
  effect,
  ElementRef,
  inject,
  input
} from '@angular/core';
import {AvatarComponent} from '../avatar/avatar.component';
import {WholeNumberPipe} from '../../pipes/whole-number/whole-number.pipe';
import {PixelsPipe} from '../../pipes/pixels/pixels.pipe';
import {BaseComponent} from '../_base/base.component';
import {tailwind_sizes} from '../../enums/tailwind-sizes.enum';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'lib-avatar-group lib-avatar',
  host: {
    '[style.margin-right]': 'is_last_child ? undefined : overlapValue'
  }
})
export class AvatarWithinGroupDirective {
  private el = inject(ElementRef);

  get is_last_child(): boolean {
    const nativeElement = this.el.nativeElement;
    return nativeElement.parentElement?.lastElementChild === nativeElement;
  }

  readonly overlapValue = 'var(--avatar-group-overlap, calc(var(--size, var(--size-md)) * var(--avatar-group-density-multiplier)))';
}

@Component({
  selector: 'lib-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrl: './avatar-group.component.scss',
  imports: [
    AvatarComponent,
    AvatarWithinGroupDirective
  ],
  providers: [
    WholeNumberPipe,
    PixelsPipe
  ],
  host: {
    '[class]': 'density()',
    '[style.--item-count]': 'avatar_items_as_html().length',
    '[style.--avatar-group-overlap]': 'overlap()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarGroupComponent extends BaseComponent {
  private whole_number_pipe = inject(WholeNumberPipe);
  private px_pipe = inject(PixelsPipe);
  density = input<'compact'|'loose'>('compact');
  overlap = input<string|0|undefined, string|undefined|number>(undefined, {transform: this.px_pipe.transform});
  bordered = input<boolean>();
  layering = input<'first_on_top' | 'last_on_top'>('last_on_top');
  limit = input<number, number | string | undefined>(undefined, {transform: this.whole_number_pipe.transform});
  size = input<tailwind_sizes>();

  protected avatar_items_as_html = contentChildren(AvatarComponent, {read: ElementRef});
  private avatar_items_as_component = contentChildren(AvatarComponent);

  protected surplus_text = computed<undefined|string>(() => {
    const limit = this.limit();
    if (!limit || limit <= 0) {
      return undefined;
    }

    const surplus = this.avatar_items_as_html().length - limit;
    return surplus > 0 ? `+ ${surplus}` : undefined;
  });

  protected update_avatar_look_and_feel = effect(() => {
    const layering = this.layering();
    const limit = this.limit();
    const group_bordered = this.bordered;
    const group_size = this.size;
    const html_items = this.avatar_items_as_html();
    const component_items = this.avatar_items_as_component();
    const total_items = html_items.length;

    component_items.forEach((component_item, index) => {
      if (component_item.bordered() === undefined) {
        component_item.bordered = group_bordered;
      }

      if (component_item.size() === undefined) {
        component_item.size = group_size;
      }

      const avatar_html_item_ref = html_items[index];
      if (!avatar_html_item_ref) {
        return;
      }

      const avatar_html_element = avatar_html_item_ref.nativeElement;

      avatar_html_element.style.zIndex = layering === 'first_on_top' ? `${total_items - index}` : '';

      const is_collapsed = limit !== undefined && limit > 0 && index >= limit;
      avatar_html_element.classList.toggle('collapsed', is_collapsed);
      avatar_html_element.style.display = is_collapsed ? 'none' : 'inherit';
    });
  });
}
