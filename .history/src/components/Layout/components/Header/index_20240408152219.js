import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>Hea</header>;
}

export default Header;
