"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_gis_1 = require("../../dist");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const dbConfig = {
    type: 'postgres',
    host: '128.199.164.147',
    port: 5432,
    username: 'phuonghieuho',
    password: '123456',
    database: 'bds_dev',
    synchronize: false,
    logging: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(dbConfig),
            nestjs_gis_1.GeometryModule.forRoot({
                srs: {
                    wkt: 'PROJCS["BINHTHUAN_VN2000",GEOGCS["GCS_VN_2000",DATUM["D_Vietnam_2000",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",500000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",108.5],PARAMETER["Scale_Factor",0.9999],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]',
                },
                arcService: 'http://171.244.32.245/arcgis',
            }),
            nestjs_gis_1.DynamicRestModule.forRoot({
                dbConfig: Object.assign(Object.assign({}, dbConfig), { name: 'rest' }),
                restEntities: [
                    {
                        tableName: 'test',
                        path: 'test',
                        columns: [
                            { propertyName: 'column1', type: 'varchar', primary: true },
                            { propertyName: 'column2', type: 'boolean' },
                            {
                                propertyName: 'shape',
                                type: 'geometry',
                                spatialFeatureType: nestjs_gis_1.GeometryTypeEnum.Point,
                            },
                        ],
                    },
                ],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map