FROM node:12.16.1-alpine@sha256:bba77d0ca8820b43af898b3c50d4e8b68dc703ebbd958319af2f21f2d3c309f5 AS dist-builder
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM node:12.16.1-alpine@sha256:bba77d0ca8820b43af898b3c50d4e8b68dc703ebbd958319af2f21f2d3c309f5 AS node_modules
COPY . /app
WORKDIR /app
RUN npm install --production

FROM node:12.16.1-alpine@sha256:bba77d0ca8820b43af898b3c50d4e8b68dc703ebbd958319af2f21f2d3c309f5
WORKDIR /app
COPY --from=dist-builder /app/dist /app
COPY --from=dist-builder /app/config /app/config
COPY --from=node_modules /app/package.json /app/package.json
COPY --from=node_modules /app/package-lock.json /app/package-lock.json
COPY --from=node_modules /app/node_modules /app/node_modules

ENTRYPOINT ["node", "index.js"]
