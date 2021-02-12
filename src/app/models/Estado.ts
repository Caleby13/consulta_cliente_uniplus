import { Model, Column, Table } from 'sequelize-typescript';

@Table
class Estado extends Model<Estado> {
  @Column
  codigo: string;

  @Column
  nome: string;
}

export default Estado;
