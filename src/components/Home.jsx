import './Home.css'
import 'animate.css';



function Home() {
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
                <a href="/canvas"></a>
            </div>

            {/* Pixel option */}
            <div className="pixelSelect">
                <h3 className="choose_heading">Pixel</h3>
                <a href="/pixelcanvas"></a>
            </div>

            {/* Etch option */}
            <div className="etchSelect">
                <h3 className="choose_heading">Etch</h3>
                <a href="/etch"></a>
            </div>
        </div>
        

        </>
    )
}

export default Home;
