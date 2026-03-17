// Angular Imports
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// RxJS Imports
import { Observable } from 'rxjs';

// Inventory Imports
import { Inventory } from './inventory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private httpClient = inject(HttpClient);

  readonly inventoryUrl: string = `${environment.apiUrl}inventory`;

  private readonly itemKey = 'item';
  private readonly descriptionKey = 'description';
  private readonly brandKey = 'brand';
  private readonly colorKey = 'color';
  private readonly countKey = 'count';
  private readonly sizeKey = 'size';
  private readonly typeKey = 'type';
  private readonly materialKey = 'material';
  private readonly quantityKey = 'quantity';
  private readonly notesKey = 'notes';

  typeOptions = [
    { value: 'pencils', label: 'Pencils' },
    { value: 'colored_pencils', label: 'Colored Pencils' },
    { value: 'sharpeners', label: 'Sharpeners' },
    { value: 'markers', label: 'Markers' },
    { value: 'highlighters', label: 'Highlighters' },
    { value: 'dry_erase_markers', label: 'Dry-Erase Markers' },
    { value: 'crayons', label: 'Crayons' },
    { value: 'pens', label: 'Pens' },
    { value: 'erasers', label: 'Erasers' },
    { value: 'folders', label: 'Folders' },
    { value: 'binders', label: 'Binders' },
    { value: 'notebooks', label: 'Notebooks' },
    { value: 'glue', label: 'Glue' },
    { value: 'rulers', label: 'Rulers' },
    { value: 'scissors', label: 'Scissors' },
    { value: 'headphones', label: 'Headphones' },
    { value: 'backpacks', label: 'Backpacks' },
    { value: 'boxes', label: 'Boxes' },
    { value: 'other', label: 'Other' }
  ];

  getInventory(filters?: {item?: string; description?: string; brand?: string; color?: string;
    count?: number; size?: string; type?: string; material?: string; quantity?: number; notes?: string}): Observable<Inventory[]> {

    let httpParams: HttpParams = new HttpParams();
    if (filters) {
      if (filters.item) {
        httpParams = httpParams.set(this.itemKey, filters.item);
      }
      if (filters.brand) {
        httpParams = httpParams.set(this.brandKey, filters.brand);
      }
      if (filters.color) {
        httpParams = httpParams.set(this.colorKey, filters.color);
      }
      if (filters.size) {
        httpParams = httpParams.set(this.sizeKey, filters.size);
      }
      if (filters.type) {
        httpParams = httpParams.set(this.typeKey, filters.type);
      }
      if (filters.material) {
        httpParams = httpParams.set(this.materialKey, filters.material);
      }

    }
    return this.httpClient.get<Inventory[]>(this.inventoryUrl, { params: httpParams });
  }
}
