import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2000);
    });

    console.log(cx('wrapper'));
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo tiktok" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                       <PopperWrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                kết quả
                            </div>
                       </PopperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>action</div>
            </div>
        </header>
    );
}

export default Header;
