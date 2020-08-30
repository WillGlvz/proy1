import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-component',
  templateUrl: './primer-component.component.html',
  styleUrls: ['./primer-component.component.css']
})
export class PrimerComponentComponent implements OnInit {
  estado = "Por favor, presionar enviar"
  MostrarPass = false
  color = "azul"
  akatsuki = ['Pain', 'Konan', 'Itachi', 'Deidara', 'Sasori']

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    this.estado = "Datos enviados con éxito!!"
  }

}
