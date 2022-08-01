"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaiNguyenBienModule = void 0;
const common_1 = require("@nestjs/common");
const dia_vat_ly_bien_module_1 = require("./dia-vat-ly-bien/dia-vat-ly-bien.module");
const vi_the_bien_module_1 = require("./vi-the-bien/vi-the-bien.module");
const he_sinh_thai_module_1 = require("./he-sinh-thai/he-sinh-thai.module");
const hien_trang_moi_truong_module_1 = require("./hien-trang-moi-truong/hien-trang-moi-truong.module");
const quy_hoach_bao_ve_module_1 = require("./quy-hoach-bao-ve/quy-hoach-bao-ve.module");
const khai_thac_du_lich_module_1 = require("./khai-thac-du-lich/khai-thac-du-lich.module");
const khai_thac_tai_nguyen_dat_module_1 = require("./khai-thac-tai-nguyen-dat/khai-thac-tai-nguyen-dat.module");
const khai_thac_thuy_san_module_1 = require("./khai-thac-thuy-san/khai-thac-thuy-san.module");
const giao_thong_module_1 = require("./giao-thong/giao-thong.module");
const quy_hoach_phat_trien_module_1 = require("./quy-hoach-phat-trien/quy-hoach-phat-trien.module");
const danh_muc_module_1 = require("./danh-muc/danh-muc.module");
const dam_pha_ven_bien_module_1 = require("./dam-pha-ven-bien/dam-pha-ven-bien.module");
const khai_thac_nang_luong_module_1 = require("./khai-thac-nang-luong/khai-thac-nang-luong.module");
const hanh_lang_bo_bien_module_1 = require("./hanh-lang-bo-bien/hanh-lang-bo-bien.module");
let TaiNguyenBienModule = class TaiNguyenBienModule {
};
TaiNguyenBienModule = __decorate([
    (0, common_1.Module)({
        imports: [
            danh_muc_module_1.DanhMucModule,
            quy_hoach_phat_trien_module_1.QuyHoachPhatTrienModule,
            giao_thong_module_1.GiaoThongModule,
            khai_thac_thuy_san_module_1.KhaiThacThuySanModule,
            khai_thac_tai_nguyen_dat_module_1.KhaiThacTaiNguyenDatModule,
            khai_thac_du_lich_module_1.KhaiThacDuLichModule,
            quy_hoach_bao_ve_module_1.QuyHoachBaoVeModule,
            hien_trang_moi_truong_module_1.HienTrangMoiTruongModule,
            he_sinh_thai_module_1.HeSinhThaiModule,
            vi_the_bien_module_1.ViTheBienModule,
            dia_vat_ly_bien_module_1.DiaVatLyBienModule,
            dam_pha_ven_bien_module_1.DamPhaVenBienModule,
            khai_thac_nang_luong_module_1.KhaiThacNangLuongModule,
            hanh_lang_bo_bien_module_1.HanhLangBoBienModule,
        ],
        providers: [],
        controllers: [],
    })
], TaiNguyenBienModule);
exports.TaiNguyenBienModule = TaiNguyenBienModule;
//# sourceMappingURL=tai-nguyen-bien.module.js.map