import type { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "praha-1",
    city: "Praha 1",
    address: "Národní 949/19",
    zip: "110 00 Staré Město",
    transport: "Metro B – Národní třída (1 min chůze)",
    isMain: true,
  },
  {
    id: "praha-6",
    city: "Praha 6",
    address: "Bělohorská 1393/44",
    zip: "169 00 Praha 6",
    transport: "Tram 22 – Malovanka (2 min chůze)",
  },
  {
    id: "slany",
    city: "Slaný",
    address: "Třebízského 182",
    zip: "274 01 Slaný",
    transport: "5 min od vlakového nádraží Slaný",
  },
  {
    id: "beroun-1",
    city: "Beroun",
    address: "Havlíčkova 128",
    zip: "266 01 Beroun",
    transport: "10 min od vlakového nádraží Beroun",
  },
  {
    id: "beroun-2",
    city: "Beroun",
    address: "Plzeňská 145/49",
    zip: "266 01 Beroun-Město",
    transport: "Na hlavní ulici v centru Berouna",
  },
  {
    id: "plzen",
    city: "Plzeň",
    address: "Gerská 2030/23",
    zip: "323 00 Plzeň 1-Bolevec",
    transport: "Trolejbus 13 – Gerská (1 min chůze)",
  },
];

export function getLocationsByCity(citySlug: string): Location[] {
  const cityMap: Record<string, string[]> = {
    praha: ["praha-1", "praha-6"],
    plzen: ["plzen"],
    beroun: ["beroun-1", "beroun-2"],
    slany: ["slany"],
  };
  const ids = cityMap[citySlug] || [];
  return locations.filter((l) => ids.includes(l.id));
}
