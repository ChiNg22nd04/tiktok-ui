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
            </div>
            <div className={cx('text')}>Create TikTok effects, get a reward</div>
        </div>
    );
}

export default Footer;
