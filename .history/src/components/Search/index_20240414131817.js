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
        )}
    >
    );
}

export default Search;