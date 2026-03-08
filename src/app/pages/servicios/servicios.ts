import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
        constructor(private title: Title) {
    this.title.setTitle('SERVICIOS | Ecopanels Energy');
  }

}
