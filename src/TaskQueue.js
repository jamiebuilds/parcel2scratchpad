// @flow
import PQueue from 'p-queue';

type Task<Item> = (item: Item) => Promise<void>;

export default class TaskQueue<Item> {
  _task: Task<Item>;
  _queue: PQueue;

  constructor(task: Task<Item>) {
    this._task = task;
    this._queue = new PQueue();
  }

  add(item: Item) {
    return this._queue.add(() => this._task(item));
  }

  addAll(items: Array<Item>) {
    return this._queue.addAll(items.map(item => {
      return () => this._task(item);
    }));
  }

  start() {
    this._queue.start();
  }

  onIdle() {
    return this._queue.onIdle();
  }

  get isEmpty() {
    return !(this._queue.size || this._queue.pending);
  }
}
