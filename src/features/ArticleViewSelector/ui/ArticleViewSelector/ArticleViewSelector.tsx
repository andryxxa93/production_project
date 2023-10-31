import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import BlockIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleViewMode } from '@/entitie/Article';

export interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleViewMode;
    onViewClick: (view: ArticleViewMode) => void;
}

const viewTypes = [
    {
        view: ArticleViewMode.BLOCK,
        icon: BlockIcon,
    },
    {
        view: ArticleViewMode.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClickHandler = (newView: ArticleViewMode) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    key={index}
                    className={classNames('', { [cls.selected]: viewType.view === view })}
                    theme={ThemeButton.CLEAR}
                    onClick={onClickHandler(viewType.view)}
                >
                    <Icon Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    );
});
