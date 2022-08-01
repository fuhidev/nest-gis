import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMLoaiKhoangSanEntity } from './dm-loai-khoang-san.entity';
export declare class DMLoaiKhoangSanService extends TypeOrmCrudService<DMLoaiKhoangSanEntity> {
    constructor(repo: any);
}
