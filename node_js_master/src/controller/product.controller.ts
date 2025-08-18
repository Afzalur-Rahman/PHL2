import { IProduct } from "../types/product";
import { parseBody } from "./../utils/parseBody";
import { IncomingMessage, ServerResponse } from "http";

// Example products array
export const products = [
  { id: 1, name: "book" },
  { id: 2, name: "Product B" },
];

export const handleProducts = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = req.url;
  const idMatch = url?.match(/\/products\/(\d+)/);
  const id = idMatch ? Number(idMatch[1]) : null;

  //
  if (req.method === "GET" && url === "/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(products));
  } else if (req.method === "POST" && url === "/products") {
    try {
      const body = await parseBody(req);
      const newProduct: IProduct = { id: 3, name: body.name };
      products.push(newProduct);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(JSON.stringify(products));
    } catch (err) {
      res.writeHead(400);
      res.end("error occured");
    }
  } else if (req.method === "PUT" && idMatch) {
    const body = await parseBody(req);
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index].name = body.name;
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(products));
    } else {
      res.writeHead(404);
      res.end("Error Occured");
    }
  }
};

