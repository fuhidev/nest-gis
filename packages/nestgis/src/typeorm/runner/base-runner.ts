import { Repository } from 'typeorm';
import { SpatialMethodEnum } from '../../crud-typeorm';

export abstract class BaseRunner {
  constructor(protected repo: Repository<any>){}
  abstract spatialQuery(params: {
    alias: string;
    propertyName: string;
    wktGeo: string;
  }): string;

  abstract getGeneratedColumn(params: { column: string }): Promise<boolean>;
  abstract getDBMethod(params: { method: SpatialMethodEnum }): string;
}
