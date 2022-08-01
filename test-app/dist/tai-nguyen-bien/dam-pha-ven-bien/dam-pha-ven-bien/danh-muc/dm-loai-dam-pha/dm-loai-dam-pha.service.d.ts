import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMLoaiDamPhaEntity } from './dm-loai-dam-pha.entity';
export declare class DmLoaiDamPhaService extends TypeOrmCrudService<DMLoaiDamPhaEntity> {
    constructor(repo: any);
}
