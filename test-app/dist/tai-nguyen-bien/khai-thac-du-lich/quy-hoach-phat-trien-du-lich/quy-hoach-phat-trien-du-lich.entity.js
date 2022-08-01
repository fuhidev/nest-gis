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
exports.QuyHoachPhatTrienDuLichEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let QuyHoachPhatTrienDuLichEntity = class QuyHoachPhatTrienDuLichEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], QuyHoachPhatTrienDuLichEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], QuyHoachPhatTrienDuLichEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], QuyHoachPhatTrienDuLichEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Loai',
        nullable: true,
        alias: 'Loại',
    }),
    __metadata("design:type", String)
], QuyHoachPhatTrienDuLichEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ViTri',
        nullable: true,
        alias: 'Vị trí',
    }),
    __metadata("design:type", String)
], QuyHoachPhatTrienDuLichEntity.prototype, "viTri", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DongLuc',
        nullable: true,
        alias: 'Động lực',
    }),
    __metadata("design:type", String)
], QuyHoachPhatTrienDuLichEntity.prototype, "dongLuc", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DiemDuLich',
        nullable: true,
        alias: 'Điểm du lịch',
    }),
    __metadata("design:type", String)
], QuyHoachPhatTrienDuLichEntity.prototype, "diemDuLich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SanPhamDuLich',
        nullable: true,
        alias: 'Sản phẩm du lịch',
    }),
    __metadata("design:type", String)
], QuyHoachPhatTrienDuLichEntity.prototype, "sanPhamDuLich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ChuVi',
        nullable: true,
        alias: 'Chu vi',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], QuyHoachPhatTrienDuLichEntity.prototype, "chuVi", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DienTich',
        nullable: true,
        alias: 'Diện tích',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], QuyHoachPhatTrienDuLichEntity.prototype, "dienTich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], QuyHoachPhatTrienDuLichEntity.prototype, "shape", void 0);
QuyHoachPhatTrienDuLichEntity = __decorate([
    (0, typeorm_1.Entity)('QUYHOACHPHATTRIENDULICH', { synchronize: false })
], QuyHoachPhatTrienDuLichEntity);
exports.QuyHoachPhatTrienDuLichEntity = QuyHoachPhatTrienDuLichEntity;
//# sourceMappingURL=quy-hoach-phat-trien-du-lich.entity.js.map