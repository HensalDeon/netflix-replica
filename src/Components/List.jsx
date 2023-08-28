import { useEffect, useState } from "react";
import { fetchData, fetchVideoData } from "../api/api";
import Youtube from "react-youtube";
import PropTypes from "prop-types";

const List = ({ title, param }) => {
    const [list, setList] = useState([]);
    const [urlid, seturlid] = useState("");

    useEffect(() => {
        fetchData(param).then((res) => setList(res.data.results));
    }, [param]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id);
        fetchVideoData(id).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                seturlid(response.data.results[0]);
            } else {
                console.log("trailer not available");
            }
        });
    };
    console.log(list);

    const CloseYoutube = () => {
        seturlid(null);
    };

    return (
        <div className="list">
            <div className="row">
                <h2 className="text-white title">{title}</h2>
                <div className="col">
                    <div className="row__posters">
                        {list.map((item) => (
                            <img
                                key={item.id}
                                onClick={() => handleMovie(item.id)}
                                className="row__poster row__posterLarge"
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                alt={item.title}
                            />
                        ))}
                    </div>
                    <div className="closeBtnContainer">
                        {urlid && (
                            <button className="closebutton" onClick={CloseYoutube}>
                                Close
                            </button>
                        )}
                    </div>
                    {urlid && <Youtube opts={opts} videoId={urlid.key} />}
                </div>
            </div>
        </div>
    );
};

List.propTypes = {
    title: PropTypes.string.isRequired,
    param: PropTypes.string.isRequired,
};

export default List;
