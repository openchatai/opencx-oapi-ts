# OpenCX TypeScript Client

Strongly-typed SDK for the OpenCX API.

Types are generated based on the [OpenAPI spec](https://api.open.cx/api-json) using [OpenAPI TypeScript](https://openapi-ts.dev/).

For documentation, see our [API reference](https://docs.opencopilot.so/api-reference/), or use the [Swagger UI](https://api.open.cx/api).

## Installation

```sh
npm install https://github.com/openchatai/opencx-oapi-ts
```

## Usage

```ts
import { createOpenCXClient } from "opencx-oapi-ts";

const opencx = createOpenCXClient({
  apiKey: process.env.OPENCX_API_KEY!,
});

const sessions = await opencx.GET("/chat/sessions");

console.log(sessions.data);
```
