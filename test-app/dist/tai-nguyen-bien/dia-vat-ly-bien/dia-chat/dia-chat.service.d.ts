import { DiaChatEntity } from './dia-chat.entity';
import { GISTypeOrmCrudService } from 'nestjs-gis';
export declare class DiaChatService extends GISTypeOrmCrudService<DiaChatEntity> {
    constructor(repo: any);
}
