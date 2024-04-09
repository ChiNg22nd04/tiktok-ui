import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function Button({ to, href, children, onClick }) {
    let Component = 'button';
    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
    } else if (href) {
        props.href = href;
    }

    const classes = cx('wrapper');

    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;
