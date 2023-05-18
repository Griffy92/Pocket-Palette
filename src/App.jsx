import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import Canvas from './components/Paint/Canvas';
import PixelCanvas from './components/PixelArt/PixelCanvas';
import Works from './components/Works';
import EtchCanvas from './components/EtchSketch/EtchCanvas';
import Home from './components/Home';
import { createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react"

const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"

)

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
                    <Link to="/success">Home</Link>
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
