import { NavLink } from 'react-router-dom';
import styled from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styled.section}>
      <div className={styled.container}>
        <h1 className={styled.title}>Campers of your dreams</h1>
        <h2 className={styled.subTitle}>
          You can find everything you want in our catalog
        </h2>

        <NavLink to={'/catalog'} className={styled.btn}>
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
