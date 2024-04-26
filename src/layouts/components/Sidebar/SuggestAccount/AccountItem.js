import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestAccount.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function AccountItem({ notify }) {
    return (
        <div className={cx('account-item')}>
            <div className={cx('item-img')}>
                <img
                    alt="avatar-user"
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f06c226bdb423c5f7d8ffe311b8de93c.webp?lk3s=a5d48078&x-expires=1714284000&x-signature=2XhvrFMIqibVbs%2BDcb1NYbJBBlQ%3D"
                />
            </div>

            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <p className={cx('nickname-item')}>lamthaocosmetics</p>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('username')}>Lam Thao Cosmetics</p>
            </div>

            <div className={cx('notify')}>{notify}</div>
        </div>
    );
}

AccountItem.propTypes = {
    notify: PropTypes.string,
};

export default AccountItem;
