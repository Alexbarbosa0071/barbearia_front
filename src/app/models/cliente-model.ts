export type Cliente = {
    id: number,
    nomeCompleto: string,
    telefone: string,
    endereco: string,
    ativo: boolean
};

export type Clientes = {
    clientes: Cliente[],
};

export type DeletarCliente = {
    Deletado: Boolean,
};

export type AtualizarCliente = {
    atualizado: Boolean,
}

export type CriarCliente = {
    criado: Boolean,
}