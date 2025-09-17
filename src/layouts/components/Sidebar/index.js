import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Menu, { MenuItem } from './Menu';
import Search from '~/layouts/components/Search';

import config from '~/config';
import Image from '~/components/Images';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

import {
    HomeIcon,
    FollowingIcon,
    FriendsIcon,
    LIVEIcon,
    ExploreIcon,
    HomeIconActive,
    FollowingIconActive,
    FriendsIconActive,
    LIVEIconActive,
    ExploreIconActive,
    ProfileIcon,
} from '~/components/Icons';
import SuggestAccount from './SuggestAccount';
import Footer from './Footer';
const cx = classNames.bind(styles);

function Sidebar() {
    const [isCompact, setIsCompact] = useState(false);
    const subnavRef = useRef(null);

    const handleFocusSearch = useCallback(() => setIsCompact(true), []);
    const handleBlurSearch = useCallback((e) => {
        // If blur happens to an element inside subnav, keep it open.
        // We'll close only when clicking outside of the subnav panel.
        // The outside click is handled below.
    }, []);

    useEffect(() => {
        const onDocClick = (e) => {
            if (!subnavRef.current) return;
            if (!subnavRef.current.contains(e.target)) {
                setIsCompact(false);
            }
        };
        if (isCompact) document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [isCompact]);

    return (
        <aside className={cx('wrapper', { compact: isCompact })}>
            <div className={cx('top-sidebar')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    {/* Full logo for normal state */}
                    <img
                        className={cx('logoImgLight', { hidden: isCompact })}
                        src={images.logoLight}
                        alt="Logo tiktok light"
                    />
                    <img
                        className={cx('logoImgDark', { hidden: isCompact })}
                        src={images.logoDark}
                        alt="Logo tiktok dark"
                    />
                    {/* T-logo for compact state (theme-aware) */}
                    <img className={cx('logoTLight', { show: isCompact })} src={images.logoTLight} alt="Logo T light" />
                    <img className={cx('logoTDark', { show: isCompact })} src={images.logoTDark} alt="Logo T dark" />
                </Link>
                {isCompact && (
                    <button
                        className={cx('nav-icon', { active: true })}
                        aria-label="Search active"
                        onClick={() => setIsCompact(true)}
                    >
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                    </button>
                )}
                {!isCompact && <Search onFocusInput={handleFocusSearch} onBlurInput={handleBlurSearch} />}
            </div>
            <div className={cx('menu-sidebar')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        active={<HomeIconActive className={cx('icon-flex')} />}
                        icon={<HomeIcon className={cx('icon-flex')} />}
                        suppressActive={isCompact}
                    ></MenuItem>
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        active={<FollowingIconActive className={cx('icon-flex')} />}
                        icon={<FollowingIcon className={cx('icon-flex')} />}
                        suppressActive={isCompact}
                    ></MenuItem>
                    <MenuItem
                        title="Friends"
                        to={config.routes.friends}
                        icon={<FriendsIcon className={cx('icon-flex')} />}
                        active={<FriendsIconActive className={cx('icon-flex')} />}
                        suppressActive={isCompact}
                    ></MenuItem>
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon className={cx('icon-flex')} />}
                        active={<ExploreIconActive className={cx('icon-flex')} />}
                        suppressActive={isCompact}
                    ></MenuItem>
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LIVEIcon className={cx('icon-flex')} />}
                        active={<LIVEIconActive className={cx('icon-flex')} />}
                        suppressActive={isCompact}
                    ></MenuItem>
                    <MenuItem
                        title="Profile"
                        to={config.routes.profile}
                        active={
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3892aec25da48b657be7eb3650b734b6.jpeg?lk3s=a5d48078&x-expires=1714276800&x-signature=YInZaBX09O%2B8uSbS9VtLYZazdRY%3D"
                                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3892aec25da48b657be7eb3650b734b6.jpeg?lk3s=a5d48078&x-expires=1713243600&x-signature=bXehmu8SouXzPNaj8F8DBHYhQgU%3D"
                                alt="Avatat"
                            />
                        }
                        icon={<ProfileIcon className={cx('icon-flex')} />}
                        suppressActive={isCompact}
                    ></MenuItem>
                </Menu>

                <SuggestAccount label="Following accounts" />

                <Footer />
            </div>

            {/* Sub navigation panel when compact */}
            {isCompact && (
                <div ref={subnavRef} className={cx('subnav')}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '20px',
                            marginTop: '2px',
                        }}
                    >
                        <h2 className={cx('subnav-title')}>Search</h2>
                        <button
                            aria-label="Close"
                            onClick={() => setIsCompact(false)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text)',
                                fontSize: '2.5rem',
                                cursor: 'pointer',
                            }}
                        >
                            ×
                        </button>
                    </div>
                    <Search placeholder="Search" autoFocus inline />
                </div>
            )}
        </aside>
    );
}

export default Sidebar;
