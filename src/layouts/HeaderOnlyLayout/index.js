import Header from '~/layouts/components/Header';
import PropTypes from 'prop-types';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnlyLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default HeaderOnlyLayout;
