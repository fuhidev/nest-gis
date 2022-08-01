"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmLoaiKhuVucDichVuModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_loai_khu_vuc_dich_vu_controller_1 = require("./dm-loai-khu-vuc-dich-vu.controller");
const dm_loai_khu_vuc_dich_vu_entity_1 = require("./dm-loai-khu-vuc-dich-vu.entity");
const dm_loai_khu_vuc_dich_vu_service_1 = require("./dm-loai-khu-vuc-dich-vu.service");
let DmLoaiKhuVucDichVuModule = class DmLoaiKhuVucDichVuModule {
};
DmLoaiKhuVucDichVuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dm_loai_khu_vuc_dich_vu_entity_1.DMLoaiKhuVucDichVuEntity])],
        providers: [dm_loai_khu_vuc_dich_vu_service_1.DMLoaiKhuVucDichVuService],
        controllers: [dm_loai_khu_vuc_dich_vu_controller_1.DMLoaiKhuVucDichVuController],
    })
], DmLoaiKhuVucDichVuModule);
exports.DmLoaiKhuVucDichVuModule = DmLoaiKhuVucDichVuModule;
//# sourceMappingURL=dm-loai-khu-vuc-dich-vu.module.js.map