import { Injectable, Optional } from '@angular/core';

import { environment } from '../environments/environment.prod';
// import { ServerServiceConfig } from './serverserviceconfig';

@Injectable()
export class ServerService {
  private serverUrl = 'http://172.17.0.1';
  private serverPort = '4300';

  constructor() {
    if (environment.production) {
      this.serverUrl = environment.serverUrl;
      this.serverPort = environment.serverPort;
    }

    // if (ServerServiceConfig) {
    //   this.serverUrl = ServerServiceConfig.serverUrl;
    //   this.serverPort = ServerServiceConfig.serverPort;
    // }
  }

  getServerUrl() {
    return this.serverUrl + ':' + this.serverPort + '/';
  }
}
