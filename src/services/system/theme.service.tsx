import { accountService } from './account.service';
import { defaultTheme } from '../../../themes/default.theme';
import { darkTheme } from '../../../themes/dark.theme';

export const getCurrentTheme = async () => {

    const activeDarkMode = await accountService.getActiveDarkMode();

    if(activeDarkMode)
    {
        return darkTheme
    }
    else{
        return defaultTheme;
    }
}