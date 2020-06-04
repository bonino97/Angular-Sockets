import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(
    private socket: Socket
    ) { 
      this.checkStatus();
    }

    checkStatus() {

      this.socket.on('connect', () => {
        console.log('Conectado al Servidor.');
        this.socketStatus = true;
      });

      this.socket.on('disconnect', () => {
        console.log('Desconectado del Servidor.');
        this.socketStatus = false;
      });
    }

    emit( event: string, payload?: any, callback?: Function){
      //Emitir --> emit('EVENTO', payload, ?callback() => {})
      console.log('Emitiendo', event);
      this.socket.emit(event, payload, callback);

    }

    listen(event: string){
      return this.socket.fromEvent(event); 
    }

}
