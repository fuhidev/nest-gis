import { Polygon } from 'terraformer-arcgis-parser';
import { DMPhanLoaiDDSH } from './danh-muc/dm-phan-loai-da-dang-sinh-hoc/dm-phan-loai-da-dang-sinh-hoc.entity';
export declare class DaDangSinhHocThuySanEntity {
    objectId: number;
    ma: string;
    ten: string;
    chuVi: number;
    dienTich: number;
    soLuongThucVat: number;
    soLuongDongVat: number;
    soLuongThucVatQuyHiem: number;
    soLuongDongVatQuyHiem: number;
    maLoai: string;
    loai: DMPhanLoaiDDSH;
    shape: Polygon;
}
