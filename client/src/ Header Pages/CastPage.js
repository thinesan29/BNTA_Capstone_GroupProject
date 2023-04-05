import CastContainer from "../Containers/CastContainer";
import { Link } from "react-router-dom";


const CastPage = () => {
return(
    <>
    <h1>Cast Database</h1>
        <Link to="/Admin/Manage">
        <button>Go Back</button>
        </Link>
    <CastContainer/>
    </>
)
}

export default CastPage;