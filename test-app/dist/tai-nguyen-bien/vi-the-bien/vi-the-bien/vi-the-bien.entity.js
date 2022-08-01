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
exports.ViTheBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let ViTheBienEntity = class ViTheBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], ViTheBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], ViTheBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuongHeThongThuyHe',
        nullable: true,
        alias: 'Số lượng hệ thống thuỷ hệ',
        type: 'int',
    }),
    __metadata("design:type", Number)
], ViTheBienEntity.prototype, "soLuongHeThongThuyHe", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuongHeSinhThai',
        nullable: true,
        alias: 'Số lượng hệ sinh thái',
        type: 'int',
    }),
    __metadata("design:type", Number)
], ViTheBienEntity.prototype, "soLuongHeSinhThai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SoLuongKhuVucSinhThai',
        nullable: true,
        alias: 'Số lượng khu vực sinh thái',
        type: 'int',
    }),
    __metadata("design:type", Number)
], ViTheBienEntity.prototype, "soLuongKhuVucSinhThai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], ViTheBienEntity.prototype, "shape", void 0);
ViTheBienEntity = __decorate([
    (0, typeorm_1.Entity)('VITHEBIEN', { synchronize: false })
], ViTheBienEntity);
exports.ViTheBienEntity = ViTheBienEntity;
//# sourceMappingURL=vi-the-bien.entity.js.map