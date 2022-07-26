import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { buttonClickedEnum } from '../app.enums';
import { Icontactus } from '../interface/icontactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactus: Icontactus= {fullName:"", email:"", phoneNumber:""};
  enumBtn: buttonClickedEnum = buttonClickedEnum.contactUs;

  @Input()
    sourceBtn: buttonClickedEnum=buttonClickedEnum.contactUs;

  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {

  }

  get email() {
    return this.contactusForm.get('email');
  }

  contactusForm = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(environment.phoneNumberUkraineRegex)]],
    vMarkIconUrl: environment.vMarkIconUrl
  });
  

  onSubmit(): void {
    this.contactusForm.reset();
  }
}
