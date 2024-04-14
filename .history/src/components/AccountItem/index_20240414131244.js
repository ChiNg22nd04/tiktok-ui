import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/Images';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3892aec25da48b657be7eb3650b734b6.jpeg?lk3s=a5d48078&x-expires=1712815200&x-signature=M8UMKL6RxEI7%2BLuRggaPnxezoCg%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4>
                    <span className={cx('username')}>ellyazabellanchi</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Nguyễn Lan Chi</span>
            </div>
        </div>
    );
}

export default AccountItem;
