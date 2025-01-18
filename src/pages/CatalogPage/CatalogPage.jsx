import { useSelector } from 'react-redux';
import {
  selectAllCampers,
  selectTotal,
} from '../../redux/campers/selectors.js';
import CampersList from '../../components/CampersList/CampersList.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  const total = useSelector(selectTotal);

  console.log('total: ', total);
  return (
    <div className={css.container}>
      <Filter />
      {campers !== null && (
        <ul className="">
          <CampersList campers={campers} />
        </ul>
      )}
    </div>
  );
};

export default CatalogPage;
