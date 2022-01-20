import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  public darkMode!: boolean;
  public btnText: string ="🌞";

  constructor() { }

  ngOnInit(): void {
  }

  public cambiarColor(): void {

    document.body.classList.toggle("light-theme");

    if (this.btnText === "🌞" ? this.btnText = "🌚" : this.btnText = "🌞") {
      
    }

  }

}
