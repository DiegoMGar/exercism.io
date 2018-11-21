export default class SpaceAge {
    private earth_day_seconds: number = 31557600
    constructor(public seconds: number) { }
    onEarth = (): number => this.getRelation(1)
    onMercury = (): number => this.getRelation(0.2408467)
    onVenus = (): number => this.getRelation(0.61519726)
    onMars = (): number => this.getRelation(1.8808158)
    onJupiter = (): number => this.getRelation(11.862615)
    onSaturn = (): number => this.getRelation(29.447498)
    onUranus = (): number => this.getRelation(84.016846)
    onNeptune = (): number => this.getRelation(164.79132)
    getRelation = (relation: number): number => Math.round(this.seconds / this.earth_day_seconds / relation * 100) / 100
}