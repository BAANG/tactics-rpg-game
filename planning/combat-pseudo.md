How Combat will work:

As an example, let us assume that Pikachu attacks Bulbasaur with tackle, and bulbasaur's counter attack uses Vine Whip.

Any attacks made will have the following features:

- Damage
    - For pikachu's attack (physical type attack):
        - Damage = (pikachu.attack + tackle.power) - bulbasaur.defense
    - For Bulbasaur counter attack (special type attack)
        - Damage = (bulbasaur.spAttack + vineWhip.power) - pikachu.spDefense
    - Only subtract damage from hp if damage is greater than zero
        
- Hit Chance
    - For pikachu's attack (physical type attack):
        - Hit Chance = tackle.accuracy + (pikachu.speed - bulbasaur.speed)
    - For Bulbasaur counter attack (special type attack)
        - Hit Chance = vineWhip.accuracy + (bulbasaur.speed - pikachu.speed)
    - If the Hit Chance is greater than 100%,
        - Crit chance for hit = Hit Chance - 100

- Crit Chance
    - The crit chance is a percentage chance that Damage will be doubled.

If the attacker hits (hit chance), then the defender's health will lower by the damage modifier (damage).