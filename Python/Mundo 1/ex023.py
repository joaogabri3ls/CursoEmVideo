numero = int(input('Digite um numero de 0 a 9999:'))
u = numero // 1 % 10
d = numero // 10 % 10
c = numero // 100 % 10
m = numero // 1000 % 10
print ('Analisando o numero:{}  \nA unidade é:{}  \nA dezena é:{}  \nA centena é:{} \nO milhar é:{}'.format(numero, u, d, c , m))