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
exports.NhanChimBienEntity = void 0;
const nestjs_gis_1 = require("../../../../../dist");
const typeorm_1 = require("typeorm");
const nhan_chim_bien_vat_chat_entity_1 = require("./nhan-chim-bien-vat-chat/nhan-chim-bien-vat-chat.entity");
let NhanChimBienEntity = class NhanChimBienEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'OBJECTID', type: 'int' }),
    __metadata("design:type", Number)
], NhanChimBienEntity.prototype, "objectId", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ma',
        nullable: true,
        alias: 'Mã',
    }),
    __metadata("design:type", String)
], NhanChimBienEntity.prototype, "ma", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'Ten',
        nullable: true,
        alias: 'Tên',
        isDisplayColumn: true,
    }),
    __metadata("design:type", String)
], NhanChimBienEntity.prototype, "ten", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.OneToMany)(() => nhan_chim_bien_vat_chat_entity_1.NhanChimBienVatChatEntity, (e) => e.nhanChimBien, {}),
    __metadata("design:type", Array)
], NhanChimBienEntity.prototype, "vatChatDuocNhanChims", void 0);
__decorate([
    (0, nestjs_gis_1.Column)({
        name: 'SHAPE',
        transformer: nestjs_gis_1.geometryTransformer,
        type: 'geometry',
        spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Polygon,
    }),
    __metadata("design:type", Object)
], NhanChimBienEntity.prototype, "shape", void 0);
NhanChimBienEntity = __decorate([
    (0, typeorm_1.Entity)('NHANCHIMBIEN', { synchronize: false })
], NhanChimBienEntity);
exports.NhanChimBienEntity = NhanChimBienEntity;
//# sourceMappingURL=nhan-chim-bien.entity.js.map