import React from 'react';
import { Input } from 'native-base';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Item from './Item';
import Icon from './Icon';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';

interface Props { 
    placeholder?: string;
    showSoftInputOnFocus?: boolean;
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onSubmitEditing?: () => void;
    onPressSearch?: () => void;
}


const InputSearch = ({ placeholder, onChangeText, onFocus, onBlur, showSoftInputOnFocus, onSubmitEditing, onPressSearch }: Props) => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  return (<Item regular rounded style={{borderColor: themeContext.inputSearch.borderColor, backgroundColor:themeContext.inputSearch.backgroundColor}}>
      <Icon name='arrow-left' type="Feather" onPress={() => navigation.goBack()} style={{color: themeContext.inputSearch.placeHolderColor}} />
    <Input placeholder={placeholder} showSoftInputOnFocus={showSoftInputOnFocus} onKeyPress={keyPress => console.log(keyPress)} onSubmitEditing={onSubmitEditing} autoFocus={true} style={{color: themeContext.inputSearch.color}} onBlur={onBlur} onFocus={onFocus} onChangeText={onChangeText} />
    <Icon name='search' style={{color: themeContext.inputSearch.placeHolderColor}} onPress={onPressSearch} />
  </Item>);
}

export default InputSearch;