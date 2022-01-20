import { Anchor } from './../../../../shared/models/Shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() public navbar!: Anchor;

  constructor() { }

  ngOnInit(): void {
  }

}
