import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import RatingAndLocation from '../../components/RatingAndLocation/RatingAndLocation.jsx';
import Price from '../../components/Price/Price.jsx';
import { Suspense, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { getCamperInfo } from '../../redux/campers/operations.js';
import { selectCamper } from '../../redux/campers/selectors.js';

const CampersDetailsPage = () => {
  const { camperId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperInfo(camperId));
  }, [camperId, dispatch]);

  const camper = useSelector(selectCamper);

  return (
    camper && (
      <div>
        <h2>{camper.name}</h2>
        <RatingAndLocation
          rating={camper.rating}
          numberReviews={camper.reviews.length}
          location={camper.location}
        />
        <Price price={camper.price} />
        <ul>
          {camper.gallery.map(picture => (
            <li key={picture.thumb}>
              <img src={picture.thumb} />
            </li>
          ))}
        </ul>
        <p>{camper.description}</p>
        <ul>
          <li>
            <Link to="features">Features</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense
          fallback={
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default CampersDetailsPage;
