import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = ['app', 'features', 'widgets', 'pages', 'shared', 'entitie'];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
