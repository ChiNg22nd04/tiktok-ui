import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({ to, href, children, small = false,text = faL, large = false, outline = false, primary = false, onClick, ...passProps }) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        text: text,
        small: small,
        large: large,
    });

    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;
