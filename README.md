

# FlightApp

AngularJS flight search App using Amadeus Open Source API.

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## How to run

Monorepo consists of 2 applications:
- flight-search - AngularJS frontend,
- flight-api - NestJS backend service

Make sure you have `nx` installed:
```
npm install -g nx
```


Run both apps:
```
npm install
nx run-many --parallel --target=serve --all
```

Open your browser with address `http://localhost:4200/`
