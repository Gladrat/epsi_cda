def sequence_comp_complete(seq):
    seq_permutee = []
    for s in seq:
        seq_permutee = sequence_complementaire(s)
        print(f"Resultat permuté: {seq_permutee}")
        nouvelle_seq.append(seq_permutee)
        print("---")
    print(f"Séquence complémentaire: {nouvelle_seq}")
    return seq_permutee

def sequence_complementaire(seq_str: str) -> str:
    print(f"Travail sur la sequence: {seq_str}")
    seq_permutee = ""
    for lettre in seq_str:
        if (lettre == "A"):
            seq_permutee = seq_permutee + "T"
        elif (lettre == "T"):
            seq_permutee = seq_permutee + "A"
        elif (lettre == "C"):
            seq_permutee = seq_permutee + "G"
        elif (lettre == "G"):
            seq_permutee = seq_permutee + "C"
        else:
            seq_permutee += "-"
    return seq_permutee

seq = ["CCATTAGTTA", "ATTGCCTTGG", "CGCTTGAAAT"]
nouvelle_seq = []
nouvelle_seq = sequence_comp_complete(seq)
    
# https://github.com/Gladrat/epsi_cda/