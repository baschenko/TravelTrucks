import { Field, Form, Formik } from 'formik';
import css from './Filter.module.css';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

const Filter = () => {
  //   const [field] = useField();
  const initialValues = {
    toggle: false,
    location: '',
    equipment: [],
    type: '',
  };

  const handleSubmit = values => {
    console.log('values: ', values);
  };

  //   const iconColor = field.value ? 'gray' : 'main';
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.wrapper}>
          <label className={css.label}>
            Location
            <div className={css.iconWrapper}>
              <span
                className={css.icon}
                // style={{ color: `var(--${iconColor})`}}
              >
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
            <label>
              <Field type="checkbox" name="toggle" value="AC" />
              <Icon id="icon-ac" width={32} height={32} />
              AC
              {`${values.toggle}`}
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Automatic" />
              <Icon id="icon-engine" width={32} height={32} />
              <p>Automatic</p>
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Kitchen" />
              <Icon id="icon-kitchen" width={32} height={32} />
              Kitchen
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="TV" />
              <Icon id="icon-tv" width={32} height={32} />
              TV
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Bathroom" />
              <Icon id="icon-bathroom" width={32} height={32} />
              Bathroom
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Microwave" />
              <Icon id="icon-microwave" width={32} height={32} />
              Petrol
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Refrigerator" />
              <Icon id="icon-refrigerator" width={32} height={32} />
              Refrigerator
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Microwave" />
              <Icon id="icon-microwave" width={32} height={32} />
              Microwave
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Gas" />
              <Icon id="icon-gas" width={32} height={32} />
              Gas
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Water" />
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
            <label>
              <Field type="radio" name="type" value="Van" />
              <Icon id="icon-van" width={32} height={32} />
              Van
            </label>
            <label>
              <Field type="radio" name="type" value="Fully Integrated" />
              <Icon id="icon-fully" width={32} height={32} />
              Fully Integrated
            </label>
            <label>
              <Field type="radio" name="type" value="Alcove" />
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
