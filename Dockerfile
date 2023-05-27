FROM node:7
WORKDIR /k8sapp
COPY . ./
ENTRYPOINT ["node", "app.js"]
