frase = str(input('Digite o seu nome:')).strip()
print('O seu nome escrito em letras maiúsculas é:{}'.format(frase.upper()))
print('O seu nome escrito em letras minúsculas é:{}'.format(frase.lower()))
print('O seu nome completo tem {} letras' .format(len(frase)- frase.count(' ')))
separa = frase.split()
print ('O seu primeiro nome tem {} letras' .format(len(separa[0])))