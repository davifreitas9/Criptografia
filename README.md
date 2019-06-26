Código de César
Conta a história que Júlio César utilizava um código nas mensagens enviadas a seus generais, um sistema simples de substituição, no qual cada letra da mensagem original era trocada pela letra que se situa três posições à sua frente. Ficando da seguinte forma:
Cada letra “A” era substituída pela Letra “D”, “B” por “E” e assim sucessivamente.
Qualquer código que tenha esse padrão é considerado um código de César.
O alfabéto possui 26 letras, dessa forma pode-se cifrar o texto de 26 formas diferente
Vejamos um Exemplo:
Texto original:
clube dos geeks
Texto cifrado:
foxeh#grv#jhhnv
Obs. “#” representa o espaço quando substituído.
Podemos reparar que a letra “c” será sempre substituída pela letra “f”, assim como a letra “e” sempre pela letra “h”, ou seja à um padrão.

Cifra de Vigenère
A cifra de Vigenère é uma técnica de criptografia por substituição polialfabética que utiliza uma série de cifras de César diferentes, baseadas nas letras de uma palavra-chave.
Esse método de criptografia foi descrito originalmente pelo criptologista italiano Giovan Battista Bellaso em um livro de 1553 de nome “La cifra del. Sig. Giovan Battista Bellaso”. Curiosamente, o método foi atribuído posteriormente – e de forma errônea – a Blaise de Vigenère no século XIX, e por isso é conhecida até os dias de hoje por “Cifra de Vigenère”.

Trata-se de uma cifra muito simples de entender, implementar e até mesmo quebrar, mas mesmo assim três séculos se passaram até que alguém conseguisse quebrá-la (decifrar mensagens). Chegou a receber a alcunha de “le chiffre indéchiffrable” (“A cifra indecifrável”, em francês). Um método geral de decifrá-la foi publicado pelo criptógrafo e arqueólogo alemão Friedrich Kasiski em 1863 apenas.
Funcionamento da cifra
Essa cifra consiste em várias cifras de César utilizadas em sequência, com valores de deslocamento diferentes e obtidos a partir de uma palavra-chave (uma espécie de “senha”).

A cifragem é realizada com o uso de uma tabela de alfabetos, denominada tabula recta, ou “quadrado de Vigenère”, que consiste no alfabeto escrito 26 vezes em linhas diferentes, cada um deslocado ciclicamente para a esquerda comparado com o alfabeto anterior, de forma a corresponder às 26 cifras de César possíveis. Durante o processo de criptografia, a cifra usa um alfabeto diferente de uma das linhas, e o alfabeto a ser utilizado em cada ponto depende da palavra-chave, que é repetida caso a mensagem a ser cifrada seja maior do que ela.
