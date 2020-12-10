import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-meneger',
  templateUrl: './meneger.component.html',
  styleUrls: ['./meneger.component.css']
})
export class MenegerComponent implements OnInit {

  constructor(public svc:MyserviceService) { }

  ngOnInit(): void {
  }
  menegerFormGrup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  meneger(){
    this.svc.getdbb("http://localhost:3000/ordering/Meneger",{"roles":this.menegerFormGrup.value.name}).subscribe((r)=>console.log(r)
    )
  }
}
