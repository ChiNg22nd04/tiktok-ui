// layouts
import { HeaderOnlyLayout } from '~/layouts';
import config from '~/config';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';

// không đăng nhập vẫn xem đc
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
];

// bắt buộc phải dăng nhập
export const privateRoutes = [];
