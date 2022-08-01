import { BaiTamEntity } from './bai-tam.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class BaiTamService extends GISTypeOrmCrudService<BaiTamEntity> {
    constructor(repo: any);
}
