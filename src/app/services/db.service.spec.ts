import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DbService } from './db.service';
import { UtilService } from './util.service';
import { Genre } from '../model/genre';
import { genresMock, moviesMock } from '../data-fixture';
import { environment } from 'src/environments/environment';
import { MovieList } from '../model/movie';

describe('DbService', () => {
  let service: DbService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbService, UtilService],
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DbService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get genres', inject(
    [HttpTestingController, DbService], 
    (httpMock: HttpTestingController, service: DbService) => {

      service.getGenres().subscribe((result: Genre[]) => {
        expect(result).toEqual(genresMock)
      });

      const req = httpMock.expectOne(
        `${environment.endPoint}/genres`
      );
      expect(req.request.method).toEqual("GET");
      req.flush(genresMock);
  }));

  it('should get movies', inject(
    [HttpTestingController, DbService], 
    (httpMock: HttpTestingController, service: DbService) => {

      service.getAllMovies().subscribe((result: MovieList) => {
        expect(result).toEqual(moviesMock)
      });

      const req = httpMock.expectOne(
        `${environment.endPoint}/movies`
      );
      expect(req.request.method).toEqual("GET");
      req.flush(moviesMock);
  }));
});
