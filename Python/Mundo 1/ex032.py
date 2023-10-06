ano = int(input('Digite o ano para saber se ele é bissexto:'))
b = ano % 4 or ano % 400 and 100
if b==0:
    print('{} É um ano bissexto'.format(ano))
else:
    print('{} Não é um ano bissexto'.format(ano))