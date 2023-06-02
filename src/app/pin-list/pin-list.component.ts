import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent{
  pins: any[];
  imgUrl: string = './../../assets/2454532.png';

  
  constructor() {
    const pinsData = localStorage.getItem('pins');
    this.pins = pinsData ? JSON.parse(pinsData) : [];
  }

  
}
