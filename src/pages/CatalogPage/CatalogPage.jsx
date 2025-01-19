import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCampers,
  selectFilter,
  selectPage,
  selectPerPage,
  selectTotal,
} from '../../redux/campers/selectors.js';
import CampersList from '../../components/CampersList/CampersList.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import css from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button.jsx';
import { fetchCampers } from '../../redux/campers/operations.js';
import { setPage } from '../../redux/campers/slice.js';

const CatalogPage = () => {
  const campers = useSelector(selectAllCampers);
  const total = useSelector(selectTotal);
  const perPage = useSelector(selectPerPage);
  const totalPage = Math.ceil(total / perPage);
  const page = useSelector(selectPage);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    dispatch(fetchCampers({ page, perPage, filter }));
  }, [dispatch, isFirstRender, page, perPage, filter]);

  const handleClick = () => {
    dispatch(setPage());
  };

  return (
    <div className={css.container}>
      <Filter />
      <div className={css.catalog}>
        {campers.length !== 0 ? (
          <ul className={css.listCards}>
            <CampersList campers={campers} />
          </ul>
        ) : (
          <p>Not found, try changing filter</p>
        )}
        {totalPage > page && (
          <Button className={css.btn} onClick={handleClick}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
