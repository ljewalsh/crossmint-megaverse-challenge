## Crossmint Megaverse Challenge

This repo holds my solution to Crossmint's Megaverse coding challenge written in TypeScript.

To run:
1. Run `npm install` to install packages
2. Copy `.env.example` file and rename to `.env`. Add the candidate id in empty string
2. Run `npm run dev`

Phase1 of the challenge will run first and then phase2. Any changes made to the code should restart the process

To run tests:
1. Run `npm install`
2. Run `npm run test`

### Explanation of phases

#### Phase1

Phase1 is a method which takes a mapSize and distanceFromEdge argument (both integers).  It creates a cross of polyanets on a megaverse map of their choosen size:

``
  phase1(mapSize, distanceFromEdge)
``

For example, for a map of size 3, polyanets will be created in the following structure (where x is a polyanet and space is empty space):

```
|x| |x|
| |x| |
|x| |x|
```

The user can also specify a distance from the edge that the cross should start. The default value is 0.

For example, for a map of size 5 with a distance of 1, polyanets will be created in the following structure (where x is a polyanet and space is empty space):

```
| | | | | |
| |x| |x| |
| | |x| | |
| |x| |x| |
| | | | | |
```

Map sizes must only be odd numbers and the distance from edge value cannot exceed the amount of space available on the map.

### Phase2

Phase2 calls the goal map endpoint to retrieve the expected layout of the megaverse for the candidate.

It then implements the map based on the polyanets, soloons, and comeths described in the goal map, taking into account the color of the soloon and the direction of each cometh.
