import { Field, Form, Formik } from 'formik';
import css from './Filter.module.css';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filtersSlice.js';
import { clearItems } from '../../redux/campers/slice.js';

const Filter = () => {
  const dispatch = useDispatch();

  const initialValues = {
    location: '',
    equipment: [],
    type: '',
  };

  const handleSubmit = values => {
    let arr = [];
    values.location && arr.push(`location=${values.location}`);
    values.type && arr.push(`form=${values.type}`);
    const querySrting = values.equipment.map(value => {
      if (value === 'automatic') {
        return `transmission=${value}`;
      } else if (value === 'petrol') {
        return `engine=${value}`;
      } else {
        return `${value}=true`;
      }
    });
    arr = [...arr, ...querySrting].join('&');
    dispatch(changeFilter(arr));
    dispatch(clearItems([]));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.wrapper}>
          <label className={css.label}>
            Location
            <div className={css.iconWrapper}>
              <span className={css.icon}>
                <Icon id="icon-map" width={16} height={16} />
              </span>
              <Field
                type="text"
                name="location"
                className={css.input}
                placeholder="City"
              />
            </div>
          </label>
          <p className={css.text}>Filters</p>
          <div id="checkbox-group" className={css.subTitle}>
            Vehicle equipment
          </div>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className={css.filtersBlock}
          >
            <label
              className={
                values.equipment.includes('AC') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="AC" />
              <Icon id="icon-ac" width={32} height={32} />
              AC
            </label>
            <label
              className={
                values.equipment.includes('automatic') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="automatic" />
              <Icon id="icon-transmission" width={32} height={32} />
              <p>Automatic</p>
            </label>
            <label
              className={
                values.equipment.includes('kitchen') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="kitchen" />
              <Icon id="icon-kitchen" width={32} height={32} />
              Kitchen
            </label>
            <label
              className={
                values.equipment.includes('TV') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="TV" />
              <Icon id="icon-tv" width={32} height={32} />
              TV
            </label>
            <label
              className={
                values.equipment.includes('bathroom') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="bathroom" />
              <Icon id="icon-bathroom" width={32} height={32} />
              Bathroom
            </label>
            <label
              className={
                values.equipment.includes('petrol') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="petrol" />
              <Icon id="icon-engine" width={32} height={32} />
              Petrol
            </label>
            <label
              className={
                values.equipment.includes('refrigerator')
                  ? css.active
                  : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="refrigerator" />
              <Icon id="icon-refrigerator" width={32} height={32} />
              Refrigerator
            </label>
            <label
              className={
                values.equipment.includes('microwave') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="microwave" />
              <Icon id="icon-microwave" width={32} height={32} />
              Microwave
            </label>
            <label
              className={
                values.equipment.includes('gas') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="gas" />
              <Icon id="icon-gas" width={32} height={32} />
              Gas
            </label>
            <label
              className={
                values.equipment.includes('water') ? css.active : undefined
              }
            >
              <Field type="checkbox" name="equipment" value="water" />
              <Icon id="icon-water" width={32} height={32} />
              Water
            </label>
          </div>
          <div id="radio-group" className={css.subTitle}>
            Vehicle type
          </div>
          <div
            role="group"
            aria-labelledby="radio-group"
            className={css.filtersBlock}
          >
            <label
              className={values.type === 'panelTruck' ? css.active : undefined}
            >
              <Field type="radio" name="type" value="panelTruck" />
              <Icon id="icon-van" width={32} height={32} />
              Van
            </label>
            <label
              className={
                values.type === 'fullyIntegrated' ? css.active : undefined
              }
            >
              <Field type="radio" name="type" value="fullyIntegrated" />
              <Icon id="icon-fully" width={32} height={32} />
              Fully Integrated
            </label>
            <label
              className={values.type === 'alcove' ? css.active : undefined}
            >
              <Field type="radio" name="type" value="alcove" />
              <Icon id="icon-alcove" width={32} height={32} />
              Alcove
            </label>
          </div>
          <Button type="submit" className={css.btn}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
