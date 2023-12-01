import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollSaverByPath, scrollActions } from '@/features/ScrollSaver';
import { useInitialEffect } from '@/shared/lib/useInitialEffect/useInitialEffect';
import { StateScheme } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/test';

export interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo(
    ({ className, children, onScrollEnd, ...rest }: PageProps) => {
        const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
        const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
        const dispatch = useAppDispatch();
        const { pathname } = useLocation();
        const scrollPosition = useSelector((state: StateScheme) =>
            getScrollSaverByPath(state, pathname),
        );

        useInfiniteScroll({
            wrapperRef,
            triggerRef,
            callback: onScrollEnd,
        });

        useInitialEffect(() => {
            wrapperRef.current.scrollTop = scrollPosition;
        });

        const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
            dispatch(
                scrollActions.setScrollPosition({
                    position: e.currentTarget.scrollTop,
                    path: pathname,
                }),
            );
        }, 500);

        return (
            <main
                data-testid={rest['data-testid'] ?? 'Page'}
                onScroll={onScroll}
                ref={wrapperRef}
                className={classNames(cls.Page, {}, [className])}
            >
                {children}
                {onScrollEnd && (
                    <div className={cls.trigger} ref={triggerRef} />
                )}
            </main>
        );
    },
);
