import { BrowserRouter as Router, RouterProps, Route, Routes} from 'react-router-dom'

import Home from '~/pages/Home'
import Following from '~/pages/Following'


function App() {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    <Route path='/' e></Route>
                    <Route path='/following'></Route>

                </Routes>
            </div>
        </Router>
    );
}

export default App;
