import { ErrorDictionary } from "./types";

// Error Conditions for Neural Network Constructor
export const errorDictionary: ErrorDictionary = {
  InvalidInputType: {
    message: "Invalid input type",
    code: 0,
    condition: (input: number[]) => input.some((num) => typeof num !== "number"),
  },
  InvalidInputValue: {
    message: "Invalid input value number of nuerons was less than -1",
    code: 1,
    condition: (input: any) => input < -1,
  },
  InvalidNumberOfNeurons: { 
    message: "Invalid number of neurons input length was 0",
    code: 2,
    condition: (numNeurons: number[]) => numNeurons.length === 0,
  },
};

export class CustomError {
  message: string;
  code: number;

  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }
}