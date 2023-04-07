import { badRequest } from './../helpers/http.helper';
import { MissingParamError } from './../errors/missing.params.error';
import { IHttpResponse, IHttpRequest } from "./../protocols/http";

import {} from "../protocols/http";
export class SignUpController {
  handle(httpRequest: IHttpRequest): IHttpResponse {
    const { name, email } = httpRequest.body;

    if (!name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!email) {
      return badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 200,
      body: {
        message: "SignUp successful",
      },
    };
  }
}
