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

const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"
)

function App() {
    const [ session, setSession ] = useState(null);

    useEffect( () => {
		supabase.auth.getSession().then( ({ data: { session }}) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange( (_event, session) => {
			setSession(session)
		});
	}, []);

	async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        console.log(error);
        window.location.href = "/"; 
		// Redirect to login after sign-out
    };

    return (
        <BrowserRouter>
            { session ? 
                <nav>
                    <div className='nav-logo'>
                        <Link id="home-nav" to="/home">
                            <img src="Pocket_palette_logo.png" alt="Pocket palette logo" />
                        </Link>
                    </div>
                    <div className='nav-optns'>
                        <Link id="paint-nav" to="/canvas">Paint</Link>
                        <Link id="pixel-nav" to="/pixelcanvas">Pixel</Link>
                        <Link id="etch-nav" to="/etch">Etch A Canvas</Link>
                        <Link id="works-nav" to="/works">My Gallery</Link>
                        <Link id="signout-nav" onClick={signOutUser}>Sign Out</Link> {/* Added sign-out button */}
                    </div>
                </nav>
                :
                ""
            }

            <Routes>
                <Route path="/" element={<Login session={session} />} />
                {/* <Route path="/success" element={<Success />} /> */}
                <Route path="/home" element={<Home session={session} />} />
                <Route path="/canvas" element={<Canvas session={session} />} />
                <Route path="/pixelcanvas" element={<PixelCanvas session={session} />} />
                <Route path="/etch" element={<EtchCanvas session={session} />} />
                <Route path="/works" element={<Works session={session} />} />
            </Routes>
                
        </BrowserRouter>
    );
}

export default App;
