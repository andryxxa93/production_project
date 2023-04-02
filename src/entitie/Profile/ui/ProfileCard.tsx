import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CURRENCY } from 'entitie/Currency/model/types/currency';
import { CurrencySelect } from 'entitie/Currency';
import { COUNTRY, Country } from 'entitie/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../model/types/profile';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    readonly?: boolean;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: CURRENCY) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCountry?: (value: COUNTRY) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    onChangeFirstName,
    onChangeLastName,
    readonly,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.error]: true }, [className])}>
                <Text theme={TextTheme.ERROR} text={error} />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.info}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar imageUrl={data?.avatar} alt={t('avatar')} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    readOnly={readonly}
                    onChange={onChangeFirstName}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    readOnly={readonly}
                    onChange={onChangeLastName}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    readOnly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Возраст')}
                    className={cls.input}
                    readOnly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Аватар')}
                    className={cls.input}
                    readOnly={readonly}
                    onChange={onChangeAvatar}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Никнейм')}
                    className={cls.input}
                    readOnly={readonly}
                    onChange={onChangeUsername}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <Country
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};