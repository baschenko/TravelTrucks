import { useSelector } from 'react-redux';
import {
  selectAllCampers,
  selectTotal,
} from '../../redux/campers/selectors.js';
import CampersList from '../../components/CampersList/CampersList.jsx';

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  const total = useSelector(selectTotal);

  console.log('campers: ', campers);
  console.log('total: ', total);
  return (
    <div>
      {campers !== null && (
        <ul className="">
          <CampersList campers={campers} />
        </ul>
      )}
    </div>
  );
};

export default CatalogPage;
