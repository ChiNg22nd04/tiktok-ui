import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
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
} from '~/components/Icons';
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
            </Menu>
        </aside>
    );
}

export default Sidebar;
