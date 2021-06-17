import React from "react";
import { Alert, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LibraryTab({ screenName }: any) 
    {
        const handleClickEvent = () => {
            Alert.alert('test')
          }

      const navigation = useNavigation();
        return (<View>
          <Text>
                  Biblioteca
                  </Text>
        </View>);
    }