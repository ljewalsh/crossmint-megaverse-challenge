export const getCenterCoordinate = (size: number) => {
  const centerCoordinate = Math.floor(size / 2);
  return centerCoordinate;
};

const calculateCrossCoordinates = (
  mapSize: number,
  distanceFromEdge: number = 0
) => {
  if (mapSize % 2 === 0) {
    throw new Error("Map size must be an odd number");
  }
  const centerCoordinate = getCenterCoordinate(mapSize);
  if (centerCoordinate < distanceFromEdge) {
    throw new Error("Distance from edge is bigger than available space");
  }
  const coordinates = [[centerCoordinate, centerCoordinate]];
  const maxIndex = mapSize - centerCoordinate - distanceFromEdge;
  for (var i = 1; i < maxIndex; i++) {
    const topLeftCoordinates = [centerCoordinate - i, centerCoordinate - i];
    const topRightCoordinates = [centerCoordinate - i, centerCoordinate + i];
    const bottomLeftCoordinates = [centerCoordinate + i, centerCoordinate - i];
    const bottomRightCoordinates = [centerCoordinate + i, centerCoordinate + i];
    coordinates.push(topLeftCoordinates);
    coordinates.push(topRightCoordinates);
    coordinates.push(bottomLeftCoordinates);
    coordinates.push(bottomRightCoordinates);
  }
  return coordinates;
};

export default calculateCrossCoordinates;
