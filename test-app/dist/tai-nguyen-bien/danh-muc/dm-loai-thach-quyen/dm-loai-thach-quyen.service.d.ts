import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMLoaiThachQuyenEntity } from './dm-loai-thach-quyen.entity';
export declare class DMLoaiThachQuyenService extends TypeOrmCrudService<DMLoaiThachQuyenEntity> {
    constructor(repo: any);
}
