"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhaiThacDuLichModule = void 0;
const common_1 = require("@nestjs/common");
const di_tich_module_1 = require("./di-tich/di-tich.module");
const bai_tam_module_1 = require("./bai-tam/bai-tam.module");
const hien_trang_phat_trien_du_lich_module_1 = require("./hien-trang-phat-trien-du-lich/hien-trang-phat-trien-du-lich.module");
const quy_hoach_phat_trien_du_lich_module_1 = require("./quy-hoach-phat-trien-du-lich/quy-hoach-phat-trien-du-lich.module");
const khai_thac_du_lich_module_1 = require("./khai-thac-du-lich/khai-thac-du-lich.module");
let KhaiThacDuLichModule = class KhaiThacDuLichModule {
};
KhaiThacDuLichModule = __decorate([
    (0, common_1.Module)({
        imports: [
            quy_hoach_phat_trien_du_lich_module_1.QuyHoachPhatTrienDuLichModule,
            hien_trang_phat_trien_du_lich_module_1.HienTrangPhatTrienDuLichModule,
            bai_tam_module_1.BaiTamModule,
            di_tich_module_1.DiTichModule,
            khai_thac_du_lich_module_1.KhaiThacDuLichModule,
        ],
        providers: [],
        controllers: [],
    })
], KhaiThacDuLichModule);
exports.KhaiThacDuLichModule = KhaiThacDuLichModule;
//# sourceMappingURL=khai-thac-du-lich.module.js.map