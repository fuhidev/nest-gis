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
exports.CayXanhEntity = void 0;
const nestjs_gis_1 = require("../../../dist");
const typeorm_1 = require("typeorm");
let CayXanhEntity = class CayXanhEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], CayXanhEntity.prototype, "id", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'NguoiCapNhat',
        nullable: true,
        alias: 'aliasName'
    }),
    __metadata("design:type", String)
], CayXanhEntity.prototype, "nguoiCapNhat", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Point
    }),
    __metadata("design:type", nestjs_gis_1.Point)
], CayXanhEntity.prototype, "shape", void 0);
CayXanhEntity = __decorate([
    (0, typeorm_1.Entity)('HTKT_CX_CayXanh')
], CayXanhEntity);
exports.CayXanhEntity = CayXanhEntity;
//# sourceMappingURL=cay-xanh.entity.js.map