"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMPhanLoaiDaDangSinhHocModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_phan_loai_da_dang_sinh_hoc_controller_1 = require("./dm-phan-loai-da-dang-sinh-hoc.controller");
const dm_phan_loai_da_dang_sinh_hoc_entity_1 = require("./dm-phan-loai-da-dang-sinh-hoc.entity");
const dm_phan_loai_da_dang_sinh_hoc_service_1 = require("./dm-phan-loai-da-dang-sinh-hoc.service");
let DMPhanLoaiDaDangSinhHocModule = class DMPhanLoaiDaDangSinhHocModule {
};
DMPhanLoaiDaDangSinhHocModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dm_phan_loai_da_dang_sinh_hoc_entity_1.DMPhanLoaiDDSH])],
        providers: [dm_phan_loai_da_dang_sinh_hoc_service_1.DMPhanLoaiDaDangSinhHocService],
        controllers: [dm_phan_loai_da_dang_sinh_hoc_controller_1.DMPhanLoaiDaDangSinhHocController],
    })
], DMPhanLoaiDaDangSinhHocModule);
exports.DMPhanLoaiDaDangSinhHocModule = DMPhanLoaiDaDangSinhHocModule;
//# sourceMappingURL=dm-phan-loai-da-dang-sinh-hoc.module.js.map