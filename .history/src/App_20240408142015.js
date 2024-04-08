import { BrowserRouter as Router, RouterProps, Route, Routes} from 'react-router-dom'

import {pu}

function App() {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/following' element={<Following/>}></Route>

                </Routes>
            </div>
        </Router>
    );
}

export default App;
