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
exports.DuongDangSauEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
let DuongDangSauEntity = class DuongDangSauEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DuongDangSauEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DuongDangSauEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Loai',
        nullable: true,
        alias: 'Loại',
    }),
    __metadata("design:type", String)
], DuongDangSauEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoSau',
        nullable: true,
        alias: 'Độ sâu',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], DuongDangSauEntity.prototype, "doSau", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ChieuDai',
        nullable: true,
        alias: 'Chiều dài',
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], DuongDangSauEntity.prototype, "chieuDai", void 0);
DuongDangSauEntity = __decorate([
    (0, typeorm_1.Entity)('DUONGDANGSAU', { synchronize: false })
], DuongDangSauEntity);
exports.DuongDangSauEntity = DuongDangSauEntity;
//# sourceMappingURL=duong-dang-sau.entity.js.map