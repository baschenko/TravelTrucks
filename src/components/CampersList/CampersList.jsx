import CamperCard from '../CamperCard/CamperCard.jsx';
import css from './CampersList.module.css';

const CampersList = ({ campers }) => {
  return campers.map(camper => (
    <li key={camper.id} className={css.itemCard}>
      <CamperCard camper={camper} />
    </li>
  ));
};

export default CampersList;
