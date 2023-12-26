import { ReactElement } from 'react';
import { getFeatureFlag } from '..';
import { FeatureFlags } from '@/shared/types/featureFlag';

interface ToggleFeatureProps {
    feature: keyof FeatureFlags;
    on: ReactElement | null;
    off: ReactElement | null;
}

export const ToggleFeatures = (props: ToggleFeatureProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
};
