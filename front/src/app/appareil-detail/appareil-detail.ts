import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppareilService } from '../services/appareil';
import { Appareil } from '../models/appareil.model';

@Component({
  selector: 'app-appareil-detail',
  imports: [RouterLink],
  templateUrl: './appareil-detail.html',
  styleUrl: './appareil-detail.css'
})
export class AppareilDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private appareilService = inject(AppareilService);

  appareil = signal<Appareil | null>(null);
  error = signal('');

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.appareilService.getAppareil(id).subscribe({
        next: (data) => this.appareil.set(data),
        error: () => this.error.set('Appareil introuvable')
      });
    }
  }
}