import { Peliculas } from './../../models/Shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  @Input() public peliculas!: Peliculas;

  constructor() { }

  ngOnInit(): void {
  }

}
