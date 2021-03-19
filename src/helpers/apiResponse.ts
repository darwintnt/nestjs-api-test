import { HttpStatus, Injectable, Res } from '@nestjs/common';

@Injectable()
export class apiResponse {
  successResponse(@Res() res, data: any, code: number = HttpStatus.OK) {
    return res.status(code).json({
      code: code,
      data: data,
    });
  }
}
