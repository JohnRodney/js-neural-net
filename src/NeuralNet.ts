import { errorDictionary, CustomError } from "./Errors";
import { AWeight, Layer } from "./types";

// Neuron Class
export class Neuron {
  id: number;
  weights: AWeight[];
  threshold: number;
  bias: number;
  output: number;

  constructor() {
    this.weights = [] as AWeight[];
    this.id = Math.random();
    this.threshold = Math.random();
    this.bias = Math.random();
    this.output = 0;
  }

  activationFunction(input: Neuron[]) {
    // Get the sum of the inputs
    const sum: number = input.reduce((acc, curr) => {
      // Get the weight of the neuron
      const weight = this.weights.find((weight) => weight.id === curr.id)?.weight;
      // Check if the weight is undefined
      if (weight === undefined) {
        // If it is undefined, throw an error
        throw new Error("Weight is undefined");
      }
      // Return the accumulator plus the weight times the output of the neuron 
      return acc + weight * curr.output;
    }, 0);

    // Return the sigmoid of the sum
    return this.sigmoid(sum);
  }

  // sigmoid function
  sigmoid(input: number) {
    const inputRange = 10000; 
    return 1 / (1 + Math.exp(-input/inputRange));
  }

  setupWeights(prevLayer: Neuron[]) {
    this.weights = prevLayer.map((neuron) => ({ 
      id: neuron.id,
      ownerId: this.id,
      weight: Math.random(),
    }));
  }
}

// Neural Network Class
export class NeuralNetowrk {
  layers: Neuron[][];

  constructor(numNeurons: number[]) {
    // Error Handling 
    Object.keys(errorDictionary).forEach((key) => {
      // Destructure the error dictionary
      const { message, code, condition } = errorDictionary[key];
      // Check if the condition is true
      if (condition(numNeurons)) {
        // Throw an error if the condition is true with the message and code
        throw new CustomError(message, code);
      }
    });

    // Create the layers
    this.layers = numNeurons.reduce((acc, curr) => {
      // Create a new layer from the number of neurons
      acc.push(new Array(curr).fill(new Neuron()));
      // Return the accumulator which is the layers
      return acc;
    }, [] as Neuron[][]);

    // Create the weights
    this.layers.forEach((layer, index) => {
      // Check if the layer is the first layer
      if (index === 0) {
        // If it is the first layer, return
        return;
      }
      // Get the previous layer
      const prevLayer = this.layers[index - 1];
      // Create the weights for the layer
      layer.forEach((neuron) => {
        // Create the weights for the neuron
        neuron.setupWeights(prevLayer);
      });
    });
  }

  // Get the weights of the neural network
  getWeights() {
    // Get the weights of the neural network
    return this.layers.map((layer) => layer.map((neuron) => neuron.weights));
  }
  
  // Get the number of neurons in the neural network
  getNumNeurons() {
    // Get the number of neurons in the neural network
    return this.layers.map((layer) => layer.length);
  }

}

export default NeuralNetowrk;