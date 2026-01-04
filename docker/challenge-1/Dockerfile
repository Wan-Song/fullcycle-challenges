FROM golang:1.22-alpine AS builder

WORKDIR /app
COPY . .

RUN go build -ldflags="-s -w" -o /desafio_1 main.go

FROM scratch
COPY --from=builder /desafio_1 /desafio_1
ENTRYPOINT ["/desafio_1"]