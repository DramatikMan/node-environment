FROM node:slim
SHELL ["/bin/bash", "-c"]
WORKDIR /project
ENV PYTHONPATH "${PYTHONPATH}:/project"
COPY . .
RUN npm install --no-package-lock
RUN npx tsc
CMD npm run dev