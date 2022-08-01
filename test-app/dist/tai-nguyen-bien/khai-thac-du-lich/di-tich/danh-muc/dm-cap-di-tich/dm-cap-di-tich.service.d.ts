import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMCapDiTichEntity } from './dm-cap-di-tich.entity';
export declare class DMCapDiTichService extends TypeOrmCrudService<DMCapDiTichEntity> {
    constructor(repo: any);
}
