import { Button, View } from "native-base";
import React from "react";
import { PulseIndicator } from 'react-native-indicators';

export const LoadingPlayer = ({ playing }: any) => (
    <PulseIndicator color='white' size={50} />
);