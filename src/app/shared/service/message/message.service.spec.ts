import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  describe('unit tests', () => {

    it('messages to be defined and empty initially', inject([MessageService], (service: MessageService) => {
      expect(service.messages).toBeTruthy('messages is falsey');
      expect(service.messages.length).toEqual(0, 'messages length is not 0');
    }));

    it('adding a message works', inject([MessageService], (service: MessageService) => {
      let message: string = 'message';
      service.add(message);
      expect(service.getLastMessage()).toEqual(message, 'message added is not same as last message added');
    }));

    it('clearing messages works', inject([MessageService], (service: MessageService) => {
      let message: string = 'message';
      service.add(message);
      expect(service.messages.length).toBeGreaterThan(0, 'length not greater than zero after message added');
      service.clear();
      expect(service.messages.length).toEqual(0, 'length not zero after calling clear');
    }));

  });

});
