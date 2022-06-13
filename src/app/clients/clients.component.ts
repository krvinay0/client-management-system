import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../clientservice.service'


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  totalLength:any;
  page:number = 1;


  ngOnInit(): void {

  }


  data: any=[];

  constructor(private user:ClientserviceService)
  {
    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data=data;      
      this.totalLength = data.length;

    })
  }
}
