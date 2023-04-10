import { useEffect } from 'react';
import { fetchArticleById } from 'entitie/Article/model/services/fetchArticleById/fetchArticleById';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ === 'storybook') {
            return;
        }
        callback();
        // eslint-disable-next-line
    }, []);
}
