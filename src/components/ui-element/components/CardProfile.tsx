import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { Text, View, Icon } from 'native-base';
import { Children, ReactNode, useContext } from 'react';
import {ImageBackground, Image } from 'react-native';
import { ThemeContext } from 'styled-components';
import { styles } from '../styles/cards/cardProfile.style';

interface Props { 
  noShadow?: boolean;
  src_photo?: string;
  src_cover?: string;
  name?: string;
  children?: ReactNode;
}

const cardProfile = ({ noShadow, src_photo, name, src_cover, children }: Props) => {
  const themeContext = useContext(ThemeContext);
  return (<ImageBackground
    style={[styles.headerBackgroundImage, {backgroundColor: themeContext.cardProfile.backgroundColor}]}
    blurRadius={13}
    source={{
      uri: src_cover,
    }}
  >
    <View style={styles.headerColumn}>
      <Image
        style={[styles.userImage, {borderColor: themeContext.cardProfile.photo.borderColor}]}
        source={{
          uri: src_photo,
        }}
      />
      <Text style={[styles.userNameText, {color: themeContext.cardProfile.title.color}]}>{name}</Text>
      <View style={styles.userAddressRow}>
      <View>
          <Icon
            name="map-marker"
            type="MaterialCommunityIcons"
            style={[styles.placeIcon, {color: themeContext.cardProfile.description.color}]}
          />
        </View>
        <View style={styles.userCityRow}>
          <Text style={[styles.userCityText, {color: themeContext.cardProfile.description.color}]}>
          Araraquara
          </Text>
        </View>
      </View>
    </View>
  </ImageBackground>);
}

export default cardProfile;