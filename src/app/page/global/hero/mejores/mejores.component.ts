import { Mejores } from './../../models/netflix-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mejores',
  templateUrl: './mejores.component.html',
  styleUrls: ['./mejores.component.scss']
})
export class MejoresComponent implements OnInit {

  @Input() public mejor!: Mejores;

  constructor() { }

  ngOnInit(): void {
  }

}
