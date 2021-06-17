import React, { Component } from 'react';
import { View, Image, ImageBackground, StatusBar } from 'react-native';
import { Container, Text, Button } from 'native-base';
import styles from './start_app.style';
import { NavigationProp, } from '@react-navigation/native';

interface IProps {
    navigation: NavigationProp<any, any>;
}

interface IState { }

export class StartAppComponent extends Component<IProps, IState> {

    componentDidMount() {
    }

    render() {
        return (

            <Container style={{ backgroundColor: "#4680ff78" }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#9f2349"
                />
                <ImageBackground source={require('../../../assets/img/start_app_bg.jpg')} style={{ width: '100%',  height: '100%' }} >
                    <View style={{backgroundColor:'#0000008c', flex:1}}>
                    <View style={styles.logoApp}>
                    <Image style={{ width: 80, height: 80 }} source={require('../../../assets/img/logo_app-white.png')} />
                    </View>
                    <View style={styles.ContentStart}>   
                    <View style={styles.ViewStart}>
                    <Text style={styles.title}>Cuidar do seu sorriso ficou ainda mais fácil!</Text>
                        <Text style={styles.subtitle}>Agende consultas, realize pagamentos e acumule pontos para trocar benefícios.</Text>   
                        <Button block style={{ elevation:0, marginTop:5, backgroundColor:'#9f2349', marginLeft:30, marginRight:30}} rounded onPress={() => this.props.navigation.navigate('Login')}> 
            <Text uppercase={false}>Entrar</Text>
          </Button>          
          <Button block style={{ elevation:0, marginTop:10, backgroundColor:'#20d1e8', marginLeft:30, marginRight:30}} rounded>
            <Text uppercase={false}>Cadastre-se</Text>
          </Button>   
                        </View>  
                    </View>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}