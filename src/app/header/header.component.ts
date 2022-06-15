import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoUrl !: string;
  searchIconUrl !: string;
  frFlagUrl !: string;
  usaFlagUrl !: string;

  constructor() { }

  ngOnInit(): void {
    this.logoUrl = "../../assets/logo.svg"
    this.searchIconUrl = "../../assets/icon_magnify.svg"
    this.frFlagUrl = "../../assets/flag_fr.svg"
    this.usaFlagUrl = "../../assets/flag_usa.svg"
  }

}
