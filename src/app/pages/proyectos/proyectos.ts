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
    { titulo: '', ubicacion: '', imagen: 'assets/images/Proyecto1.png', alt: '' },
    { titulo: '', ubicacion: '', imagen: 'assets/images/Proyecto2.png', alt: '' },
    { titulo: '', ubicacion: '', imagen: 'assets/images/Proyecto3.png', alt: '' },
  ];

}