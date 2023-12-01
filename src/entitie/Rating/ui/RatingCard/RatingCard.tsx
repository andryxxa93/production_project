import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useMobile } from '@/shared/lib/hooks/useMobile/useMobile';
import { Drawer } from '@/shared/ui/Drawer';

export interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const isMobile = useMobile();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);

            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount, feedback);
            }
        },
        [feedback, hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack max gap="32">
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
            <HStack max gap="16">
                <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
                    {t('Отправить')}
                </Button>
                <Button
                    data-testid="RatingCard.Close"
                    onClick={cancelHandler}
                    theme={ThemeButton.OUTLINE_RED}
                >
                    {t('Закрыть')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames('', {}, [className])}
        >
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    {modalContent}
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} isLazy onClose={cancelHandler}>
                    {modalContent}
                </Modal>
            )}
        </Card>
    );
});
