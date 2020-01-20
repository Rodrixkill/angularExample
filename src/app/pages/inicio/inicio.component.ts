import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/models/iphoto';
import { PhotoService } from 'src/app/services/photo.service';
import { DatosService } from 'src/app/variables/datos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  public listPhotos:Array<IPhoto> = [];

  constructor(
    private photoService:PhotoService,
    private router: Router,
    private datoService: DatosService) { }

  ngOnInit() {
    /*for (let i = 0; i < 10; i++) {
      let valor:IPhoto = {
        id: i+1,
        title: 'titulo'+i
      }
      this.listPhotos.push(valor);
    };
    console.log(this.listPhotos);
  }*/
  this.photoService.get<Array<IPhoto>>('photos?_limit=3')
  .subscribe(datos=>{
    this.listPhotos = datos;
  },err=>{

  })
}
irDetalle(photo : IPhoto){
  this.datoService.set(photo);
  this.router.navigate(['detalle']);
}


}
