import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";

function Error(){
    const navigate = useNavigate();

    return(
        <>
            <div className="container text-center mt-3">
                <div className={"row"}>
                    <h1>Oops!</h1>
                </div>
                <div className={"row"}>
                    <p>Looks like something went wrong. Please click the button below to go to the home page.</p>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <Button
                            className={"myButton"}
                            onClick={()=> navigate("/")}>Return Home</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Error;