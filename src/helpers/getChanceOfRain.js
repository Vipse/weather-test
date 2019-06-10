export default function getChanceOfRain (pressure, temperature, amount) {
    const score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9);
    const mean = Math.round(Math.min(Math.max(score, 0), 100));
    const upperBound = Math.round(Math.min(1.5 * mean, 100));
    const lowerBound = Math.round(Math.max(0.5 * mean, 0));
    return { lowerBound, mean, upperBound };
}
