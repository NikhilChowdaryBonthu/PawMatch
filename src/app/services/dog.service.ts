import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private baseUrl = `${environment.apiUrl}/dogs`;

  constructor(private http: HttpClient) {}

  getBreeds() {
    return this.http.get<string[]>(`${this.baseUrl}/breeds`);
  }

  searchDogs(filters: any) {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/search`, { params, withCredentials: true });
  }

  getDogDetails(dogIds: string[]) {
    return this.http.post<Dog[]>(this.baseUrl, dogIds, { withCredentials: true });
  }

  getMatch(favoriteDogIds: string[]) {
    return this.http.post<{ match: string }>(`${this.baseUrl}/match`, favoriteDogIds, { withCredentials: true });
  }
}
