import { useState } from "react";

const MovieForm = ({onMovieSubmission}) => {
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const [language , setLanguage] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState(null);
    const [trailer, setTrailer] = useState("");
    const [error, setError] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    }

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
      };
    
    const handleTrailerChange = (event) => {
        setTrailer(event.target.value);
      };

    const handleValidation = () => {
        if (!title || !duration || !review || !rating || !language || !genre || !image || !trailer) {
            setError("Please fill in all fields.");
            return false;
        }

        if (language !== language.toUpperCase() || genre !== genre.toUpperCase()) {
            setError("Please enter language and genre in uppercase.");
            return false;
          }

        if (rating <= 1 || rating >= 10) {
            setError("Rating must be a number between 1 and 10.");
            return false;
          }

        setError("");
        return true;
        };

        const handleFormSubmit = (event) => {
            event.preventDefault();
    
            if (handleValidation()) {
            const newMovie = {
                title: title,
                duration:duration,
                review:review,
                rating:rating,
                language:language,
                genre:genre,
                image: image,
                trailer: trailer,
            }
    
            onMovieSubmission(newMovie);
            }
        }

    return (
        <div className="form-container">
            <h3>Add New Movie:</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-element">
                    <label htmlFor="title">Movie's Title:</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="duration">Movie's Duration (mins):</label>
                    <input type="number" id="duration" value={duration} onChange={handleDurationChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="review">Movie's Review:</label>
                    <input type="text" id="review" value={review} onChange={handleReviewChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="rating">Movie's Rating:</label>
                    <input type="number" id="rating" value={rating} onChange={handleRatingChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="language">Movie's Language:</label>
                    <input type="text" id="language" value={language} onChange={handleLanguageChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="genre">Movie's Genre:</label>
                    <input type="text" id="genre" value={genre} onChange={handleGenreChange}/>
                </div>
                <div className="form-element">
                    <label htmlFor="image">Movie's Poster:</label>
                    <input type="file" id="image" onChange={handleImageChange} />
                </div>
                <div className="form-element">
                    <label htmlFor="trailer">Movie's Trailer URL:</label>
                    <input type="text" id="trailer" value={trailer} onChange={handleTrailerChange} />
                </div>
                <input type="submit" value="Add Movie"/>
            </form>
        <p>{error}</p>
        </div>
    )


}

export default MovieForm;