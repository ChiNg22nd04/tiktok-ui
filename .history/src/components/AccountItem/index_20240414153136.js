import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/components/Images';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Images className={cx('avatar')} src={data.avatar} alt="Hoa" />
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
