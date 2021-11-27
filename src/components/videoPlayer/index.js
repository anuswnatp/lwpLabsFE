import { Flex } from '@chakra-ui/react';
import React from 'react'
import ReactPlayer from 'react-player/lazy';
import styles from "./styles.module.scss"
import {BsPlayFill} from "react-icons/bs"
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
function VideoPlayer() {
    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return (
        <Flex className={styles.videoPlayer} justifyContent="center" alignItems="center" mb="20px">
            <ReactPlayer
            playIcon={<button><BsPlayFill/></button>}
            light={true}
            playing={true}
            loop={true}
            url='https://www.youtube.com/watch?v=yGnWx9aa1fI&list=PLidSW-NZ2T89C5crbBwX42Crp92iF7Bzi' />
        </Flex>
    )
}

export default VideoPlayer
