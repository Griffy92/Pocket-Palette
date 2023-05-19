import './Home.css'
import 'animate.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home( props ) {
    const { session } = props;
    const navigate = useNavigate();

    useEffect ( () => {
        if ( !session ) {
            navigate("/")
        };
    }, [session])
    
    return (
        <>
            {/* Let's get creative heading */}
            <div className="headingContainer">
            <h2 className="creativeHeading animate__animated animate__fadeInDown" >Let's get <span className="creative_heading">creative!</span></h2>
            </div>

            {/* underline for creative! */}
            <div className="selectContainer">
            <div className="creativeUnderline animate__animated 
            animate__fadeInLeft 
            animate__delay-0.9s"></div>
            </div>

            <div className="selectContainer">
                {/* Paint option */}
                <div className="paintSelect">
                    
                    <h3 className="choose_heading">Paint</h3>
                    <Link to="/canvas"></Link>
                </div>

                {/* Pixel option */}
                <div className="pixelSelect">
                    <h3 className="choose_heading">Pixel</h3>
                    <Link to="/pixelcanvas"></Link>
                </div>

                {/* Etch option */}
                <div className="etchSelect">
                    <h3 className="choose_heading">Etch</h3>
                    <Link to="/etch"></Link>
                </div>
            </div>
        </>
    );
};

export default Home;
