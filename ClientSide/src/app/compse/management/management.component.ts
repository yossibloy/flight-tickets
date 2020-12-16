import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(public svc: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  @ViewChild("sori") sori: ElementRef
  @ViewChild("form") form: ElementRef
  @ViewChild("dityls") dityls: ElementRef

  managementFormGrup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    OrderNumber: new FormControl('', [Validators.required]),
  })

  @ViewChild("addform") addform: ElementRef
  @ViewChild("ff") ff: ElementRef


  addFormGrup = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    birthDate: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required])
  })


  management() {
    this.svc.OrderNumber = this.managementFormGrup.value.OrderNumber
    console.log(this.svc.OrderNumber);
    this.svc.passengersarr = []
    this.svc.getdb("http://localhost:3000/ordering",
      `?name=${this.managementFormGrup.value.name}&&OrderNumber=${this.managementFormGrup.value.OrderNumber}`)
      .subscribe((res) => {
        if (res == null) {
          this.sori.nativeElement.hidden = false
          return
        }
        else {
          localStorage.setItem("token",res[0].token)        
          this.svc.getdb("http://localhost:3000/ordering/Meneger", `?roles=${res[0].roles}`).subscribe((r) => {
            this.router.navigate(['/meneger'])
            return
          }, error => {
            console.error(error.error.message);

            this.sori.nativeElement.hidden = true
            this.form.nativeElement.hidden = true
            this.dityls.nativeElement.hidden = false

            this.svc.getdb("http://localhost:3000/passengers",
              `?OrderNumber=${this.managementFormGrup.value.OrderNumber}`)
              .subscribe((res) => {
                this.svc.passengersarr.push(...res)
                this.array()

                this.svc.getdb("http://localhost:3000/flights/", this.svc.passengersarr[0].flighitNumber1)
                  .subscribe((res) => {
                    this.svc.thisflighyt1 = res;
                  }
                  )
                this.svc.getdb("http://localhost:3000/flights/", this.svc.passengersarr[0].flighitNumber2)
                  .subscribe((res) => this.svc.thisflighyt2 = res)
              })
          }
          )
        }
      })
  }



  array() {
    for (let i = 1; i <= this.svc.passengersarr.length; i++) {
      this.svc.arr.push(i)
    }
  }

  del(i) {
    if (confirm('?האם הינך בטוח שברצונך למחוק נוסע זה')) {
      this.svc.delete(`http://localhost:3000/passengers/${i}`).subscribe(() => {
        this.svc.getdb("http://localhost:3000/passengers",
          `?OrderNumber=${this.managementFormGrup.value.OrderNumber}`)
          .subscribe((res) => this.svc.passengersarr = res)
      })
    }
  }


  add() {
    this.addform.nativeElement.hidden = false
    this.ff.nativeElement.hidden = true

  }

  clickadd() {
    this.addFormGrup.value["OrderNumber"] = this.managementFormGrup.value.OrderNumber
    this.addFormGrup.value["flighitNumber1"] = this.svc.passengersarr[0].flighitNumber1
    this.addFormGrup.value["flighitNumber2"] = this.svc.passengersarr[0].flighitNumber2
    console.log(this.addFormGrup.value)
    this.svc.postdb('http://localhost:3000/passengers', this.addFormGrup.value).subscribe(() => {
      this.svc.getdb("http://localhost:3000/passengers",
        `?OrderNumber=${this.managementFormGrup.value.OrderNumber}`)
        .subscribe((res) => this.svc.passengersarr = res)
    })

  }

  df() {
    this.addform.nativeElement.hidden = true
    this.ff.nativeElement.hidden = false
  }


  deli() {
    if (confirm('האם הינך בטוח שאתה רוצה לבטל טיסה זו? \n לאחר מכן לא תוכל להתחרט...')) {

      this.svc.delete(`http://localhost:3000/passengers/Delete/${this.svc.OrderNumber}`).subscribe(() => console.log("fdffffffffffffffffffffff"))
      this.svc.delete(`http://localhost:3000/ordering/Delete/${this.svc.OrderNumber}`).subscribe(() => console.log("fdfdfffffffffffffffffffffffffffffff"))
    }
  }
}