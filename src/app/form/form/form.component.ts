import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements  OnInit{
  countryDefault :String = 'Spain';
  countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria",
    "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina",
    "Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile",
    "China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti",
    "Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji",
    "Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada",
    "Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq",
    "Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon",
    "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
    "Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands",
    "Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea",
    "Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa",
    "San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea",
    "Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan",
    "Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos",
    "Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia",
    "Zimbabwe"];
  onKeyDown(event: { code: string; key: any; }){
    return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space';
  }
  firstName :FormControl = new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern(/^[ÁÉÍÓÚA-Z][a-záéíóú]*$/)]);
  lastName :FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[ÁÉÍÓÚA-Z][a-záéíóú]*$/)]);
  name :FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/)]);
  age :FormControl = new FormControl('', [Validators.required, Validators.pattern(/^(?:1[8-9]|[2-5][0-9]|60)$/)]);
  address :FormControl = new FormControl('',[Validators.minLength(5), Validators.pattern(/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)+(,\s[0-9]+)*$/)]);
  inlineRadioOptions :FormControl = new FormControl('');
  selectCountries :FormControl = new FormControl('', Validators.required);
  birthDate :FormControl = new FormControl('', Validators.required);
  username :FormControl = new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-z-0-9]+[0-9]*$/)]);
  email :FormControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.email, Validators.pattern(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)]);
  password :FormControl = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]);

  registration:FormGroup = new FormGroup({
    firstName:this.firstName,
    lastName:this.lastName,
    name:this.name,
    age:this.age,
    address:this.address,
    inlineRadioOptions:this.inlineRadioOptions,
    selectCountries:this.selectCountries,
    birthDate:this.birthDate,
    username:this.username,
    email:this.email,
    password:this.password
  });

  constructor(private formBuilder: FormBuilder) {
  };
  ngOnInit(){

  };

  onRegistration(){
    if(this.registration.valid){
      this.success();
      console.log(this.registration.value);
      this.registration.reset();
    }
  };
  resetForm(){
    this.registration.reset();
  }
  success(){
    Swal.fire(
      'Send!',
      'Thanks!',
      'success'
    );

  }
}
