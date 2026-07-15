import styles from "./MovieCard.module.css";
function MovieCard() {
  const nameStyle = { color: "red" };
  return (
    // <div className="card m-5" style={{ width: "300px" }}>
    //   <img
    //     src="https://image.tmdb.org/t/p/w1280/r3UKPGdQC5mPiA9bE9otM9CN4lW.jpg"
    //     alt="dark_knight"
    //   />
    //   <h3>The Dark Knight</h3>
    // </div>
    <div className={styles.movie}>
      <h3 style={nameStyle}>The Dark Knight</h3>
      <img
        src="https://image.tmdb.org/t/p/w1280/r3UKPGdQC5mPiA9bE9otM9CN4lW.jpg"
        alt="dark_knight"
        width={"300px"}
        height={"500px"}
      />
    </div>
  );
}
export default MovieCard;
