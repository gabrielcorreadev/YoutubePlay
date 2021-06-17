import { StyleSheet, Platform, Dimensions } from 'react-native';

export const styles =  StyleSheet.create({
    disabled_touch:{
        top: 0,
        width: '100%',
        position: 'absolute',        
    },
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
    thumbnail_video: {
        width: Dimensions.get('window').width, 
        height: '100%', zIndex: 2, 
        position: 'absolute'
    },
    container_video: {
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        zIndex: 99
    },
    show_bg_controls: {
        backgroundColor:'rgba(0, 0, 0, 0.7)'
    },
    no_show_bg_controls: {
        backgroundColor:'transparent'
    },
    flex: {
        flex: 1
    }
});