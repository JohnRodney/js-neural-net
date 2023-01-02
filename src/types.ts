export type AWeight = {
  // The id of the neuron that the weight is connected to
  id: number;
  // the id of the neuron that the weight belongs to
  ownerId: number;
  // The weight value 
  weight: number;
}

export type ANeuron = {
  // The id of the neuron
  id: number;
  // The weights of the neuron
  weights: AWeight[];
}

// The layer is an array of neurons
export type Layer = ANeuron[];
// The neural net is an array of layers 
export type NeuralNet = Layer[];

// The error dictionary is an object with a key of type string and a value of type ACustomError
export type ACustomError = {
  message: string;
  code: number;
  condition: (input: any) => boolean;
};

// The error dictionary is an object with a key of type string and a value of type ACustomError
export type ErrorDictionary = {
  [key: string]: ACustomError;
};