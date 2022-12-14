import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DynamicRestModule,
  GeometryModule,
  GeometryTypeEnum,
} from 'nestjs-gis';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const dbConfig: PostgresConnectionOptions = {
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
// const dbConfig: SqlServerConnectionOptions = {
//   options: { encrypt: false },
//   type: 'mssql',
//   host: 'ditagis.com',
//   port: 1433,
//   username: 'sa',
//   password: 'Ditagis123',
//   database: 'BinhThuanGIS',
//   synchronize: false,
//   logging: false,
//   entities: ['dist/**/*.entity{.ts,.js}',],
// };

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    // TaiNguyenBienModule,
    GeometryModule.forRoot({
      srs: {
        wkt:
          'PROJCS["BINHTHUAN_VN2000",GEOGCS["GCS_VN_2000",DATUM["D_Vietnam_2000",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",500000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",108.5],PARAMETER["Scale_Factor",0.9999],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]',
      },
      arcService: 'http://171.244.32.245/arcgis',
      // hook: {
      // crudService: function(name) {
      //   if (name === 'getOne') {
      //     arguments[1][0].ma = 'hieu dep trai';
      //   }
      //   return 'hieu dep trai';
      // },
      // },
    }),
    // ArcgisProxyModule.forRoot({
    //   arcUrl: 'http://ditagis.com/arcgis',
    //   route: 'arcgis',
    //   user: {
    //     username: 'backendproxy',
    //     password: 'backendproxy@123',
    //   },
    // }),
    // ArcgisProxyModule.forRoot({
    //   arcUrl: 'http://ditagis.com/arcgis',
    //   route: 'ditagis',
    // }),
    // SystemManagerModule.forRoot({
    //   jwt: {
    //     secret: 'hieu ',
    //   },
    //   host: 'http://localhost:3000',
    // }),
    DynamicRestModule.forRoot({
      dbConfig: { ...dbConfig, name: 'rest' },
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
              spatialFeatureType: GeometryTypeEnum.Point,
            },
          ],
        },
      ],
    }),
    // DynamicRestModule.fromSys({
    //   dbConfig: { ...dbConfig, name: 'fromsys' },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
