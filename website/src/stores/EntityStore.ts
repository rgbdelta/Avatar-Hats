/* eslint-disable @typescript-eslint/no-explicit-any */
import { action, observable } from 'mobx';

type Identifier = string | number;

export interface EntityStore<T> {
  all(): T[];
  filterBy<k extends keyof T>(key: k, value: T[k]): T[];
  delete(entity: T): void;
  deleteAll(): void;
  add(...entities: T[]): void;
}

export abstract class VectorEntityStore<T> implements EntityStore<T> {
  @observable
  protected entities = new Array<T>();

  deleteAll() {
    this.entities = new Array<T>();
  }

  all() {
    return [...this.entities];
  }

  filterBy<key extends keyof T>(key: key, value: T[key]) {
    return this.all().filter((entity) => entity[key] === value);
  }

  delete(entity: any): void {
    const index = this.entities.indexOf(entity);
    if (index !== -1) {
      this.entities.splice(index, 1);
    } else {
      // TODO: log error
    }
  }

  add(...entities: any[]): void {
    this.entities = this.entities.concat(...entities);
  }
}

export abstract class MappedEntityStore<T> implements EntityStore<T> {
  protected abstract lookupField: Extract<keyof T, Identifier>;

  @observable
  private entities = new Map<any, T>();

  @action
  deleteAll() {
    this.entities = new Map<any, T>();
  }

  get(key: Identifier) {
    return this.entities.get(key);
  }

  all() {
    return Array.from(this.entities.values());
  }

  filterBy<key extends keyof T>(key: key, value: T[key]) {
    return this.all().filter((entity) => entity[key] === value);
  }

  @action
  add(...entities: T[]) {
    entities.forEach((entity) => this.entities.set(entity[this.lookupField], entity));
  }

  @action
  delete(entity: T) {
    this.deleteById(entity[this.lookupField] as any);
  }

  @action
  deleteById(id: Identifier) {
    this.entities.delete(id);
  }
}
