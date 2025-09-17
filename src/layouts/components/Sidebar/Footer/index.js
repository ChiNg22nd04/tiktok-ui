import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img
                    className={cx('img-banner')}
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-live-stack/8152caf0c8e8bc67ae0d.png"
                />
                <div className={cx('text')}>Create TikTok effects, get a reward</div>
            </div>

            <h4 className={cx('text-main')}>Company</h4>
            <div className={cx('box-text')}>
                <NavLink className={cx('text-sub')}>About</NavLink>
                <NavLink className={cx('text-sub')}>Newsroom</NavLink>
                <NavLink className={cx('text-sub')}>Contact</NavLink>
                <NavLink className={cx('text-sub')}>Careers</NavLink>
            </div>

            <h4 className={cx('text-main', 'mt-15')}>Program</h4>
            <div className={cx('box-text')}>
                <NavLink className={cx('text-sub')}>TikTok for Good</NavLink>
                <NavLink className={cx('text-sub')}>Advertise</NavLink>
                <NavLink className={cx('text-sub')}>TikTok LIVE Creator Networks</NavLink>
                <NavLink className={cx('text-sub')}>Developers</NavLink>
                <NavLink className={cx('text-sub')}>Transparency</NavLink>
                <NavLink className={cx('text-sub')}>TikTok Rewards</NavLink>
                <NavLink className={cx('text-sub')}>TikTok Embeds</NavLink>
            </div>

            <h4 className={cx('text-main', 'mt-15')}>Terms & Policies</h4>
            <div className={cx('box-text')}>
                <NavLink className={cx('text-sub')}>Help</NavLink>
                <NavLink className={cx('text-sub')}>Safety</NavLink>
                <NavLink className={cx('text-sub')}>Terms</NavLink>
                <NavLink className={cx('text-sub')}>Privacy Policy</NavLink>

                <NavLink className={cx('text-sub')}>Privacy Center</NavLink>
                <NavLink className={cx('text-sub')}>Creator Academy</NavLink>
                <NavLink className={cx('text-sub')}>Community Guidelines </NavLink>
            </div>
        </div>
    );
}

export default Footer;
