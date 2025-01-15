import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <Icon id="icon-logo" className={css.icon} width="136" height="16" />
      </NavLink>
      <Navigation />
    </header>
  );
}
