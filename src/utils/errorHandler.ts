export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export function handleError(error: any) {
  if (error instanceof ValidationError) {
    console.error(`Validation Error: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Unknown Error: ${error.message}`);
  } else {
    console.error("An unknown error occurred");
  }
}
