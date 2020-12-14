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
@ViewChild("form")form:ElementRef
@ViewChild("div")div:ElementRef
@ViewChild("err")err:ElementRef
@ViewChild("nav")nav:ElementRef
  ngOnInit(): void {
  }
  menegerFormGrup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  meneger(){    
    this.svc.getdb("http://localhost:3000/ordering/Meneger",`?roles=${this.menegerFormGrup.value.name}`).subscribe((r)=>{
    if(r){
      this.form.nativeElement.hidden=true
      this.div.nativeElement.hidden=false
      this.nav.nativeElement.hidden=false
        }
        else{
      this.err.nativeElement.hidden=false

        }
  }
    )
  }

  getAllFliyts(){    
    this.svc.getalldb("http://localhost:3000/flights/all").subscribe((e)=>console.log(e))
  }
  getPassengersByNum(){

  }
  getAllOrders(){
    this.svc.getalldb("http://localhost:3000/ordering/all").subscribe((e)=>console.log(e))

  }
  getOrdersByNum(){

  }
  addFliyts(){

  }
  updetFliyts(){

  }
  deleteFliyts(){

  }
}
