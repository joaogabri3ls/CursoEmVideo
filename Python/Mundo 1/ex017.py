from math import hypot
co = float(input("Qual o valor do cateto oposto:"))
ca = float(input("Qual o valor do cateto adjacente:"))
hip = float(input(hypot(co, ca)))
print("O valor da hipotenusa é {}".format(hip))