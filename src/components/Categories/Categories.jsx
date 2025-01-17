import CategoriesItem from '../CategoriesItem/CategoriesItem.jsx';
import css from './Categories.module.css';

const Categories = ({ camper }) => {
  return (
    <div className={css.wrapperCategories}>
      <CategoriesItem icon="icon-transmission" text={camper.transmission} />
      <CategoriesItem icon="icon-engine" text={camper.engine} />
      {camper.kitchen && <CategoriesItem icon="icon-kitchen" text="Kitchen" />}
      {camper.AC && <CategoriesItem icon="icon-ac" text="AC" />}
      {camper.TV && <CategoriesItem icon="icon-tv" text="TV" />}
      {camper.radio && <CategoriesItem icon="icon-radio" text="radio" />}
      {camper.refrigerator && (
        <CategoriesItem icon="icon-refrigerator" text="refrigerator" />
      )}
      {camper.microwave && (
        <CategoriesItem icon="icon-microwave" text="microwave" />
      )}
      {camper.gas && <CategoriesItem icon="icon-gas" text="gas" />}
      {camper.water && <CategoriesItem icon="icon-water" text="water" />}
    </div>
  );
};

export default Categories;
