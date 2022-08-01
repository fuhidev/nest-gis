"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhMucModule = void 0;
const common_1 = require("@nestjs/common");
const dm_loai_thach_quyen_module_1 = require("./dm-loai-thach-quyen/dm-loai-thach-quyen.module");
const dm_loai_thuy_quyen_module_1 = require("./dm-loai-thuy-quyen/dm-loai-thuy-quyen.module");
const dm_phan_loai_module_1 = require("./dm-phan-loai/dm-phan-loai.module");
const dm_tinh_trang_khai_thac_module_1 = require("./dm-tinh-trang-khai-thac/dm-tinh-trang-khai-thac.module");
let DanhMucModule = class DanhMucModule {
};
DanhMucModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dm_loai_thach_quyen_module_1.DMLoaiThachQuyenModule,
            dm_loai_thuy_quyen_module_1.DMLoaiThuyQuyenModule,
            dm_phan_loai_module_1.DMGiaiDoanModule,
            dm_tinh_trang_khai_thac_module_1.DmTinhTrangKhaiThacModule,
        ],
    })
], DanhMucModule);
exports.DanhMucModule = DanhMucModule;
//# sourceMappingURL=danh-muc.module.js.map