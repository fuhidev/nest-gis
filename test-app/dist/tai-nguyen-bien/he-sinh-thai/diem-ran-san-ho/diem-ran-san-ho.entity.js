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
exports.DiemRanSanHoEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let DiemRanSanHoEntity = class DiemRanSanHoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DiemRanSanHoEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DiemRanSanHoEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], DiemRanSanHoEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoPhuHopPhanDaySHCung',
        nullable: true,
    }),
    __metadata("design:type", String)
], DiemRanSanHoEntity.prototype, "doPhuHopPhanDaySHCung", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoPhuHopPhanDaySHMem',
        nullable: true,
    }),
    __metadata("design:type", String)
], DiemRanSanHoEntity.prototype, "doPhuHopPhanDaySHMem", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'CacGiongUuThe',
        nullable: true,
        alias: 'Các giống ưu thế',
    }),
    __metadata("design:type", String)
], DiemRanSanHoEntity.prototype, "cacGiongUuThe", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Loai',
        nullable: true,
        alias: 'Loại',
    }),
    __metadata("design:type", String)
], DiemRanSanHoEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], DiemRanSanHoEntity.prototype, "shape", void 0);
DiemRanSanHoEntity = __decorate([
    (0, typeorm_1.Entity)('DIEMRANSANHO', { synchronize: false })
], DiemRanSanHoEntity);
exports.DiemRanSanHoEntity = DiemRanSanHoEntity;
//# sourceMappingURL=diem-ran-san-ho.entity.js.map