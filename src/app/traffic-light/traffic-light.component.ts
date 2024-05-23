import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})

export class TrafficLightComponent implements OnInit {
  @Input() isVertical: boolean = true;
  currentColor: 'red' | 'yellow' | 'green' = 'red';

  ngOnInit(): void {}

  onButtonClick(): void {
    if (this.currentColor === 'yellow') {
      alert('Incorrect crossing');
    }
  }

}

