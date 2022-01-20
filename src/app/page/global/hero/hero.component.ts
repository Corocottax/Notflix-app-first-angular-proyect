import { Mejores } from './../models/netflix-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public mejores: Mejores[];
  public screenWidth: any;

  constructor() { 

    this.mejores = [

      {

        posicion: 1,
        img: {

          src: "https://enlima.pe/sites/default/files/styles/imagen_masonry/public/93943770_154288476011396_1655909597481116094_n.jpg",
          alt: "pelicula numero 1",

        }

      },
      {

        posicion: 2,
        img: {

          src: "https://media.vogue.mx/photos/5eaa200a29404300083cd894/master/pass/a-tres-metros-sobre-el-cielo-netflix.jpg",
          alt: "pelicula numero 2",

        }

      },
      {

        posicion: 3,
        img: {

          src: "https://media.vogue.es/photos/5e9b0afd94e04d00098ec443/2:3/w_2560%2Cc_limit/WF_Unit_03476.jpg",
          alt: "pelicula numero 3",

        }

      },
      {

        posicion: 4,
        img: {

          src: "https://fueradeseries.com/wp-content/uploads/2021/06/Yo-nunca-cartel.jpg",
          alt: "pelicula numero 4",

        }

      },
      {

        posicion: 5,
        img: {

          src: "https://es.web.img3.acsta.net/pictures/15/07/23/12/02/293866.jpg",
          alt: "pelicula numero 5",

        }

      },

    ]

  }

  ngOnInit(): void {

    this.screenWidth = window.innerWidth;

  }

}
