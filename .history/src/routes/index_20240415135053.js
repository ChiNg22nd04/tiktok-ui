// layouts
import { HeaderOnlyLayout } from '~/components/Layout';
import routesConfig from '~/config/routes';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// không đăng nhập vẫn xem đc
export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: r', component: Upload, layout: HeaderOnlyLayout },
];

// bắt buộc phải dăng nhập
export const privateRoutes = [];
