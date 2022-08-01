import { DMGiaiDoanEntity } from '@tai-nguyen-bien/danh-muc/dm-phan-loai/dm-phan-loai.entity';
import { DMKhaiThacThuySanEntity } from './danh-muc/dm-khai-thac-thuy-san/dm-khai-thac-thuy-san.entity';
import { Polygon } from 'terraformer-arcgis-parser';
export declare class HienTrangKhaiThacThuySanEntity {
    objectId: number;
    ma: string;
    ten: string;
    loai: string;
    maDoiTuong: string;
    doiTuong: DMKhaiThacThuySanEntity;
    maGiaiDoan: number;
    giaiDoan: DMGiaiDoanEntity;
    shape: Polygon;
}
