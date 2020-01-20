import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/variables/datos.service';
import { Usuario } from 'src/app/models/usuarios';
import { TokenService } from 'src/app/variables/token.service';
import { MongoDbService } from 'src/app/services/mongo-db.service';
import { SessionService } from 'src/app/variables/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  public servicio: string;
  public listUsuarios:Array<Usuario> = [];

  constructor(
    private tokenService:TokenService,
    private mongoDb:MongoDbService,
    private sessionVar:SessionService,
    private router: Router,) {
   this.servicio=tokenService.get();
   console.log(this.servicio);
  }

  ngOnInit() {
    this.mongoDb.get<Array<Usuario>>('usuarios/find',this.servicio)
    .subscribe(datos=>{
      this.listUsuarios = datos;
    },err=>{

    })
  }
  update(usuario:Usuario){
    this.sessionVar.set(usuario);
    this.router.navigate(['update']);
  }
  eliminar(usuario:Usuario){
    this.mongoDb.post('usuarios/delete',usuario,this.tokenService.get()).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log(err);
      } 
    );
  }
  create(){
    this.sessionVar.set(null);
    this.router.navigate(['update']);
  }

}
