import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  @ViewChildren(TrafficLightComponent) trafficLights!: QueryList<TrafficLightComponent>;
  emergencyActive = false;


  ngOnInit(): void {
    this.startTrafficLightCycle();
  }

  startTrafficLightCycle() {
    let currentPhase = 0;
    setInterval(() => {
      if (currentPhase === 0) {
        this.trafficLights.forEach((light, index) => {
          if (index < 2) {
            light.currentColor = 'red';
          } else {
            light.currentColor = 'green';
          }
        });
      } else if (currentPhase === 1) {
        this.trafficLights.forEach(light => {
          light.currentColor = 'yellow';
        });
      } else if (currentPhase === 2) {
        this.trafficLights.forEach((light, index) => {
          if (index < 2) {
            light.currentColor = 'green'; 
          } else {
            light.currentColor = 'red'; 
          }
        });
      } else if (currentPhase === 3) {
        this.trafficLights.forEach(light => {
          light.currentColor = 'yellow';
        });
      }
      currentPhase = (currentPhase + 1) % 4;
    }, 7000);
  }

  setLights(horizontalColor: 'red' | 'yellow' | 'green', verticalColor: 'red' | 'yellow' | 'green') {
    this.trafficLights.forEach((light, index) => {
      if (index < 2) {
        light.currentColor = horizontalColor;
      } else {
        light.currentColor = verticalColor;
      }
    });
  }

  triggerEmergency() {
    this.emergencyActive = true;
    this.trafficLights.forEach(light => {
      light.currentColor = 'yellow';
    });

    setTimeout(() => {
      this.emergencyActive = false;
    }, 20000);

    setTimeout(() => {
      this.emergencyActive = true;
    }, 10000);
  }

}