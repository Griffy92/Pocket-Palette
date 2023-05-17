import './Home.css'

function Home() {
    return (
        <>
        {/* heading needs work to align */}
        <h2>Let's get <span class="creative_heading">creative!</span></h2>

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
