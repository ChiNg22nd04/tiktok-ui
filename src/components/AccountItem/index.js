import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/components/Images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')}>
            <Images className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4>
                    <span className={cx('username')}>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
