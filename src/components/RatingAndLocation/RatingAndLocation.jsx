import Icon from '../Icon/Icon.jsx';
import css from './RatingAndLocation.module.css';

const RatingAndLocation = ({ rating, numberReviews, location }) => {
  return (
    <div className={css.wrapperReviews}>
      <Icon id="icon-star" width={16} height={16} className={css.star} />
      <p className={css.cardReviews}>
        {rating}({numberReviews} Reviews)
      </p>
      <Icon id="icon-map" width={16} height={16} className={css.map} />
      <p>{location}</p>
    </div>
  );
};

export default RatingAndLocation;
