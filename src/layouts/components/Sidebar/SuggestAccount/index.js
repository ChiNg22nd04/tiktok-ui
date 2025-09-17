import styles from './SuggestAccount.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const currentUser = true;

function SuggestAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {currentUser ? (
                <>
                    <AccountItem notify={41} />
                    <AccountItem notify={38} />
                    <AccountItem notify={123} />
                    <AccountItem notify={20} />

                    <p className={cx('btn-more')}>
                        <FontAwesomeIcon className={cx('more-icon')} icon={faChevronDown} />
                        <span className={cx('more-text')}>See all</span>
                    </p>
                </>
            ) : (
                <Button className={cx('btn-sidebar')} outline large>
                    Log in
                </Button>
            )}
        </div>
    );
}

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;
