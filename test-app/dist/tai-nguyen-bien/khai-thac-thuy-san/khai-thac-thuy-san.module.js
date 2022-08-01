"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhaiThacThuySanModule = void 0;
const common_1 = require("@nestjs/common");
const khai_thac_thuy_san_module_1 = require("./khai-thac-thuy-san/khai-thac-thuy-san.module");
const nuoi_trong_thuy_san_tren_bien_module_1 = require("./nuoi-trong-thuy-san-tren-bien/nuoi-trong-thuy-san-tren-bien.module");
let KhaiThacThuySanModule = class KhaiThacThuySanModule {
};
KhaiThacThuySanModule = __decorate([
    (0, common_1.Module)({
        imports: [nuoi_trong_thuy_san_tren_bien_module_1.NuoiTrongThuySanTrenBienModule, khai_thac_thuy_san_module_1.KhaiThacThuySanChildModule],
        providers: [],
        controllers: [],
    })
], KhaiThacThuySanModule);
exports.KhaiThacThuySanModule = KhaiThacThuySanModule;
//# sourceMappingURL=khai-thac-thuy-san.module.js.map