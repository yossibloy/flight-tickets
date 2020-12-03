import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flitsecom',
  templateUrl: './flitsecom.component.html',
  styleUrls: ['./flitsecom.component.css']
})
export class FlitsecomComponent implements OnInit {

  constructor(public svc: MyserviceService, private router: Router) {
  }
  ngOnInit(): void { }

  @ViewChild("card") card: ElementRef

  click1(i) {
    this.card.nativeElement.className += " ss"
    this.svc.thisflighyt1 = Object.values(i);
    
    if(this.svc.conditions2.length ==0){
      this.router.navigate(['flit/enrollment'])
    }
  }

  click2(i) {
    this.svc.thisflighyt2 = Object.values(i);
    if (this.svc.thisflighyt1 != null) {
      this.router.navigate(['flit/enrollment'])
    }
    else {
      alert("יש לבחור טיסת הלוך")
    }
  }
}
