import Header from './Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                <Sidebar />

                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
