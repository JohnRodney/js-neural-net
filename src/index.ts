import NeuralNetowrk from "./NeuralNet";

const neuralNetConfig = [1, 1, 1];
const net = new NeuralNetowrk(neuralNetConfig);

console.log(JSON.stringify(net.getWeights()));