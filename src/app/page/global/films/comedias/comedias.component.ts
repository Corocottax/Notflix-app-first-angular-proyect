import { Peliculas } from './../../../../shared/models/Shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedias',
  templateUrl: './comedias.component.html',
  styleUrls: ['./comedias.component.scss']
})
export class ComediasComponent implements OnInit {

  public comedias: Peliculas;

  constructor() { 

    this.comedias = {

        title: "COMEDIAS",
        peliculas: [
          
            {
  
              src: "https://occ-0-987-990.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZu_vw5-596ZzPQs7AW9nPc1S4JrG_LdiY0FibM2Z3J21uJ23l_YeXAB_s-wDWsALVjZ12qJI7KEqilq8cFha_YOPU34sNi4bbQg.png?r=540",
              class: "comedias"

            },
            {
  
              src: "https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd7Cuiv9ypUB8qE9iQx-rStEaK6AohTgYGtGTUK1yZmcklfXJ-0oL9ZP7G3TuNHzkH0jdVDNwkK4mPzKqyXn4tApl-mg.jpg?r=cb6",
              class: "comedias"
              
            },
            {
  
              src: "https://i.ytimg.com/vi/Y9MUDnewfGg/maxresdefault.jpg",
              class: "comedias"

            },
            {
  
              src: "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2020/04/02/15858236359187.jpg",
              class: "comedias"

            },
            {
  
              src: "https://i.blogs.es/3ce8ba/salidos-de-cuentas-dvd-critica/1366_2000.jpg",
              class: "comedias"
              
            },
            {
  
              src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/novia-por-contrato-con-matthew-mcconaughey-y-bradley-cooper-1587977436.jpg?crop=1.00xw:0.789xh;0,0.0767xh&resize=480:*",
              class: "comedias"

            },

        ]

      }

  }

  ngOnInit(): void {
  }

}
