"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuyHoachVungBaoVeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_loai_khu_bao_ve_module_1 = require("./danh-muc/dm-loai-khu-bao-ve/dm-loai-khu-bao-ve.module");
const quy_hoach_vung_bao_ve_controller_1 = require("./quy-hoach-vung-bao-ve.controller");
const quy_hoach_vung_bao_ve_entity_1 = require("./quy-hoach-vung-bao-ve.entity");
const quy_hoach_vung_bao_ve_service_1 = require("./quy-hoach-vung-bao-ve.service");
let QuyHoachVungBaoVeModule = class QuyHoachVungBaoVeModule {
};
QuyHoachVungBaoVeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([quy_hoach_vung_bao_ve_entity_1.QuyHoachVungBaoVeEntity]), dm_loai_khu_bao_ve_module_1.DmLoaiKhuBaoVeModule],
        providers: [quy_hoach_vung_bao_ve_service_1.QuyHoachVungBaoVeService],
        controllers: [quy_hoach_vung_bao_ve_controller_1.QuyHoachVungBaoVeController],
    })
], QuyHoachVungBaoVeModule);
exports.QuyHoachVungBaoVeModule = QuyHoachVungBaoVeModule;
//# sourceMappingURL=quy-hoach-vung-bao-ve.module.js.map