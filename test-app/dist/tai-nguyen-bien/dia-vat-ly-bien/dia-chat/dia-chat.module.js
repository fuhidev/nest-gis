"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaChatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dia_chat_controller_1 = require("./dia-chat.controller");
const dia_chat_entity_1 = require("./dia-chat.entity");
const dia_chat_service_1 = require("./dia-chat.service");
let DiaChatModule = class DiaChatModule {
};
DiaChatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dia_chat_entity_1.DiaChatEntity])],
        providers: [dia_chat_service_1.DiaChatService],
        controllers: [dia_chat_controller_1.DiaChatController],
    })
], DiaChatModule);
exports.DiaChatModule = DiaChatModule;
//# sourceMappingURL=dia-chat.module.js.map