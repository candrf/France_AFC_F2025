import homeImg from "../assets/images/neon-burger-home.png"
import {Card, CardBody} from "reactstrap";


function Splash (){
    return (
        <>
            <Card className="bg-dark text-center mt-5 mx-auto border border-light" style={{width: "fit-content"}}>
                <CardBody>
                    <h1 className="text-light">Welcome!</h1>
                    <img
                        src={homeImg}
                        alt="Neon sign for Andrew's Burgers"
                        height={250}
                        width={300}
                    />
                </CardBody>
            </Card>

        </>
);
}

export default Splash;