n = int(input('Digite um número:'))
par = n % 2
if par==0:
    print('O numero {} é par'.format(n))
else: 
    print('O numero {} é impar'.format(n))