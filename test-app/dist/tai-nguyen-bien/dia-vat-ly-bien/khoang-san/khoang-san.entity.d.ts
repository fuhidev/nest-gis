import { DMLoaiKhoangSanEntity } from './danh-muc/dm-loai-khoang-san/dm-loai-khoang-san.entity';
import { DMGiaiDoanEntity } from '../../danh-muc/dm-phan-loai/dm-phan-loai.entity';
import { DMTinhTrangKhaiThacEntity } from '../../danh-muc/dm-tinh-trang-khai-thac/dm-tinh-trang-khai-thac.entity';
import { Polygon } from 'terraformer-arcgis-parser';
export declare class KhoangSanEntity {
    objectId: number;
    ma: string;
    tenKhoangSan: string;
    truLuong: number;
    maLoaiKhoangSan: number;
    loaiKhoangSan: DMLoaiKhoangSanEntity;
    maGiaiDoan: number;
    giaiDoan: DMGiaiDoanEntity;
    maTinhTrangKhaiThac: number;
    tinhTrangKhaiThac: DMTinhTrangKhaiThacEntity;
    viTri: string;
    dienTich: number;
    shape: Polygon;
}
