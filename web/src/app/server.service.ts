import { Injectable, Optional } from '@angular/core';

import { ServerServiceConfig } from './serverserviceconfig';

@Injectable()
export class ServerService {
  private serverUrl = 'http://172.17.0.1';
  private serverPort = '4300';

  constructor() {
    if (ServerServiceConfig) {
      this.serverUrl = ServerServiceConfig.serverUrl;
      this.serverPort = ServerServiceConfig.serverPort;
    }
  }

  getServerUrl() {
    return this.serverUrl + ':' + this.serverPort + '/';
  }
}
