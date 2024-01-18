import Link from "next/link";
import { getAllFilms } from "../actions/getAllFims";

export default async function FilmsPage() {
  const allFilms = await getAllFilms();
  
  return (
    <div>
      <ul>
        {allFilms.result.map((film) => (
          <li key={film.uid}>
            <Link href={`/films/${film.uid}`}>{film.properties.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
