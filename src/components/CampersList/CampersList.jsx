// import { useLocation } from 'react-router-dom';
import CamperCard from '../CamperCard/CamperCard.jsx';

const CampersList = ({ campers }) => {
  //   const location = useLocation();
  return campers.map(camper => (
    <li key={camper.id} className="">
      <CamperCard camper={camper} />
    </li>
  ));
};

export default CampersList;
