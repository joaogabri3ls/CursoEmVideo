salario = int(input('Qual o salário do funcionário?'))
f = salario * 1.10
if salario > 1250:
    print('O funcionário recebe R${:.2f} e receberá um aumento de 10%, assim o seu salário pásssara a ser R${:.2f}'.format(salario, f))

f2 = salario * 1.15
if salario < 1250:
    print('O funcionário receve R${:.2f} e receberá um aumento de 15%, assim seu salário pássara a ser R${:.2f}'.format(salario, f2))