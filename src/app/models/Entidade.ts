import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import Cidade from './Cidade';
import Estado from './Estado';

@Table
class Entidade extends Model<Entidade> {
  @Column
  codigo: string;

  @Column
  nome: string;

  @Column
  razaosocial: string;

  @Column
  email: string;

  @Column
  cnpjcpf: string;

  @Column
  fornecedor: number;

  @Column
  cliente: number;

  @Column
  inscricaoestadual: string;

  @Column
  endereco: string;

  @Column
  numeroendereco: string;

  @Column
  complemento: string;

  @Column
  bairro: string;

  @Column
  cep: string;

  @Column
  @ForeignKey(() => Estado)
  idEstado: number;

  @BelongsTo(() => Estado)
  estado: Estado;

  /**
   * O idcidade é uma chave estrangeira de Cidade.
   * Se relaciona por id sozinho
   */
  @Column
  @ForeignKey(() => Cidade)
  idCidade: number;

  /**
   * Tudo da Cidade sera adicionado como objeto
   * na tabela virtual cidade
   */

  @BelongsTo(() => Cidade)
  cidade: Cidade;

  @Column
  extra1: string;

  @Column
  extra4: string;

  @Column
  extra5: string;
}

export default Entidade;
