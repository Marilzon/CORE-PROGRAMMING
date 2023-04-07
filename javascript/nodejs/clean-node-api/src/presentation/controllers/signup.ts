import { IHttpResponse, IHttpRequest } from "./../protocols/http";

import {} from "../protocols/http";
export class SignUpController {
  handle(httpRequest: IHttpRequest): IHttpResponse {
    const { name, email } = httpRequest.body;

    if (!name) {
      return {
        statusCode: 400,
        body: new Error("Missing param: name"),
      };
    }

    if (!email) {
      return {
        statusCode: 400,
        body: new Error("Missing param: email"),
      };
    }

    return {
      statusCode: 200,
      body: {
        message: "SignUp successful",
      },
    };
  }
}
