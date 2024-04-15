import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css'; // optional
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessagesIcon, Notify } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and helps',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/viewprofile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/favorites',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/getcoin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo tiktok" />
                </Link>

                <Search />
                {/* Search */}

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                text
                                outline
                                className={cx('custom-uploadBtn')}
                                leftIcon={<FontAwesomeIcon icon={faAdd} />}
                            >
                                Upload
                            </Button>

                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn', 'firstChild')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn', 'relative')}>
                                    <Notify />
                                </button>
                            </Tippy>
                            <span className={cx('action-notify')}>47</span>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                outline
                                className={cx('custom-uploadBtn')}
                                leftIcon={<FontAwesomeIcon icon={faAdd} />}
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3892aec25da48b657be7eb3650b734b6.jpeg?lk3s=a5d48078&x-expires=1713070800&x-signature=MWLG%2BYGPF%2FlxrUoKMO8apARUH%2Fo%3D"
                                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3892aec25da48b657be7eb3650b734b6.jpeg?lk3s=a5d48078&x-expires=1713243600&x-signature=bXehmu8SouXzPNaj8F8DBHYhQgU%3D"
                                alt="Avatat"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
