// import shape components
import Circle from './Circle';
import Ellipse from './Ellipse';
import Rectangle from './Rectangle';
import Triangle from './Triangle';


const Toolbar = ( props ) => {

    const { canvas } = props;
    
    return (
        <>
            <div>
                <h1>KL toolbar</h1>
                <div className="toolbar">
                    <Circle canvas={ canvas } />
                    <Ellipse canvas={ canvas } />
                    <Rectangle canvas={ canvas } />
                    <Triangle canvas={ canvas } /> 
                </div>
                <br />
            </div>
        </>
    )
};

export default Toolbar;