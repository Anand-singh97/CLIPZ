import { Injectable } from '@angular/core';

interface IModal{
  id:string,
  visible:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }
  private modals: Array<IModal> = [];
  isModalOpen(id: string): boolean
  {
    return !!(this.modals.find((item)=>item.id === id))?.visible;
  }
  toggleModel(id: string){
    const modal = this.modals.find((item)=>item.id === id);
    if(modal){
      modal.visible = !modal.visible;
    }
  }
  register(id: string){
    this.modals.push({id:id, visible:false})
  }
}
