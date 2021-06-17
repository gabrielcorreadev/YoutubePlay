import React from "react";
import { Image } from 'react-native';
import { Left, Body, Thumbnail, Card } from 'native-base';
import { Text, CardItem} from '../../../components/ui-element';

interface Props {
    channelName: string;
    channelPhoto: string;
    videoTitle: string;
    videoTime: string;
    thumbnail: string;
    onPress?: () => void;
}

export default function CardVideo({ channelName, channelPhoto, videoTitle, videoTime, thumbnail, onPress }: Props) {
    return (<Card transparent noShadow style={{ padding: 15 }}>
        <CardItem cardBody button onPress={onPress}>
            <Image source={{ uri: thumbnail || 'https://i.ytimg.com/vi/Xs8PmRnxa5I/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBeGHyZhY89BNjCtQpFYucnudHpsQ' }} style={{ height: 200, flex: 1, borderRadius: 10 }} />
        </CardItem>
        <CardItem>
            <Left>
                <Thumbnail source={{ uri: channelPhoto || 'https://yt3.ggpht.com/a-/AOh14GjwaKJYE_ZPYQqIuG_qXihZknQv646aZ1-gPQ=s68-c-k-c0x00ffffff-no-rj-mo' }} />
                <Body>
                    <Text numberOfLines={2}>{ videoTitle }</Text>
                    <Text note>{ channelName } - { videoTime }</Text>
                </Body>
            </Left>
        </CardItem>
    </Card>);
}