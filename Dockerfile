FROM node:slim
SHELL ["/bin/bash", "-c"]
WORKDIR /project
COPY . .
RUN npm install --package-lock=false
RUN npx tsc
CMD npm run dev