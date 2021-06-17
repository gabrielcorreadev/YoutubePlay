import styled from 'styled-components/native';
import { FooterTab, Text, Icon, Button } from 'native-base';
import React from 'react';

interface IconTab {
 type?: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
 name: string;
}

interface Props {
  /* This prop is optional, since TypeScript won't know that it's passed by the wrapper */
  title?: string;
  isActive?: boolean;
  icon?: IconTab;
  onPress?: () => void;
}


export default class ItemTab extends React.Component<Props, {}> {
  render() {
    return <Button onPress={this.props.onPress}><IconItem isActive={this.props.isActive} name={this.props.icon?.name} type={this.props.icon?.type} /><TextItem isActive={this.props.isActive}>{this.props.title}</TextItem></Button>
  }
}

const TextItem = styled(Text)<{ isActive?: boolean }>`
  color: ${props => props.isActive ? props.theme.footerTab.activeColor : props.theme.footerTab.color};
`;

const IconItem = styled(Icon)<{ isActive?: boolean }>`
  color: ${props => props.isActive ? props.theme.footerTab.activeColor : props.theme.footerTab.color};
`;
  