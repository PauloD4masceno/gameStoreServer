const express = require('express');
const app = express();
const port = 3030;

const i = 0;

const produtos = [
  {   
     id: '1',
     enderecoImagem: 'https://macmagazine.com.br/wp-content/uploads/2011/01/15-CoDMW1.png',
     nomeproduto: 'Call of Duty: Modern Warfare',
     tamanho: '2Gbps',
     desenvolvedor: 'Activision',
     preco: 'R$ 40.00',
     descricao: 'Call of Duty: Modern Warfare é um jogo eletrônico de tiro em primeira pessoa produzido pela Infinity Ward. Foi publicado pela Activision em 25 de outubro de 2019 para Microsoft Windows, PlayStation 4 e Xbox One. É o decimo sexto jogo da serie Call of Duty e actua como um "soft reboot" da sub-serie Modern Warfare. Os eventos do jogo ocorrem num cenário realista e moderno. Pela primeira vez na história da série, Call of Duty: Modern Warfare suporta multijogador em cross-platform. Activision também confirmou que o jogo não tem Passes de Temporada, permitindo assim lançar conteúdo gratuito pós-lançamento. Também foi o primeiro jogo desde Call of Duty: Ghosts (2013) sem o modo Zombies.',
   },
   {
     id:'2',
     enderecoImagem:'https://img.ibxk.com.br/2019/7/programas/16068503135919643.png',
     nomeproduto:'Garena: Freefire',
     tamanho:'1Gbps',
     desenvolvedor:'Garena',
     preco:'R$ 5.00',
     descricao: 'Garena Free Fire (também conhecido como Free Fire Battlegrounds ou somente Free Fire) é um jogo eletrônico mobile de ação-aventura do gênero battle royale, desenvolvido pela desenvolvedora vietnamita 111dots Studio e publicado pela Garena. O jogo obteve um beta aberto em novembro de 2017 e foi lançado oficialmente para Android de iOS em 4 de dezembro de 2017. O jogo consiste de até no total de cinquenta jogadores que caem de paraquedas em uma ilha em busca de armas e equipamentos a fim de matar os outros jogadores. Os jogadores escolhem à vontade a posição inicial, pegam armas e suprimentos para aumentar o tempo de vida na batalha.'
   },
   {
     id: '3',
     enderecoImagem:'https://cdn.ome.lt/rayor_pi5kd38v1bzO0L67npg-I=/200x0/smart/extras/capas/cod-black-ops-cold-war.jpeg',
     nomeproduto:'Call of Duty: Cold War',
     tamanho:'3Gbps',
     desenvolvedor:'Activision',
     preco:'R$ 50.00',
     descricao: 'Call of Duty: Black Ops Cold War é um jogo de tiro em primeira pessoa desenvolvido pela Treyarch e Raven Software e publicado pela Activision. É o quinto jogo da série Black Ops, e o décimo sétimo jogo da série Call of Duty ao todo. Serve como uma sequência direta de Call of Duty: Black Ops (2010) e uma prequela direta de Call of Duty: Black Ops II (2012). Call of Duty: Black Ops Cold War foi lançado em 13 de novembro de 2020. A revelação mundial da campanha foi em 26 de agosto de 2020, enquanto o do multiplayer chegou em 9 de setembro.'
   },
   {   
    id: '4',
    enderecoImagem: 'https://macmagazine.com.br/wp-content/uploads/2011/01/15-CoDMW1.png',
    nomeproduto: 'Call of Duty: Modern Warfare',
    tamanho: '2Gbps',
    desenvolvedor: 'Activision',
    preco: 'R$ 40.00',
    descricao: 'Call of Duty: Modern Warfare é um jogo eletrônico de tiro em primeira pessoa produzido pela Infinity Ward. Foi publicado pela Activision em 25 de outubro de 2019 para Microsoft Windows, PlayStation 4 e Xbox One. É o decimo sexto jogo da serie Call of Duty e actua como um "soft reboot" da sub-serie Modern Warfare. Os eventos do jogo ocorrem num cenário realista e moderno. Pela primeira vez na história da série, Call of Duty: Modern Warfare suporta multijogador em cross-platform. Activision também confirmou que o jogo não tem Passes de Temporada, permitindo assim lançar conteúdo gratuito pós-lançamento. Também foi o primeiro jogo desde Call of Duty: Ghosts (2013) sem o modo Zombies.',
  },
  {
    id:'5',
    enderecoImagem:'https://img.ibxk.com.br/2019/7/programas/16068503135919643.png',
    nomeproduto:'Garena: Freefire',
    tamanho:'1Gbps',
    desenvolvedor:'Garena',
    preco:'R$ 5.00',
    descricao: 'Garena Free Fire (também conhecido como Free Fire Battlegrounds ou somente Free Fire) é um jogo eletrônico mobile de ação-aventura do gênero battle royale, desenvolvido pela desenvolvedora vietnamita 111dots Studio e publicado pela Garena. O jogo obteve um beta aberto em novembro de 2017 e foi lançado oficialmente para Android de iOS em 4 de dezembro de 2017. O jogo consiste de até no total de cinquenta jogadores que caem de paraquedas em uma ilha em busca de armas e equipamentos a fim de matar os outros jogadores. Os jogadores escolhem à vontade a posição inicial, pegam armas e suprimentos para aumentar o tempo de vida na batalha.'
  },
  {
    id: '6',
    enderecoImagem:'https://cdn.ome.lt/rayor_pi5kd38v1bzO0L67npg-I=/200x0/smart/extras/capas/cod-black-ops-cold-war.jpeg',
    nomeproduto:'Call of Duty: Cold War',
    tamanho:'3Gbps',
    desenvolvedor:'Activision',
    preco:'R$ 50.00',
    descricao: 'Call of Duty: Black Ops Cold War é um jogo de tiro em primeira pessoa desenvolvido pela Treyarch e Raven Software e publicado pela Activision. É o quinto jogo da série Black Ops, e o décimo sétimo jogo da série Call of Duty ao todo. Serve como uma sequência direta de Call of Duty: Black Ops (2010) e uma prequela direta de Call of Duty: Black Ops II (2012). Call of Duty: Black Ops Cold War foi lançado em 13 de novembro de 2020. A revelação mundial da campanha foi em 26 de agosto de 2020, enquanto o do multiplayer chegou em 9 de setembro.'
  },
  {   
    id: '7',
    enderecoImagem: 'https://macmagazine.com.br/wp-content/uploads/2011/01/15-CoDMW1.png',
    nomeproduto: 'Call of Duty: Modern Warfare',
    tamanho: '2Gbps',
    desenvolvedor: 'Activision',
    preco: 'R$ 40.00',
    descricao: 'Call of Duty: Modern Warfare é um jogo eletrônico de tiro em primeira pessoa produzido pela Infinity Ward. Foi publicado pela Activision em 25 de outubro de 2019 para Microsoft Windows, PlayStation 4 e Xbox One. É o decimo sexto jogo da serie Call of Duty e actua como um "soft reboot" da sub-serie Modern Warfare. Os eventos do jogo ocorrem num cenário realista e moderno. Pela primeira vez na história da série, Call of Duty: Modern Warfare suporta multijogador em cross-platform. Activision também confirmou que o jogo não tem Passes de Temporada, permitindo assim lançar conteúdo gratuito pós-lançamento. Também foi o primeiro jogo desde Call of Duty: Ghosts (2013) sem o modo Zombies.',
  },
  {
    id:'8',
    enderecoImagem:'https://img.ibxk.com.br/2019/7/programas/16068503135919643.png',
    nomeproduto:'Garena: Freefire',
    tamanho:'1Gbps',
    desenvolvedor:'Garena',
    preco:'R$ 5.00',
    descricao: 'Garena Free Fire (também conhecido como Free Fire Battlegrounds ou somente Free Fire) é um jogo eletrônico mobile de ação-aventura do gênero battle royale, desenvolvido pela desenvolvedora vietnamita 111dots Studio e publicado pela Garena. O jogo obteve um beta aberto em novembro de 2017 e foi lançado oficialmente para Android de iOS em 4 de dezembro de 2017. O jogo consiste de até no total de cinquenta jogadores que caem de paraquedas em uma ilha em busca de armas e equipamentos a fim de matar os outros jogadores. Os jogadores escolhem à vontade a posição inicial, pegam armas e suprimentos para aumentar o tempo de vida na batalha.'
  },
  {
    id: '9',
    enderecoImagem:'https://cdn.ome.lt/rayor_pi5kd38v1bzO0L67npg-I=/200x0/smart/extras/capas/cod-black-ops-cold-war.jpeg',
    nomeproduto:'Call of Duty: Cold War',
    tamanho:'3Gbps',
    desenvolvedor:'Activision',
    preco:'R$ 50.00',
    descricao: 'Call of Duty: Black Ops Cold War é um jogo de tiro em primeira pessoa desenvolvido pela Treyarch e Raven Software e publicado pela Activision. É o quinto jogo da série Black Ops, e o décimo sétimo jogo da série Call of Duty ao todo. Serve como uma sequência direta de Call of Duty: Black Ops (2010) e uma prequela direta de Call of Duty: Black Ops II (2012). Call of Duty: Black Ops Cold War foi lançado em 13 de novembro de 2020. A revelação mundial da campanha foi em 26 de agosto de 2020, enquanto o do multiplayer chegou em 9 de setembro.'
  },
 ];

 const comentarios = [
  {   
     id: '1',
     idJogo: '1',
     foto: 'https://thumbs.dreamstime.com/b/cara-bonito-do-monstro-avatar-quadrado-114650081.jpg',
     nome: 'João Maria Da Silva',
     comentario: 'Muito bom o jogo, se tivesse 100 estrelas eu daria.',
     estrelas: '5',
   },
   {   
    id: '2',
    idJogo: '2',
    foto: 'https://image.freepik.com/vetores-gratis/avatar-quadrado-com-personagem-alienigena-engracado-com-pele-de-fogo_118421-981.jpg',
    nome: 'Irineu Dores Das Costas',
    comentario: 'Jogo deixa a desejar, servidores péssimos',
    estrelas: '2',
  },
  {   
    id: '3',
    idJogo: '1',
    foto: 'https://thumbs.dreamstime.com/b/cara-preta-do-gato-da-bruxa-dos-desenhos-animados-avatar-quadrado-bonito-ou-%C3%ADcone-ilustra%C3%A7%C3%A3o-de-halloween-97732414.jpg',
    nome: 'Elma Maria',
    comentario: 'Muito bom para aliviar o estresse',
    estrelas: '5',
  },
  {   
    id: '4',
    idJogo: '3',
    foto: 'https://thumbs.dreamstime.com/b/cara-engra%C3%A7ada-amedrontada-do-zombi-avatar-quadrado-monstro-verde-de-dia-das-bruxas-vetor-110121943.jpg',
    nome: 'Gabriel Furtado',
    comentario: 'Roubaram meu celular, mas eu amava jogar',
    estrelas: '4',
  },
 ];

app.get('/', (req, res) => {
    res.send('Olá mundo!');
})

app.get('/produtos', (req, res) => {
  res.send(produtos);
})

app.get('/produtos/:id', (req, res) => {
 const game = produtos.filter((produto) => produto.id == req.params.id);
 res.send(game[0]);
})

app.get('/comentarios', (req, res) => {
  res.send(comentarios);
})

app.get('/produtos/:id/comentarios', (req, res) => {
  const comentario = comentarios.filter((comentario) => comentario.idJogo == req.params.id);
  res.send(comentario);
})
 

app.listen(port, () => {
    console.log('Servidor online');
})