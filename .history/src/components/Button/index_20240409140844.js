import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick}) {
    let Component = 'button'; 
    const classes = cx('wrapper'); 

    return ( 
        <Component classNames={cla}></Component>
    );
}

export default Button;