import { DiaVatBienEntity } from './dia-vat-bien.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class DiaVatBienService extends GISTypeOrmCrudService<DiaVatBienEntity> {
    constructor(repo: any);
}
