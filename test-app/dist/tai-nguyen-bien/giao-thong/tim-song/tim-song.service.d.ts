import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TimSongEntity } from './tim-song.entity';
export declare class TimSongService extends TypeOrmCrudService<TimSongEntity> {
    constructor(repo: any);
}
