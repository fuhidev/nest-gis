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
exports.KhoangSanEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_loai_khoang_san_entity_1 = require("./danh-muc/dm-loai-khoang-san/dm-loai-khoang-san.entity");
const dm_phan_loai_entity_1 = require("../../danh-muc/dm-phan-loai/dm-phan-loai.entity");
const dm_tinh_trang_khai_thac_entity_1 = require("../../danh-muc/dm-tinh-trang-khai-thac/dm-tinh-trang-khai-thac.entity");
let KhoangSanEntity = class KhoangSanEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], KhoangSanEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], KhoangSanEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TenKhoangSan',
        nullable: true,
        alias: 'Tên khoáng sản',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], KhoangSanEntity.prototype, "tenKhoangSan", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TruLuong',
        nullable: true,
        alias: 'Trữ lượng',
        type: 'float',
    }),
    __metadata("design:type", Number)
], KhoangSanEntity.prototype, "truLuong", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiKhoangSan',
        nullable: true,
        alias: 'Loại khoáng sản',
    }),
    __metadata("design:type", Number)
], KhoangSanEntity.prototype, "maLoaiKhoangSan", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'LoaiKhoangSan' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_khoang_san_entity_1.DMLoaiKhoangSanEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_khoang_san_entity_1.DMLoaiKhoangSanEntity)
], KhoangSanEntity.prototype, "loaiKhoangSan", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'GiaiDoan',
        nullable: true,
        alias: 'Giai đoạn',
    }),
    __metadata("design:type", Number)
], KhoangSanEntity.prototype, "maGiaiDoan", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'GiaiDoan' }),
    (0, typeorm_1.ManyToOne)(() => dm_phan_loai_entity_1.DMGiaiDoanEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_phan_loai_entity_1.DMGiaiDoanEntity)
], KhoangSanEntity.prototype, "giaiDoan", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TinhTrangKhaiThac',
        nullable: true,
        alias: 'Tình trạng khai thác',
    }),
    __metadata("design:type", Number)
], KhoangSanEntity.prototype, "maTinhTrangKhaiThac", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'TinhTrangKhaiThac' }),
    (0, typeorm_1.ManyToOne)(() => dm_tinh_trang_khai_thac_entity_1.DMTinhTrangKhaiThacEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_tinh_trang_khai_thac_entity_1.DMTinhTrangKhaiThacEntity)
], KhoangSanEntity.prototype, "tinhTrangKhaiThac", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ViTri',
        nullable: true,
        alias: 'Vị trí',
    }),
    __metadata("design:type", String)
], KhoangSanEntity.prototype, "viTri", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DienTich',
        nullable: true,
        alias: 'Diện tích',
        type: 'decimal',
    }),
    __metadata("design:type", Number)
], KhoangSanEntity.prototype, "dienTich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], KhoangSanEntity.prototype, "shape", void 0);
KhoangSanEntity = __decorate([
    (0, typeorm_1.Entity)('KHOANGSANBIEN', { synchronize: false })
], KhoangSanEntity);
exports.KhoangSanEntity = KhoangSanEntity;
//# sourceMappingURL=khoang-san.entity.js.map