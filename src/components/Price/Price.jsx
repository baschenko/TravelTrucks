import css from './Price.module.css';

const Price = ({ price }) => {
  return <p className={css.cardPrice}>€{price}.00</p>;
};

export default Price;
