const express = require('express');
const router = express.Router();

const recommendation = [
  { id: 1, 
    type: 'Ferramenta', 
    title: 'Uso de Computadores', 
    image: 'https://conteudo.imguol.com.br/c/noticias/ba/2020/01/28/ilustracao-computador-programador-1580239094657_v2_900x506.jpg.webp', 
    description: ' O uso de computadores nas salas de aula revolucionou a forma como aprendemos e ensinamos. Eles oferecem uma infinidade de recursos e possibilidades, mas é fundamental aproveitá-los de maneira eficaz para obter os melhores resultados educacionais.Os computadores são excelentes ferramentas para pesquisa e acesso a uma vasta quantidade de informações. Eles permitem que os alunos explorem diferentes fontes, ampliando seus conhecimentos e possibilitando uma compreensão mais abrangente dos assuntos. \n\nAlém disso, softwares educacionais específicos podem ajudar no ensino de conceitos complexos de maneira interativa e envolvente. Desde programas de matemática e ciências até ferramentas de criação artística, os computadores oferecem oportunidades incríveis para aprender de maneira prática e visual. \n\nO desenvolvimento de habilidades tecnológicas é outro ponto forte. Ao integrar o uso dos computadores nas aulas, os alunos têm a chance de aprimorar suas habilidades digitais, tornando-se mais aptos a lidar com as demandas tecnológicas do mundo contemporâneo.\n\n Entretanto, é crucial encontrar um equilíbrio no uso dos computadores. Eles não devem substituir completamente os métodos tradicionais de ensino, mas sim complementá-los. A interação entre o ensino digital e métodos mais convencionais pode oferecer uma abordagem mais completa e eficaz para o aprendizado. \n\nA supervisão adequada também é essencial. Os professores desempenham um papel crucial ao orientar os alunos sobre como usar os computadores de forma responsável e produtiva, evitando distrações desnecessárias e garantindo que o foco esteja no objetivo educacional. \n\nAlém disso, é importante considerar a acessibilidade. Nem todos os alunos têm acesso igual aos recursos tecnológicos fora da escola, portanto, é essencial garantir que todos os estudantes tenham a oportunidade de utilizar os computadores durante as aulas, se necessário.\n\n Em suma, os computadores oferecem um vasto potencial para enriquecer o processo educacional, desde que sejam usados com propósito, equilíbrio e supervisão adequada, garantindo que sejam uma ferramenta eficaz para o aprendizado e o desenvolvimento dos alunos.',
    links: 'https://www.google.com/search?q=Uso+de+Computadores+nas+salas+de+aula&sca_esv=584934822&bih=923&biw=1920&rlz=1C1FKPE_enBR1081BR1081&hl=pt-BR&sxsrf=AM9HkKkQHq17T407wqq1zurSGXzh_dj03w%3A1700786310489&ei=hvBfZYnFHfCx5OUP-8WoyA8&ved=0ahUKEwiJoIDfstuCAxXwGLkGHfsiCvkQ4dUDCBA&uact=5&oq=Uso+de+Computadores+nas+salas+de+aula&gs_lp=Egxnd3Mtd2l6LXNlcnAiJVVzbyBkZSBDb21wdXRhZG9yZXMgbmFzIHNhbGFzIGRlIGF1bGFIySxQAFiUKXABeAGQAQCYAcMBoAHkFaoBBDAuMTm4AQPIAQD4AQH4AQKoAhTCAgcQIxjqAhgnwgITEAAYgAQYigUY6gIYtAIYQ9gBAeIDBBgAIEGIBgG6BgYIARABGAE&sclient=gws-wiz-serp',
  },
  { id: 2, 
    type: 'Ferramenta', 
    title: 'Uso de Projetores', 
    image: 'https://proxy.olhardigital.com.br/wp-content/uploads/2023/07/Imagem-mostrando-um-projetor-em-funcionamento.png',
    description: 'os projetores nas salas de aula se tornaram ferramentas incrivelmente valiosas para facilitar o ensino e o aprendizado. Eles oferecem uma gama impressionante de possibilidades, permitindo que os educadores ampliem as formas de apresentar o conteúdo aos alunos. Ao usar um projetor, o planejamento antecipado desempenha um papel crucial. Preparar o material com antecedência, como slides, apresentações, vídeos ou recursos visuais, é essencial para uma aula fluida e eficaz. Garantir que o conteúdo seja relevante, claro e complementar ao que está sendo ensinado é vital para manter o engajamento dos alunos. O posicionamento adequado do projetor também é importante. Certificar-se de que a projeção seja clara e visível para todos na sala é fundamental. Além disso, controlar a iluminação ambiente pode melhorar significativamente a visibilidade da projeção, proporcionando uma experiência visual mais nítida. A interatividade é outro aspecto poderoso dos projetores modernos. Capacidades como tela sensível ao toque ou integração com dispositivos móveis podem aumentar a participação dos alunos e tornar a aula mais dinâmica. No entanto, a integração do projetor na aula não deve ser apenas como um substituto para métodos tradicionais de ensino. É fundamental que ele seja incorporado de forma significativa ao conteúdo, complementando e enriquecendo a experiência de aprendizado. Garantir que tanto os professores quanto os alunos estejam familiarizados com o funcionamento do projetor é crucial. Treinamentos ou orientações podem ser úteis para evitar problemas técnicos e maximizar o potencial dessa ferramenta. A avaliação contínua do uso do projetor na sala de aula é igualmente importante. Rever regularmente como o dispositivo está sendo utilizado e fazer ajustes conforme necessário é essencial para melhorar continuamente a experiência de aprendizado. Em resumo, os projetores são ferramentas poderosas que, quando utilizadas de maneira planejada e integrada, podem transformar a dinâmica da sala de aula, tornando o aprendizado mais envolvente e acessível para os alunos.',
    links: 'https://www.google.com/search?q=Uso+de+Projetores+nas+salas+de+aula&sca_esv=584934822&bih=923&biw=1920&rlz=1C1FKPE_enBR1081BR1081&hl=pt-BR&sxsrf=AM9HkKkhbxu1AIcWtpaXyzbhzVqku_KOCQ%3A1700786351999&ei=r_BfZb7LPMDW5OUPnvaPgA0&ved=0ahUKEwj-3uXystuCAxVAK7kGHR77A9AQ4dUDCBA&uact=5&oq=Uso+de+Projetores+nas+salas+de+aula&gs_lp=Egxnd3Mtd2l6LXNlcnAiI1VzbyBkZSBQcm9qZXRvcmVzIG5hcyBzYWxhcyBkZSBhdWxhMggQABiABBiiBDIIEAAYgAQYogRIuDpQ8QVYyS5wAXgBkAEAmAHAAaAB_xWqAQQwLjE5uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBhAAGAcYHsICCBAhGKABGMMEwgIKECEYoAEYwwQYCuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp',
  },
  { id: 3, 
    type: 'Ferramenta',
    title: 'Ferramentas de gamificação: Kahoot', 
    image: 'https://bla.production.ms.leya.ninja/files/67ef0829-007d-4cff-94b5-f2a9a07d2224.jpg', 
    description: 'O Kahoot é uma ferramenta educacional empolgante e adaptável que se destaca por sua capacidade de transformar a sala de aula em um ambiente interativo e participativo. Seu potencial vai além da simples criação de questionários e atividades: os professores podem desenvolver desafios, competições e até mesmo apresentações multimídia envolventes, utilizando uma variedade de formatos como perguntas de múltipla escolha, verdadeiro ou falso, ordem correta, entre outros. Essa flexibilidade permite que os educadores personalizem o conteúdo conforme as necessidades específicas de suas aulas. Por sua vez, os alunos têm a oportunidade de aprender de maneira lúdica e colaborativa, competindo de forma saudável e engajando-se ativamente com os assuntos abordados. A plataforma ainda oferece relatórios detalhados sobre o desempenho dos alunos, o que possibilita aos professores avaliar a compreensão do conteúdo e adaptar suas estratégias de ensino. O Kahoot, com sua interface amigável e acessível, não apenas reforça o aprendizado, mas também promove a comunicação, a criatividade e o trabalho em equipe, criando uma experiência educacional dinâmica e estimulante. Ao adotar essa plataforma, educadores encontram uma maneira envolvente de ensinar, enquanto os alunos descobrem uma forma divertida e eficaz de aprender.' ,
    links: 'https://kahoot.com/?utm_name=controller_app&utm_source=controller&utm_campaign=controller_app&utm_medium=link',
  },
  { id: 4, 
    type: 'Ferramenta', 
    title: 'Robótica educacional', 
    image: 'https://www.educabrasil.com.br/wp-content/uploads/2015/03/20201129_robotica.jpg', 
    description: 'A robótica educacional representa uma abordagem inovadora que vai além do ensino tradicional, proporcionando aos alunos uma experiência prática e imersiva no mundo da ciência, tecnologia, engenharia e matemática (STEM). Através de kits compostos por componentes mecânicos, sensores, motores e softwares de programação, os estudantes têm a oportunidade não só de construir e programar robôs, mas também de explorar conceitos complexos de forma concreta. Essa jornada educativa não se limita à técnica, mas também desenvolve habilidades essenciais, como pensamento crítico, resolução de problemas, colaboração e criatividade. Ao enfrentar desafios reais e trabalhar em projetos interdisciplinares, os alunos são instigados a encontrar soluções inovadoras, preparando-se para os dilemas complexos do mundo atual e futuro, incentivando-os a serem criativos, estratégicos e adaptáveis na resolução de problemas. A robótica educacional se desenvolve por meio de kits e plataformas especialmente projetados para proporcionar uma introdução prática à ciência e à tecnologia. Estes conjuntos geralmente incluem peças mecânicas, motores, sensores e uma unidade de controle que podem ser montados de várias maneiras. Os alunos seguem instruções passo a passo ou são desafiados a criar seus próprios designs, aprendendo sobre engrenagens, circuitos e sensores à medida que montam seus robôs. Além disso, softwares de programação amigáveis e intuitivos são utilizados para dar vida aos robôs, permitindo aos alunos escreverem códigos para controlar os movimentos e realizar tarefas específicas. Essa experiência prática encoraja a experimentação, a resolução de problemas e o pensamento crítico, enquanto os alunos exploram conceitos STEM de maneira tangível e envolvente. ' ,
    links: 'https://www.google.com/search?q=Rob%C3%B3tica+educacional&source=lmns&bih=923&biw=1920&rlz=1C1FKPE_enBR1081BR1081&hl=pt-BR&sa=X&ved=2ahUKEwiP-rXcsduCAxWdsZUCHdy8CDwQ_AUoAHoECAEQAA',
  },
  { id: 5, 
    type: 'Ferramenta', 
    title: 'Ferramentas de gamificação: Hour of Code', 
    image: 'https://hourofcode.com/br/pt/images/hour-of-code-logo.png', 
    description: 'O "Hour of Code" oferece uma série de desafios e atividades que ensinam conceitos básicos de programação por meio de jogos interativos e puzzles. Utilizando personagens conhecidos, como personagens da Disney, Minecraft e Star Wars, o aplicativo guia os alunos por exercícios que gradualmente introduzem temas como sequências, loops e condicionais, de forma intuitiva e divertida. Uma das características mais marcantes do aplicativo é sua capacidade de proporcionar uma experiência de aprendizado autoinstrucional. As atividades são progressivas, permitindo que os alunos avancem em seu próprio ritmo, sem pressão, enquanto desenvolvem habilidades fundamentais em resolução de problemas e pensamento lógico. O "Hour of Code" tem sido adotado em escolas e instituições educacionais, incentivando o interesse pela tecnologia e programação desde idades mais jovens, preparando as crianças para as demandas de um mundo cada vez mais digital. Essa abordagem de aprendizado interativa e divertida torna a programação mais acessível e cativante para os alunos, independentemente do seu nível de familiaridade com a tecnologia.' ,
    links: 'https://hourofcode.com/br#:~:text=O%20que%20%C3%A9%20a%20Hora,20.000%20educadores%20e%2058.000%20volunt%C3%A1rios.',
  },
  { id: 6, 
    type: 'Ferramenta', 
    title: 'Uso de Tablets', 
    image: 'https://marechaldeodoro.al.gov.br/wp-content/uploads/2018/05/IMG_8153.jpg', 
    description: 'Os tablets são recursos incrivelmente versáteis nas salas de aula, proporcionando uma gama variada de oportunidades para enriquecer a experiência educacional. Esses dispositivos oferecem acesso imediato a uma vasta biblioteca de recursos, incluindo livros digitais, aplicativos interativos e conteúdos educacionais diversificados.Sua portabilidade é uma grande vantagem, permitindo que os alunos acessem informações e ferramentas de aprendizado em qualquer lugar e a qualquer momento. Isso proporciona flexibilidade ao processo de ensino, permitindo que se ajuste às necessidades individuais dos estudantes.Para extrair o máximo proveito dos tablets na sala de aula, é fundamental garantir que o conteúdo disponível esteja alinhado aos objetivos educacionais. Os professores desempenham um papel crucial ao orientar os alunos sobre o uso responsável desses dispositivos, estabelecendo diretrizes claras sobre tempo de tela, uso apropriado da internet e foco nas atividades educativas.A integração dos tablets ao currículo escolar é essencial para que se tornem uma ferramenta complementar ao ensino tradicional. Eles devem ser parte integrante das atividades educacionais, oferecendo suporte e ampliando as possibilidades de aprendizado, sem substituir completamente os métodos convencionais.Assegurar a acessibilidade para todos os alunos é importante, garantindo que todos tenham igualdade de oportunidades no uso desses recursos tecnológicos. Além disso, medidas de segurança e privacidade devem ser implementadas para proteger os dados dos alunos e garantir um ambiente online seguro.A avaliação constante do uso dos tablets na sala de aula é fundamental para compreender como estão sendo empregados e qual é o impacto no processo de aprendizado. Essa análise ajuda os educadores a ajustar suas abordagens, otimizando o uso desses dispositivos para melhorar continuamente a experiência educacional dos alunos.' ,
    links: 'https://www.google.com/search?q=uso+de+tablets+nas+escolas&sca_esv=585714901&bih=923&biw=1920&rlz=1C1FKPE_enBR1081BR1081&hl=pt-BR&sxsrf=AM9HkKmPny91G_ky8GDxnl9vbo3GK2DZ5Q%3A1701121091525&ei=QwxlZc26H7mq1sQPhsqD0Ac&ved=0ahUKEwiN6ITzkeWCAxU5lZUCHQblAHoQ4dUDCBA&uact=5&oq=uso+de+tablets+nas+escolas&gs_lp=Egxnd3Mtd2l6LXNlcnAiGnVzbyBkZSB0YWJsZXRzIG5hcyBlc2NvbGFzMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADSP4ZUABYAHABeAGQAQCYAQCgAQCqAQC4AQPIAQDiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp',
  },
  { id: 7, 
    type: 'Artigos', 
    title: 'Artigo:UM COMPUTADOR POR ALUNO: MESCLAS DE EXPERIMENTOS SOBRE A INTEGRAÇÃO DA TECNOLOGIA NO AMBITO ESCOLAR', 
    image: 'https://blog.even3.com.br/wp-content/uploads/2022/02/imagemdedestaque_doi_artcient-768x512.png', 
    description: 'RESUMO: Neste artigo apresentamos um apanhado do Projeto Um Computador por Aluno e o processo da sua implementação  no  Brasil,  sob  o  recorte  de  um  estudo  de  caso  em  uma  escola  de  um município em Sergipe. Aborda-se o contexto da formação inicial e continuada dos professores, o fomento  das  políticas  públicas  voltadas  em  inserir  projetos  para  ampliar  o  processo  de  inclusão digital e o uso pedagógico dessas tecnologias no âmbito escolar. Nesse sentido, o artigo apresenta indícios  das  práticas  desenvolvidas  por  professores  participantes  envolvidos  no  contexto  do projeto UCA em uma escola Estadual em Sergipe e faz parte da pesquisa, já qualificada, em nível de mestrado em Educação que está sendo produzida pela Universidade Federal de Sergipe' ,
    links: 'https://periodicos.ufsc.br/index.php/ijkem/article/view/81763/46439',
  },
  { id: 8, 
    type: 'Artigos', 
    title: 'Artigo: CONTEMPORANEIDADE, EDUCAÇÃO E TECNOLOGIA ', 
    image: 'https://blog.even3.com.br/wp-content/uploads/2022/02/imagemdedestaque_doi_artcient-768x512.png', 
    description: 'O Artigo aborda o papel das tecnologias da comunicação e da informação na educação hoje. Questiona esse papel, discute o que deve ser compreendido por qualidade na educação, assim como examina a concepção de uma formação, a ser construída nos cursos que preparam professores e gestores, capaz de imprimir (uma outra) qualidade à educação e de contribuir para que o uso dos recursos tecnológicos facilite a discussão da cultura e se coloque a favor de um projeto de emancipação. Argumenta que uma educação de qualidade demanda, entre outros elementos, tanto uma visão crítica dos processos escolares quanto usos apropriados e criteriosos das novas tecnologias. ',
    links: 'https://www.scielo.br/j/es/a/KS6FVdMKj4D9hzbGG9dfcps/?format=pdf&lang=pt', 
  },
  { id: 9, 
    type: 'Artigos', 
    title: 'Artigo: Tecnologia e Educação: quais os desafios?', 
    image: 'https://blog.even3.com.br/wp-content/uploads/2022/02/imagemdedestaque_doi_artcient-768x512.png', 
    description: 'Nos últimos anos temos assistido a um enorme investimento em recursos tecnológicos na educação. É internacionalmente reconhecido que Portugal ocupa uns dos primeiros lugares europeus em termos de disponibilização de tecnologias nas escolas. Contudo, são muitas as vozes que colocam algumas dúvidas sobre a eficácia e eficiência desses investimentos. No momento de avaliar os projetos tecnológicos, são encontrados com alguma frequência, falhas ao nível da formação de professores e nas metodologias com que esses recursos são utilizados. Este artigo visa compreender o verdadeiro papel da tecnologia na educação e apresentar algumas orientações para que a sua integração aconteça com maior intencionalidade educativa. ' ,
    links: 'https://www.redalyc.org/pdf/1171/117138253003.pdf',
  },
  { id: 10, 
    type: 'Artigos', 
    title: 'Artigo: TECNOLOGIA NA EDUCAÇÃO: EVOLUÇÃO HISTÓRICA E APLICAÇÃO NOS DIFERENTES NÍVEIS DE ENSINO', 
    image: 'https://blog.even3.com.br/wp-content/uploads/2022/02/imagemdedestaque_doi_artcient-768x512.png', 
    description: 'O uso das tecnologias no contexto escolar tem a finalidade de desenvolver no aluno melhores condições de aprendizado e conhecimento, assimilação do conteúdo de forma mais clara, objetiva e consistente. Assim, esse estudo objetivou reunir e analisar, por meio de uma revisão de literatura, a utilização da tecnologia na educação, sua evolução histórica e aplicação nos diferentes níveis de ensino. Sabe-se que o desenvolvimento das tecnologias no sistema educacional promoveu a modernização do ensino, otimizando os processos educativos para melhorar a aprendizagem através das mudanças, as quais consistem em um desafio para a educação até os dias atuais. Além disso, os recursos disponibilizados pela tecnologia digital constituem-se num importante método para que as pessoas com deficiência se tornem sujeitos ativos no processo de construção de conhecimento. No entanto um dos maiores problemas está na inserção dessas tecnologias, no momento certo e de maneira adequada, bem como, a formação continuada de docentes.	Escolhido por analisar a evolução histórica.' ,
    links: 'https://www.researchgate.net/profile/Fernanda-Sanches-Canevesi/publication/345870598_TECNOLOGIA_NA_EDUCACAO_EVOLUCAO_HISTORICA_E_APLICACAO_NOS_DIFERENTES_NIVEIS_DE_ENSINO/links/5fbd1a35299bf104cf718579/TECNOLOGIA-NA-EDUCACAO-EVOLUCAO-HISTORICA-E-APLICACAO-NOS-DIFERENTES-NIVEIS-DE-ENSINO.pdf',
  },
  { id: 11, 
    type: 'Artigos', 
    title: 'Artigo: A EVOLUÇÃO DA TECNOLOGIA NA EDUCAÇÃO', 
    image: 'https://blog.even3.com.br/wp-content/uploads/2022/02/imagemdedestaque_doi_artcient-768x512.png', 
    description: 'A tecnologia na educação tem estado fortemente presente nessas últimas décadas. E já tem sido incorporada ao discurso de profissionais da educação, podendo chegar a diversos lugares. Há uma evolução da tecnologia nas instituições educacionais. Para uma evolução educacional, é preciso investimento. ' ,
    links: 'https://periodicos.processus.com.br/index.php/egjf/article/view/65',
  },
  { id: 12, 
    type: 'Artigos', 
    title: 'Artigo: ENSINO REMOTO E TECNOLOGIA: UMA NOVA POSTURA DOCENTE NA EDUCAÇÃO PÓS-PANDEMIA', 
    image: 'https://blog.even3.com.br/wp-content/uploads/2022/02/imagemdedestaque_doi_artcient-768x512.png', 
    description: 'O presente trabalho tem por objetivo discutir a primordialidade da tecnologia no processo de ensino-aprendizagem durante o Ensino remoto proposto pela pandemia do Covid-19. A enfermidade epidêmica chega em solo brasileiro impondo a necessidade do difícil isolamento social e, diante disso, a educação tem a missão de continuar considerando o distanciamento físico entre as pessoas. Pensando nisso, a partir de uma pesquisa bibliográfica qualitativa, neste artigo, discutimos os novos contextos e posturas docentes diante do ensino remoto. Apresentamos um breve panorama que acata um momento afrontoso e desafiador para os professores, que tiveram que se adaptar a um contexto educacional histórico, jamais vivido nos últimos anos. Investigamos o que vem norteando o uso da tecnologia como ferramenta de suporte para o ensino remoto, assim como os desafios de uma formação tecnológica docente, o que cabe enxergarmos o despreparo, falta de incentivo e outros problemas que ocorrem diante do nosso contexto atual. Ao final, concluímos a respeito dos reflexos e influências da pandemia em nossa educação, acreditando que o ensino remoto, apesar de desafiador, poderá deixar mudanças positivas na nossa educação.' ,
    links: 'https://editorarealize.com.br/editora/anais/conedu/2020/TRABALHO_EV140_MD1_SA19_ID4391_02092020001229.pdf',
  },
  { id: 13, 
    type: 'Video', 
    title: 'Canal: BabyFirst Brasil Vídeos', 
    image: 'https://scontent.fpoa14-1.fna.fbcdn.net/v/t39.30808-6/352572833_1387338372122975_4262186890998470230_n.png?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yISWzISYyzMAX-oQ6fI&_nc_ht=scontent.fpoa14-1.fna&oh=00_AfAFtlVLc3dzT6VLVQjIFDROWgSgOjv8RFrpZ9x8FoD-2A&oe=65696A13', 
    description: 'Os estímulos oferecidos às crianças nos primeiros anos são cruciais para uma vida mais feliz. Por isso, nosso conteúdo tem a intenção de ajudar no desenvolvimento humano, ensinando habilidades, conhecimentos, valores, capacidade de percepção e de relacionamento. Nossa programação está entre as melhores para ajudar as crianças a aprenderem o básico da educação antes de entrarem na escola.  Com a BabyFirst TV, seu bebê pode aprender sobre tudo! Desde o ABC até animais, cores, formas, e muito mais! Aqui abrigamos uma das maiores coleções de recursos educacionais da internet, músicas infantis e desenhos para seu bebê. Aproveite para cantarem juntos! Veja algumas de nossas series, incluindo a Turma das Cores, o Coelhinho Larry, o Cavalo arco-íris, Vocabularry, Notekins e mais' ,
    links: 'https://www.youtube.com/@BabyFirstBrasil',
  },
  { id: 14, 
    type: 'Video', 
    title: 'Canal: Smile and Learn - Português', 
    image: 'https://yt3.googleusercontent.com/ytc/APkrFKYk4fqkhhAxMZ-kUI05zkCAxMUjxIm9Y191A6FVCw=s176-c-k-c0x00ffffff-no-rj', 
    description: 'Você vai descobrir um material único, divertido e educativo para crianças de 2 a 12 anos. Você pode encontrar contos com valores, vídeos com conteúdos didáticos (geografia, história, letras, ciências, etc.), vídeos sobre emoções, yoga… E muito mais!  Todos os vídeos e contos vêm da nossa plataforma de apps educativos da Smile and Learn. Nela você vai descobrir mais de 100 jogos e contos interativos para crianças, desenhados por educadores. ' ,
    links: 'https://www.youtube.com/@SmileandLearnPortugues',
  },
  { id: 15, 
    type: 'Video', 
    title: 'Canal: Leo e Lully', 
    image: 'https://images.squarespace-cdn.com/content/v1/5be06ad6620b851a5e88a137/1541439421227-E8LIJ948YVOVLP6BU4T0/LEL_MARCA_PRINCIPAL.png?format=1500w', 
    description: 'Caros Pais, Mães, Educadores e Cuidadores, Leo e Lully é um canal que busca auxiliar no crescimento pessoal de cada criança. Por isso, apresenta conteúdos que despertam a curiosidade, reforçam o aprendizado, a autoconfiança, e trazem conhecimento, através de episódios com atividades lúdicas, artísticas e muito divertidas. Tudo isso em um universo criado para estimular a capacidade cognitiva e auxiliar no desenvolvimento de fatores relacionados ao pensamento, linguagem, percepção, raciocínio e memória. Sempre com muito cuidado, de um jeito seguro e super legal.',
    links: 'https://www.youtube.com/@LeoeLully', 
  },
  { id: 16, 
    type: 'Video', 
    title: 'Canal: Ensinando meu filho', 
    image: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/309773531_535721948557312_5760617739089867751_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tEYgQQa5LXoAX_5bJFv&_nc_ht=scontent-gru1-1.xx&oh=00_AfDPQiT9GUwghAZ4Qe0xxO0H2K2GgmpSIS2A3MbMPqacmA&oe=656B1EF2', 
    description: 'Canal com uma grande variedade de videos educativo para auxiliar na alfabetização e educação. Apresentamos uma série de videos como alfabeto, números, cores, formas, silabas, ciência, matemática, história do Brasil, videos animados, ensinando a ler, ensinando as escrever e muito mais. Conheça, inscreva-se, curta e dê o play:' ,
    links: 'https://www.youtube.com/@Ensinandomeufilho',
  },
  { id: 17, 
    type: 'Video', 
    title: 'Canal: Kidspace Tv', 
    image: 'https://yt3.googleusercontent.com/svWZgwXgh-b515JnSEfQZ7UPf33CNpp8DFt6_0Ci7ukWFo--q3-Mu2dB9sGqKrUaUGCLV5ie=s176-c-k-c0x00ffffff-no-rj', 
    description: 'Criado em janeiro de 2021, nosso canal sempre teve o objetivo de trazer um conteúdo animado e que ajudasse na educação em casa. Queríamos que cada vídeo fosse um complemento para ser usado fora da sala de aula, e que ajudasse no que a criança precisa aprender para ser alfabetizada. Desde então, passamos por várias mudanças, adaptações, estilos e formas, sempre tentando trazer o melhor!' ,
    links: 'https://www.youtube.com/@TVKIDSPACE',
  },
  { id: 18, 
    type: 'Video', 
    title: 'Canal: Sara - Português', 
    image: 'https://yt3.ggpht.com/Xh3pEgGQE8wHNksok2Krp5lEDnO0LOAVFEcxkh1lNb3t4kUo1s5z8QU5L2r9YBDXF8AzJozU=s240-c-k-c0x00ffffff-no-rj', 
    description: 'Brincando e aprendendo com Sara! Toda criança ama brincar e toda criança aprende brincando. É assim que a série da Sara conta as aventuras, divertidas confusões e descobertas da pequena e suas irmãs com a vovó mais animada de todas.' ,
    links: 'https://www.youtube.com/@Sara-Portugues',
  },
  // Adicione mais recomendações conforme necessário
];


// Rota para buscar detalhes de uma recomendação por ID
router.get('/:id', (req, res) => {
  // Aqui você deve buscar os detalhes da recomendação com base no ID fornecido
  const { id } = req.params;

  const foundRecommendation = recommendation.find(rec => rec.id === parseInt(id));
  
  if (!foundRecommendation) {
    return res.status(404).json({ message: 'Recomendação não encontrada' });
  }

  res.json(foundRecommendation);
});

router.get('/filter/:type', (req, res) => {
  const { type } = req.params;
  const filteredRecommendations = recommendation.filter(rec => rec.type === type);
  
  res.json(filteredRecommendations);
});


router.get('/', (req, res) => {
  console.log('Requisição recebida para /api/posts');
  const randomIndex = Math.floor(Math.random() * recommendation.length);
  const randomRecommendation = recommendation[randomIndex]; // Seleciona uma recomendação aleatória
  res.json(randomRecommendation);
});


module.exports = router;