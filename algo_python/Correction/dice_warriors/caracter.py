# import dice
from dice import Dice, RiggedDice


class Caracter:
    label = "Caracter"
    
    def __init__(self, name, max_health = 20, attack = 8, defense = 3):
        self.name = name
        self.max_health = max_health
        self.attack_value = attack
        self.defense_value = defense
    
    def __str__(self):
        return f"I'm {self.name} the {type(self).label} ({self.max_health}hp, att: {self.attack_value}, def: {self.defense_value})"


class Warrior(Caracter):
    label = "Warrior"

if __name__ == "__main__":
    a_dice = Dice()
    car1 = Warrior("James", 20, 8, 3)
    print(car1)