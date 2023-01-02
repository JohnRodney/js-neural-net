import NeuralNetowrk from "./NeuralNet";

const neuralNetConfig = [10, 10, 10];
describe("NeuralNet", () => {
  // Test the default construction portion of the neural network
  it("should create a neural net", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    expect(net).toBeTruthy();
  });
  it('should have a "layers" property', () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    expect(net.layers).toBeTruthy();
  });
  it("should have a layers property that is an array", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    expect(Array.isArray(net.layers)).toBeTruthy();
  });
  it("should have a layers property that is an array of arrays", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    const [firstLayer] = net.layers;
    expect(Array.isArray(firstLayer)).toBeTruthy();
  });
  it("should have a layers property that is an array of arrays of objects", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    const [firstLayer] = net.layers;
    expect(firstLayer.every(neruon => typeof neruon === 'object')).toBeTruthy();
  }); 
  it("should have a layers property with every nueron having a weights property", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    const [firstLayer] = net.layers;
    expect(firstLayer.every(neruon => neruon.weights)).toBeTruthy();
  });
  it("should have a layers property that is an array of arrays of objects with a weights property that is an array of object who's values are numbers", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    const [, secondLayer] = net.layers;
    expect(
      secondLayer.every(
        (neruon) =>
          neruon.weights.every((weight) => Object.values(weight).every((value) => typeof value === "number"))
      )
    ).toBeTruthy();
  });
  it("should have an empty weights array when it is the first layer", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    expect(net.layers[0][0].weights.length).toBe(0);
  });
  it("should throw an error if the input is not a number", () => {
    expect(() => new NeuralNetowrk(["a" as any])).toThrow();
  });
  it("should throw an error if the input is less than 0", () => {
    expect(() => new NeuralNetowrk([-1])).toThrow();
  });
  it("should throw an error if the input is an empty array", () => {
    expect(() => new NeuralNetowrk([])).toThrow();
  });

  // Test the weight connections portion of the neural network
  it("should have every layer weight connected to every neuron in its previous layer", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    const [firstLayer, secondLayer] = net.layers;
    const firstLayerNeuronIds = firstLayer.map((neuron) => neuron.id);
    expect(secondLayer.every(neuron => neuron.weights.every((weight) => firstLayerNeuronIds.includes(weight.id)))).toBeTruthy();
  });
  it("should have every neuron's weights should contain its id as owner property", () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    const [, secondLayer] = net.layers;
    expect(secondLayer.every(neuron => neuron.weights.every((weight) => weight.ownerId === neuron.id))).toBeTruthy();
  });
  it('should have a weight property on every weight in every layer that is of type number', () => {
    const net = new NeuralNetowrk(neuralNetConfig);
    const [, secondLayer] = net.layers;
    expect(secondLayer.every(neuron => neuron.weights.every((weight) => typeof weight.weight === 'number'))).toBeTruthy();
  });
});