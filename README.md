# JS Neural Network

A work in progress for increasing my understanding of AI and neural networks.

# Running Locally
So far no depencies.  Just dev depencies to transpile, test, and type the network code.
Available yarn commands: 
```javascript
  "test": "jest"
  "start:dev" : "npx nodemon",
  "build": "rimraf ./build && tsc",
  "start": "yarn build && node ./build/index.js",
  "view-docs": "mdstart readme.md"
```
`start:dev` - To keep the server running and listening to changes use start:dev

`start` - to build and run once use start.

`test` - Testing is done using jest to ensure all the proper properties are initialized and all the correct connections are made between the layers.

`view-docs` - a dev server to view readme markdown locally.

## Purpose

Implimentation of a basic data structure that mimics a neural net.
```js
{
  "layers": [
    [
      {
        "weights": [],
        "id": 0.4147502928406881
      }
    ],
    [
      {
        "weights": [
          {

            "id": 0.4147502928406881,
            "ownerId": 0.10895659478929409,
            "weight": 0.8957740639909175
          }
        ],
        "id": 0.10895659478929409
      }
    ],
    [
      {
        "weights": [
          {
            "id": 0.10895659478929409,
            "ownerId": 0.5158195447966163,
            "weight": 0.8677849469147172
          }
        ],
        "id": 0.5158195447966163
      }
    ]
  ]
}
```

The layers are an array composed of neurons that are each connected to the neurons of the "previous" array by its weight and referenced by the associated id.

Instantiating the net is done by an array who describes the number of neurons per layer. IE:
```ts
import NeuralNetwork from './NeuralNetwork';

const net = new NeuralNetwork([1, 1, 1]);
```

This would create a datastructure that matches the reference above with 3 layers each with a single neuron connected to the single neuron in the layer before it.