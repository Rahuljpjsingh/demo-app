import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { userNameValidator } from './validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  form:FormGroup = this.fb.group({
    username:this.fb.control('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      userNameValidator
    ]),
    password:this.fb.control('',[
      Validators.required
    ])
  })

  ngOnInit() {
    this.form = this.fb.group({
      username:this.fb.control('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ])
    })
  }

  submit(fomr:NgForm){
    console.log(fomr);
  }

  log(firstName:NgModel){
    console.log(firstName);
  }

}
