import React, { useState } from 'react';
import { Heading, ColorHeart, Rounded, ThumbsUp, File } from './Styles';
import { faThumbsUp, faHeart, faFire} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tinder = (props) => {
    const [likeCount, setLikeCount] = useState(props.likeCount);

    const style = {
        counts:{
            width: 300 + likeCount * 10,
            height: 300 + likeCount * 10,
        },
    }
    return (
        <Heading>
            <h1>
                Username: {props.username}{" "}
                {likeCount >= 10 ? (
                    <ColorHeart><FontAwesomeIcon icon={faFire} /></ColorHeart> 
                ):(
                    ""
                )}
            </h1>
            <Rounded style={style.counts} src={props.imgUrl} alt="profile"/>
            <p>
                <span
                onClick={(event) => {
                    setLikeCount(likeCount + 1);
                }}
                >
                    <ThumbsUp><FontAwesomeIcon style={File.blue} icon={faThumbsUp} /></ThumbsUp>
                </span>
                {new Array(likeCount).fill(1).map((random, idx) =>{
                    return (
                        <span key={idx} aria-label="heart">
                            <ColorHeart><FontAwesomeIcon style={File.red} icon={faHeart} /></ColorHeart>
                        </span> 
                    );
                })}
            </p>
            <p>{props.bio}</p>
        </Heading>
    )
}

export default Tinder;