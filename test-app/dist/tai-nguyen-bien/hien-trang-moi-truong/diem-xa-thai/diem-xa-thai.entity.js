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
exports.DiemXaThaiEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const dm_dong_ho_do_entity_1 = require("./danh-muc/dm-dong-ho-do/dm-dong-ho-do.entity");
let DiemXaThaiEntity = class DiemXaThaiEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], DiemXaThaiEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], DiemXaThaiEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'TenCoSo',
        nullable: true,
        alias: 'Tên cơ sở',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], DiemXaThaiEntity.prototype, "tenCoSo", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DiaDiem',
        nullable: true,
        alias: 'Địa điểm',
    }),
    __metadata("design:type", String)
], DiemXaThaiEntity.prototype, "diaDiem", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'CongTrinhDanNuocThai',
        nullable: true,
        alias: 'Công trình dẫn nước thải',
    }),
    __metadata("design:type", String)
], DiemXaThaiEntity.prototype, "congTrinhDanNuocThai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'ThuyVucTiepNhan',
        nullable: true,
        alias: 'Thủy vực tiếp nhận',
    }),
    __metadata("design:type", String)
], DiemXaThaiEntity.prototype, "thuyVucTiepNhan", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'GiayPhep',
        nullable: true,
        alias: 'Giấy phép ',
    }),
    __metadata("design:type", String)
], DiemXaThaiEntity.prototype, "giayPhep", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DongHoDo',
        nullable: true,
        alias: 'aliasName',
    }),
    __metadata("design:type", String)
], DiemXaThaiEntity.prototype, "maDongHoDo", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'DongHoDo' }),
    (0, typeorm_1.ManyToOne)(() => dm_dong_ho_do_entity_1.DMDongHoDoEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_dong_ho_do_entity_1.DMDongHoDoEntity)
], DiemXaThaiEntity.prototype, "dongHoDo", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Point,
    }),
    __metadata("design:type", nestjs_gis_1.Point)
], DiemXaThaiEntity.prototype, "shape", void 0);
DiemXaThaiEntity = __decorate([
    (0, typeorm_1.Entity)('DIEMXATHAI', { synchronize: false })
], DiemXaThaiEntity);
exports.DiemXaThaiEntity = DiemXaThaiEntity;
//# sourceMappingURL=diem-xa-thai.entity.js.map