const Earth_day_seconds: number = 31557600
const PLANET_TIMING: { [key: string]: number } = {
    onEarth: Earth_day_seconds,
    onMercury: Earth_day_seconds * 0.2408467,
    onVenus: Earth_day_seconds * 0.61519726,
    onMars: Earth_day_seconds * 1.8808158,
    onJupiter: Earth_day_seconds * 11.862615,
    onSaturn: Earth_day_seconds * 29.447498,
    onUranus: Earth_day_seconds * 84.016846,
    onNeptune: Earth_day_seconds * 164.79132
}

class SpaceAge {
    [k: string]: any // INDEX SIGNATURE
    constructor(public seconds: number) {
        for (const x of Object.keys(PLANET_TIMING)) {
            this[x] = (): number => this.calculateYears(PLANET_TIMING[x])
        }
    }
    calculateYears = (cycleTime: number): number => Math.round(this.seconds / cycleTime * 100 + Number.EPSILON) / 100
}

export default SpaceAge