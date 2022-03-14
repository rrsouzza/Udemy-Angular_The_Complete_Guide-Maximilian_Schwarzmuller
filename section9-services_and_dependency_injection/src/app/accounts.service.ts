import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

// @Injectable indica que algo será injetado nesse serviço. No caso, accounts.service está sendo injetado com logging.service.
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private logginService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logginService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
