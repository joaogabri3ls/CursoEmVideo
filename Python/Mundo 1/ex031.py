d = float(input('Qual é a distância da viagem?'))
v = 0.50*d if d <= 200 else 0.45*d
print('O valor da passagem é de R${:.2f}'.format(v))
