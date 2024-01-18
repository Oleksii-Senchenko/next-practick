import { getFilm } from "@/app/actions/getFilms";

export interface Params {
  params: {
    filmId: number;
  };
}

export default async function Film({ params: { filmId } }: Params) {
  const film = await getFilm(filmId);
  return (
    <div>
      <h1>{film.result.properties.title}</h1>
    </div>
  );
}
