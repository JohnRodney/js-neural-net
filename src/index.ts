import NeuralNetowrk from "./NeuralNet";

const neuralNetConfig = [784, 16, 16, 10];
const net = new NeuralNetowrk(neuralNetConfig);

console.log(JSON.stringify(net.getWeights()));