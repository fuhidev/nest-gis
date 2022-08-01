import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMLoaiDuongTrieuEntity } from './dm-loai-duong-trieu.entity';
export declare class DmLoaiDuongTrieuService extends TypeOrmCrudService<DMLoaiDuongTrieuEntity> {
    constructor(repo: any);
}
