"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeSinhThaiModule = void 0;
const common_1 = require("@nestjs/common");
const khu_bao_ton_module_1 = require("./khu-bao-ton/khu-bao-ton.module");
const da_dang_sinh_hoc_thuy_san_module_1 = require("./da-dang-sinh-hoc-thuy-san/da-dang-sinh-hoc-thuy-san.module");
const diem_ran_san_ho_module_1 = require("./diem-ran-san-ho/diem-ran-san-ho.module");
const sinh_thai_bien_dam_pha_module_1 = require("./sinh-thai-bien-dam-pha/sinh-thai-bien-dam-pha.module");
let HeSinhThaiModule = class HeSinhThaiModule {
};
HeSinhThaiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sinh_thai_bien_dam_pha_module_1.SinhThaiBienDamPhaModule,
            diem_ran_san_ho_module_1.DiemRanSanHoModule,
            da_dang_sinh_hoc_thuy_san_module_1.DaDangSinhHocThuySanModule,
            khu_bao_ton_module_1.KhuBaoTonModule,
        ],
        providers: [],
        controllers: [],
    })
], HeSinhThaiModule);
exports.HeSinhThaiModule = HeSinhThaiModule;
//# sourceMappingURL=he-sinh-thai.module.js.map