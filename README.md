# Mighty Empires

## This project is under development

to start the porgram run cerate an network 
```docker network create mighty_network```

Then run the following commands
```docker-compose build``` and
```docker-compose up```

```mermaid
---
title: Mighty Empires
---
erDiagram

REALM ||--|{ SETTLEMENT : has
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
    int diplomacy
    int martial
    int stewardship
    int intrigue
    int wisdom
    int xp
}

RACE {
    string name
    string description
}

SETTLEMENT |o--|| TILE: positioned
SETTLEMENT {   
    string type
    string name 
    string description
    int revenue
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
    int cost
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

```