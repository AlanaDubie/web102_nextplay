function GameCard({ game, addToBanList }) {
  const genre = game.genres[0]?.name || "Unknown";
  const platform = game.platforms[0]?.platform.name || "Unknown";
  const rating = game.rating;

  // Use a placeholder if image is missing
  const image = game.background_image
    ? game.background_image
    : "https://via.placeholder.com/400x225?text=No+Image";

  return (
    <div className="game-card">
      <h2>{game.name}</h2>

      <img src={image} alt={game.name} />

      <p>
        Genre:{" "}
        <span onClick={() => addToBanList(genre)} className="clickable">
          {genre}
        </span>
      </p>

      <p>
        Platform:{" "}
        <span onClick={() => addToBanList(platform)} className="clickable">
          {platform}
        </span>
      </p>

      <p>Rating: {rating}</p>
    </div>
  );
}

export default GameCard;