import { Router } from 'express';
import produtoRoutes from './produtos.routes'
import grupoProdutoRoutes from './grupoProd.routes'
import clienteRoutes from './clientes.routes'
import vendasRoutes from './venda.routes'
import ItemVendasRoutes from './itemvenda.routes'
import ItemVendasAcessoriaRoutes from './itemvenda.routes'
import formapagamento from './formaPagamento.routes'
import funcionarioController from './funcionario.routes'

const routes = Router();



routes.use("/cliente", clienteRoutes)
routes.use("/funcionario", funcionarioController)
routes.use("/itemvenda", ItemVendasRoutes)
routes.use("/itemvendaAcessoria", ItemVendasAcessoriaRoutes)
routes.use("/venda", vendasRoutes)
routes.use("/produto", produtoRoutes.produtoRoutes)
routes.use("/estoque", produtoRoutes.produtoRoutesEestoqueRemove)
routes.use("/grupoproduto", grupoProdutoRoutes)
routes.use("/produtoEstoque", produtoRoutes.produtoRoutesEestoqueAdd)
routes.use("/formapagamento", formapagamento)

export default routes;
