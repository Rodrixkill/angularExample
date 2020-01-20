import { TestBed } from '@angular/core/testing';

import { MongoDbService } from './mongo-db.service';

describe('MongoDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongoDbService = TestBed.get(MongoDbService);
    expect(service).toBeTruthy();
  });
});
