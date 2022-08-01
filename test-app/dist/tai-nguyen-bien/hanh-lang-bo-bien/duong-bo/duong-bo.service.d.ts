import { DuongBoEntity } from './duong-bo.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class DuongBoService extends GISTypeOrmCrudService<DuongBoEntity> {
    constructor(repo: any);
}
