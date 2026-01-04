# Desafio Docker - Go (Full Cycle)

Implementação do desafio de Docker em Go do curso Full Cycle. A imagem final é enxuta (base `scratch`) e executa o binário que imprime a mensagem `Full Cycle Rocks!!`.

## Imagem publicada
- Docker Hub: `wansongrv/fullcycle` (https://hub.docker.com/r/wansongrv/fullcycle)
- Executar direto:
  ```bash
  docker run --rm wansongrv/fullcycle
  # saída esperada:
  # Full Cycle Rocks!!
  ```

## Tecnologias
- Go 1.22
- Multi-stage build no Dockerfile gerando imagem final `scratch`
