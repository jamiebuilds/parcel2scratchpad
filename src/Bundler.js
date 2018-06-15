// @flow
import { type ModuleRequest, type ModuleReference } from './types';
import TaskQueue from './TaskQueue';
import ModuleGraph from './ModuleGraph';
import EventEmitter from 'events';

export type BundlerOpts = {
  // ...
};

export default class Bundler extends EventEmitter {
  resolverQueue: TaskQueue<ModuleRequest>;
  transformerQueue: TaskQueue<ModuleReference>;
  moduleGraph: ModuleGraph;

  constructor(opts: BundlerOpts) {
    super();
    this.resolverQueue = new TaskQueue(this.resolveModuleRequest);
    this.transformerQueue = new TaskQueue(this.transformModuleReference);
  }

  async bundle(entries: Array<ModuleRequest>) {
    // Add all of the entries to the resolver queue.
    this.resolverQueue.addAll(entries);

    // Wait for both resolver queue and transformer queue to be empty.
    while (!(this.resolverQueue.isEmpty && this.transformerQueue.isEmpty)) {
      await Promise.all([
        this.resolverQueue.onIdle(),
        this.transformerQueue.onIdle(),
      ]);
    }

    // ...
  }

  async resolveModuleRequest(moduleRequest: ModuleRequest) {
    // ...
    // this.transformerQueue.add(moduleReference);
    // ...
  }

  async transformModuleReference(moduleReference: ModuleReference) {
    // ...
    // this.moduleGraph.add(...);
    // ...
  }
}
