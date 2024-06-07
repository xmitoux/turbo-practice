##### dev-base #####
FROM node:20.13 as dev-base
WORKDIR /app
EXPOSE 3000
EXPOSE 3001

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm

##### dev #####
FROM dev-base as dev
ENV NODE_ENV=development

COPY --chown=node:node . .

RUN pnpm install --frozen-lockfile && \
    chown -R node:node . && \
    chown -R node:node $PNPM_HOME

USER node

RUN pnpm config set store-dir $PNPM_HOME/store --global
