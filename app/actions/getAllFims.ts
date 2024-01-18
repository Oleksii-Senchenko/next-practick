// export function getAllFilms(): Promise<FilmsResponce> {
//   return fetch("https://swapi.dev/api/films", {
//      cache: "no-store" //SSR - запрос не будет кэшироваться и будет повтоятся снова
//     //  cache: "force-cache" SSG - статическая генирация
//     //  next: {revalidate: 60} ISR - время через которое нуно ревалидировать
//      }).then(
//     (res) => res.json()
//   );
// }
export function getAllFilms(): Promise<FilmsResponce> {
  return fetch("https://swapi.tech/api/films").then((res) => res.json());
}
// Если убрать все опиии то страница будет генерится статично