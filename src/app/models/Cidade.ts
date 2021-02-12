import { Model, Column, Table } from 'sequelize-typescript';

@Table
class Cidade extends Model<Cidade> {
  @Column
  codigo: number;

  @Column
  nome: string;
}

export default Cidade;
