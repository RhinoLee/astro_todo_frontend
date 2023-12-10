FROM node:20.10.0-alpine AS development

WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# ENV HOST=0.0.0.0
# ENV PORT=4321
# EXPOSE 4321

# CMD [ "npm", "run", "dev" ]


FROM node:20.10.0-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20.10.0-alpine AS production

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD node ./dist/server/entry.mjs