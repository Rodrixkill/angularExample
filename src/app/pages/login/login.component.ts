import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MongoDbService } from 'src/app/services/mongo-db.service';
import {Router} from '@angular/router';
import { TokenService } from 'src/app/variables/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public token:string;

  constructor(
    private formBuilder: FormBuilder,
    private mongoService: MongoDbService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      ci: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }
  submit(){
    if(this.form.valid){
      this.mongoService.post('usuarios/login',this.form.value).subscribe(
        res=>{
          if(res.headers.get('token')){
            this.token=res.headers.get('token');
            this.tokenService.set(this.token);
            this.router.navigate(['detalle']);
            console.log(this.token);
          }
          
        },err=>{
          console.log(err);
          
        } 
      );
    }
  }

}
