import { createSelector } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value,
);
