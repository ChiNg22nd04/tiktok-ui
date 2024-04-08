import Header from './Header';

function Hea({ children }) {
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

export default DefaultLayout;
