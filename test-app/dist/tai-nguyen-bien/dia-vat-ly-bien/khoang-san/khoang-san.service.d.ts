import { KhoangSanEntity } from './khoang-san.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class KhoangSanService extends GISTypeOrmCrudService<KhoangSanEntity> {
    constructor(repo: any);
}
