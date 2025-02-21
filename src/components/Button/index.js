import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    small = false,
    text = false,
    disabled = false,
    large = false,
    outline = false,
    primary = false,
    rounded = false,
    className,
    rightIcon,
    leftIcon,
    onClick,
    ...passProps
}) {
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

    //Remove even listener when btn disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary: primary,
        outline: outline,
        text: text,
        small: small,
        large: large,
        disabled: disabled,
        rounded: rounded,
        [className]: className,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    small: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    rounded: PropTypes.string,
    className: PropTypes.string,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
