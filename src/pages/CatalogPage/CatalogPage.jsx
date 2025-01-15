import { useSelector } from 'react-redux';
import {
  selectAllCampers,
  selectTotal,
} from '../../redux/campers/selectors.js';

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  const total = useSelector(selectTotal);

  console.log('campers: ', campers);
  console.log('total: ', total);
  return <div></div>;
};

export default CatalogPage;
