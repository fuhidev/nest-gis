import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMLoaiMatGiaoThongEntity } from './dm-loai-mat-giao-thong.entity';
export declare class DMLoaiMatGiaoThongService extends TypeOrmCrudService<DMLoaiMatGiaoThongEntity> {
    constructor(repo: any);
}
