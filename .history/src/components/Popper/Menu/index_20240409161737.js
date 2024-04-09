import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Menu() {
    return ( 
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('more-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        
                    </PopperWrapper>
                </div>
            )}
        >
        <button className={cx('more-btn')}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
            
        </Tippy>
    );
}

export default Menu;