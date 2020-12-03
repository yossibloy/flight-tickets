import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {

  constructor(public svc: MyserviceService) { }

  ngOnInit(): void {
  }
 

@Input()obg 
}
