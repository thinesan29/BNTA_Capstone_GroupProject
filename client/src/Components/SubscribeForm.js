import { useEffect, useState } from "react"

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [subscribedUsers, setSubscribedUsers] = useState([]);

    const handleEmailSubmit = (event) => {
        event.preventDefault();
        if(email.includes("@")){
            alert(`You have subscribed with ${email}`);
            setSubscribedUsers([...subscribedUsers, email]);
            setEmail("");
        } else {
            alert(`Please enter a valid email address`);
        }
    }

    // Set the date we are counting down to:
    const countDownDate = new Date("April 6, 2023, 15:00:00").getTime();

    // // Update the count down every 1 second 

    const countDown = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and countdown date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        const timer = document.getElementById("timer");
        if (timer !== undefined && timer !== null) {
            timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the count down is finished, display expired
            if (distance < 0) {
                clearInterval(countDown);
                timer.innerHTML = "EXPIRED";
            }
        }
    }, 1000);

    // added a few handle functions
    const [showTrailer, setShowTrailer] = useState(false);

    const handleWatchTrailer = () => {
        setShowTrailer(!showTrailer);
    };

    const handleAddToMyList = () => {
        alert("Movie added to MyList!");
    };


    return (
        <div className="subscribe">
            <div className="subscribe-form">
                <h2>Subscribe to our Newsletter</h2>
                <form onSubmit={handleEmailSubmit}>
                    <label>Email:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>

            <div className="subscribe-timer">
                <h3>Our new Blockbuster Reborn Original drops in..</h3>
                <div id="timer">Countdown Timer</div>
            </div>

            {/* new classname */}
            <div className="new-movie">
                <img
                    src="https://pbs.twimg.com/media/FoDdNAcacAEqN91.jpg"
                    alt="Leo October 2023"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
                <button onClick={handleWatchTrailer} style={{ display: "block", marginTop: "10px" }}>
                    Watch Trailer
                </button>
                <button onClick={handleAddToMyList}>
                Add to MyList
                </button>
            </div>

            <div className="subscribed-users">
                <h3>Subscribed Users:</h3>
                <ul>
                    {subscribedUsers.map(user => <li key={user}>{user}</li>)}
                </ul>
            </div>
        </div>
    )


};

export default SubscribeForm;