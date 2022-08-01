"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMLoaiThachQuyenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_loai_thach_quyen_controller_1 = require("./dm-loai-thach-quyen.controller");
const dm_loai_thach_quyen_entity_1 = require("./dm-loai-thach-quyen.entity");
const dm_loai_thach_quyen_service_1 = require("./dm-loai-thach-quyen.service");
let DMLoaiThachQuyenModule = class DMLoaiThachQuyenModule {
};
DMLoaiThachQuyenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dm_loai_thach_quyen_entity_1.DMLoaiThachQuyenEntity])],
        providers: [dm_loai_thach_quyen_service_1.DMLoaiThachQuyenService],
        controllers: [dm_loai_thach_quyen_controller_1.DMLoaiThachQuyenController],
    })
], DMLoaiThachQuyenModule);
exports.DMLoaiThachQuyenModule = DMLoaiThachQuyenModule;
//# sourceMappingURL=dm-loai-thach-quyen.module.js.map