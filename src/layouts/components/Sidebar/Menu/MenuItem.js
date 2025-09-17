import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, active, suppressActive = false }) {
    const getClassName = (nav) => cx('menu-item', { active: !suppressActive && nav.isActive });
    return (
        <NavLink to={to} className={getClassName}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active')}>{active}</span>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    active: PropTypes.node,
    suppressActive: PropTypes.bool,
};

export default MenuItem;
