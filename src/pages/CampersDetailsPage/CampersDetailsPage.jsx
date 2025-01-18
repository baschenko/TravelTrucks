import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import RatingAndLocation from '../../components/RatingAndLocation/RatingAndLocation.jsx';
import Price from '../../components/Price/Price.jsx';
import { Suspense, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { getCamperInfo } from '../../redux/campers/operations.js';
import { selectCamper } from '../../redux/campers/selectors.js';
import css from './CampersDetailsPage.module.css';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';

const CampersDetailsPage = () => {
  const { camperId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperInfo(camperId));
  }, [camperId, dispatch]);

  const camper = useSelector(selectCamper);

  return (
    camper && (
      <div className={css.container}>
        <h2 className={css.title}>{camper.name}</h2>
        <RatingAndLocation
          rating={camper.rating}
          numberReviews={camper.reviews.length}
          location={camper.location}
          className={css.rating}
        />
        <Price price={camper.price} />
        <ul className={css.listImg}>
          {camper.gallery.map(picture => (
            <li key={picture.thumb} className={css.itemImg}>
              <img
                src={picture.thumb}
                // width="292"
                // height="312"
                className={css.img}
              />
            </li>
          ))}
        </ul>
        <p className={css.text}>{camper.description}</p>
        <ul className={css.listInfo}>
          <li className={css.itemInfo}>
            <NavLink
              default
              to="features"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Features
            </NavLink>
          </li>
          <li className={css.itemInfo}>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <div className={css.wrapperBooking}>
          <div className={css.wrapperFeatures}>
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
          <BookingForm />
        </div>
      </div>
    )
  );
};

export default CampersDetailsPage;
