import { NhanChimBienEntity } from './nhan-chim-bien.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class NhanChimBienService extends GISTypeOrmCrudService<NhanChimBienEntity> {
    constructor(repo: any);
}
