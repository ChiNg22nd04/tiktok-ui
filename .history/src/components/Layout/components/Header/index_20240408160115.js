import classNames from "classnames/bind"
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    console.log(cx('wrapper'))
    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx}></div>
        </div>
    </header>;
}

export default Header;
