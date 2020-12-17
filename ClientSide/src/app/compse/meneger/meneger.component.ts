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

  constructor(public svc: MyserviceService, private router: Router) { }

  ngOnInit(): void {
    this.updetFliytFormj()
    this.updatepassengerj()
    this.updateOrderj()

  }

  updetFliytForm = new FormGroup({})
  updatepassengerForm = new FormGroup({})
  updateorderForm = new FormGroup({})

  @ViewChild("bthadd") bthadd: ElementRef
  @ViewChild("bthget") bthget: ElementRef
  @ViewChild("form") form: ElementRef
  @ViewChild("putform") putform: ElementRef
  @ViewChild("putformpass") putformpass: ElementRef
  @ViewChild("putorformord") putorformord: ElementRef
  @ViewChild("order") order: ElementRef

  numFlyght
  OrderNumber

  fltghtsarr: []
  ordringarr: []
  passengers: []

  putflyght = { company: "", depart: "", duration: "", landing: "", numFlyght: null, origin: "", place: null, prise: null, takeoff: "", target: "" }
  putpassenger = { birthDate: "", firstname: "", lastname: "", sex: "", id: null }
  putorder = { email: "", firstname: "", lastname: "", phonNumber: "", id: null }


  countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
  ];

  //טיסות
  //קבלת טיסות
  getAllFliyts() {
    this.svc.getalldb("http://localhost:3000/flights/all").subscribe((e) => this.fltghtsarr = e)
    this.bthadd.nativeElement.hidden = false
    this.bthget.nativeElement.hidden = true
  }

  //מחיקת טיסה
  deleteFliyts(num) {
    if (confirm('האם הינך בטוח שאתה רוצה לבטל טיסה זו? \n לאחר מכן לא תוכל להתחרט...')) {
      this.svc.delete(`http://localhost:3000/flights/${num}`).subscribe((e) => {
        this.svc.getalldb("http://localhost:3000/flights/all").subscribe((e) => this.fltghtsarr = e)
      })
    }
  }

  //קבלת מזמינים
  getOrdersByNum(numFlyght) {
    this.svc.getdb("http://localhost:3000/ordering/BynumFlyght", `?numFlyght=${numFlyght}`).subscribe((e) => {
      this.ordringarr = e
      this.bthget.nativeElement.hidden = true
      console.log(e)
    })
  }

  //קבלת  הנוסעים של הטיסה
  getPassengersBynumFlyght(numFlyght) {
    this.svc.getdb("http://localhost:3000/passengers/BynumFlyght", `?numFlyght=${numFlyght}`).subscribe((e) => {
      this.passengers = e
      this.numFlyght = numFlyght
    })
  }


  //מזמינים
  //קבלת כל המזמינים
  getAllOrders() {
    this.svc.getalldb("http://localhost:3000/ordering/all").subscribe((e) => {
      this.ordringarr = e
      this.bthget.nativeElement.hidden = true

    })
  }
  //קבלת נוסעים לפי מזמין
  getPassengersByOrderNumber(OrderNumber) {
    this.svc.getdb("http://localhost:3000/passengers", `?OrderNumber=${OrderNumber}`).subscribe((e) => {
      this.passengers = e
      this.order.nativeElement.hidden = true
      this.OrderNumber = OrderNumber
    })
  }

  //מחיקת מזמין +נוסעים
  deleteorder(OrderNumber) {
    if (confirm('פעולה זו תמחק את המזמין + כל הנוסעים שהוזמנו דרכו \n האם הינך בטוח שאתה רוצה לבטל טיסה זו?  \n לאחר מכן לא תוכל להתחרט...')) {
      this.svc.delete(`http://localhost:3000/passengers/Delete/${OrderNumber}`).subscribe(() => {
        this.svc.getdb("http://localhost:3000/passengers", `?OrderNumber=${this.OrderNumber}`).subscribe((e) => this.passengers = e)
      })
      this.svc.delete(`http://localhost:3000/ordering/Delete/${OrderNumber}`).subscribe((e) => console.log("ll")
      )
    }
  }

  //שינוי פרטי מזמין
  updetOrder(obg) {
    this.putorder = obg   
     this.putorformord.nativeElement.hidden = false
    this.updateOrderj()
  }


  putupdateorder(id){
    if (confirm('שים לב! \n האם הינך בטוח שאתה רוצה לשנות פרטי מזמין זה?')) {
      this.svc.updatedb(`http://localhost:3000/ordering/${id}`, this.updateorderForm.value).subscribe((e) => {
        this.putorformord.nativeElement.hidden = true
       
      })
    }
  }

    //פורם שינוי מזמין
  updateOrderj() {
    this.updateorderForm = new FormGroup({
    firstname: new FormControl(`${this.putorder.firstname}`),
    lastname: new FormControl(`${this.putorder.lastname}`),
    email: new FormControl(`${this.putorder.email}`),
    phonNumber: new FormControl(`${this.putorder.phonNumber}`),
    id: new FormControl(`${this.putorder.id}`),
  })
}




  //מחיקת נוסע
  deletepassenger(id) {
    if (confirm('האם הינך בטוח שאתה רוצה למחוק נוסע זו? \n לאחר מכן לא תוכל להתחרט...')) {
      this.svc.delete(`http://localhost:3000/passengers/${id}`).subscribe(() => {
        this.svc.getdb("http://localhost:3000/passengers", `?OrderNumber=${this.OrderNumber}`).subscribe((e) => {
          this.passengers = e
        })
      })
    }
  }


  //שינוי פרטי נוסע
  updatepassenger(obg) {
    this.putpassenger = obg
    this.putformpass.nativeElement.hidden = false
    this.updatepassengerj()
  }

  //שינוי פרטי נוסע put
  putupdatepassenger(id) {
    if (confirm('שים לב! \n האם הינך בטוח שאתה רוצה לשנות פרטי נוסע זה?')) {
      this.svc.updatedb(`http://localhost:3000/passengers/${id}`, this.updatepassengerForm.value).subscribe((e) => {
        this.putformpass.nativeElement.hidden = true
        this.svc.getdb("http://localhost:3000/passengers", `?OrderNumber=${this.OrderNumber}`).subscribe((e) => {
          this.passengers = e
        })
      })
    }
  }

  //פורם שינוי נוסע
  updatepassengerj() {
    this.updatepassengerForm = new FormGroup({
      birthDate: new FormControl(`${this.putpassenger.birthDate}`),
      id: new FormControl(`${this.putpassenger.id}`),
      firstname: new FormControl(`${this.putpassenger.firstname}`),
      lastname: new FormControl(`${this.putpassenger.lastname}`),
      sex: new FormControl(`${this.putpassenger.sex}`),

    })
  }







  //הוספת טיסה
  addFliyts() {
    this.form.nativeElement.hidden = false
  }
  //  post לטיסה
  postaddFliyts() {
    this.svc.postdb("http://localhost:3000/flights", this.MyFormGrup.value).subscribe((e) => {
      this.form.nativeElement.hidden = true
      this.svc.getalldb("http://localhost:3000/flights/all").subscribe((e) => this.fltghtsarr = e)
    })
  }

  //פורם הוספת טיסה
  MyFormGrup = new FormGroup({
    origin: new FormControl('', [Validators.required]),
    target: new FormControl('', [Validators.required]),
    depart: new FormControl('', [Validators.required]),
    prise: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    takeoff: new FormControl('', [Validators.required]),
    landing: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
  })







  //שינוי טיסה
  updetFliyts(obg) {
    this.putflyght = obg
    this.putform.nativeElement.hidden = false
    this.updetFliytFormj()
  }
  //put שינוי טיסה
  postupdateFliyts(numFlyght) {
    if (confirm('שים לב! \n האם הינך בטוח שאתה רוצה לשנות טיסה זו?')) {
      this.svc.updatedb(`http://localhost:3000/flights/${numFlyght}`, this.updetFliytForm.value).subscribe(() => {
        this.putform.nativeElement.hidden = true
        this.svc.getalldb("http://localhost:3000/flights/all").subscribe((e) => this.fltghtsarr = e)
      }
      )
    }
  }

  //פורם שינוי טיסה
  updetFliytFormj() {
    this.updetFliytForm = new FormGroup({
      origin: new FormControl(`${this.putflyght.origin}`),
      target: new FormControl(`${this.putflyght.target}`),
      depart: new FormControl(`${this.putflyght.depart}`),
      prise: new FormControl(`${this.putflyght.prise}`),
      company: new FormControl(`${this.putflyght.company}`),
      duration: new FormControl(`${this.putflyght.duration}`),
      takeoff: new FormControl(`${this.putflyght.takeoff}`),
      landing: new FormControl(`${this.putflyght.landing}`),
      place: new FormControl(`${this.putflyght.place}`),
      numFlyght: new FormControl(`${this.putflyght.numFlyght}`),
    })
  }

}




