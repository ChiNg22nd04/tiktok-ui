import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const defaultFunction = () => {};

function Menu({ children, items = [], hideOnClick = true, onChange = defaultFunction }) {
    // ban đầu render ra list item
    const [history, setHistory] = useState([{ data: items }]);
    const [visible, setVisiable] = useState(false);
    //lấy ptu cuối
    const currernValue = history[history.length - 1];

    const renderItems = () => {
        return currernValue.data?.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            offset={[12, 8]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={currernValue.title}
                                onBack={() => {
                                    setHistory((pre) => {
                                        return pre.slice(0, pre.length - 1);
                                    });
                                }}
                            />
                        )}
                        <div className={cx('menu-scroll')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Menu;
