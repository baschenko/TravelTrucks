import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCamperInfo } from '../../redux/campers/operations.js';
import { selectCamper } from '../../redux/campers/selectors.js';
import Categories from '../Categories/Categories.jsx';
import css from './CampersFeatures.module.css';

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
      <div className={css.wrapper}>
        <Categories camper={camper} />
        <h3 className={css.subTitle}>Vehicle details</h3>
        <ul className={css.listDetails}>
          <li>
            <span> Form</span> {camper.form}
          </li>
          <li>
            <span> Length</span> {camper.length}
          </li>
          <li>
            <span> Width</span> {camper.width}
          </li>
          <li>
            <span> Height</span> {camper.height}
          </li>
          <li>
            <span> Tank</span> {camper.tank}
          </li>
          <li>
            <span> Consumption</span> {camper.consumption}
          </li>
        </ul>
      </div>
    )
  );
};

export default CampersFeatures;
