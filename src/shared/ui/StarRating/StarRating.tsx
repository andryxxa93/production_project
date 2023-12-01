import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '../../assets/icons/star.svg';

export interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(
    ({ className, selectedStars = 0, onSelect, size }: StarRatingProps) => {
        const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const onHover = (starsCount: number) => () => {
            if (!isSelected) {
                setCurrentStarCount(starsCount);
            }
        };

        const onLeave = () => {
            if (!isSelected) {
                setCurrentStarCount(0);
            }
        };

        const onClick = (starsCount: number) => () => {
            if (!selectedStars) {
                onSelect?.(starsCount);
                setCurrentStarCount(starsCount);
                setIsSelected(true);
            }
        };

        return (
            <div className={classNames(cls.StarRating, {}, [className])}>
                {stars.map((starNumber) => (
                    <Icon
                        className={classNames(
                            cls.starIcon,
                            { [cls.selected]: isSelected },
                            [
                                currentStarCount >= starNumber
                                    ? cls.hovered
                                    : cls.normal,
                            ],
                        )}
                        Svg={StarIcon}
                        key={starNumber}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                        data-testid={`StarRating${starNumber}`}
                        data-selected={currentStarCount >= starNumber}
                    />
                ))}
            </div>
        );
    },
);
