import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <HeaderItem key={index} data={item} />);
    };

    return (
       
    );
}

export default Header;
