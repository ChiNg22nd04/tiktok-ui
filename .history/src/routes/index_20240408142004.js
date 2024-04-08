import Home from '~/pages/Home'
import Following from '~/pages/Following'


// không đăng nhập vẫn xem đc
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },

]

// bắt buộc phải dăng nhập
export const privateRoutes = [
    
]

