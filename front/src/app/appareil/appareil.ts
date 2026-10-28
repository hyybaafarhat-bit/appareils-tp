import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appareil',
  imports: [RouterLink],
  templateUrl: './appareil.html',
  styleUrl: './appareil.css'
})
export class Appareil {
  appareilId = input.required<string>();
  appareilName = input.required<string>();
  appareilStatus = input.required<string>();

  switchOn = output<string>();
  switchOff = output<string>();
  delete = output<string>();
}