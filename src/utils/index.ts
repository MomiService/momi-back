import { Hash } from './HashStrategy';

const Singleton = {
  [Hash.name]: new Hash(),
};

export function inject<T>(cst: new () => T): T {
  return Singleton[cst.name] as T;
}

export function getUndefined(): undefined {
  return;
}
