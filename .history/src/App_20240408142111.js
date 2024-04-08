import { BrowserRouter as Router, RouterProps, Route, Routes} from 'react-router-dom'

import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                   {
                    publicRoutes.map(router=> {}
                        return <Route/>
                    ))
                   }

                </Routes>
            </div>
        </Router>
    );
}

export default App;
