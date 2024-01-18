export function getFilm(id: number): Promise<FilmResponce> {
  return fetch(`https://swapi.tech/api/films/${id}`).then((res) => res.json());
}
