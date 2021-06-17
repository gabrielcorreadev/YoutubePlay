import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { StatusBar, Container, Spinner } from '../ui-element'
import { styles } from './splash-screen.style';
import { NavigationProp, } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { authGuard } from '../../guards/auth.guard';
import { colors } from '../../../styles/base';
import { environment } from '../../../environments/environment';

interface IProps {
    navigation: NavigationProp<any, any>;
}

interface IState { }

export class SplashScreenComponent extends Component<IProps, IState> {

    componentDidMount() {
        this.validateSession();
    }

    validateSession() {
        setTimeout(async () => {
            const sessionActive = await authGuard.canActivate(environment.storageKeys.activeRoute);
            this.props.navigation.navigate(sessionActive);
        }, 4000);
    }

    render() {
        return (
            <Container>
                <StatusBar />
                    <View style={styles.content_view}>
                        <Animatable.View animation="pulse" iterationCount={5} direction="alternate">
                            <Image style={styles.logo} source={require('../../../assets/img/logo_app-white.png')} />
                        </Animatable.View>
                        <Spinner />
                    </View>
            </Container>
        );
    }
}