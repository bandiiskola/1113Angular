import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

interface Repules {
  id: string;
  departure: string;
  arrival: string;
  departureTime: Date;
  plane: string;
  seats: number;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrl: './lista.component.css',
  templateUrl: './lista.component.html'
})
export class ListaComponent {
  filter = '';

  flights: Repules[] = [
    { id: 'AA1234', departure: 'Budapest', arrival: 'London', departureTime: new Date('2024-11-15T14:30:00'), plane: 'Airbus A320', seats: 180 },
    { id: 'BA5678', departure: 'Paris', arrival: 'New York', departureTime: new Date('2024-11-16T10:00:00'), plane: 'Boeing 747', seats: 250 },
    { id: 'LH9101', departure: 'Berlin', arrival: 'Tokyo', departureTime: new Date('2024-11-14T18:45:00'), plane: 'Airbus A350', seats: 300 },
  ];

  filtereltRepules() {
    return this.flights.filter(flight => flight.plane.includes(this.filter));
  }

  constructor(private router: Router) {}

  reszletek(id: string) {
    this.router.navigate(['/repules', id]);
  }
}
