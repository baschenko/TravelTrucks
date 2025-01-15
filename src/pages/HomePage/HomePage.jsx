import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.subTitle}>
          You can find everything you want in our catalog
        </h2>

        <NavLink to={'/catalog'} className={css.btn}>
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
