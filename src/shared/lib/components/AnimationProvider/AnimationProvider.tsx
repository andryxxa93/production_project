import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded?: boolean;
}

const getAsyncAnimationsModule = () =>
    Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

const AnimationContext = createContext<AnimationContextPayload>({});

export const useAnimationsLibs = () =>
    useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationsModule().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    });

    const value = useMemo<AnimationContextPayload>(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
