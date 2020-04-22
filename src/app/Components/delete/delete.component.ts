import { Component, OnInit } from '@angular/core';

import { Consumer } from 'src/app/Model/Consumer';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  DeleteConsumer:Consumer;
  toSearchConsumerEmail:string;

  deleteConsumer(){
    this.consumerService.deleteConsumer(this.DeleteConsumer);
    this.DeleteConsumer=null;
  }


  searchConsumer(){
    if(this.toSearchConsumerEmail.length>0){
      this.DeleteConsumer=this.consumerService.getConsumer(this.toSearchConsumerEmail);
    }

  }

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
  }

}
