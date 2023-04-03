import video from './video.mp4'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
const VideoPage = () => {
return(

    <div className="video-page">
    <video controls autoplay loop height="500" width="1200">
    <source src={video} type="video/mp4"></source>
    </video>
    <Link to="/Home">
        <button>Continue to Home Page</button>
        </Link>
    </div>
)
}

export default VideoPage;