import { Image, Anchor } from './../../../shared/models/Shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public image: Image;
  public navbar: Anchor[];

  constructor() { 

    this.image = {

      src: "http://images.genius.com/021d45f2a0175958a6f00dc1b8d7901a.500x480x1.png",
      alt: "warner live",
      class: "navImg"

    }

    this.navbar = [

      {

        href: "#",
        text: "Inicio",
        class: "navInicio"

      },
      {

        href: "#",
        text: "Buscar 🔎",
        class: "navBuscar"

      }

    ]

  }

  ngOnInit(): void {
  }

}
