import { Injectable, Optional } from '@angular/core';

import { environment } from '../environments/environment';
import { ServerServiceConfig } from './serverserviceconfig';

@Injectable()
export class ServerService {
  private serverUrl;
  private serverPort;

  constructor() {
    if (environment.production) {
      console.log('production');
      this.serverUrl = ServerServiceConfig.production.serverUrl;
      this.serverPort = ServerServiceConfig.production.serverPort;
    } else {
      console.log('development');
      this.serverUrl = ServerServiceConfig.development.serverUrl;
      this.serverPort = ServerServiceConfig.development.serverPort;
    }
  }

  getServerUrl() {
    return this.serverUrl + ':' + this.serverPort + '/';
  }
}
