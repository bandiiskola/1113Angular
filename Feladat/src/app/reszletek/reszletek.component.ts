import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Repules {
  id: string;
  departure: string;
  arrival: string;
  departureTime: Date;
  plane: string;
  seats: number;
}

@Component({
  selector: 'app-reszletek',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Flight Details</h2>
    <div *ngIf="flight">
      <p>ID: {{ flight.id }}</p>
      <p>Departure: {{ flight.departure }}</p>
      <p>Arrival: {{ flight.arrival }}</p>
      <p>Departure Time: {{ flight.departureTime | date: 'short' }}</p>
      <p>Plane: {{ flight.plane }}</p>
      <p>Seats: {{ flight.seats }}</p>
    </div>
  `,
  styleUrl: './reszletek.component.css'
})
export class ReszletekComponent {
  flight: Repules | undefined;

  flights: Repules[] = [
    { id: 'AA1234', departure: 'Budapest', arrival: 'London', departureTime: new Date('2024-11-15T14:30:00'), plane: 'Airbus A320', seats: 180 },
    { id: 'BA5678', departure: 'Paris', arrival: 'New York', departureTime: new Date('2024-11-16T10:00:00'), plane: 'Boeing 747', seats: 250 },
    { id: 'LH9101', departure: 'Berlin', arrival: 'Tokyo', departureTime: new Date('2024-11-14T18:45:00'), plane: 'Airbus A350', seats: 300 },
  ];

  constructor(private route: ActivatedRoute) {
    const flightId = this.route.snapshot.paramMap.get('id');
    this.flight = this.flights.find(flight => flight.id === flightId);
  }
}
