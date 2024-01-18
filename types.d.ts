// interface Root {
//     title: string
//     episode_id: number
//     opening_crawl: string
//     director: string
//     producer: string
//     release_date: string
//     characters: string[]
//     planets: string[]
//     starships: string[]
//     vehicles: string[]
//     species: string[]
//     created: string
//     edited: string
//     url: string
//   }

//   interface FilmsResponce{
//     "count": number,
// 	"next": number|null,
// 	"previous": null,
// 	"results": Film[]
//   }

interface Film {
  properties: FilmProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

interface FilmProperties {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  title: string;
  homeworld: string;
  url: string;
}

interface FilmsResponce {
  message: string;
  result: Film[];
}
interface FilmResponce {
  message: string;
  result: Film;
}

