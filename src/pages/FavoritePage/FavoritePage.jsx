import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/campers/selectors.js';
import CampersList from '../../components/CampersList/CampersList.jsx';
import css from './FavoritePage.module.css';

const FavoritePage = () => {
  const campers = useSelector(selectFavoriteItems);

  return (
    <div className={css.container}>
      <div className={css.catalog}>
        {campers.length !== 0 ? (
          <ul className={css.listCards}>
            <CampersList campers={campers} />
          </ul>
        ) : (
          <p>There is nothing yet. Choose your favorites from the catalog</p>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
