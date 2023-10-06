l = float(input('Qual a largura da parede:'))
a = float(input('Qual a altura da parede:'))
area = l * a
t = 0.5 * area
print ('Sua parede tem a dimensão de {}x{} e sua área é de {}m2, para pintar essa parede você precisará de {} Litros de tinta'.format(l, a, area, t))