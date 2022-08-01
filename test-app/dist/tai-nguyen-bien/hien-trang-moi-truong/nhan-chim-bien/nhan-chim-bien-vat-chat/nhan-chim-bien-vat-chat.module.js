"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanChimBienVatChatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dm_vat_chat_nhan_chim_module_1 = require("./danh-muc/dm-vat-chat-nhan-chim/dm-vat-chat-nhan-chim.module");
const nhan_chim_bien_vat_chat_controller_1 = require("./nhan-chim-bien-vat-chat.controller");
const nhan_chim_bien_vat_chat_entity_1 = require("./nhan-chim-bien-vat-chat.entity");
const nhan_chim_bien_vat_chat_service_1 = require("./nhan-chim-bien-vat-chat.service");
let NhanChimBienVatChatModule = class NhanChimBienVatChatModule {
};
NhanChimBienVatChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([nhan_chim_bien_vat_chat_entity_1.NhanChimBienVatChatEntity]),
            dm_vat_chat_nhan_chim_module_1.DmVatChatNhanChimModule,
        ],
        providers: [nhan_chim_bien_vat_chat_service_1.NhanChimBienVatChatService],
        controllers: [nhan_chim_bien_vat_chat_controller_1.NhanChimBienVatChatController],
    })
], NhanChimBienVatChatModule);
exports.NhanChimBienVatChatModule = NhanChimBienVatChatModule;
//# sourceMappingURL=nhan-chim-bien-vat-chat.module.js.map