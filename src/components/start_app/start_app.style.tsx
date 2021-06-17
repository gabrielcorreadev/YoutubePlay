import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    ContainerSplash: {
        backgroundColor: '#0169b99e'
    },
    logoApp: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ContentStart: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ViewStart: {
        paddingLeft:14,
        paddingRight:14,
        paddingBottom:20,
        marginRight:5,
        marginLeft:5
    },
    title: {
        color: '#fff',
        width: 350,
        fontFamily: 'Gilroy-ExtraBold',
        margin: 5,
        paddingBottom:0,
        padding: 14,
        marginTop: 0,
        marginBottom:0,
        fontSize: 30
    },
    subtitle: {
        color: '#fff',
        fontFamily: 'Gilroy-light',
        width: 350,
        margin: 5,
        padding: 14,
        paddingTop:1,
        marginTop: 2,
        fontSize: 18
    },
});