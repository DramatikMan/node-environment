FROM node:slim
SHELL ["/bin/bash", "-c"]
WORKDIR /project
COPY . .
RUN npm install --no-package-lock
RUN npx tsc
CMD npm run dev