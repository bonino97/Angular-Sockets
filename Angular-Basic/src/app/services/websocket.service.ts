import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(
    private socket: Socket
    ) { }

    socketStatus() {
      this.socket.on('connect', () => {
        console.log('Conectado al Servidor.');
      })
    }

}
