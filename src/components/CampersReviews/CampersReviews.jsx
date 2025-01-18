import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCamperInfo } from '../../redux/campers/operations.js';
import { selectCamper } from '../../redux/campers/selectors.js';
import css from './CampersReviews.module.css';
import CardReview from '../CardReview/CardReview.jsx';

const CampersReviews = () => {
  const { camperId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperInfo(camperId));
  }, [camperId, dispatch]);

  const camper = useSelector(selectCamper);
  return (
    camper && (
      <div className={css.wrapper}>
        <ul>
          {camper.reviews.map(review => (
            <li key={review.reviewer_name} className={css.itemReview}>
              <CardReview info={review} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default CampersReviews;
