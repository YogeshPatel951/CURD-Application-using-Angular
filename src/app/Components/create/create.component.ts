import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/Services/consumer.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private consumerServie: ConsumerService) { }
  consumerEmail:string;
  consumerPhoneNumber:string;
  consumerUsername:string;

  saveConsumer(){
    this.consumerServie.createConsumer(this.consumerEmail,this.consumerPhoneNumber,this.consumerUsername);
  }

  ngOnInit(): void {
  }

}
