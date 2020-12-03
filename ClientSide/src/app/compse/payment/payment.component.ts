import { Component, OnInit, ViewChild, ElementRef,} from '@angular/core';
import { FormGroup, FormControl, Validators ,} from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor(public svc: MyserviceService) {;
   }

  ngOnInit(): void {
  this.res()
  
  }
  summary
res(){
  this.summary =this.svc.thisflighyt1[10]  + this.svc.sumprycebaggage
  if(this.svc.conditions2.length !=0){
    this.summary += this.svc.thisflighyt2[10]
  }
  return this.summary
}


  pymentFormGrup = new FormGroup({
    cardNam: new FormControl('', [Validators.required,Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$')]),
    name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    expiry: new FormControl('', [Validators.required,]),
    cvv: new FormControl('', [Validators.required,Validators.pattern('[0-9]{3}')]),

  })

@ViewChild("ispyment")ispyment:ElementRef

  pyment() {    
    this.ispyment.nativeElement.hidden =false
    let id1 = this.svc.thisflighyt1[0] 
    let num1= this.svc.thisflighyt1[9]-this.svc.passengers
    this.svc.updatedb(`http://localhost:3000/flights/${id1}`,{place:num1}).subscribe((res)=>console.log(res))

    if(this.svc.conditions2.length !=0){
          let id2 = this.svc.thisflighyt1[0] 
    let num2= this.svc.thisflighyt1[9]-this.svc.passengers
    this.svc.updatedb(`http://localhost:3000/flights/${id2}`,{place:num2}).subscribe((res)=>console.log(res))
    }
  }

}
