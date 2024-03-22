import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit
{
  @Input() modalID = '';
  constructor(public modal: ModalService, public el: ElementRef)
  {
  }

  ngOnInit()
  {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal(){
    this.modal.toggleModel(this.modalID);
  }
}
