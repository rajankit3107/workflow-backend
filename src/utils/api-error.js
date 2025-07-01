class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) this.stack = stack;
    Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };
