// @flow
import Bundler from './Bundler';

export type ServerOpts = {
  bundler: Bundler,
};

export default class Server {
  bundler: Bundler;

  constructor(opts: ServerOpts) {
    this.bundler = opts.bundler;
  }

  async serve() {
    // ...
  }
}
