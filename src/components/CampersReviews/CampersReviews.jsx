import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCamperInfo } from '../../redux/campers/operations.js';
import { selectCamper } from '../../redux/campers/selectors.js';

const CampersReviews = () => {
  const { camperId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperInfo(camperId));
  }, [camperId, dispatch]);

  const camper = useSelector(selectCamper);
  return (
    camper && (
      <div>
        <ul>
          {camper.reviews.map(review => (
            <li key={review.reviewer_name}>
              <span>{review.reviewer_name[0]}</span>
              <p>{review.reviewer_name}</p>
              <p>{review.reviewer_rating}</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default CampersReviews;
