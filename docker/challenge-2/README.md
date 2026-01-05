## Descrição
Aplicação simples em Node.js com Express que se conecta a um MySQL para registrar nomes e renderizar uma lista em HTML. Cada requisição à raiz (`/`) garante a existência da tabela `people`, insere dois registros de exemplo (“Wan Song” e “Wesley”) e devolve a página com todos os nomes cadastrados.

## Arquitetura (docker-compose)
- `app`: Node 18, aguarda o MySQL com `dockerize`, instala dependências (`npm install`) e sobe em `3000`.
- `nginx`: proxy reverso expondo `http://localhost:8080` para o serviço `app`.
- `db`: MySQL 5.7 com base `nodedb` e credenciais `root/root`; dados persistem no diretório `mysql/`.

## Pré-requisitos
- Docker e Docker Compose instalados.

## Como subir
1. No diretório `full-cycle-challenges/docker/challenge-2`, execute:
   ```bash
   docker compose up --build
   ```
   (adicione `-d` para rodar em segundo plano).
2. Acesse `http://localhost:8080` (via Nginx) ou `http://localhost:3000` direto no container Node.
3. Cada atualização da página insere novamente os dois nomes de exemplo; a lista crescerá a cada requisição.

## Encerrando
- Pare os serviços com `docker compose down`. Para limpar os dados do MySQL, remova o diretório `mysql/`.

## Estrutura
- `node/`: código da API Express e Dockerfile.
- `nginx/`: configuração do proxy reverso.
- `mysql/`: dados persistidos do MySQL.
- `docker-compose.yaml`: orquestração dos serviços.
