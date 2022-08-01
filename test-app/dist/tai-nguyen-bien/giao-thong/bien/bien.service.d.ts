import { BienEntity } from './bien.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class BienService extends GISTypeOrmCrudService<BienEntity> {
    constructor(repo: any);
}
