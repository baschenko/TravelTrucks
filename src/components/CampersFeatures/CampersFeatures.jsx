import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCamperInfo } from '../../redux/campers/operations.js';
import { selectCamper } from '../../redux/campers/selectors.js';
import Categories from '../Categories/Categories.jsx';

const CampersFeatures = () => {
  const { camperId } = useParams();

  console.log('camperIddddd:', camperId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperInfo(camperId));
  }, [camperId, dispatch]);

  const camper = useSelector(selectCamper);

  return (
    camper && (
      <div>
        <Categories camper={camper} />
        <h3>Vehicle details</h3>
        <ul>
          <li>Form {camper.form}</li>
          <li>Length {camper.length}</li>
          <li>Width {camper.width}</li>
          <li>Height {camper.height}</li>
          <li>Tank {camper.tank}</li>
          <li>Consumption {camper.consumption}</li>
        </ul>
      </div>
    )
  );
};

export default CampersFeatures;
