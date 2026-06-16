import {Injectable} from '@angular/core';
import {COLORS_TONAL_BRIGHT} from 'critter';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  public color_from_status(status: string): COLORS_TONAL_BRIGHT {
    let _color: 'danger'|'warning'|'success' = 'success';
    switch(status){
      case 'out':
        _color = 'danger';
        break;
      case 'low':
        _color = 'warning';
        break;
      case 'stocked':
        _color = 'success';
        break;
    }
    return `${_color}-tonal-bright`
  }

}
