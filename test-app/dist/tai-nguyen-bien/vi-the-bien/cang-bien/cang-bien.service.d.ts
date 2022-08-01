import { CangBienEntity } from './cang-bien.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class CangBienService extends GISTypeOrmCrudService<CangBienEntity> {
    constructor(repo: any);
}
