import { Component, OnInit } from '@angular/core';
import { SwindicadoresService } from '../../services/swindicadores.service';

@Component({
  selector: 'app-compindicadores',
  templateUrl: './compindicadores.component.html',
  styleUrls: ['./compindicadores.component.css'],
  providers: [SwindicadoresService]
})
export class CompindicadoresComponent implements OnInit {

  datosPrueba: any;
  constructor(private datosServ: SwindicadoresService) { }

  ngOnInit() {
    this.datosServ.getIndicadores().subscribe(result => {
      if (result) {
        this.datosPrueba = JSON.parse(result._body);
        console.log('DatosLog', this.datosPrueba);
      }
    })
  }

}
