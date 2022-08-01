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
exports.CangBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_loai_cang_entity_1 = require("./danh-muc/dm-loai-cang/dm-loai-cang.entity");
let CangBienEntity = class CangBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], CangBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], CangBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], CangBienEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DienTich',
        nullable: true,
        alias: 'Diện tích',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], CangBienEntity.prototype, "dienTich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'loai',
        nullable: true,
        alias: 'Loại',
    }),
    __metadata("design:type", String)
], CangBienEntity.prototype, "maloai", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'loai' }),
    (0, typeorm_1.ManyToOne)(() => dm_loai_cang_entity_1.DMLoaiCangEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", dm_loai_cang_entity_1.DMLoaiCangEntity)
], CangBienEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'CongSuat',
        nullable: true,
        alias: 'Công suất',
        type: 'float',
    }),
    __metadata("design:type", Number)
], CangBienEntity.prototype, "congSuat", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MoTa',
        nullable: true,
        alias: 'Mô tả',
        length: '4000',
    }),
    __metadata("design:type", String)
], CangBienEntity.prototype, "moTa", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], CangBienEntity.prototype, "shape", void 0);
CangBienEntity = __decorate([
    (0, typeorm_1.Entity)('CANGBIEN', { synchronize: false })
], CangBienEntity);
exports.CangBienEntity = CangBienEntity;
//# sourceMappingURL=cang-bien.entity.js.map