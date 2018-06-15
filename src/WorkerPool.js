// @flow
import TaskQueue from './TaskQueue';
import Worker from './Worker';
import { CPU_COUNT } from './constants';
import { type WorkerTask } from './types';

export default class WorkerPool {
  taskQueue: TaskQueue<WorkerTask>;
  workers: Array<Worker>;

  constructor() {
    this.taskQueue = new TaskQueue(this.runWorkerTask);
    this.workers = [];

    for (let i = 0; i < CPU_COUNT; i++ ){
      this.workers.push(new Worker());
    }
  }

  async runWorkerTask(workerTask: WorkerTask) {
    // ...
  }
}
