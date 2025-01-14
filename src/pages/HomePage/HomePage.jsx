import Button from '../../components/Button/Button.jsx';
import styled from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styled.section}>
      <div className={styled.container}>
        <h1 className={styled.title}>Campers of your dreams</h1>
        <h2 className={styled.subTitle}>
          You can find everything you want in our catalog
        </h2>
        <Button className={styled.btn}>View Now</Button>
      </div>
    </div>
  );
};

export default HomePage;
