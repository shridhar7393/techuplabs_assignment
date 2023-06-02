import { Component, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent {

  @Output() flag: boolean = false;

  title!: string;
  collaborators!: string[];
  selectedCollaborator!: string;
  privacy!: string;
  uploader: FileUploader = new FileUploader({
    url: "", 
    disableMultipart: true, 
    formatDataFunctionIsAsync: true,
    formatDataFunction: async (item: { _file: { name: any; size: any; type: any; }; }) => {
      return new Promise((resolve, reject) => {
        resolve({
          name: item._file.name,
          length: item._file.size,
          contentType: item._file.type,
          date: new Date()
        });
      });
    }
  });

  constructor() {
    this.fetchCollabs();
  }

  fetchCollabs() {
    const customersData = localStorage.getItem('customers');
    this.collaborators = customersData ? JSON.parse(customersData) : [];
    this.privacy = 'Public';
  }
  //   renderPNG(fileName: string) {
  //     let reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //         this.files = reader.result;
  //         localStorage.setItem('imgData', JSON.stringify(this.files));
  //     }, false);
  //     this.files = JSON.parse(localStorage.getItem('imgData'));

  // }

  addPin() {
    console.log(this.uploader.queue[0])
    const pin = {
      title: this.title,
      image: this.uploader.queue[0]?.file.name || '',
      collaborators: this.selectedCollaborator,
      privacy: this.privacy
    };
    const pinsData = localStorage.getItem('pins');
    const pins = pinsData ? JSON.parse(pinsData) : [];
    pins.push(pin);
    localStorage.setItem('pins', JSON.stringify(pins));

    this.title = '';
    this.collaborators = [];
    this.privacy = 'Public';
    this.uploader.clearQueue();
    this.flag = !this.flag;
  }
}
