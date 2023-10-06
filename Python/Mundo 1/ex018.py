from math import sin, cos, tan, radians
ang = float(input("Digite o ângulo desejado:"))
sen= sin(radians(ang))
cos = cos(radians(ang))
tan = tan(radians(ang))
print('O ângulo {} têm como SENO={:.2f}, COSSENO={:.2f} e TANGENTE={:.2f}'.format(ang, sen, cos, tan))