'use client'
import dynamic from 'next/dynamic';
const ReactPlayerElement = dynamic(() => import("react-player"), { ssr: false });

import ReactPlayer from "react-player";

import { useRef, useState } from 'react';
import { Pause, Play } from '@/components/images/phosphor';
import cx from "clsx";

import style from "./react-player.module.scss";

import { ReactPlayerProps } from "react-player";
import { useMediaQuery } from 'react-responsive';

const propsInitialState: ReactPlayerProps = {
    playing: true, // false
    controls: true,
    muted: true,
    width: "100%",
    height: "100%"
}

const ReactPlayerMedia = ({ videos }: { videos: Array<string> }) => {
    const [isPlay, setIsPlay] = useState(false);
    const [isStart, setIsStart] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const ref = useRef<ReactPlayer>(null);

    function changeStopPlayState() {
        ref?.current?.showPreview()
    }

    return (
        <div className={cx(style.media_video)}>
            <ReactPlayerElement
                ref={ref}
                {...propsInitialState}
                light={"videos/Formato_2.png"}
                muted={false}
                url={videos}
                playIcon={
                    <button
                    onClick={() => setIsPlay(true)}
                    className={cx(isPlay && style.play_ping_animation)}
                    onAnimationEnd={() => setIsStart(true)}
                    >
                    {isPlay ?
                        <Pause
                        size={cx(isMobile ? 60 : 100)}
                        color="rgb(8, 12, 16, 0.5)"
                        weight="fill"
                        />
                        :
                        <Play
                        size={cx(isMobile ? 60 : 100)}
                        color="rgb(8, 12, 16, 0.5)"
                        weight="fill"
                        />}
                    </button>
                }
                // playing={isStart} // animação não funciona #2
                onEnded={changeStopPlayState} // não funciona #3
                config={{
                    file: { 
                        attributes: { 
                            poster: '/videos/Formato.png'
                        } 
                    } 
                }}
            />
        </div>
    );
}

export default ReactPlayerMedia;