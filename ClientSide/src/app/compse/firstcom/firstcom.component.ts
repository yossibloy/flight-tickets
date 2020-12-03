import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, pairs } from 'rxjs';

@Component({
  selector: 'app-firstcom',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {
  constructor(public svc: MyserviceService, private router: Router) {

  }

  ngOnInit(): void {  }

  //מערך יעדים
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


  MyFormGrup = new FormGroup({
    origin: new FormControl('', [Validators.required]),
    target: new FormControl('', [Validators.required]),
    depart: new FormControl('', [Validators.required]),
    return: new FormControl('')

  })


  // כפתורי רדיו
  @ViewChild("radio1") radio1: ElementRef
  @ViewChild("radio2") radio2: ElementRef

  ischecked2() {
    this.radio2.nativeElement.checked = true
    this.radio1.nativeElement.checked = false
  }

  ischecked1() {
    this.radio1.nativeElement.checked = true
    this.radio2.nativeElement.checked = false
  }


  // מספר נוסעים
  minusadult() {
    this.svc.passengersadult > 0 ? this.svc.passengersadult -= 1 : this.svc.passengersadult = this.svc.passengersadult;
    this.svc.passengers = this.svc.passengersadult + this.svc.passengersyoung
  }

  plusadult() {
    this.svc.passengersadult < 9 ? this.svc.passengersadult += 1 : this.svc.passengersadult = this.svc.passengersadult
    this.svc.passengers = this.svc.passengersadult + this.svc.passengersyoung

  }
  minusyoung() {
    this.svc.passengersyoung > 0 ? this.svc.passengersyoung -= 1 : this.svc.passengersyoung = this.svc.passengersyoung
    this.svc.passengers = this.svc.passengersadult + this.svc.passengersyoung
  }
  plusyoung() {
    this.svc.passengersyoung < 9 ? this.svc.passengersyoung += 1 : this.svc.passengersyoung = this.svc.passengersyoung
    this.svc.passengers = this.svc.passengersadult + this.svc.passengersyoung
  }




  // חיפוש טיסות הלוך ושוב/צד אחד.בדיקה אם הכניס מספר נוסעים
  async click() {
    if (this.svc.passengers == 0) {
      alert("שים לב! יש למלאות מספר נוסעים")
      return
    }

   await this.svc.getdb("http://localhost:3000/flights",
      `?origin=${this.MyFormGrup.value.origin}&&target=${this.MyFormGrup.value.target}&&depart=${this.MyFormGrup.value.depart}`)
      .subscribe((res) => {
        this.svc.conditions.push(...res)
        this.prise(this.svc.conditions);
      })

      await  this.svc.getdb("http://localhost:3000/flights",
      `?origin=${this.MyFormGrup.value.target}&&target=${this.MyFormGrup.value.origin}&&depart=${this.MyFormGrup.value.return}`)
      .subscribe((res) => {
        this.svc.conditions2.push(...res)
        this.prise(this.svc.conditions2);

      })

    this.router.navigate(['/flit'])
    this.array()
  }

  prise(arr) {
    arr.forEach(e => {
      let invoice = (e.prise * this.svc.passengers)
      invoice -= (e.prise * this.svc.passengersyoung / 2)
      e["priceglobal"] = invoice

    });
  }


  //מערך על מספר נןסעים
  array() {
    for (let i = 1; i <= this.svc.passengers; i++) {
      this.svc.arr.push(i)
    }

  }
}








