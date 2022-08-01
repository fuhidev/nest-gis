import { ThuyLoiEntity } from './thuy-loi.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class ThuyLoiService extends GISTypeOrmCrudService<ThuyLoiEntity> {
    constructor(repo: any);
}
