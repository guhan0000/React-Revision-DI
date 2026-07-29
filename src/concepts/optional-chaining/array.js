const movieList = [
  {
    movieName: "Spider Man",
    movieRating: 7,
    movieLanguage: "English",
    cast: { director: "Guhan", music: "Naresh" },
  },
  { movieName: "DC", movieRating: 6, movieLanguage: "Tamil" },
];
console.log(movieList);
console.log(movieList[0].cast.stunt); // undefined
// console.log(movieList[0].cast.stunt.head); // type error
console.log(movieList[0]?.cast?.stunt?.head); // undefined using optional chaining
// console.log(movieList[4].movieName); // type error
console.log(movieList[4]?.movieName); // undefined
