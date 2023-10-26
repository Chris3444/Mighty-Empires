# Mighty Empires

```mermaid
---
title: Mighty Empires
---
erDiagram

TILE ||--O{ TRANSPORT : hosts 
TILE ||--o{ DRAGON : hosts
TILE |O--|| REALM : composes
TILE {
    int x
    int y
    string terrain
    string[] biomes
}

CHARACTER }|--|| REALM: belongs
CHARACTER }O--|| TILE: hosts
CHARACTER {
    string name
    string description
    int[] stats
    int xp
}




REALM ||--|| CHARACTER : has
REALM ||--|| RACE: hosts
REALM {
    string race
    string description
    int treasure
}


TRANSPORT{
    string type
    string biome
}

CHARACTER ||--o{ UNIT: COMMANDS

UNIT {
    string type
    int points
    int xp
}



DRAGON {
    string description
}

RACE {
    string name
    string description
}




```