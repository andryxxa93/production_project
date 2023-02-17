import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });

    test('with additional classes and mods', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2 hovered scrollable');
    });

    test('with one mod equal false', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2 hovered');
    });

    test('with one mod equal undefined', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        ))
            .toBe('someClass class1 class2 hovered');
    });
});
