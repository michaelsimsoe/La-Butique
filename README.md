# La Butique Demo App

A basic e-commerce application demo.
Has the following views:

- Home
- Categories
- Product

## Local development

`npm install`

`npm run dev`

This project makes use of Typicodes **JSON Server** for a fake backend implementation and **Concurrently** to run both the server and webpack-dev-server with one command.

- [JSON Server](https://github.com/typicode/json-server#static-file-server)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently#readme)

In order to serve static files with **JSON Server** this project also makes use of **http-proxy-middleware**. Its configuration can be found in `src/setupProxy.js`. The static files are located in `./static`

- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#readme)
