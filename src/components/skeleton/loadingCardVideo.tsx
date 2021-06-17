import React from "react";
import { Text, View } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

export function LoadingCardVideo() {
  
  return (<ContentLoader
  backgroundColor={'#333'}
  foregroundColor={'#999'}
  height={280} width={500}>
    <Rect x="16" y="17" rx="10" ry="10" width="360" height="200" />
    <Circle cx="35" cy="248" r="20" />
    <Rect x="69" y="229" rx="5" ry="5" width="275" height="15" />
    <Rect x="69" y="253" rx="5" ry="5" width="140" height="15" />
</ContentLoader>);
}