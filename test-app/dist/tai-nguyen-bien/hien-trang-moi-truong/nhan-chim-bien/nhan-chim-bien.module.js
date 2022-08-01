"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanChimBienModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nhan_chim_bien_vat_chat_module_1 = require("./nhan-chim-bien-vat-chat/nhan-chim-bien-vat-chat.module");
const nhan_chim_bien_controller_1 = require("./nhan-chim-bien.controller");
const nhan_chim_bien_entity_1 = require("./nhan-chim-bien.entity");
const nhan_chim_bien_service_1 = require("./nhan-chim-bien.service");
let NhanChimBienModule = class NhanChimBienModule {
};
NhanChimBienModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([nhan_chim_bien_entity_1.NhanChimBienEntity]),
            nhan_chim_bien_vat_chat_module_1.NhanChimBienVatChatModule,
        ],
        providers: [nhan_chim_bien_service_1.NhanChimBienService],
        controllers: [nhan_chim_bien_controller_1.NhanChimBienController],
    })
], NhanChimBienModule);
exports.NhanChimBienModule = NhanChimBienModule;
//# sourceMappingURL=nhan-chim-bien.module.js.map