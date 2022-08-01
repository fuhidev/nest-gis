"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanChimBienVatChatController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const nhan_chim_bien_vat_chat_service_1 = require("./nhan-chim-bien-vat-chat.service");
const nhan_chim_bien_vat_chat_entity_1 = require("./nhan-chim-bien-vat-chat.entity");
const nestjs_gis_1 = require("../../../../../../dist");
let NhanChimBienVatChatController = class NhanChimBienVatChatController {
    constructor(service) {
        this.service = service;
    }
};
NhanChimBienVatChatController = __decorate([
    (0, nestjs_gis_1.RouteMetadata)(),
    (0, crud_1.Crud)({
        model: { type: nhan_chim_bien_vat_chat_entity_1.NhanChimBienVatChatEntity },
        params: {
            ma: {
                primary: true,
                field: 'ma',
                type: 'number',
            },
        },
        query: {
            join: {
                nhanChimBien: {},
                ten: {},
            },
        },
    }),
    (0, common_1.Controller)('rest/nhan-chim-bien-vat-chat'),
    __metadata("design:paramtypes", [nhan_chim_bien_vat_chat_service_1.NhanChimBienVatChatService])
], NhanChimBienVatChatController);
exports.NhanChimBienVatChatController = NhanChimBienVatChatController;
//# sourceMappingURL=nhan-chim-bien-vat-chat.controller.js.map