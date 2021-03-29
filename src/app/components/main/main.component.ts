import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Genre } from 'src/app/model/genre';
import { Movie, MovieList } from 'src/app/model/movie';
import { DbService } from 'src/app/services/db.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public subscription: Subscription = new Subscription();
  public genreList: Genre[] = [];
  public movieList: MovieList;
  public displayList: Movie[] = [];
  public isDefault = true;
  public direction = -1;
  public columnSelected = 'popularity';
  public genreIds:number[] = [];
  public rate = 3;
  public gridsize: number = 3;
  public isDesktop = true;
  public isVisible = false;

  constructor(
    private dbService: DbService,
    private utilService: UtilService,
    ) 
    { }

  ngOnInit(): void {
    this.loadMovies();
    this.loadGenres();
  }

  loadMovies(): void {
    this.subscription.add(this.dbService.getAllMovies()
      .pipe(filter(items => !! items))
      .subscribe((items: MovieList) => {
        this.movieList = items;
        if(this.isDefault) {
          this.displayList = this.utilService.sortBy(items.results, this.columnSelected, this.direction);
        }
        
      }));
  }

  loadGenres(): void {
    this.subscription.add(this.dbService.getGenres()
      .pipe(filter(items => !! items))
      .subscribe((items: Genre[]) => {
        this.genreList = this.removeGenreNotListed(items);
      }));
  }

  removeGenreNotListed(originalList: Genre[]): Genre[] {
    let uniqueIds = [];
    let resultList = [];
    this.movieList.results.forEach(item => {
      item.genre_ids.forEach(id => uniqueIds.push(id))
    })

    uniqueIds = [...new Set(uniqueIds)];
    originalList.some(item => {
      if(uniqueIds.includes(item.id)) {
        resultList.push(item);
      }});

    return this.utilService.sortBy(resultList, 'name', this.direction);
  }

  addRemoveToFilter(id: number): void {
    const obj = this.genreIds.find(item => item === id);
    if(obj) {
      const ids = this.genreIds.filter(item => item !== id);
      this.genreIds = [];
      this.genreIds = ids;
    } else {
      this.genreIds.push(id);
    }

    this.filterMovieList();
  }

  filterMovieList(): void {
    const temp = this.utilService.sortBy(this.movieList.results, this.columnSelected, this.direction);
    this.displayList = [];
    if(this.genreIds.length > 0) {
      this.displayList = temp.filter(item => item.genre_ids.some(i => this.genreIds.includes(i)));
      this.displayList = this.displayList.filter(item => item.vote_average >= this.rate);
    } else {
      this.displayList = temp.filter(item => item.vote_average >= this.rate);
    }
  }

  filterRate(rate: number): void {
    this.rate = rate;
    if(this.displayList.length > 0) {
      this.filterMovieList();
      const temp = this.displayList;
      this.displayList = [];
      this.displayList = temp.filter(item => item.vote_average >= rate);
    }
  }

  getGenreById(id: number): string {
    return this.genreList.find(item => item.id === id) ? this.genreList.find(item => item.id === id).name : '';
  }

  resetFilter(): void {
    this.displayList = this.utilService.sortBy(this.movieList.results, this.columnSelected, this.direction);
  }

  counter(i: string): number[] {
    return new Array(parseInt(i));
  }

  floorNumber(i: number): number {
    return Math.floor(i);
  }

  updateSetting(event) {
    this.gridsize = event.value;
    this.filterRate(this.gridsize);
  }

  toggleMenu(): void {
    this.isVisible = !this.isVisible
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.isDesktop = window.innerWidth > 500;
      if(window.innerWidth > 500) {
        this.isVisible = false;
      }
      
    }

}
