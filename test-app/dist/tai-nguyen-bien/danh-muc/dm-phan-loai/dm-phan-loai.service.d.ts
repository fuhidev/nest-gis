import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMGiaiDoanEntity } from './dm-phan-loai.entity';
export declare class DMPhanLoaiService extends TypeOrmCrudService<DMGiaiDoanEntity> {
    constructor(repo: any);
}
