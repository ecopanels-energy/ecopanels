import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  
  constructor(private title: Title) {
    this.title.setTitle('NOSOTROS | Ecopanels Energy');
  }

}
