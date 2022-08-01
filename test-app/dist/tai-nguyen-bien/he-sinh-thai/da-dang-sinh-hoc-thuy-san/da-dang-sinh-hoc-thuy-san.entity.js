"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaDangSinhHocThuySanEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_phan_loai_da_dang_sinh_hoc_entity_1 = require("./danh-muc/dm-phan-loai-da-dang-sinh-hoc/dm-phan-loai-da-dang-sinh-hoc.entity");
let DaDangSinhHocThuySanEntity = class DaDangSinhHocThuySanEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DaDangSinhHocThuySanEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DaDangSinhHocThuySanEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], DaDangSinhHocThuySanEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ChuVi',
        nullable: true,
        alias: 'Chu vi',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], DaDangSinhHocThuySanEntity.prototype, "chuVi", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DienTich',
        nullable: true,
        alias: 'Diện tích',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], DaDangSinhHocThuySanEntity.prototype, "dienTich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuongThucVat',
        nullable: true,
        alias: 'Số lượng thực vật',
        type: 'int',
    }),
    __metadata("design:type", Number)
], DaDangSinhHocThuySanEntity.prototype, "soLuongThucVat", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuongDongVat',
        nullable: true,
        alias: 'Số lượng động vật',
        type: 'int',
    }),
    __metadata("design:type", Number)
], DaDangSinhHocThuySanEntity.prototype, "soLuongDongVat", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuongThucVatQuyHiem',
        nullable: true,
        alias: 'Số lượng thực vật quý hiếm',
        type: 'int',
    }),
    __metadata("design:type", Number)
], DaDangSinhHocThuySanEntity.prototype, "soLuongThucVatQuyHiem", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuongDongVatQuyHiem',
        nullable: true,
        alias: 'Số lượng động vật quý hiếm',
        type: 'int',
    }),
    __metadata("design:type", Number)
], DaDangSinhHocThuySanEntity.prototype, "soLuongDongVatQuyHiem", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'PhanLoaiDaDangSinhHoc',
        nullable: true,
        alias: 'Phân loại đa dang sinh học',
    }),
    __metadata("design:type", String)
], DaDangSinhHocThuySanEntity.prototype, "maLoai", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'PhanLoaiDaDangSinhHoc' }),
    (0, typeorm_1.ManyToOne)(() => dm_phan_loai_da_dang_sinh_hoc_entity_1.DMPhanLoaiDDSH, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_phan_loai_da_dang_sinh_hoc_entity_1.DMPhanLoaiDDSH)
], DaDangSinhHocThuySanEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], DaDangSinhHocThuySanEntity.prototype, "shape", void 0);
DaDangSinhHocThuySanEntity = __decorate([
    (0, typeorm_1.Entity)('DADANGSINHHOCTHUYSAN', { synchronize: false })
], DaDangSinhHocThuySanEntity);
exports.DaDangSinhHocThuySanEntity = DaDangSinhHocThuySanEntity;
//# sourceMappingURL=da-dang-sinh-hoc-thuy-san.entity.js.map