import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { UtilService } from 'src/app/services/util.service';

import { MainComponent } from './main.component';
import { genresMock, moviesMock } from 'src/app/data-fixture';
import { MovieList } from 'src/app/model/movie';
import { Observable, of } from 'rxjs';
import { Genre } from 'src/app/model/genre';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  class DbServiceMock {

    getAlbums(): void {}

    getAllMovies(): Observable<MovieList> {
      return of(moviesMock);
    }

    getGenres(): Observable<Genre[]> {
      return of(genresMock);
    }

  }
  
  class UtilServiceMock {
    sortBy(collection: any[], col: string, dir: number): any[] {
      return moviesMock.results
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [
        {provide: DbService, useClass : DbServiceMock},
        {provide: UtilService, useClass : UtilServiceMock},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all movies', () => {
    component.movieList = null;
    component.loadMovies();
    expect(component.movieList).toEqual(moviesMock);
  });

  it('should return only filtered genres', () => {
    component.genreList = null;
    component.loadGenres();
    expect(component.genreList.length).toEqual(4);

  });

  it('should add id to filter', () => {
    component.genreIds = [];
    component.addRemoveToFilter(28);
    expect(component.genreIds.find(item => item === 28)).toBeTruthy();
  });

  it('should remove id to filter', () => {
    component.genreIds = [28,12];
    component.addRemoveToFilter(28);
    expect(component.genreIds.find(item => item === 28)).not.toBeTruthy();
  });

  it('should filterMovieList', () => {
    component.displayList = moviesMock.results;
    component.genreIds = [28,12];
    component.filterMovieList();
    expect(component.displayList.length).toEqual(3);
  });

  it('should reset Filter', () => {
    component.displayList = [];
    component.resetFilter();
    expect(component.displayList).toEqual(moviesMock.results)
  });

  it('should be desktop mode', () => {
    spyOnProperty(window,'innerWidth').and.returnValue(600);
    expect(component.isVisible).toBe(false);
    expect(component.isDesktop).toBe(true);
  });

  it('should be mobile mode', () => {
    spyOnProperty(window,'innerWidth').and.returnValue(400);
    component.getScreenSize();
    expect(component.isDesktop).toBe(false);
  });

  it('should toggle menu', () => {
    component.isVisible = true;
    component.toggleMenu();
    expect(component.isVisible).toBe(false);
  });

  it('should increase rate', () => {
    component.rate = 3;
    component.updateSetting({value: 6.5});
    expect(component.rate).toEqual(6.5);
  });

  it('should round down a number', () => {
    const result = component.floorNumber(7.4);
    expect(result).toEqual(7);
  });

  it('should retun an array of 4 numbers', () => {
    const result = component.counter('4.3');
    expect(result.length).toEqual(4);
  });

  it('should reeset the list to its original', () => {
    component.displayList = [];
    component.resetFilter();
    expect(component.movieList).toEqual(moviesMock);
  });

});
