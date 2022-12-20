
FROM node:16.15.0-alpine AS base
WORKDIR /app
COPY . .

FROM base AS build
RUN yarn install
RUN yarn build

FROM base AS image
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next

EXPOSE 3000
CMD ["sh", "-c", "yarn start"]
