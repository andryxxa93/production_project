import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    animatedDelay: number;
    isOpen?: boolean;
}

export const useModal = (props: UseModalProps) => {
    const { isOpen, animatedDelay, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animatedDelay);
        }
    }, [animatedDelay, onClose]);

    const onEscapeClose = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onCloseHandler();
        },
        [onCloseHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscapeClose);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onEscapeClose);
        };
    }, [isOpen, onEscapeClose]);

    return { isClosing, isMounted, onCloseHandler };
};
