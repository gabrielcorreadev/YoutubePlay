import { Button, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "../../ui-element";
import { styles } from "../style/elements.stye";
import { PropsPlayerContent } from "../types/player.type";
import { LoadingPlayer } from "./loading.player";

export const ContentPlayer = ({ togglePlaying, playing, state }: PropsPlayerContent) => (
    <View style={styles.content_player} >
            {(state == 'unstarted' || state == 'buffering') ? <LoadingPlayer /> : null}
            {(state == 'playing' || state == 'paused') ? <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={togglePlaying} style={styles.btn_skip_prev}>
                    <Icon name='skip-previous' type="MaterialCommunityIcons" style={[styles.icon_action, styles.icon_skip]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlaying}>
                    <Icon name={playing ? 'pause' : 'play'} type="MaterialCommunityIcons" style={[styles.icon_action, styles.icon_play_pause]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={togglePlaying} style={styles.btn_skip_next}>
                    <Icon name='skip-next' type="MaterialCommunityIcons" style={[styles.icon_action, styles.icon_skip]} />
                </TouchableOpacity>
            </View>
                : null}
    </View>
);