import cls from './popups.module.scss';
import { DropdownDirection } from '../../../types/ui';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
    'bottom left': cls.optionsBottomLeft,
};
