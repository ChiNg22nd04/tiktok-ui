import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import {Wrapper as PopperWrapper} from '~/components/Popper'

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {

    const renderItem = () => {
        return item.map((item) => {

        })
    }

    return ( 
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItem }
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;