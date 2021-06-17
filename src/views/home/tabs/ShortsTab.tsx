import React from "react";
import { Alert, Image } from 'react-native';
import { Content, List, ListItem, Spinner, Left, Body, Thumbnail, Badge, View, Button, Right, Switch, Card } from 'native-base';
import { CardProfile, Container, Header, Title, Text, Icon, Separator, CardItem, Footer, FooterTab, ItemTab } from '../../../components/ui-element';
import { useNavigation } from '@react-navigation/native';
import ShortsView from "../../shorts/shorts.component";


export default function ShortsTab({ screenName }: any) 
    {
        const handleClickEvent = () => {
            Alert.alert('test')
          }

      const navigation = useNavigation();
        return (<View>
            <ShortsView videoCode="lWWUjZD4ArQ" />
        </View>);
    }