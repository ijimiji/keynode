// import all interfaces
import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

export default abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly collection;
  constructor(db: any, collectionName: string) {
    this.collection = db.model(collectionName);
  }
  async create(item: T): Promise<boolean> {
    await this.collection.create(item)
    return true;
  }
  async getAll(): Promise<any> {
    return await this.collection.find()
  }
  async update(query: any, set: any): Promise<boolean> {
    return await this.collection.findOneAndUpdate(query, set);
  }
  async deleteAll(): Promise<any> {
    return await this.collection.deleteMany({}, () => {})
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(query: any): Promise<any> {
    return await this.collection.findOne(query);
  }
}
