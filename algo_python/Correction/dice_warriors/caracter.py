# import dice
from dice import Dice, RiggedDice


class Caracter:
    label = "Caracter"
    
    def __init__(self):
        pass
    
    def __str__(self):
        return f"I'm a {type(self).label}"


if __name__ == "__main__":
    a_dice = Dice()