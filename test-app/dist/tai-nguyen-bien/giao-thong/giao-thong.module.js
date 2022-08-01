"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GiaoThongModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiaoThongModule = void 0;
const common_1 = require("@nestjs/common");
const bien_module_1 = require("./bien/bien.module");
const tim_duong_module_1 = require("./tim-duong/tim-duong.module");
const tim_song_module_1 = require("./tim-song/tim-song.module");
const hanh_lang_bien_module_1 = require("./hanh-lang-bien/hanh-lang-bien.module");
const duong_dang_sau_module_1 = require("./duong-dang-sau/duong-dang-sau.module");
const duong_dinh_bo_module_1 = require("./duong-dinh-bo/duong-dinh-bo.module");
let GiaoThongModule = GiaoThongModule_1 = class GiaoThongModule {
};
GiaoThongModule = GiaoThongModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            duong_dinh_bo_module_1.DuongDinhBoModule,
            duong_dang_sau_module_1.DuongDangSauModule,
            hanh_lang_bien_module_1.HanhLangBienModule,
            tim_song_module_1.TimSongModule,
            tim_duong_module_1.TimDuongModule,
            tim_song_module_1.TimSongModule,
            bien_module_1.BienModule,
            tim_duong_module_1.TimDuongModule,
            GiaoThongModule_1,
        ],
        providers: [],
        controllers: [],
    })
], GiaoThongModule);
exports.GiaoThongModule = GiaoThongModule;
//# sourceMappingURL=giao-thong.module.js.map