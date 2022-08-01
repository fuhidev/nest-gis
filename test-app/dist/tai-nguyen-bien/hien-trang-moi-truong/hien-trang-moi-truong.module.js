"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HienTrangMoiTruongModule = void 0;
const common_1 = require("@nestjs/common");
const khu_vuc_o_nhiem_module_1 = require("./khu-vuc-o-nhiem/khu-vuc-o-nhiem.module");
const nhan_chim_bien_module_1 = require("./nhan-chim-bien/nhan-chim-bien.module");
const diem_xa_thai_module_1 = require("./diem-xa-thai/diem-xa-thai.module");
const nhan_chim_bien_vat_chat_module_1 = require("./nhan-chim-bien/nhan-chim-bien-vat-chat/nhan-chim-bien-vat-chat.module");
let HienTrangMoiTruongModule = class HienTrangMoiTruongModule {
};
HienTrangMoiTruongModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nhan_chim_bien_vat_chat_module_1.NhanChimBienVatChatModule,
            diem_xa_thai_module_1.DiemXaThaiModule,
            nhan_chim_bien_module_1.NhanChimBienModule,
            khu_vuc_o_nhiem_module_1.KhuVucONhiemModule,
        ],
        providers: [],
        controllers: [],
    })
], HienTrangMoiTruongModule);
exports.HienTrangMoiTruongModule = HienTrangMoiTruongModule;
//# sourceMappingURL=hien-trang-moi-truong.module.js.map