import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css']
})
export class StepperFormComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  isLinear = false;

  ngOnInit(): void {
  }

  Empregister = this.builder.group({

    basic: this.builder.group({
      firstname: this.builder.control('', Validators.required),
      lastname: this.builder.control('', Validators.required)
    }),

    contact: this.builder.group({
      email: this.builder.control('', Validators.required),
      phone: this.builder.control('', Validators.required),
      fax: this.builder.control('', Validators.required)
    }),

    address: this.builder.group({
      street: this.builder.control('', Validators.required),
      city: this.builder.control('', Validators.required),
      pincode: this.builder.control('', Validators.required)
    }),

  });

  get Basicform(){
    return this.Empregister.get("basic") as FormGroup;
  }
  get contactform(){
    return this.Empregister.get("contact") as FormGroup;
  }
  get addressform(){
    return this.Empregister.get("address") as FormGroup;
  }

  HandleSubmit(){
    if(this.Empregister.valid){
      console.log(this.Empregister.value);
    }
  }
}