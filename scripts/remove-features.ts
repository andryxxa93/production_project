import { Node, Project, SyntaxKind, ts, JsxAttribute } from 'ts-morph';

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

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
            child.getText() === toggleFunctionName
        ) {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
}

function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

    return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node<ts.Node>) => {
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
};

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) =>
    jsxAttributes.find((node) => node.getName() === name);

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

const replaceComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');

    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (featureName !== removeFeatureName) return;

    const offValue = getReplacedComponent(offAttribute);
    const onValue = getReplacedComponent(onAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node);
        }

        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceComponent(node);
        }
    });
});

project.save();
