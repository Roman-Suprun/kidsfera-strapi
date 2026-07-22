const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');

const ts = require('typescript');
const { compileStrapi, createStrapi } = require('@strapi/core');

function loadTsModule(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filePath,
  }).outputText;

  const moduleInstance = new Module(filePath, module);
  moduleInstance.filename = filePath;
  moduleInstance.paths = Module._nodeModulePaths(path.dirname(filePath));
  moduleInstance._compile(compiled, filePath);

  return moduleInstance.exports;
}

async function runSeed() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  process.env.STRAPI_SEED_DEMO_CONTENT = 'true';

  try {
    const indexPath = path.join(process.cwd(), 'src', 'index.ts');
    const strapiApp = loadTsModule(indexPath);
    const lifecycle = strapiApp.default ?? strapiApp;

    if (typeof lifecycle.bootstrap !== 'function') {
      throw new Error('Could not find Strapi bootstrap() in src/index.ts');
    }

    await lifecycle.bootstrap({ strapi });
    console.log('Seed command completed.');
  } finally {
    try {
      await strapi.destroy();
    } catch (error) {
      if (!String(error).includes('aborted')) {
        throw error;
      }
    }
  }
}

runSeed()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
