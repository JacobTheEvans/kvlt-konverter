FROM node:12.16.1-alpine@sha256:bba77d0ca8820b43af898b3c50d4e8b68dc703ebbd958319af2f21f2d3c309f5 AS builder
COPY . /app
WORKDIR /app
RUN npm install

FROM node:12.16.1-alpine@sha256:bba77d0ca8820b43af898b3c50d4e8b68dc703ebbd958319af2f21f2d3c309f5
WORKDIR /app
COPY . /app
COPY --from=builder /app/node_modules /app/node_modules
ENTRYPOINT ["node", "index.js"]
