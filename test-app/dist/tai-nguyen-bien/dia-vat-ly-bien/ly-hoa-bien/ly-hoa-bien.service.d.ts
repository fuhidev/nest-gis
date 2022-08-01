import { LyHoaBienEntity } from './ly-hoa-bien.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class LyHoaBienService extends GISTypeOrmCrudService<LyHoaBienEntity> {
    constructor(repo: any);
}
