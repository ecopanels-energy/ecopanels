import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {

  constructor(private title: Title) {
    this.title.setTitle('PROYECTOS | Ecopanels Energy');
  }

  proyectos = [
    { titulo: 'SSFV on-grid 19,2 kWp', ubicacion: 'Copacabana, Antioquia', imagen: 'assets/images/Proyecto1.png', alt: '' },
    { titulo: 'SSFV on-grid 5 kWp', ubicacion: 'Guarne, Antioquia', imagen: 'assets/images/Proyecto3.png', alt: '' },
    { titulo: 'SSFV on-grid 3 kWp', ubicacion: 'Copacabana, Antioquia', imagen: 'assets/images/Proyecto2.png', alt: '' },

  ];

}