// layouts
import { HeaderOnlyLayout } from '~/components/Layout'

// pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'


// không đăng nhập vẫn xem đc
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/studio', component: LIVE Creator Hub, layout: HeaderOnlyLayout },


]

// bắt buộc phải dăng nhập
export const privateRoutes = [
    
]

