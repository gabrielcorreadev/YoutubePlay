import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  containerView:{
    backgroundColor:'#fff'
  },
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
      },
      container: {
        flex: 1,
      },
      emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
      },
      headerBackgroundImage: {
        paddingBottom: 10,
        paddingTop: 10,
      },
      headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
          ios: {
            alignItems: 'center',
            elevation: 1,
            marginTop: -1,
          },
          android: {
            alignItems: 'center',
          },
        }),
      },
      placeIcon: {
        fontSize: 15,
      },
      scroll: {
        backgroundColor: '#FFF',
      },
      telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
      },
      userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
      userCityRow: {
        backgroundColor: 'transparent',
      },
      userCityText: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
      },
      userImage: {
        borderRadius: 85,
        borderWidth: 3,
        height: 120,
        marginBottom: 10,
        width: 120,
      },
      userNameText: {
        fontSize: 22,
        fontFamily:'Gilroy-ExtraBold',
        paddingBottom: 6,
        textAlign: 'center',
      },
})