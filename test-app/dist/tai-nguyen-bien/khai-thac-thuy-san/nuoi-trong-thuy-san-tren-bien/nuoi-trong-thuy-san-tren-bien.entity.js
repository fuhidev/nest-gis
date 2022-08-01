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
exports.NuoiTrongThuySanTrenBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let NuoiTrongThuySanTrenBienEntity = class NuoiTrongThuySanTrenBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], NuoiTrongThuySanTrenBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Loai',
        nullable: true,
        alias: 'Loại',
    }),
    __metadata("design:type", String)
], NuoiTrongThuySanTrenBienEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ViTri',
        nullable: true,
        alias: 'Vị trí',
    }),
    __metadata("design:type", String)
], NuoiTrongThuySanTrenBienEntity.prototype, "viTri", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'QuyMo',
        nullable: true,
        alias: 'Quy mô',
        length: 1000,
    }),
    __metadata("design:type", String)
], NuoiTrongThuySanTrenBienEntity.prototype, "quyMo", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DienTich',
        nullable: true,
        alias: 'Diện tích',
        type: 'decimal',
    }),
    __metadata("design:type", Number)
], NuoiTrongThuySanTrenBienEntity.prototype, "dienTich", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'MoTa',
        nullable: true,
        alias: 'Mô tả',
    }),
    __metadata("design:type", String)
], NuoiTrongThuySanTrenBienEntity.prototype, "moTa", void 0);
NuoiTrongThuySanTrenBienEntity = __decorate([
    (0, typeorm_1.Entity)('NUOITRONGTHUYSANTRENBIEN', { synchronize: false })
], NuoiTrongThuySanTrenBienEntity);
exports.NuoiTrongThuySanTrenBienEntity = NuoiTrongThuySanTrenBienEntity;
//# sourceMappingURL=nuoi-trong-thuy-san-tren-bien.entity.js.map