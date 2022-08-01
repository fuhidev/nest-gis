import { Polygon } from 'terraformer-arcgis-parser';
import { NhanChimBienVatChatEntity } from './nhan-chim-bien-vat-chat/nhan-chim-bien-vat-chat.entity';
export declare class NhanChimBienEntity {
    objectId: number;
    ma: string;
    ten: string;
    vatChatDuocNhanChims: NhanChimBienVatChatEntity[];
    shape: Polygon;
}
