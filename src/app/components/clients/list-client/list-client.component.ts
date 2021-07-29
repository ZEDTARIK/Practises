import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients : Client[] =  [
    {
      id: 1,
      fullName: 'Zouhair ETTARAK',
      email: 'ettarak.zouhair@gmail.com',
      phoneNumber: '+212 6469460',
      contactPreference: 'email',
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      fullName: 'Hafssa MESKANI',
      email: 'Hafssa.457@gmail.com',
      phoneNumber: '+212 6469460',
      contactPreference: 'phone',
      photoPath: 'assets/images/mary.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
