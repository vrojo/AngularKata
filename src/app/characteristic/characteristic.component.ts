import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../models/movie";

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.scss']
})
export class CharacteristicComponent implements OnInit {
  @Input() characteristicName!: string;
  @Input() characteristicValue!: string;

  constructor() {}

  ngOnInit(): void {
  }
}
