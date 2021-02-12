import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Entidade from '../models/Entidade';
import Cidade from '../models/Cidade';
import Estado from '../models/Estado';

class EntidadeController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { filter } = req.query;
    const entidade = await Entidade.findAll({
      where: {
        nome: { [Op.iLike]: `%${filter}%` },
        cliente: { [Op.eq]: 1 },
      },
      attributes: [
        'codigo',
        'nome',
        'razaosocial',
        'cnpjcpf',
        'endereco',
        'numeroendereco',
        'bairro',
        'cep',
        'idcidade',
      ],
      include: [
        {
          model: Cidade,
          as: 'cidade',
          attributes: ['nome'],
        },

        {
          model: Estado,
          as: 'estado',
          attributes: ['nome'],
        },
      ],

      order: ['nome'],
    });
    return res.json(entidade);
  }
}

export default new EntidadeController();
