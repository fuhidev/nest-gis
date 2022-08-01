"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuyHoachVungDichVuModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_loai_khu_vuc_dich_vu_module_1 = require("./danh-muc/dm-loai-khu-vuc-dich-vu/dm-loai-khu-vuc-dich-vu.module");
const quy_hoach_vung_dich_vu_controller_1 = require("./quy-hoach-vung-dich-vu.controller");
const quy_hoach_vung_dich_vu_entity_1 = require("./quy-hoach-vung-dich-vu.entity");
const quy_hoach_vung_dich_vu_service_1 = require("./quy-hoach-vung-dich-vu.service");
let QuyHoachVungDichVuModule = class QuyHoachVungDichVuModule {
};
QuyHoachVungDichVuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([quy_hoach_vung_dich_vu_entity_1.QuyHoachAnNinhQuocPhongEntity]),
            dm_loai_khu_vuc_dich_vu_module_1.DmLoaiKhuVucDichVuModule,
        ],
        providers: [quy_hoach_vung_dich_vu_service_1.QuyHoachVungDichVuService],
        controllers: [quy_hoach_vung_dich_vu_controller_1.QuyHoachVungDichVuController],
    })
], QuyHoachVungDichVuModule);
exports.QuyHoachVungDichVuModule = QuyHoachVungDichVuModule;
//# sourceMappingURL=quy-hoach-vung-dich-vu.module.js.map