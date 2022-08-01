"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaVatLyBienModule = void 0;
const common_1 = require("@nestjs/common");
const ly_hoa_bien_module_1 = require("./ly-hoa-bien/ly-hoa-bien.module");
const dia_vat_bien_module_1 = require("./dia-vat-bien/dia-vat-bien.module");
const khoang_san_module_1 = require("./khoang-san/khoang-san.module");
const dia_chat_module_1 = require("./dia-chat/dia-chat.module");
const phan_bo_tram_tich_module_1 = require("./phan-bo-tram-tich/phan-bo-tram-tich.module");
const dau_khi_bien_module_1 = require("./dau-khi-bien/dau-khi-bien.module");
const duong_trieu_module_1 = require("./duong-trieu/duong-trieu.module");
let DiaVatLyBienModule = class DiaVatLyBienModule {
};
DiaVatLyBienModule = __decorate([
    (0, common_1.Module)({
        imports: [
            duong_trieu_module_1.DuongTrieuModule,
            dau_khi_bien_module_1.DauKhiBienModule,
            phan_bo_tram_tich_module_1.PhanBoTramTichModule,
            dia_chat_module_1.DiaChatModule,
            khoang_san_module_1.KhoangSanModule,
            dia_vat_bien_module_1.DiaVatBienModule,
            ly_hoa_bien_module_1.LyHoaBienModule,
        ],
        providers: [],
        controllers: [],
    })
], DiaVatLyBienModule);
exports.DiaVatLyBienModule = DiaVatLyBienModule;
//# sourceMappingURL=dia-vat-ly-bien.module.js.map