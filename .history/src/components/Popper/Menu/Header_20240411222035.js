import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    

    return (
       <header className={cx('header')}>
        <button className={cx('back-btn')}>
            <FontAwesomeIcon icon={faBack}/>
        </button>
       </header>
    );
}

export default Header;
