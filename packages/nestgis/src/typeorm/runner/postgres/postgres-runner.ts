import { SpatialMethodEnum } from '../../../crud-typeorm';
import { BaseRunner } from '../base-runner';

export class PostgresRunner extends BaseRunner {
  constructor() {
    super();
  }
  async getGeneratedColumn(params: { column: string }): Promise<boolean> {
    const { column } = params;
    const response = await this.repo.manager
      .createQueryBuilder()
      .from('INFORMATION_SCHEMA.COLUMNS', 'i')
      .select(`is_identity`, 'value')
      .where('i.TABLE_NAME = :tableName and i.COLUMN_NAME = :columnName', {
        tableName: this.repo.metadata.tableName,
        columnName: column,
      })
      .getRawOne();
    return response.value === 'YES';
  }
  spatialQuery(params: {
    method: SpatialMethodEnum;
    alias: string;
    propertyName: string;
    wktGeo: string;
  }): string {
    const { wktGeo, propertyName, alias, method } = params;
    const dbMethod = this.getDBMethod({ method });
    const where = `${dbMethod}(ST_AsText(${alias}${propertyName})::geometry,'${wktGeo}'::geometry) = true`;
    return where;
  }

  getDBMethod(params: { method: SpatialMethodEnum }): string {
    const { method } = params;
    const stMethod =
      method === SpatialMethodEnum.Within
        ? 'ST_Within'
        : method === SpatialMethodEnum.Touches
        ? 'ST_Touches'
        : 'ST_Intersects';
    return stMethod;
  }
}
