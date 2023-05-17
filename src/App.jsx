import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import Canvas from './components/Paint/Canvas';
import PixelCanvas from './components/PixelArt/PixelCanvas';
import Works from './components/Works';
import EtchCanvas from './components/EtchSketch/EtchCanvas';
import Home from './components/Home';

function App() {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    setUser(value.data.user);
                }
            });
        }
        getUserData();
    }, []);

	// Updates the state of user
    const _handleSetUser = (userData) => {
        setUser(userData);
    };

    return (
        <BrowserRouter>
            {Object.keys(user).length !== 0 && (
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/canvas">Paint </Link>
                    <a href="/pixelcanvas">Pixel</a>
					<Link to="/etch">Etch</Link>
                    <Link to="/works">My Works</Link>
                </nav>
            )}

            <Routes>
                <Route
                    path="/"
                    element={<Login onSetUser={_handleSetUser} />}
					// Passes the onSetUser function to the Success component
                />
                <Route
                    path="/success"
                    element={<Success onSetUser={_handleSetUser} />}
					// Passes the onSetUser function to the Success component
                />
                <Route path="/home" element={<Home />} />
                <Route path="/canvas" element={<Canvas />} />
                <Route path="/pixelcanvas" element={<PixelCanvas />} />
                <Route path="/etch" element={<EtchCanvas />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
