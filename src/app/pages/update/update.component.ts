import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios';
import { TokenService } from 'src/app/variables/token.service';
import { MongoDbService } from 'src/app/services/mongo-db.service';
import { SessionService } from 'src/app/variables/session.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public servicio: string;
  public sessionU: Usuario;
  public httpReq: boolean;
  form: FormGroup;
  

  constructor(
    private tokenService:TokenService,
    private mongoDb:MongoDbService,
    private sessionVar:SessionService,
    private router: Router,
    private formBuilder: FormBuilder,) {
   this.servicio=tokenService.get();
   
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      ci: ['', Validators.required],
      edad: ['', Validators.required],
      pass: ['', Validators.required],
    });
    this.sessionU= this.sessionVar.get();
    if(this.sessionU){
      this.form.controls['nombre'].setValue(this.sessionU.nombre);
      this.form.controls['ci'].setValue(this.sessionU.ci);
      this.form.controls['edad'].setValue(this.sessionU.edad);
      //this.form.controls['pass'].setValue(this.sessionU.pass);
    }

    console.log(this.sessionU);
    
  }
  submit(){
    if(this.form.valid){
      if(this.sessionU){
        const userUp:Usuario={_id:this.sessionU._id,
          ci:this.form.value.ci,
          nombre:this.form.value.nombre,
          pass:this.form.value.pass,
          edad:this.form.value.edad};
        this.mongoDb.post('usuarios/update',userUp,this.tokenService.get()).subscribe(
          res=>{
            console.log(res);
          },err=>{
            console.log(err);
          } 
        );

      }else{
        this.mongoDb.post('usuarios/create',this.form.value).subscribe(
          res=>{
            console.log(res);
          },err=>{
            console.log(err);
          } 
        );
      }
    }
  }

}
