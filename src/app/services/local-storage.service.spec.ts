import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null for non existing items', () => {
    expect(service.getItem('key')).toBeNull();
  });

  it('should clear the storage', () => {
    service.clear();
    expect(service.getItem(environment.CONTACT_KEY)).toBeNull();
  });

  it('should set an item ', () => {
    const KEY_TEST = '@UNIT_TEST';
    const VALUE_TEST = 'Value to test';

    service.setItem(KEY_TEST, VALUE_TEST);
    expect(service.getItem(KEY_TEST)).toEqual(VALUE_TEST);
  });
});
