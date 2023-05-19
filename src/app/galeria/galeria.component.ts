import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  arrayImagem = [
    '../../assets/img/1.jpg',
    '../../assets/img/2.jpg',
    '../../assets/img/3.jpg',
    '../../assets/img/4.jpg',
    '../../assets/img/5.jpg',
    '../../assets/img/6.jpg',
    '../../assets/img/7.jpg',
    '../../assets/img/8.jpg',
    '../../assets/img/9.jpg',
  ];

  modalRef?: BsModalRef;
  selectedImage: string | undefined;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>, image: string) {
    this.selectedImage = image;
    this.modalRef = this.modalService.show(template);
    this.modalService.config.class = 'modal-dialog-centered';
    this.modalService.config.ignoreBackdropClick = true;
    this.modalService.config.keyboard = false;
  }
}
