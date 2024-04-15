import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchServices';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
//! !!searchValue => convert searchvALUE SANG boolean

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // trì hoãn giá trị nhập của searchValue thay thế = debounce

    // 1. debounce = searchValue = ''
    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);

            setLoading(false);
        };

        fetchAPI();

        // ds fetch
        //encodeURIComponent => mã hóa kí tự hợp lệ cho url
        //     fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //         .then((res) => res.json())
        //         .then((res) => {
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => setLoading(false));

        // sd axios
        // request
        //     .get('users/search', {
        //         params: {
        //             q: debounce,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => setLoading(false));
    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    return (
        <HeadlessTippy
            onClickOutside={handleHideResult}
            interactive
            visible={showResult && searchValue.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => setShowResult(true)}
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search"
                    spellCheck="false"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (!value)
                        setSearchValue(!e.target.value.startsWith('  '));
                    }}
                />
                {!!searchValue && !loading && (
                    <button onClick={handleClear} className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
