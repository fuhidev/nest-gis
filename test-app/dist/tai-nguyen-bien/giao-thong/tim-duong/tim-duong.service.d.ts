import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TimDuongEntity } from './tim-duong.entity';
export declare class TimDuongService extends TypeOrmCrudService<TimDuongEntity> {
    constructor(repo: any);
}
