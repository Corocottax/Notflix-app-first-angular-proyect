import { Peliculas } from './../../../../shared/models/Shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dramas',
  templateUrl: './dramas.component.html',
  styleUrls: ['./dramas.component.scss']
})
export class DramasComponent implements OnInit {

  public pelisDramas: Peliculas;

  constructor() { 

    this.pelisDramas = {

        title: "DRAMAS BASADOS EN LIBROS",
        peliculas: [
          
          {

            src: "https://elrincondenetflix.com/wp-content/uploads/2020/04/la-tercera-temporada-the-100-llegara-principios-ano_original.jpg",
            class: "dramas"

          },
          {

            src: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/american-crime-story-temporada-2-fecha-de-estreno/137673446-1-esl-ES/La-temporada-2-de-American-Crime-Story-ya-tiene-fecha-de-estreno-y-nuevo-avance.jpg",
            class: "dramas"

          },
          {

            src: "https://www.elsoldemexico.com.mx/gossip/ect5bj-mindhunter.jpg/ALTERNATES/LANDSCAPE_400/mindhunter.jpg",
            class: "dramas"

          },
          {

            src: "https://cineverso.es/wp-content/uploads/2020/03/Altered-Carbon-2.jpg",
            class: "dramas"

          },
          {

            src: "https://los40es00.epimg.net/los40/imagenes/2018/06/05/album/1528199424_398167_1591108582_portada_normal.jpg",
            class: "dramas"

          },
          {

            src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-witcher-personajes-1578432294.jpg",
            class: "dramas"

          }

        ]

      }

  }

  ngOnInit(): void {
  }

}
