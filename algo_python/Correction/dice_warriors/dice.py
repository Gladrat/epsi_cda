import random


class Dice:
    label = "Dice"
    
    def __init__(self, faces = 6):
        self.faces = faces
        
    def __str__(self):
        return f"I'm a {type(self).label} with {self.faces} faces"
    
    def roll(self):
        return random.randint(1, self.faces)


class RiggedDice(Dice):
    
    label = "Rigged Dice"
    
    def roll(self, rigged = False):
        # if (rigged):
        #     return self.faces
        # else:
        #     return super().roll()
        return self.faces if rigged else super().roll()


class WoodDice(Dice):
    label = "Wood Dice"


if (__name__ == "__main__"):
    print("Je suis dans le module dice !!!!")

    a_dice = Dice()
    print(a_dice)

    a_rigged_dice = RiggedDice(10)
    print(a_rigged_dice)

    a_wood_dice = WoodDice()
    print(a_wood_dice)

    for i in range(0, 100):
        print(a_rigged_dice.roll())