import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  constructor(private title: Title) {
    this.title.setTitle('CONTACTO | Ecopanels Energy');
  }
}
