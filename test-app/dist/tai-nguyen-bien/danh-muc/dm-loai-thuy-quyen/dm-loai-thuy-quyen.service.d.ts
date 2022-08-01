import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMLoaiThuyQuyenEntity } from './dm-loai-thuy-quyen.entity';
export declare class DMLoaiThuyQuyenService extends TypeOrmCrudService<DMLoaiThuyQuyenEntity> {
    constructor(repo: any);
}
