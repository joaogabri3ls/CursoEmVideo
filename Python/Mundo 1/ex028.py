from random import randint
pc = randint(0, 5)
print('Pensei em um número de 0 à 5, tente adivinhar!')
jg = int(input('Em que número eu pensei?'))
if pc==jg:
    print('Parabéns, você acertou!')
else:
    print('Você errou! o número escolhido foi {}!'.format(pc))
