import { SpatialMethodEnum } from '../../../crud-typeorm';
import { BaseRunner } from '../base-runner';

export class MSSQLRunner extends BaseRunner {
  constructor() {
    super();
  }
  async getGeneratedColumn(params: { column: string }): Promise<boolean> {
    const { column } = params;
    const response = await this.repo.manager
      .createQueryBuilder()
      .from('INFORMATION_SCHEMA.COLUMNS', 'i')
      .select(
        `COLUMNPROPERTY(object_id(TABLE_SCHEMA+'.'+TABLE_NAME), COLUMN_NAME, 'IsIdentity')`,
        'value',
      )
      .where('i.TABLE_NAME = :tableName and i.COLUMN_NAME = :columnName', {
        tableName: this.repo.metadata.tableName,
        columnName: column,
      })
      .getRawOne();
    return response.value;
  }
  spatialQuery(params: {
    method: SpatialMethodEnum;
    alias: string;
    propertyName: string;
    wktGeo: string;
  }): string {
    const { wktGeo, propertyName, alias, method } = params;
    const dbMethod = this.getDBMethod({ method });
    const where = `${alias}${propertyName}.${dbMethod}('${wktGeo}') = 1`;
    return where;
  }
  getDBMethod(params: { method: SpatialMethodEnum }): string {
    const { method } = params;
    const stMethod =
      method === SpatialMethodEnum.Within
        ? 'STWithin'
        : method === SpatialMethodEnum.Touches
        ? 'STTouches'
        : 'STIntersects';
    return stMethod;
  }
}
