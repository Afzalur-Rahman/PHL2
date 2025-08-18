import { IncomingMessage, ServerResponse } from "http";
import { handleProducts } from "../controller/product.controller";

export const routeHandler = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = req.url;
  //   console.log(req);
  if (url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Welcome to node js server");
  } else if (url?.startsWith("/products")) {
    await handleProducts(req, res);
  } else {
    res.writeHead(404);
    res.end("Bhai to poth vuul korechen");
  }

  //
  //  function body here
};
