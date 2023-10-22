import { Component, Input } from '@angular/core';
import { InputComponent } from "@ui5/webcomponents-ngx/main/input";
// import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  // @Input() username : string;
  // @Input() password : string;
  
  
  // console.log(this.username);
  // console.log(this.password);
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSubmit(e : any) {
    e.preventDefault()
    console.log("Logged In");
    console.log({username: this.username});
    console.log({username: this.password});

  }
  uname : string = 'roshan'
  pword : string = '1234'

  username: string = '';
  password: string = '';
  loginError: boolean = false;

  login() {
    // debugger
    // e.preventDefault()
    console.log(this.loginForm,'[loginForm]');
    console.log(this.loginForm.value,'[value]')
    console.log(this.username,'[username]')
    console.log(this.password,'[password');
    if (this.username === this.uname && this.password === this.pword) {
      // Implement the logic for successful login
      console.log("Success in login");
      this.loginError = false;
    } else {
      console.log("Error in sign in. Try Again !!!!");
      this.loginError = true;
    }
  }
}
