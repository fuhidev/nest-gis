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
exports.DiaVatBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const dm_loai_thuy_quyen_entity_1 = require("../../danh-muc/dm-loai-thuy-quyen/dm-loai-thuy-quyen.entity");
const typeorm_1 = require("typeorm");
const dm_loai_thach_quyen_entity_1 = require("../../danh-muc/dm-loai-thach-quyen/dm-loai-thach-quyen.entity");
let DiaVatBienEntity = class DiaVatBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DiaVatBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DiaVatBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DienTich',
        nullable: true,
        alias: 'Diện tích',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], DiaVatBienEntity.prototype, "dienTich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TruLuong',
        nullable: true,
        alias: 'Trữ lượng',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], DiaVatBienEntity.prototype, "truLuong", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MoTa',
        nullable: true,
        alias: 'Mô tả',
    }),
    __metadata("design:type", String)
], DiaVatBienEntity.prototype, "moTa", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiThuyQuyen',
        nullable: true,
        alias: 'Loại thuỷ quyển',
    }),
    __metadata("design:type", Number)
], DiaVatBienEntity.prototype, "maLoaiThuyQuyen", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'LoaiThuyQuyen' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_thuy_quyen_entity_1.DMLoaiThuyQuyenEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_thuy_quyen_entity_1.DMLoaiThuyQuyenEntity)
], DiaVatBienEntity.prototype, "loaiThuyQuyen", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'LoaiThachQuyen',
        nullable: true,
        alias: 'Loại thạch quyển',
    }),
    __metadata("design:type", Number)
], DiaVatBienEntity.prototype, "maLoaiThachQuyen", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'LoaiThachQuyen' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_thach_quyen_entity_1.DMLoaiThachQuyenEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_thach_quyen_entity_1.DMLoaiThachQuyenEntity)
], DiaVatBienEntity.prototype, "loaiThachQuyen", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], DiaVatBienEntity.prototype, "shape", void 0);
DiaVatBienEntity = __decorate([
    (0, typeorm_1.Entity)('DIAVATBIEN', { synchronize: false })
], DiaVatBienEntity);
exports.DiaVatBienEntity = DiaVatBienEntity;
//# sourceMappingURL=dia-vat-bien.entity.js.map