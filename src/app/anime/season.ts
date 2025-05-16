export class Season {
    name: string;
    episodes: number;

    constructor(name: string, episodes: number) {
        this.name = name;
        this.episodes = episodes;
    }

    getEpisodes(): number {
        return this.episodes;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {   
        this.name = name;
    }
    setEpisodes(episodes: number): void {
        this.episodes = episodes;
    }
}
