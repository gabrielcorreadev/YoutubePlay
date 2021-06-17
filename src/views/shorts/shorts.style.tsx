import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    view_top_bar:{
        position: "absolute",
        flex: 1,
        flexDirection: 'row',
        zIndex: 100,
        top: 0
    },
    view_navigation:{
        position: "absolute",
        flex: 1,
        flexDirection: 'column',
        zIndex: 100,
        justifyContent: 'center',
        top: '30%',
        right: 0,
        marginLeft: 'auto', 
        paddingRight:10
    },
    item_navigation:{
        paddingBottom:10
    },
    nav_button:{
        backgroundColor: 'rgba(52, 52, 52, 0.4)', 
        width:75,  
        height:60, 
        elevation: 0, 
        borderRadius:10, 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    nav_button_icon:{
        backgroundColor: 'rgba(52, 52, 52, 0.4)',  
        width:75, 
        height:50, 
        elevation: 0, 
        borderRadius:10, 
        flexDirection: 'column', 
        justifyContent: 'center' 
    },
    view_bottom:{
        position: "absolute",
        flex: 1,
        flexDirection: 'row',
        zIndex: 100,
        bottom: 0,
    },
})