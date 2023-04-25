import { useCallback, useMemo, useState } from 'react';

interface useHoverBind {
    onMouseLeave: () => void;
    onMouseEnter: () => void;
}

type useHoverResult = [boolean, useHoverBind]

export const useHover = (): useHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseEnter, onMouseLeave]);
};
