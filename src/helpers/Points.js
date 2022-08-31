function getPoint(point, config) {
    const _neighbours = neighbours(point, parseInt(config.width), parseInt(config.height)).split(",");
    const type = getType(point, config.nrStart, config.nrDestination);
    return {
        nr: point,
        isSelected: false,
        neighbours: _neighbours,
        type,
        weight: 10,
    };
}

function getType(point, nrStart, nrDestination) {
    const pointInt = parseInt(point);
    if (pointInt == nrDestination) return "destination";

    if (pointInt == nrStart) return "start";

    return "default";
}

function neighbours(point, totalWidth, totalHeigth) {
    const nextX = parseInt(point) + 1;
    const previousX = parseInt(point) - 1;
    const nextY = parseInt(point) + totalHeigth;
    const previousY = parseInt(point) - totalHeigth;

    const neighbours = [];

    if (nextX % totalWidth !== 1) neighbours.push(nextX);

    if (previousX % totalWidth > 0) neighbours.push(previousX);

    if (parseInt(nextY / totalHeigth) < totalHeigth) neighbours.push(nextY);

    if (previousY > 0 && parseInt(previousY / totalHeigth) >= 0)
        neighbours.push(previousY);

    return neighbours.toString();
}

function initPoints(config) {
    const nrOfPoints = (config.width || 10) * (config.height || 10);
    let points = [];
    for (let i = 1; i <= nrOfPoints; i++) {
        const point = getPoint(i, config);
        points.push(point);
    }

    return points;
}

export {
    initPoints
}