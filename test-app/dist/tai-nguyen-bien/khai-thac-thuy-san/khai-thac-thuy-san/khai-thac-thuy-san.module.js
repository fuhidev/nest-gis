"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhaiThacThuySanChildModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_khai_thac_thuy_san_module_1 = require("./danh-muc/dm-khai-thac-thuy-san/dm-khai-thac-thuy-san.module");
const khai_thac_thuy_san_controller_1 = require("./khai-thac-thuy-san.controller");
const khai_thac_thuy_san_entity_1 = require("./khai-thac-thuy-san.entity");
const khai_thac_thuy_san_service_1 = require("./khai-thac-thuy-san.service");
let KhaiThacThuySanChildModule = class KhaiThacThuySanChildModule {
};
KhaiThacThuySanChildModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([khai_thac_thuy_san_entity_1.HienTrangKhaiThacThuySanEntity]),
            dm_khai_thac_thuy_san_module_1.DmKhaiThacThuySanModule,
        ],
        providers: [khai_thac_thuy_san_service_1.KhaiThacThuySanService],
        controllers: [khai_thac_thuy_san_controller_1.KhaiThacThuySanController],
    })
], KhaiThacThuySanChildModule);
exports.KhaiThacThuySanChildModule = KhaiThacThuySanChildModule;
//# sourceMappingURL=khai-thac-thuy-san.module.js.map