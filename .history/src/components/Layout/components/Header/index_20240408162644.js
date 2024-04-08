import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';


const cx = classNames.bind(styles);

function Header() {
    console.log(cx('wrapper'));
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck='false'/>
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <button className={cx('search-btn')}>
                        {/* Icon Search */}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
