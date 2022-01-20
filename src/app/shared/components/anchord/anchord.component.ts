import { Anchor } from './../../models/Shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchord',
  templateUrl: './anchord.component.html',
  styleUrls: ['./anchord.component.scss']
})
export class AnchordComponent implements OnInit {

  @Input() public anchor!: Anchor;

  constructor() { }

  ngOnInit(): void {
  }

}
