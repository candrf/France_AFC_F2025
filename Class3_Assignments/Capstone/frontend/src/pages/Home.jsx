import logo from '../assets/Bright Forge Logo.png'
import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";


function Home(){
    const navigate = useNavigate();

    return(
        <>
            <div className="container text-center mt-3">
                <div className={"row"}>
                    <h1>Welcome!</h1>
                </div>
                <div className={"row"}>
                    <p>Thank you for visiting Bright Forge Widgets. Click See Widgets or Inventory to explore our products.</p>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={logo} alt="bright forge logo" className="logo" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <Button
                            className={"myButton"}
                            onClick={()=> navigate("/inventory")}>See Widgets</Button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home;