seg1 = float(input('Primeiro segmento:'))
seg2 = float(input('Segundo segmento:'))
seg3 = float(input('Terceiro segmento:'))
if seg1+seg2 > seg3 and seg3+seg2 > seg1:
    print('É possível formar um triângulo com essas medidas')
else:
    print('Não é possível formar um triângulo com esses segmentos')