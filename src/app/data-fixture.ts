import { Genre } from './model/genre';
import { MovieList } from './model/movie';


export const genresMock: Genre[] = [
    {id:28,name:'Action'},
    {id:12,name:'Adventure'},
    {id:16,name:'Animation'},
    {id:35,name:'Comedy'},
    {id:80,name:'Crime'},
    {id:99,name:'Documentary'},
    {id:18,name:'Drama'},
    {id:10751,name:'Family'},
    {id:14,name:'Fantasy'},
    {id:36,name:'History'},
    {id:27,name:'Horror'},
    {id:10402,name:'Music'},
    {id:9648,name:'Mystery'},
    {id:10749,name:'Romance'},
    {id:878,name:'Science Fiction'},
    {id:10770,name:'TV Movie'},
    {id:53,name:'Thriller'},
    {id:10752,name:'War'},
    {id:37,name:'Western'}
];

export const moviesMock: MovieList = {
    "dates": {
      "maximum": "2021-02-08",
      "minimum": "2020-12-22"
    },
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
        "genre_ids": [
          14,
          28,
          12
        ],
        "id": 464052,
        "original_language": "en",
        "original_title": "Wonder Woman 1984",
        "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
        "popularity": 2407.318,
        "poster_path": "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        "release_date": "2020-12-16",
        "title": "Wonder Woman 1984",
        "video": false,
        "vote_average": 7,
        "vote_count": 3437
      },
      {
        "adult": false,
        "backdrop_path": "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
        "genre_ids": [
          53,
          80
        ],
        "id": 602269,
        "original_language": "en",
        "original_title": "The Little Things",
        "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
        "popularity": 2119.969,
        "poster_path": "/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg",
        "release_date": "2021-01-27",
        "title": "The Little Things",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 245
      },
      {
        "adult": false,
        "backdrop_path": "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
        "genre_ids": [
          878,
          28
        ],
        "id": 651571,
        "original_language": "en",
        "original_title": "Breach",
        "overview": "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
        "popularity": 1267.391,
        "poster_path": "/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
        "release_date": "2020-12-17",
        "title": "Breach",
        "video": false,
        "vote_average": 4.7,
        "vote_count": 218
      },
      {
        "adult": false,
        "backdrop_path": "/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
        "genre_ids": [
          28,
          12,
          80
        ],
        "id": 604822,
        "original_language": "zh",
        "original_title": "急先锋",
        "overview": "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",
        "popularity": 1362.714,
        "poster_path": "/vYvppZMvXYheYTWVd8Rnn9nsmNp.jpg",
        "release_date": "2020-09-30",
        "title": "Vanguard",
        "video": false,
        "vote_average": 6.6,
        "vote_count": 179
      }
    ],
    "total_pages": 42,
  "total_results": 827
}