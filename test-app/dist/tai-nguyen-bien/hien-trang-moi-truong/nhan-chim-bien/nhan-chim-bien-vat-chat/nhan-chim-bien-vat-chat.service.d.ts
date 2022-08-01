import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { NhanChimBienVatChatEntity } from './nhan-chim-bien-vat-chat.entity';
export declare class NhanChimBienVatChatService extends TypeOrmCrudService<NhanChimBienVatChatEntity> {
    constructor(repo: any);
}
