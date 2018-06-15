// @flow
export type FilePath = string;
export type ModuleSpecifier = string;
export type Glob = string;

export type JSONValue =
  | null
  | boolean
  | number
  | string
  | Array<JSONValue>
  | JSONObject;

export type JSONObject = {
  [key: string]: JSONValue,
};

export type ModuleRequest = {
  sourcePath: FilePath,
  moduleSpecifier: ModuleSpecifier,
};

export type ModuleReference = string;

export type ModuleRelationship = {
  reference: ModuleReference,
  async: boolean,
};

export type WorkerTaskKinds =
  | 'resolve'
  | 'transform'
  | 'package'
  | 'optimize'
  | 'write';

export type WorkerTask = {
  kind: WorkerTaskKinds,
  data: JSONObject,
};
