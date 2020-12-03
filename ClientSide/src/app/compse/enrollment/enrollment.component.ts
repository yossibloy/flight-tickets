import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  constructor(public svc: MyserviceService) { }

  ngOnInit(): void { 

    this.MyFormEnrollment = new FormGroup({
      formarr: new FormArray([])
    })

    this.createfl()
    

  }

 MyFormEnrollment: FormGroup


 
  inviting = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonNumber: new FormControl('', [Validators.required, Validators.pattern('^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$')])

  })



  createfl() {
    for (let i = 0; i < this.svc.passengers; i++) {
      (this.MyFormEnrollment.get('formarr') as FormArray).push(
        new FormGroup({
          firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
          lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
          birthDate: new FormControl('', [Validators.required]),
          sex: new FormControl('', [Validators.required])
        })
      );
    }

    
  }



  click() {
    this.svc.OrderNumber = Math.random().toString(36).substring(7);
    
     for (let i = 0; i < this.MyFormEnrollment.value.formarr.length; i++) {
      this.MyFormEnrollment.value.formarr[i]["OrderNumber"] =  this.svc.OrderNumber  
      this.MyFormEnrollment.value.formarr[i]["flighitNumber1"] =  this.svc.thisflighyt1[0]  
      this.MyFormEnrollment.value.formarr[i]["flighitNumber2"] =  this.svc.thisflighyt2[0]  
   
      this.svc.postdb('http://localhost:3000/passengers',this.MyFormEnrollment.value.formarr[i] ).subscribe()
     }

     this.inviting.value["OrderNumber"] =  this.svc.OrderNumber     
    this.svc.postdb('http://localhost:3000/ordering', this.inviting.value).subscribe()
  }
 
}
