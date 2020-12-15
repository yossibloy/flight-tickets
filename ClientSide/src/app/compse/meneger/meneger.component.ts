import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meneger',
  templateUrl: './meneger.component.html',
  styleUrls: ['./meneger.component.css']
})
export class MenegerComponent implements OnInit {

  constructor(public svc:MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }


  getAllFliyts() {
    this.svc.getalldb("http://localhost:3000/flights/all").subscribe((e) => console.log(e))
  }
  getPassengersByNum() {
    this.svc.getdb("http://localhost:3000/passengers",1).subscribe((e) => console.log(e))
  }
  getAllOrders() {
    this.svc.getalldb("http://localhost:3000/ordering/all").subscribe((e) => console.log(e))
  }
  getOrdersByNum() {
    this.svc.getdb("http://localhost:3000/ordering",1).subscribe((e) => console.log(e))
  }
  addFliyts() {
    this.svc.postdb("http://localhost:3000/flights", {}).subscribe((e) => console.log(e))
  }
  updetFliyts() {
  }
  deleteFliyts() {
    this.svc.postdb("http://localhost:3000/flights", 1).subscribe((e) => console.log(e))
  }

}
