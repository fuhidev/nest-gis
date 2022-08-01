import { Column } from 'nestjs-gis';
import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DMVatChatNhanChim')
export class DMVatChatNhanChimEntity {
  @PrimaryColumn({ name: 'Code', type: 'int' }) code: number;
  @Column({
    name: 'Value',
    nullable: true,
    alias: 'Giá trị',
  })
  value: string;
}
