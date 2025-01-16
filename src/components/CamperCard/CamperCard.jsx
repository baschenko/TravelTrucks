import imagesDefault from '../../images/default.png';
import Button from '../Button/Button.jsx';

const CamperCard = ({ camper }) => {
  return (
    <div>
      <img
        src={
          camper.gallery[0].original !== null
            ? camper.gallery[0].original
            : imagesDefault
        }
        alt={camper.description}
        height="292"
        // className={s.img}
      />
      <div>
        <h2>{camper.name}</h2>
        <div>
          <h2>€{camper.price}.00</h2>
          <p>
            {camper.rating}({camper.reviews.length} Reviews){camper.location}
          </p>
          <p>{camper.description}</p>
          <Button>Show more</Button>
        </div>
      </div>

      {/* <Link
        className={s.link}
        state={{ from: location }}
        to={`/campers/${movie.id}`}
      >
        <img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : imagesDefault
          }
          alt={movie.title}
          height="280"
          className={s.img}
        />
        <h2 className={s.title}>{movie.title}</h2>
        <p className={s.text}>Rating: {Math.ceil(movie.vote_average)}</p>
      </Link> */}
    </div>
  );
};

export default CamperCard;
