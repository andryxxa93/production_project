import { getQueryParams } from './addQueryParams';

describe('shared/lig/url/addQueryParams', () => {
    test('with one params', () => {
        const params = getQueryParams({
            test: 'value',
        });

        expect(params).toBe('?test=value');
    });
    test('with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            field: 'fieldValue',
        });
        expect(params).toBe('?test=value&field=fieldValue');
    });
    test('with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            field: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
