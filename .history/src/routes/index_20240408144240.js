import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Profile from '~/pages/Profile'


// không đăng nhập vẫn xem đc
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },

]

// bắt buộc phải dăng nhập
export const privateRoutes = [
    
]

