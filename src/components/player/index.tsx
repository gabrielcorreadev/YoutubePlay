import React, { useCallback, useEffect, useRef, useState, } from "react";
import { DeviceEventEmitter, Dimensions, TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import PictureInPicture from "../../components/native/PictureInPicture";
import YoutubePlayer, { getYoutubeMeta, YoutubeIframeRef } from "react-native-youtube-iframe";
import * as Animatable from 'react-native-animatable';
import { PropsPlayer, TypePIP, TypeResultPIP, TypeState } from "./types/player.type";
import { ContentPlayer } from "./elements/content.player";
import { FooterPlayer } from "./elements/footer.player";
import { HeaderPlayer } from "./elements/header.player";
import { styles } from "./style/player.style";

export default function PlayerVideo({ 
    videoId, 
    prevVideo, 
    onChangePip = _event => {} 
}: PropsPlayer) {

    const [modePip, setModePip] = React.useState<TypePIP>("NO_ACTIVE");
    const [playing, setPlaying] = React.useState(true);
    const [heightVideo, setHeightVideo] = React.useState<number>(220);
    const [visible, setVisible] = React.useState(false);
    const [stopResume, setStopResume] = React.useState(true);
    const [state, setState] = React.useState<TypeState>('unstarted');
    const [youtubeMeta, setYoutubeMeta] = React.useState<any>(null);
    const [elapsed, setElapsed] = React.useState<any>(0);
    const playerRef = useRef<YoutubeIframeRef>(null);
    const timer = useRef<any>(null);

    PictureInPicture.configureAspectRatio(400, 210)
    PictureInPicture.enableAutoPipSwitch()

    const enterPicture = () => {
        PictureInPicture.start()
    }

    useEffect(() => {
        getYoutubeMetaData();
        ytPictureInPictureChanged();
        return () => {
            if(timer != null)
            {
                clearInterval(timer.current);
            }
          };
    }, [])

    const getYoutubeMetaData = () => {
        getYoutubeMeta(videoId).then(meta => {
            setYoutubeMeta(meta);
        });
    }

    const ytPictureInPictureChanged = () => {
        DeviceEventEmitter.addListener('onPictureInPictureModeChanged',
            (event: TypeResultPIP) => {
                setModePip(event.inPipMode);
                autoSizePlayer(event.inPipMode);
                onChangePip(event.inPipMode)
            });
    }

    const onStateChange = useCallback((state: any) => {
        setState(state)
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    const togglePlaying = () => {
        setPlaying(!playing);
        if (playing) {
            setStopResume(false);
        }
        if (!playing && !stopResume) {
            setTimeout(() => {
                setStopResume(true)
            }, 6);
        }
    };

    const toggleVisible = () => {
        const visibleState = !visible;
        setVisible(visibleState);

        if(visibleState)
        {
            timer.current = setTimeout(() => {
                setVisible(false)
            }, 5000);
        }
    }

    const autoSizePlayer = (statePip: TypePIP) => {
        setHeightVideo(statePip == "IS_ACTIVE" ? Dimensions.get('window').height : 220)
    }

    const checkVisibleCover = () => {
        return (state == 'unstarted' || state == 'buffering' || stopResume == false);
    }

    const checkVisibleControls = () => {
        return (modePip == "NO_ACTIVE" && visible);
    }


    const ControlsPlayer = () => {
        if (!(checkVisibleControls())) return null;
        return (<View style={styles.flex}>
            <HeaderPlayer />
            <ContentPlayer togglePlaying={togglePlaying} playing={playing} state={state} />
            <FooterPlayer elapsed={elapsed} />
        </View>);

    }

    return (
        <View style={modePip == "IS_ACTIVE" ? styles.pipPlayer : styles.player}>
            <View style={[checkVisibleControls() ? styles.show_bg_controls : styles.no_show_bg_controls, styles.container_video]}>
                <TouchableOpacity onPress={toggleVisible} style={styles.flex}>
                    <ControlsPlayer />
                </TouchableOpacity>
            </View>
            {checkVisibleCover() ? <Animatable.Image animation="pulse" easing="ease-out"
                style={styles.thumbnail_video}
                source={{ uri: youtubeMeta?.thumbnail_url }}
            /> : null}
            <YoutubePlayer
                ref={playerRef}
                height={heightVideo}
                play={playing}
                videoId={videoId}
                onChangeState={onStateChange}
                initialPlayerParams={{ controls: false, iv_load_policy: 3 }}
            />
            <TouchableOpacity style={[styles.disabled_touch, { height: heightVideo }]}
            />
        </View>);
}
