import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appareil } from '../models/appareil.model';

@Injectable({ providedIn: 'root' })
export class AppareilService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3001/api/appareils';

  getAppareils(status?: string): Observable<Appareil[]> {
    let url = this.apiUrl;
    if (status) url += `?status=${status}`;
    return this.http.get<Appareil[]>(url);
  }

  getAppareil(id: string): Observable<Appareil> {
    return this.http.get<Appareil>(`${this.apiUrl}/${id}`);
  }

  addAppareil(appareil: { name: string; status: string }): Observable<Appareil> {
    return this.http.post<Appareil>(this.apiUrl, appareil);
  }

  updateAppareil(id: string, appareil: { name: string; status: string }): Observable<Appareil> {
    return this.http.put<Appareil>(`${this.apiUrl}/${id}`, appareil);
  }

  deleteAppareil(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}