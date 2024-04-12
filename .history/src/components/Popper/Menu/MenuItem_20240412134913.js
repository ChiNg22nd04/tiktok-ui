import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const classes

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon } onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
