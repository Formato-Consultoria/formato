import { useState } from "react";

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { ReactPlayerProps } from "react-player";

const propsInitialState: ReactPlayerProps = {
    playing: true,
    controls: true,
    muted: true,
    width: "100%",
    height: "100%"
}

const ReactPlayerMedia: React.FC<ReactPlayerProps> = (props, { playerref }) => {    
    return (
        <ReactPlayer
            ref={playerref}
            {...propsInitialState}
            {...props}
        />
    );
}

export default ReactPlayerMedia;