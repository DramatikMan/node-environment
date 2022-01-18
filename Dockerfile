FROM node:slim
SHELL ["/bin/bash", "-c"]
WORKDIR /project
ENV PYTHONPATH "${PYTHONPATH}:/project"
COPY .eslintrc.json \ 
    babel.config.json \
    package.json \
    tsconfig.json \
    webpack.config.js \
    ./
COPY src src
RUN npm install --no-package-lock
RUN npx tsc
CMD npm run dev