import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'ditayls',
  templateUrl: './ditayls.component.html',
  styleUrls: ['./ditayls.component.css']
})
export class DitaylsComponent implements OnInit {

  constructor(public svc:MyserviceService) { }

  ngOnInit(): void {
  }

}
