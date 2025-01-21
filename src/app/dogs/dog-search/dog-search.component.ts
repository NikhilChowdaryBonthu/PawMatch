import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../models/dog.model';

@Component({
  selector: 'app-dog-search',
  templateUrl: './dog-search.component.html',
  styleUrls: ['./dog-search.component.css'],
})
export class DogSearchComponent implements OnInit {
  dogs: Dog[] = [];
  favorites: Set<string> = new Set();

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.loadDogs();
  }

  loadDogs() {
    this.dogService.searchDogs({}).subscribe(
      (response: any) => (this.dogs = response.dogs),
      (error) => console.error('Failed to load dogs', error)
    );
  }

  toggleFavorite(dogId: string) {
    if (this.favorites.has(dogId)) {
      this.favorites.delete(dogId);
    } else {
      this.favorites.add(dogId);
    }
  }

  findMatch() {
    const dogIds = Array.from(this.favorites);
    this.dogService.getMatch(dogIds).subscribe(
      (match) => alert(`Your match is dog ID: ${match.match}`),
      (error) => console.error('Failed to find match', error)
    );
  }
}
