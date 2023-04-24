import React from 'react';
import './App.css';

import {Navbar, Landing, Content} from './containers';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router> 
                <Navbar /><br/>
                <Routes>
                    <Route path='/landing' element={<Landing/>} />
                </Routes>
                <Content />
            </Router>
        </div>
    )
}

export default App;