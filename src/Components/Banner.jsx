import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { imageUrl } from "../api/api";
const Banner = () => {
    const [movie, setMovie] = useState();
    useEffect(() => {
        fetchData("trending").then((res) => {
            const index = Math.floor(Math.random() * res.data.results.length);
            setMovie(res.data.results[index]);
        });
    }, []);
    return (
        <div className="banner" style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie ? movie.title : ""}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </div>
    );
};

export default Banner;
