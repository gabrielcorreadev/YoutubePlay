import React from "react";
import AppRouting from './app';
import { Root } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
        return (
                <SafeAreaProvider>
                                <AppRouting />
                </SafeAreaProvider>
        );
}

export default App;