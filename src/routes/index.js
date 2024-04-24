// layouts
import { HeaderOnlyLayout } from '~/layouts';
import config from '~/config';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// không đăng nhập vẫn xem đc
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
];

// bắt buộc phải dăng nhập
export const privateRoutes = [];
