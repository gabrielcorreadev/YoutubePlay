import React from "react";
import { Text, View } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

export function LoadingListSearch() {
  
  return (<ContentLoader
  backgroundColor={'#333'}
  foregroundColor={'#999'}
  height={50} width={500}>
        <Rect x="70" y="23" rx="5" ry="5" width="300" height="15" />
        <Rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
</ContentLoader>);
}