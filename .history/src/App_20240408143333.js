import { BrowserRouter as Router, RouterProps, Route, Routes } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import {DefaultLayout} from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<p><Page /></p>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
