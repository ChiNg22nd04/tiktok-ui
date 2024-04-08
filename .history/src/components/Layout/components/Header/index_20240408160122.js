import classNames from "classnames/bind"
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    console.log(cx('wrapper'))
    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="118" height="42" fill="currentColor" alt="TikTok"><use xlink:href="#logo-dark-c4561408"></use></svg>
        </div>
    </header>;
}

export default Header;
