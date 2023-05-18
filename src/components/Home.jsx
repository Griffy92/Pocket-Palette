import './Home.css'
import 'animate.css';

function Home() {
    return (
        <>
        <div className="selectContainer">
        <h2 className="animate__animated animate__fadeInDown">Let's get <span class="creative_heading">creative!</span></h2>
        </div>

        <div className="selectContainer">
        <div className="creativeUnderline animate__animated 
        animate__fadeInLeft 
        animate__delay-0.9s"></div>
        </div>

        <div className="selectContainer">
            <div className="paintSelect">
                
                <h3 className="choose_heading">Paint</h3>
               
            </div>


            <div className="pixelSelect">
                <h3 className="choose_heading">Pixel</h3>
            </div>

            <div className="etchSelect">
                <h3 className="choose_heading">Etch</h3>
            </div>
        </div>


        </>
    )
}

export default Home;
