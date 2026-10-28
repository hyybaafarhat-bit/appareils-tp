import { Component, OnInit, inject, signal } from '@angular/core';
import { Appareil } from '../appareil/appareil';
import { AppareilService } from '../services/appareil';
import { Appareil as AppareilModel } from '../models/appareil.model';

@Component({
  selector: 'app-appareil-dashboard',
  imports: [Appareil],
  templateUrl: './appareil-dashboard.html',
  styleUrl: './appareil-dashboard.css'
})
export class AppareilDashboard implements OnInit {
  private appareilService = inject(AppareilService);

  appareilList = signal<AppareilModel[]>([]);
  error = signal('');

  ngOnInit() {
    this.loadAppareils();
  }

  loadAppareils() {
    this.appareilService.getAppareils().subscribe({
      next: (list) => this.appareilList.set(list),
      error: () => this.error.set('Impossible de charger les appareils')
    });
  }

  onAddAppareil(name: string) {
    if (!name) return;
    this.appareilService.addAppareil({ name, status: 'Off' }).subscribe(() => {
      this.loadAppareils();
    });
  }

  onSwitchOn(id: string) {
    const a = this.appareilList().find(x => x._id === id);
    if (!a) return;
    this.appareilService.updateAppareil(id, { name: a.name, status: 'On' }).subscribe(() => {
      this.loadAppareils();
    });
  }

  onSwitchOff(id: string) {
    const a = this.appareilList().find(x => x._id === id);
    if (!a) return;
    this.appareilService.updateAppareil(id, { name: a.name, status: 'Off' }).subscribe(() => {
      this.loadAppareils();
    });
  }

  onDelete(id: string) {
    if (confirm('Voulez-vous vraiment supprimer cet appareil ?')) {
      this.appareilService.deleteAppareil(id).subscribe(() => {
        this.loadAppareils();
      });
    }
  }
    onFilterChange(event: any) {
    const status = event.target.value;
    if (status) {
      this.appareilService.getAppareils(status).subscribe({
        next: (list) => this.appareilList.set(list),
        error: () => this.error.set('Impossible de filtrer les appareils')
      });
    } else {
      this.loadAppareils();
    }
  }
}