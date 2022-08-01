import { GiaoThongEntity } from './giao-thong.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class GiaoThongService extends GISTypeOrmCrudService<GiaoThongEntity> {
    constructor(repo: any);
}
