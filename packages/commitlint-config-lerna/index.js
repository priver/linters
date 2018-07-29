'use strict';

const Project = require('@lerna/project');

async function getPackages(context = {}) {
    const cwd = context.cwd || process.cwd();
    const project = new Project(cwd);
    const packages = await project.getPackages();

    return [
        'packaging',
        'changelog',
        ...packages.map((pkg) => pkg.name.charAt(0) === '@' ? pkg.name.split('/')[1] : pkg.name),
    ];
}

module.exports = {
    rules: {
        'scope-enum': async (ctx) => [2, 'always', await getPackages(ctx)],
    },
};
