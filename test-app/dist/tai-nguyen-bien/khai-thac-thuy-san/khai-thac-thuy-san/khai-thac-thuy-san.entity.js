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
exports.HienTrangKhaiThacThuySanEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const dm_phan_loai_entity_1 = require("../../danh-muc/dm-phan-loai/dm-phan-loai.entity");
const typeorm_1 = require("typeorm");
const dm_khai_thac_thuy_san_entity_1 = require("./danh-muc/dm-khai-thac-thuy-san/dm-khai-thac-thuy-san.entity");
let HienTrangKhaiThacThuySanEntity = class HienTrangKhaiThacThuySanEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], HienTrangKhaiThacThuySanEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], HienTrangKhaiThacThuySanEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], HienTrangKhaiThacThuySanEntity.prototype, "ten", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Loai',
        nullable: true,
        alias: 'Loại',
    }),
    __metadata("design:type", String)
], HienTrangKhaiThacThuySanEntity.prototype, "loai", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'DoiTuong',
        nullable: true,
        alias: 'Đối tượng',
    }),
    __metadata("design:type", String)
], HienTrangKhaiThacThuySanEntity.prototype, "maDoiTuong", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'DoiTuong' }),
    (0, typeorm_1.ManyToOne)(() => dm_khai_thac_thuy_san_entity_1.DMKhaiThacThuySanEntity, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", dm_khai_thac_thuy_san_entity_1.DMKhaiThacThuySanEntity)
], HienTrangKhaiThacThuySanEntity.prototype, "doiTuong", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'GiaiDoan',
        nullable: true,
        alias: 'aliasName',
        type: 'int',
        default: 0,
    }),
    __metadata("design:type", Number)
], HienTrangKhaiThacThuySanEntity.prototype, "maGiaiDoan", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'GiaiDoan' }),
    (0, typeorm_1.ManyToOne)(() => dm_phan_loai_entity_1.DMGiaiDoanEntity, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", dm_phan_loai_entity_1.DMGiaiDoanEntity)
], HienTrangKhaiThacThuySanEntity.prototype, "giaiDoan", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], HienTrangKhaiThacThuySanEntity.prototype, "shape", void 0);
HienTrangKhaiThacThuySanEntity = __decorate([
    (0, typeorm_1.Entity)('HIENTRANGKHAITHAC_THUYSAN', { synchronize: false })
], HienTrangKhaiThacThuySanEntity);
exports.HienTrangKhaiThacThuySanEntity = HienTrangKhaiThacThuySanEntity;
//# sourceMappingURL=khai-thac-thuy-san.entity.js.map