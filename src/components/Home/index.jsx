import FuncHome from './funchome'
import ClassHome from './classhome'

function FuncComponentsHome(props) {

    return (
        <div className="text-center mt-5 d-flex justify-content-around">
            <FuncHome name={props.name}/>
            <ClassHome name={props.name}/>
        </div>
    );
}
export default FuncComponentsHome;