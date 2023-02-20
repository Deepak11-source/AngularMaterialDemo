import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private builder: FormBuilder){}
  
  profileForm = this.builder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    dob:[''],
    gender:[''],
  });

  saveForm(){
    console.log(this.profileForm.value);
  }
}
