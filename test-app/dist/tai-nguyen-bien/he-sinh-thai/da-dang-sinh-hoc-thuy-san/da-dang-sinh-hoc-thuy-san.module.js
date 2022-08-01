"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaDangSinhHocThuySanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const da_dang_sinh_hoc_thuy_san_controller_1 = require("./da-dang-sinh-hoc-thuy-san.controller");
const da_dang_sinh_hoc_thuy_san_entity_1 = require("./da-dang-sinh-hoc-thuy-san.entity");
const da_dang_sinh_hoc_thuy_san_service_1 = require("./da-dang-sinh-hoc-thuy-san.service");
const dm_phan_loai_da_dang_sinh_hoc_module_1 = require("./danh-muc/dm-phan-loai-da-dang-sinh-hoc/dm-phan-loai-da-dang-sinh-hoc.module");
let DaDangSinhHocThuySanModule = class DaDangSinhHocThuySanModule {
};
DaDangSinhHocThuySanModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([da_dang_sinh_hoc_thuy_san_entity_1.DaDangSinhHocThuySanEntity]),
            dm_phan_loai_da_dang_sinh_hoc_module_1.DMPhanLoaiDaDangSinhHocModule,
        ],
        providers: [da_dang_sinh_hoc_thuy_san_service_1.DaDangSinhHocThuySanService],
        controllers: [da_dang_sinh_hoc_thuy_san_controller_1.DaDangSinhHocThuySanController],
    })
], DaDangSinhHocThuySanModule);
exports.DaDangSinhHocThuySanModule = DaDangSinhHocThuySanModule;
//# sourceMappingURL=da-dang-sinh-hoc-thuy-san.module.js.map