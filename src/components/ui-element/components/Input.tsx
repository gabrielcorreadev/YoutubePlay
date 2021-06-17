import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { Header, Input, Text } from 'native-base';
import { Children, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Item from './Item';
import Icon from './Icon';
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';

export type ReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';
export type ReturnKeyTypeAndroid = 'none' | 'previous';
export type ReturnKeyTypeIOS = 'default' | 'google' | 'join' | 'route' | 'yahoo' | 'emergency-call';
export type ReturnKeyTypeOptions = ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS;

interface Props { 
    placeholder?: string;
    secureTextEntry?: boolean;
    blurOnSubmit?: boolean;
    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?:(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    onChangeText?:(text: string) => void;
}


const InputSearch = ({ placeholder, onChangeText, returnKeyType, blurOnSubmit, onSubmitEditing, secureTextEntry }: Props) => {
  const themeContext = useContext(ThemeContext);
  return (<Input placeholder={placeholder} blurOnSubmit={blurOnSubmit} returnKeyType={returnKeyType} secureTextEntry={secureTextEntry} onSubmitEditing={onSubmitEditing} style={{color: themeContext.input.color}} onChangeText={onChangeText} />);
}

export default InputSearch;