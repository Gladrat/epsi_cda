from __future__ import annotations

from dice import Dice, RiggedDice
from rich import print


class Caracter:
    label = "Caracter"
    
    def __init__(self, name: str, max_health: int = 20, attack: int = 8, defense: int = 3, dice = Dice()):
        self.name: str = name
        self.max_health: int = max_health
        self.attack_value: int = attack
        self.defense_value: int = defense
        self.health: int = max_health
        self.dice = dice
    
    def __str__(self):
        return f"I'm {self.name} the {self.get_label()} ({self.max_health}hp, att: {self.attack_value}, def: {self.defense_value})"
    
    def get_label(self) -> str:
        return type(self).label
    
    def get_name(self):
        return self.name
    
    def get_defense_value(self):
        return self.defense_value
    
    def regenerate(self):
        self.health = self.max_health
    
    def is_alive(self):
        return self.health > 0
    
    def show_healthbar(self):
        # print(f"[{'😻'*self.health}{'🤍'*(self.max_health - self.health)}] {self.health}/{self.max_health}hp")
        print(f"[{'●'*self.health}{'○'*(self.max_health - self.health)}] {self.health}/{self.max_health}hp")

    def decrease_health(self, amount: int):
        self.health -= amount
        if (self.health < 0):
            self.health = 0
        
    def compute_attack(self, result, target):
        return self.attack_value + result
        
    def attack(self, target: Caracter) -> None:
        if (self.is_alive()):
            result = self.dice.roll()
            damages = self.compute_attack(result, target)
            print(f"⚔️  {self.get_label()} {self.name} attack {target.get_label()} {target.get_name()} with {damages} damages (att: {self.attack_value} + roll: {result}) !")
            target.defend(damages, self)
    
    def compute_defend(self, damages, result):
        return damages - self.defense_value - result
    
    def defend(self, damages: int, attacker: Caracter):
        result = self.dice.roll()
        wounds = self.compute_defend(damages, result)
        print(f"🛡️ {self.get_label()} {self.name} defend against {attacker.get_label()} {attacker.get_name()} for {damages} damages and take {wounds} wounds (dmg: {damages} - def: {self.defense_value} - roll: {result}) !")
        self.decrease_health(wounds)
        self.show_healthbar()


class Warrior(Caracter):
    label = "[red]Warrior[/red]"
    
    def compute_attack(self, result, target):
        print("🪓 Axe your in face ! (att bonus: +3)")
        return super().compute_attack(result, target) + 3
    

class Mage(Caracter):
    label = "[blue]Mage[/blue]"
    
    def compute_defend(self, damages, result):
        print("🔮 Magic armor (def bonus: -3)")
        return super().compute_defend(damages, result) - 3
    
    
class Thief(Caracter):
    label = "[green]Thief[/green]"
    
    def compute_attack(self, result, target: Caracter):
        print(f"🔪 Backstab ! (att bonus: + {target.get_defense_value()})")
        return super().compute_attack(result, target) + target.get_defense_value()


if __name__ == "__main__":
    car1 = Warrior("James", 20, 8, 3, Dice())
    car2 = Thief("Elise", 20, 8, 3, Dice())
    
    print(car1)
    print(car2)
    
    while (car1.is_alive() and car2.is_alive()):
        car1.attack(car2)
        car2.attack(car1)