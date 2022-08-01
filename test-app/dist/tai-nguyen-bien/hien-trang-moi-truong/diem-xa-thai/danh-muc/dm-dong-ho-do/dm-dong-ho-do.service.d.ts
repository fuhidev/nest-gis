import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DMDongHoDoEntity } from './dm-dong-ho-do.entity';
export declare class DMDongHoDoService extends TypeOrmCrudService<DMDongHoDoEntity> {
    constructor(repo: any);
}
