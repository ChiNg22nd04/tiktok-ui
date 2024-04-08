import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    console.log(cx('wrapper'))
    return <header classname={cx('wrapper')}>Header</header>;
}

export default Header;
