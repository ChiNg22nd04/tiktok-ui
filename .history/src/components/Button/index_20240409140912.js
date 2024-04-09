import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onClick}) {
    let Component = 'button'; 
    const classes = cx('wrapper'); 

    return ( 
        <Component classNames={classes}>
            <span></span>
        </Component>
    );
}

export default Button;