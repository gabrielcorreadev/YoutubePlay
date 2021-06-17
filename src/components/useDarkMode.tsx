import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    const setMode = async (mode: string) => {
        try {
            await AsyncStorage.setItem('@theme', mode);
            setTheme(mode)
          } catch (e) {
            console.log(e);
          }
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    const _getStorageValue = async (): Promise<string> => {
        return AsyncStorage.getItem('@theme')
        .then((json: any) => {
            return JSON.parse(json) as string;
        });
    }

    const getThemeStorage = async () => {
        const localTheme = await _getStorageValue();
        localTheme && setTheme(localTheme);
    }
    
    useEffect(() => {
        getThemeStorage();
    }, []);

    return [theme, themeToggler]
};