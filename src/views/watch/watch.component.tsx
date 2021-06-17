import React, { createRef, useCallback, useEffect, useRef } from "react";
import { Alert, DeviceEventEmitter, Dimensions, Image, PixelRatio, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Content, List, ListItem, Spinner, Left, Body, Thumbnail, Badge, View, Button, Right, Switch, Card, TabHeading, Tab, Tabs } from 'native-base';
import { CardProfile, Container, Header, Title, Text, Icon, Separator, CardItem, Footer, FooterTab, ItemTab } from '../../components/ui-element';
import { useNavigation } from '@react-navigation/native';
import { WatchScreenNavigationProp, WatchScreenRouteProp } from "../../models/navigation/type";
import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube';
import PictureInPicture from "../../components/native/PictureInPicture";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";
import * as Animatable from 'react-native-animatable';
import PlayerVideo from "../../components/player";
import { TypePIP } from "../../components/player/types/player.type";

type Props = {
    route: WatchScreenRouteProp;
    navigation: WatchScreenNavigationProp;
};

export default function Watch({ route, navigation }: Props) {

    const [youtubeMeta, setYoutubeMeta] = React.useState<any>(null);
    const [activePicure, setActivePicure] = React.useState<TypePIP>('NO_ACTIVE');
    const { videoId } = route.params;
    PictureInPicture.configureAspectRatio(400, 210)
    PictureInPicture.enableAutoPipSwitch()

    useEffect(() => {
        getYoutubeMetaData();
    }, [])

    const getYoutubeMetaData = () => {
        getYoutubeMeta(videoId).then(meta => {
            setYoutubeMeta(meta);
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <View>
            <PlayerVideo videoId={videoId} onChangePip={state => setActivePicure(state)} />
            </View>
            {activePicure == "NO_ACTIVE" ? <Container>
                <Content>
                    <Card noShadow transparent>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>{youtubeMeta?.title}
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: youtubeMeta?.thumbnail_url }} />
                                <Body>
                                    <Text>{youtubeMeta?.author_name}</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Text note>11:30</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text note>Trecho gravado no show do 4 amigos.

                                    Venha assistir meu STAND UP ao vivo no TEATRO!

ingressos nesse link: https://www.ingressorapido.com.br/ven...</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container> : null}</View>);

}

const styles = StyleSheet.create({

    pipPlayer: {
        height: '100%',
        flex: 1
    },
    player: {
        display: 'flex',
        height: 220,
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#56595b7a',
        zIndex: 110
    },
});