export interface CreateHeroDto {
  slug: string;
  base_attack: number;
  base_health: number;
  max_level: number;
  rarity: "COMMON" | "RARE" | "EPIC" | "LEGENDARY";
}
