import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import Image from '~/components/Images';

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
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    active={<HomeIconActive className={cx('icon-flex')} />}
                    icon={<HomeIcon className={cx('icon-flex')} />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    active={<FollowingIconActive className={cx('icon-flex')} />}
                    icon={<FollowingIcon className={cx('icon-flex')} />}
                ></MenuItem>
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<FriendsIcon className={cx('icon-flex')} />}
                    active={<FriendsIconActive className={cx('icon-flex')} />}
                ></MenuItem>
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon className={cx('icon-flex')} />}
                    active={<ExploreIconActive className={cx('icon-flex')} />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LIVEIcon className={cx('icon-flex')} />}
                    active={<LIVEIconActive className={cx('icon-flex')} />}
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
                ></MenuItem>
            </Menu>

            <SuggestAccount label="Following accounts" />

            <Footer/>
        </aside>
    );
}

export default Sidebar;
