import { Link } from 'react-router-dom';
import imagesDefault from '../../images/default.png';
import Categories from '../Categories/Categories.jsx';
import Icon from '../Icon/Icon.jsx';
import css from './CamperCard.module.css';
import RatingAndLocation from '../RatingAndLocation/RatingAndLocation.jsx';
import Price from '../Price/Price.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/campers/slice.js';
import { selectFavoriteItems } from '../../redux/campers/selectors.js';
import clsx from 'clsx';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteItems);

  const isFavorite = favoriteItems.find(favorite => favorite.id === camper.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite(camper.id));
      return;
    }
    dispatch(addToFavorite(camper));
  };

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
          height="320"
        />
      </div>
      <div className={css.wrapperDescription}>
        <div className={css.cardHeader}>
          <h2 className={css.cardTitle}>{camper.name}</h2>
          <div className={css.wrapperPrice}>
            <Price price={camper.price} />
            <button
              aria-label="Heart button"
              className={clsx(css.cardHeart, isFavorite && css.favorite)}
              onClick={handleClick}
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

        <RatingAndLocation
          id={camper.id}
          rating={camper.rating}
          numberReviews={camper.reviews.length}
          location={camper.location}
          className=""
        />

        <p className={css.cardDescription}>{camper.description}</p>
        <Categories camper={camper} />
        <Link className={css.link} to={`/catalog/${camper.id}/features`}>
          Show more
        </Link>
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
