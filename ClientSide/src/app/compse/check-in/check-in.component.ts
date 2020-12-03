import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor(public svc: MyserviceService) { }

  MyCheckIn: FormGroup
@ViewChild("appdiv")appdiv: ElementRef
@ViewChild("bottondiv")bottondiv: ElementRef

  ngOnInit(): void {
    
    this.MyCheckIn = new FormGroup({
      formarr: new FormArray([])
    })

    this.createfl()
  }

  createfl() {
    console.log(this.svc.passengersarr);
    console.log(this.svc.arr);
    for (let i = 0; i < this.svc.passengersarr.length; i++) {
      (this.MyCheckIn.get('formarr') as FormArray).push(
        new FormGroup({
          firstname: new FormControl(`${this.svc.passengersarr[i].firstname}`, [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
          lastname: new FormControl(`${this.svc.passengersarr[i].lastname}`, [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
          birthDate: new FormControl(`${this.svc.passengersarr[i].birthDate}`, [Validators.required]),
          sex: new FormControl(`${this.svc.passengersarr[i].sex}`, [Validators.required]),
          passnum:  new FormControl('', [Validators.required,Validators.pattern('[0-9]{10}')]),
          expiration: new FormControl('', [Validators.required]),
        })
      );
    }

    
  }
  click(){
    this.appdiv.nativeElement.hidden = true
    this.bottondiv.nativeElement.hidden = false
  }
}
