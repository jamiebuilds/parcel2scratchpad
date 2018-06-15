// @flow
import Bundler from './Bundler';
import Server from './Server';

// cli.js
async function cli(args: Array<string>, flags: {}) {
  let sourcePath = process.cwd();
  let entries = args.map(moduleSpecifier => {
    return { sourcePath, moduleSpecifier };
  });
  let bundler = new Bundler({});
  let server = new Server({ bundler });

  await Promise.all([
    bundler.bundle(entries),
    server.serve(),
  ]);
}
