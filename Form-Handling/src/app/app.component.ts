import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.projectForm = fb.group({
      'projectName' : new FormControl(null, Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  ngOnInit(){
  }

  onSaveProject(){
    console.log(this.projectForm.value)
  }
}
