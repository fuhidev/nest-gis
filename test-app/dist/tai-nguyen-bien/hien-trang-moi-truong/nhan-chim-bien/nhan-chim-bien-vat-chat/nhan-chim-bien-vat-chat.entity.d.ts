import { NhanChimBienEntity } from '../nhan-chim-bien.entity';
import { DMVatChatNhanChimEntity } from './danh-muc/dm-vat-chat-nhan-chim/dm-vat-chat-nhan-chim.entity';
export declare class NhanChimBienVatChatEntity {
    ma: number;
    maTen: number;
    ten: DMVatChatNhanChimEntity;
    soLuong: number;
    donVi: string;
    moTa: string;
    maNhanChimBien: string;
    nhanChimBien: NhanChimBienEntity;
}
