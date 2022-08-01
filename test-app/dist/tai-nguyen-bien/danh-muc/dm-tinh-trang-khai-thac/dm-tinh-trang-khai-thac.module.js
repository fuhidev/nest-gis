"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmTinhTrangKhaiThacModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_tinh_trang_khai_thac_controller_1 = require("./dm-tinh-trang-khai-thac.controller");
const dm_tinh_trang_khai_thac_entity_1 = require("./dm-tinh-trang-khai-thac.entity");
const dm_tinh_trang_khai_thac_service_1 = require("./dm-tinh-trang-khai-thac.service");
let DmTinhTrangKhaiThacModule = class DmTinhTrangKhaiThacModule {
};
DmTinhTrangKhaiThacModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dm_tinh_trang_khai_thac_entity_1.DMTinhTrangKhaiThacEntity])],
        providers: [dm_tinh_trang_khai_thac_service_1.DMTinhTrangKhaiThacService],
        controllers: [dm_tinh_trang_khai_thac_controller_1.DMTinhTrangKhaiThacController],
    })
], DmTinhTrangKhaiThacModule);
exports.DmTinhTrangKhaiThacModule = DmTinhTrangKhaiThacModule;
//# sourceMappingURL=dm-tinh-trang-khai-thac.module.js.map