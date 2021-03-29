export class Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[]
    id: number;
    original_language: string;
    original_title: string;
    overview: string;    
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false
    vote_average: number;
    vote_count: number;
}

export class MovieList {
    page: number;
    dates: DateRange;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export class DateRange {
    maximum: string;
    minimum: string;
}