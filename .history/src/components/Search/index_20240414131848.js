import HeadlessTippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faAdd,
    faEllipsisVertical,
    faLanguage,
    faKeyboard,
    faQuestionCircle,
    faLightbulb,
    faCoins,
    faUser,
    faBookmark,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';


function Search() {
    return (  
        <HeadlessTippy
        interactive
        visible={searchResult.length > 0}
        render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </PopperWrapper>
            </div>
             <div className={cx('search')}>
             <input placeholder="Search" spellCheck="false" />
             <button className={cx('clear-btn')}>
                 <FontAwesomeIcon icon={faCircleXmark} />
             </button>
             <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

             <button className={cx('search-btn')}>
                 <FontAwesomeIcon icon={faMagnifyingGlass} />
             </button>
         </div>
     </HeadlessTippy>
        )}
    >
    );
}

export default Search;