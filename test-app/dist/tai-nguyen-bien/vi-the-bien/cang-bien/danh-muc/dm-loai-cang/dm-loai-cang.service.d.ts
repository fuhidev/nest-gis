import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMLoaiCangEntity } from './dm-loai-cang.entity';
export declare class DmLoaiCangService extends TypeOrmCrudService<DMLoaiCangEntity> {
    constructor(repo: any);
}
