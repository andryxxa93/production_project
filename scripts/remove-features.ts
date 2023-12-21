import { Node, Project, SyntaxKind } from 'ts-morph';

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removeFeatureName) {
    throw new Error('Укажите название feature флага');
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on или off)');
}

const project = new Project({});

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );
            if (!objectOptions) return;

            const onFunctionProp = objectOptions?.getProperty('on');
            const offFunctionProp = objectOptions?.getProperty('off');
            const nameFunctionProp = objectOptions?.getProperty('name');

            const onFunction = onFunctionProp?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProp?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const featureName = nameFunctionProp
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removeFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody()?.getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody()?.getText() ?? '');
            }
        }
    });
});

project.save();
