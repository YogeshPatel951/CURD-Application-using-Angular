import { Injectable } from '@angular/core';
import { Consumer } from '../Model/Consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  
  private consumerList:Consumer[]=[
    new Consumer(1,'p@pp.com','+911234567890','ypaxx')
  ];

  getConsumer(consumerEmail:string){
    
    return this.consumerList.find(consumer=>consumer.email===consumerEmail);
  }

  updateConsumer(consumer:Consumer){
    const consumerToUpdate=this.consumerList.find(consumerIterator=>consumerIterator.id===consumer.id);
    if(consumerToUpdate!==null){
    consumerToUpdate.email=consumer.email;
    consumerToUpdate.phoneNumber=consumer.phoneNumber;
    consumerToUpdate.username=consumer.username;
    }
  }

  createConsumer(consumerEmail:string,consumerPhonenumer:string,consumerUsername:string){
    this.consumerList.push(new Consumer(this.consumerList.length+1,consumerEmail,consumerPhonenumer,consumerUsername));

  }

  deleteConsumer(consumerToDelete:Consumer){
    this.consumerList.splice(this.consumerList.indexOf(consumerToDelete),1);
  }



  constructor() { }
}
