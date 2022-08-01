import { ViTheBienEntity } from './vi-the-bien.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class ViTheBienService extends GISTypeOrmCrudService<ViTheBienEntity> {
    constructor(repo: any);
}
