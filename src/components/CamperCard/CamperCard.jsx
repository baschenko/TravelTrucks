import imagesDefault from '../../images/default.png';
import Button from '../Button/Button.jsx';
import Categories from '../Categories/Categories.jsx';
import Icon from '../Icon/Icon.jsx';
import css from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  return (
    <div className={css.wrapperCard}>
      <div className={css.wrapperImg}>
        <img
          className={css.image}
          src={
            camper.gallery[0].thumb !== null
              ? camper.gallery[0].thumb
              : imagesDefault
          }
          alt={camper.name}
          // width="292"
          height="320"
        />
      </div>
      <div className={css.wrapperDescription}>
        <div className={css.cardHeader}>
          <h2 className={css.cardTitle}>{camper.name}</h2>
          <div className={css.wrapperPrice}>
            <p className={css.cardPrice}>€{camper.price}.00</p>
            <button
              aria-label="Heart button"
              className={css.cardHeart}
              // onClick={}
            >
              <Icon
                id="icon-heart"
                width={26}
                height={24}
                className={css.icon}
              />
            </button>
          </div>
        </div>
        <div className={css.wrapperReviews}>
          <Icon id="icon-star" width={16} height={16} className={css.star} />
          <p className={css.cardReviews}>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <Icon id="icon-map" width={16} height={16} className={css.map} />
          <p>{camper.location}</p>
        </div>
        <p className={css.cardDescription}>{camper.description}</p>
        <Categories camper={camper} />
        <Button>Show more</Button>
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
