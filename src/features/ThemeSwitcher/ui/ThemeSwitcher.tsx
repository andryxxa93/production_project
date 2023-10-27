import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightTheme from '@/shared/assets/icons/theme-light.svg';
import DarkTheme from '@/shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
});
