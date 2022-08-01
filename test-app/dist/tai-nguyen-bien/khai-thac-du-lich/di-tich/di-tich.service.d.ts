import { DiTichEntity } from './di-tich.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class DiTichService extends GISTypeOrmCrudService<DiTichEntity> {
    constructor(repo: any);
}
