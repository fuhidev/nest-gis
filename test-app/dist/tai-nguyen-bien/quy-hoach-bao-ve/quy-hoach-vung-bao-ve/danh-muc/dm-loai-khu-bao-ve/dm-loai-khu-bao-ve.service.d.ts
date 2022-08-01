import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DmLoaiKhuBaoVeEntity } from './dm-loai-khu-bao-ve.entity';
export declare class DmLoaiKhuBaoVeService extends TypeOrmCrudService<DmLoaiKhuBaoVeEntity> {
    constructor(repo: any);
}
