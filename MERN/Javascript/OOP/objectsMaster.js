const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
    const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    console.log(bListPkmn);
    
    const pkmnIds = pokémon.map( p => p.id )
    console.log(pkmnIds);
    
    const div3 = pokémon.filter( p => p.id % 3 === 0);
    console.log(div3);
    
    const fireType = [...pokémon].filter(items => items.types.includes("fire"));
    console.log(fireType);
    
    const moreThanOne = pokémon.filter(items => items.types.length % 2 === 0)
    console.log(moreThanOne)
    
    const namePoke = pokémon.map(items => items.name)
    console.log(namePoke)
    
    const bigId = pokémon.filter(items => items.id >= 99)
    console.log(bigId)
    
    console.log("*****more work below halfway done*****");
    // still need to Fix
    const poisonPoke = [...pokémon].filter(function(items){
        return items.types.includes("poison");
    });
    console.log(poisonPoke);
    
    const flyingPoke = [...pokémon].filter(function(items){
        return items.types.includes("flying");
    });
    console.log(flyingPoke);
    
    const normalPoke = [...pokémon].filter(function(items){
        return items.types.includes("normal");
    });
    console.log(normalPoke);