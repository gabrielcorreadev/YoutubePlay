import { StyleSheet } from 'react-native';

export const styles =  StyleSheet.create({
    content_player: {
        flex: 1,
        zIndex: 100,
        alignItems: "center"      
    },
    footer_player: {
        justifyContent: "flex-end",
        flexDirection: "column",
        zIndex: 100,
    },
    header_player: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: 'column',
        zIndex: 100,
    },
    left_navigation: {
        flex: 1, 
        marginLeft: 15, 
        alignSelf: 'center'
    },
    right_navigation: {
        marginLeft: 'auto'
    },
    icon_action: {
        color: '#fff',      
    },
    btn_skip_prev: {
        marginRight: 50, 
        alignSelf: 'center'      
    },
    btn_skip_next: {
        marginLeft: 50, 
        alignSelf: 'center'      
    },
    icon_skip: {
        fontSize: 35  
    },
    icon_play_pause: {
        fontSize: 60 
    }
});