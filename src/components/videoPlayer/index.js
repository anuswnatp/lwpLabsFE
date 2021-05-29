import { Flex } from '@chakra-ui/react';
import React from 'react'
import ReactPlayer from 'react-player/lazy';
import styles from "./styles.module.scss"
import {BsPlayFill} from "react-icons/bs"
const opts = {
    height: '390',
    width: '640'
};
function VideoPlayer() {
    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    return (
        <Flex className={styles.videoPlayer} justifyContent="center" alignItems="center" p={["10px","0"]} mb="20px">
            <ReactPlayer
            playIcon={<button><BsPlayFill size="3em" color="rgb(66 66 66)"
            style={{border: "2px solid #565656",
                borderRadius: "50%"}}/></button>}
            light={true}
            controls={true}
            playing={true}
            loop={true}
            config={{
                youtube: {
                  playerVars: {
                    start: 0
                  }
                }
              }}
            url='https://www.youtube.com/watch?v=1mo0UuAP3WI&t=0s' />
        </Flex>
    )
}

export default VideoPlayer
