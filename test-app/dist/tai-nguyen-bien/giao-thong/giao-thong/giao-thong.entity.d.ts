import { DMLoaiMatGiaoThongEntity } from './danh-muc/dm-loai-mat-giao-thong/dm-loai-mat-giao-thong.entity';
export declare class GiaoThongEntity {
    objectId: number;
    ma: string;
    ten: string;
    maLoaiMatGiaoThong: string;
    LoaiMatGiaoThong: DMLoaiMatGiaoThongEntity;
}
