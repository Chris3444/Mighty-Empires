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
TILE |O--|| REALM : composes
TILE ||--|{ BIOME : has
TILE {
    int x
    int y
    bool razed
    string terrain
}

BIOME {
    string type
    string speed
}

CHARACTER }|--|| REALM: belongs
CHARACTER }O--|| TILE: hosts
CHARACTER {
    string name
    string description
    byte diplomacy
    byte martial
    byte stewardship
    byte intrigue
    byte wisdom
    byte honor
    byte agressivity
    byte independence
    int treasure
    int op
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
    int substence
    int food
    int recruitment_cap
    byte defence
}

%% TODO add settelment type %%


REALM ||--O{ DIPLOMACY: HAS
REALM ||--|| CHARACTER : has
REALM ||--|| RACE: hosts
REALM {
    string race
    string description
}

DIPLOMACY ||--|| REALM: has
DIPLOMACY {
    string relationship
}

TRANSPORT{
    string type
    string biome
    int cost
}

CHARACTER ||--o| BANNER: COMMANDS
BANNER ||--|{ UNIT: has
BANNER {
    int food
}

UNIT {
    string type
    int points
    int xp
}

MESSENGER }O--|| REALM: belongs
MESSENGER O{--|| TILE: positioned
MESSENGER {
    string message
}


```