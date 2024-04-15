// layouts
import { HeaderOnlyLayout } from '~/components/Layout';
import routes from '~/config/routes';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// không đăng nhập vẫn xem đc
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
];

// bắt buộc phải dăng nhập
export const privateRoutes = [];
