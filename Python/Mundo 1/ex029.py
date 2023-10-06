v = float(input('Qual a velocidade do veículo?'))
if v > 80:
    print('O veículo está acima da velocidade permitida e por isso foi multado!')
    multa = (v-80)*7
    print('O valor da multa é de R${:.2f}'.format(multa))