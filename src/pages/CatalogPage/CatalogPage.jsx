import { useSelector } from 'react-redux';
import {
  selectAllCampers,
  selectTotal,
} from '../../redux/campers/selectors.js';
import CampersList from '../../components/CampersList/CampersList.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import css from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button.jsx';

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  const total = useSelector(selectTotal);
  const perPage = 4;
  const totalPage = Math.floor(total / perPage);
  const [page, setPage] = useState(1);
  const [campersPagination, setCampersPagination] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < page * perPage; i++) {
      arr.push(campers[i]);
    }
    campers.length !== 0 && setCampersPagination(arr);
  }, [campers, page]);

  const handleClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={css.container}>
      <Filter />
      <div className={css.catalog}>
        {campersPagination.length !== 0 && (
          <ul className={css.listCards}>
            <CampersList campers={campersPagination} />
          </ul>
        )}
        {totalPage !== page && (
          <Button className={css.btn} onClick={handleClick}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
