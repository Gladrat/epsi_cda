class Voiture:

    # couleurs_autorisees = []

    def __init__(self, couleur="rouge", toit_ouvrant=False):
        self._couleur = couleur
        self._toit_ouvrant = toit_ouvrant
        self._vitesse_max = 250
        self._vitesse_courante = 0
        self._demarree = False
        self._nom = "Tuture"
        self._couleurs_autorisees = ["rouge", "verte", "bleue", "noire"]
        print("Création d'une voiture")
    
    def __str__(self):
        return f"Une voiture {self._couleur}, roulant à {self._vitesse_courante}km/h pour {self._vitesse_max}km/h max."
    
    @property
    def vitesse_max(self):
        return self._vitesse_max
    
    @vitesse_max.setter
    def vitesse_max(self, nouvelle_vitesse_max):
        print("Impossible de modifier la vitesse max...")
    
    @property
    def couleur(self):
        print("ACCES A LA COULEUR")
        return self._couleur
    
    @couleur.setter
    def couleur(self, nouvelle_couleur):
        print("MODIFICATION DE LA COULEUR")
        if (nouvelle_couleur in self._couleurs_autorisees):
            self._couleur = nouvelle_couleur
            print("La couleur a bien été modifiée")
        else:
            print(f"Vous n'avez pas l'autorisation pour attribuer la couleur {nouvelle_couleur} à la voiture")
    
    def demarrer(self):
        if (not self._demarree):
            self._demarree = True
            print(f"La voiture démarre...")
        else:
            print("La voiture est déjà démarrée")

    def modifier_bridage(self, nouvelle_vitesse_max):
        self._vitesse_max = nouvelle_vitesse_max

    def rouler(self, vitesse_cible):
        if (not self._demarree):
            print("La voiture n'est pas démarrée")
            return False
        if (vitesse_cible >= self._vitesse_max):
            vitesse_cible = self._vitesse_max
        for kmh in range(self._vitesse_courante + 1, vitesse_cible + 1):
            self._vitesse_courante = kmh
            print(f"Accélération à {self._vitesse_courante}km/h")
        
    def vitesse_actuelle(self):
        print(f"La voiture roule à {self._vitesse_courante} km/h")

ma_voiture = Voiture("Noire", True)
ta_voiture = Voiture(couleur="Bleue", toit_ouvrant=False)

print(ma_voiture)
ma_voiture.demarrer()
ma_voiture.demarrer()
ma_voiture.rouler(50)
ma_voiture.vitesse_actuelle()
ma_voiture.rouler(100)
ma_voiture.vitesse_actuelle()

print(ma_voiture.couleur)
ma_voiture.couleur = "gris"