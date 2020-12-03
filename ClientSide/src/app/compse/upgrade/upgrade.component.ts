import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(public svc:MyserviceService) { }

  ngOnInit(): void {
  }
  numbaggage10 = { number: 0, pryce: 0 }
  numbaggage20 = { number: 0, pryce: 0 }
  numbaggage32 = { number: 0, pryce: 0 }

  plus10() {
    if (this.numbaggage10.number < 3) {
      this.numbaggage10.number += 1
      this.numbaggage10.pryce += 40
      this.svc.sumprycebaggage = this.numbaggage10.pryce +this.numbaggage20.pryce+this.numbaggage32.pryce
    }
  }


  minus10() {
    if (this.numbaggage10.number > 0) {
      this.numbaggage10.number -= 1
      this.numbaggage10.pryce -= 40
      this.svc.sumprycebaggage = this.numbaggage10.pryce +this.numbaggage20.pryce+this.numbaggage32.pryce

    }
  }

  plus20() {
    if (this.numbaggage20.number < 3) {
      this.numbaggage20.number += 1
      this.numbaggage20.pryce += 60
      this.svc.sumprycebaggage = this.numbaggage10.pryce +this.numbaggage20.pryce+this.numbaggage32.pryce

    }
  }

  minus20() {
    if (this.numbaggage20.number > 0) {
      this.numbaggage20.number -= 1
      this.numbaggage20.pryce -= 60
      this.svc.sumprycebaggage = this.numbaggage10.pryce +this.numbaggage20.pryce+this.numbaggage32.pryce

    }
  }

  plus32() {
    if (this.numbaggage32.number < 3) {
      this.numbaggage32.number += 1
      this.numbaggage32.pryce += 80
      this.svc.sumprycebaggage = this.numbaggage10.pryce +this.numbaggage20.pryce+this.numbaggage32.pryce

    }
  }

  minus32() {
    if (this.numbaggage32.number > 0) {
      this.numbaggage32.number -= 1
      this.numbaggage32.pryce -= 80
      this.svc.sumprycebaggage = this.numbaggage10.pryce +this.numbaggage20.pryce+this.numbaggage32.pryce

    }
  }

}
