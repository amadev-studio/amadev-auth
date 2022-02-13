export class loginError extends Error {
  constructor(errorCode: number, errorLabel: string) {
    super();
    return new Error(errorLabel);
  }
} 