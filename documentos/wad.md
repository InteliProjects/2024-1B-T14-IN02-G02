<img src="../assets/logointeli.png">

# WAD - Web Application Document - Módulo 2 - Inteli

## Grupo 2: WatchDogs

#### Nomes dos integrantes do grupo:

- Ana Eloisa Façanha
- Bruno Jancso Fabiani
- Davi Basã
- Gustavo Gonçalves da Costa
- Isadora Tribst Gatto
- Lucas Matheus Nunes
- Vinicius Testa Passos

## Sumário

[1. Introdução](#c1)

[2. Visão Geral da Aplicação Web](#c2)

[3. Projeto Técnico da Aplicação Web](#c3)

[4. Desenvolvimento da Aplicação Web](#c4)

[5. Testes da Aplicação Web](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[8. Anexos](#c8)

<br>

# Introdução

&nbsp;&nbsp;&nbsp;&nbsp;A problemática trazida pelo parceiro de projeto, o INSPA, é a falta de trabalhos científicos abrangentes que abordem o abandono animal de forma global, considerando fatores do comportamento humano, percepções dos animais e aspectos socioculturais envolvidos na adoção, compra e abandono de animais de estimação. A condição atual mostra uma visão parcial e estática do cenário, sem consolidar todos os fatores implicados.<br>
&nbsp;&nbsp;&nbsp;&nbsp;A solução desenvolvida é uma aplicação web responsiva para coletar informações sobre o comportamento de tutores em relação à adoção, compra e abandono de cães e gatos. Essa ferramenta visa consolidar uma base de dados ampla, confiável e ordenada, permitindo que a equipe científica do INSPA e o Dr. Pet, Alexandre Rossi, apliquem questionários diretamente aos tutores para obter insights valiosos.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Os aspectos essenciais para a criação de valor do produto incluem a capacidade de coletar dados em larga escala, proporcionando uma compreensão mais profunda dos motivos por trás do comportamento de adoção e abandono de animais. Isso permite que o INSPA e seus parceiros desenvolvam ações privadas e públicas para controlar e reduzir o problema do abandono animal, contribuindo para a melhoria do bem-estar dos animais de estimação e a redução de negligência e maus-tratos.

# Visão Geral da Aplicação Web

## 2.1. Escopo do Projeto

### 2.1.1. Contexto da indústria

&nbsp;&nbsp;&nbsp;&nbsp;O INSPA - Instituto de Saúde e Psicologia Animal opera em um mercado PET brasileiro que, em 2023, registrou um faturamento impressionante de R$ 67,4 bilhões, evidenciando um crescimento de 14% em relação ao ano anterior. Este mercado vibrante reflete a paixão nacional pelos animais de estimação, com o Brasil mantendo sua posição como o terceiro maior mercado global do segmento.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;Dentro deste contexto próspero, o INSPA se destaca não apenas por oferecer cursos de pós-graduação, cursos livres, programas educacionais e iniciativas de pesquisa na área de bem-estar animal e comportamento animal, mas também por sua metodologia inovadora. A instituição adota uma abordagem interdisciplinar que integra psicologia, saúde animal e técnicas de ensino avançadas, diferenciando-se significativamente de concorrentes como a Faculdade Qualittas e a Anhembi Morumbi, que, apesar de também oferecerem cursos similares, não possuem o mesmo enfoque interdisciplinar e aplicado.<br>
&nbsp;&nbsp;&nbsp;&nbsp;A capacidade do INSPA de gerar receita é amplificada pela sua oferta única de cursos especializados que atendem à crescente demanda por profissionais qualificados em um campo que evolui rapidamente. Estes programas são projetados para equipar os alunos com habilidades práticas e teóricas necessárias para enfrentar desafios complexos relacionados ao comportamento animal e ao cuidado com os pets.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Além disso, o INSPA contribui para a conscientização pública sobre a importância do vínculo humano-animal e na prevenção de problemas como abandono e maus-tratos. Essas iniciativas não apenas fortalecem a reputação da instituição, mas também podem gerar receita indireta por meio de parcerias estratégicas, patrocínios e o apoio de organizações comprometidas com o bem-estar animal.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Em um cenário onde a conscientização sobre o bem-estar dos animais de estimação e a relação entre humanos e animais está em ascensão, o INSPA se sobressai ao oferecer programas de pós-graduação que preparam profissionais para lidar com questões comportamentais e de cuidado animal de forma eficaz e ética. Suas iniciativas educacionais e de pesquisa promovem práticas mais éticas e responsáveis, contribuindo significativamente para o avanço da indústria.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Em resumo, o INSPA está firmemente posicionado em um mercado dinâmico e em crescimento, desempenhando um papel crucial na formação de profissionais qualificados e na promoção de relações saudáveis entre humanos e animais de estimação. Seu compromisso com a educação, pesquisa e conscientização o estabelece como um líder inovador no campo do bem-estar animal e comportamento animal, impulsionando o progresso da indústria como um todo.
<br>

### 2.1.2. Modelo de 5 Forças de Porter

&nbsp;&nbsp;&nbsp;&nbsp;Inicialmente, emprega-se o framework “5 Forças de Porter” para a análise do segmento ao qual o Instituto INSPA faz parte, instituições de ensino de psicologia e saúde animal. Nesse sentido, a partir da ferramenta criada por Michael Porter, renomado professor da Harvard Business School, é possível reconhecer as 5 principais “forças” que pressionam as empresas de um setor a reduzir a lucratividade. Desse modo, a seguir (Figura 1) estão dispostas as 5 Forças de Porter em forma de canvas.

<div align="center" width=100%>
<sup> Figura 1 - Modelo de 5 Forças de Porter.</sup>
<img src="../assets/images/5-forcas-de-porter.png">
<sub>Fonte: material produzido pelos autores(2024).</sub>
</div>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Ademais, caso necessário, de forma complementar, a descrição mais detalhada do canvas está disposta a seguir:<br>

#### **Ameaça de Novos Entrantes**

- **Obstáculos para novos entrantes:** A entrada neste setor requer expertise específica, infraestrutura adequada e aprovações regulatórias. Além disso, os custos relacionados à manutenção de mão de obra especializada e à produção de conteúdos que contemplem conhecimento de fronteira podem tornar o estágio inicial complexo para novos concorrentes.<br>

- **Impacto dos novos entrantes:** Com o aumento do interesse na psicologia e saúde animal, pode haver mais instituições entrando neste campo no futuro, o que poderia aumentar a concorrência para o INSPA, sobretudo, caso os novos entrantes busquem se diferenciar com pesquisadores de ponta.<br>

#### **Ameaça de Produtos ou Serviços Substitutos**

- **Produtos ou serviços substitutos:** Cursos online, seminários, workshops ou até mesmo aprendizado autodidata, via conteúdos disponibilizados gratuitamente na web, podem ser considerados substitutos. Além disso, academias de treinamento sobre comportamento animal, em formato presencial, também figuram como produtos alternativos.<br>

- **Nível de ameaça:** Embora existam substitutos, a natureza inovadora e a profundidade do conhecimento oferecido nos cursos de pós-graduação oferecidos pelo INSPA podem não ser facilmente substituídos, principalmente, ao se tratar de indivíduos que buscam uma especialização formal.<br>

#### **Poder de Barganha dos Fornecedores**

- **Principais fornecedores:** Os fornecedores neste contexto podem ser os professores e os profissionais que fornecem o conhecimento e a experiência para a construção dos produtos educacionais oferecidos pelo INSPA.<br>

- **Poder de barganha dos fornecedores:** O poder de barganha dos fornecedores pode ser considerado moderado, pois embora existam muitos profissionais qualificados no campo, a demanda por especialistas de alta qualidade é alta e, atualmente, o time pedagógico do Instituto contempla profissionais de destaque na área, como a Dra. Ceres Berger Faraco e o Dr. Alexandre Rossi, conhecido como “Dr. Pet”.<br>

#### **Poder de Barganha dos Clientes**

- **Principais tipos de clientes:** Os principais clientes do INSPA são os estudantes interessados em psicologia e saúde animal.<br>

- **Poder de barganha dos clientes:** Os estudantes têm um poder de negociação razoável, pois podem escolher entre várias instituições de ensino. No entanto, a reputação e a qualidade do ensino do INSPA podem atrair muitos estudantes.<br>

#### **Rivalidade entre os Concorrentes Existentes**

- **Principais concorrentes:** Nesse momento, os concorrentes diretos do INSPA são outras instituições de ensino em psicologia e saúde animal, como também, academias de treinamento em manejo e cuidado de animais.<br>

- **Nível de rivalidade:** Nesse momento, é possível avaliar que o INSPA está em um oceano vermelho, ao concorrer com outras instituições de ensino, como o Instituto Qualittas, por exemplo, em formações educacionais formais de saúde animal. Dessa forma, compreende-se o nível de rivalidade como alto-moderado.<br>

&nbsp;&nbsp;&nbsp;&nbsp;Por fim, cabe analisar as forças que pressionam o setor, a fim de compreender de forma mais profunda o segmento em que o INSPA atua.<br>

### 2.1.3. Análise SWOT

&nbsp;&nbsp;&nbsp;&nbsp;A matriz SWOT é uma ferramenta amplamente usada para analisar situações em diferentes contextos, desde empresas até projetos pessoais. A sigla SWOT representa Forças, Fraquezas, Oportunidades e Ameaças. Ela ajuda a identificar os principais fatores internos e externos que afetam uma organização ou projeto. <br>
&nbsp;&nbsp;&nbsp;&nbsp;Além disso, ao destacar esses elementos, a matriz SWOT permite uma avaliação completa e auxilia na formulação de estratégias para aproveitar vantagens, lidar com desafios e aproveitar oportunidades.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Assim, usando esta matriz vamos analisar o INSPA para ter uma perpectiva ampla de como este opera dentro do mercado:

**Forças:**

- Presença forte em mídia social
  Devido a sua colaboração com Dr Pet, suas contas oficiais e o engajamento que animais trazem, a INSPA tem poder de influência em mídias sociais.
- Variedade de serviços oferecidos no mercado de educação:
  A INSPA tornou um campo disciplinar em um multidisciplinar aqui no Brasil, educando e produzido diversos profissionais nesta área além de atuar amplamente neste campo
- Boa reputação:
  Reconhecida por cliente pelos serviços de qualidade para pets com profissionais de qualidade. É uma organização excelente que atende um nicho bem fechado.

**Oportunidades:**

- Maior conscientização para a saúde do animal:
  A INSPA se beneficia com uma maior conscientização do bem estar do animal pois traz mais atenção ao seu campo de atuação e faz as pessoas buscarem mais seus serviços.
  Parcerias com instituições educacionais:
- Fazer parcerias com instituições educacionais traz maior reconhecimento para as pessoas que se interessam de seus serviços.
- Mercado(área de atuação) em constante expansão:
  A crescente taxa de adoção de animais traz ainda mais importância para seus trabalhos, já que mais animais irão precisar de seus serviços e estudos.

**Fraquezas :**

- Dependência de financiamento externo:
  &nbsp;&nbsp;&nbsp;&nbsp;O INSPA depende de financiamento externo para operar, o que limita a sua operação e dificulta planejamentos para o futuro.

- Falta de diversificação de serviços:
  O INSPA atua em um mercado específico da educação e depende dos cursos de pós-graduação, produção de artigos de pesquisa e sua reputação para gerar renda, no entanto, o mercado PET é amplo.
- Dependência em tecnologia:
  Sempre tem que investir em tecnologia para se manter competitiva. O INSPA não é focado em tecnologia portanto não possui um banco de dados estruturado.

**Ameaças:**

- Eventos globais ou locais tirarem o foco para a causa animal:
  Eventos, tragédias e catastrófes enfraquecem a atenção do público para a causa animal. A mudança do foco da sociedade em relação a causa animal significa que o INSPA possa perder seu público.Entretanto, alguns eventos possam se tornar oportunidades.
- Regulamentação da Pós-graduação EAD:
  Governo pode inpor novas medidas em relação a cursos de pós-graduação EAD, que podem aumentar os custos, atualmente um tema em debate.
- Oceano Vermelho:
  Outros cursos e organizações podem tirar possíveis graduados que escolheriam o INSPA, como outros cursos de medicina e veterinário. Exemplos de cursos que disputam o mesmo consumidor da INSPA é a FMVZ USP, São Judas, CCVL academia, FAMESP, o Instituto Qualitas e marcas fortes da área de animal como a Cobasi/PETZ.

<br>

&nbsp;&nbsp;&nbsp;&nbsp;Após uma análise da matriz SWOT do INSPA, podemos concluir que a instituição possui forças sólidas, como presença forte nas mídias sociais e boa reputação. No entanto, enfrenta desafios como dependência de financiamento externo e concorrência no mercado. Para garantir sua competitividade, o INSPA deve diversificar seus serviços e buscar fontes alternativas de financiamento, enquanto se mantém atento às oportunidades emergentes e ameaças externas como outros cursos ou marcas grandes voltada aos animais.

### 2.1.4. Solução:

&nbsp;&nbsp;&nbsp;&nbsp;O problema da falta de dados suficientes e imparciais sobre as adoções, compras e abandonos de animais domésticos é uma realidade no cenário científico atual. A maioria dos estudos existentes apresenta uma visão enviesada do assunto e não cobre o assunto por completo. Para abordar essa questão, foi proposta uma solução que consiste em criar um website que apresente o Instituto de Defesa e Proteção Animal (Inspa) e sua proposta, além de disponibilizar um formulário para que o público em geral possa contribuir com a pesquisa sobre o assunto.

1. **Qual é o problema a ser resolvido?**

   &nbsp;&nbsp;&nbsp;&nbsp;O principal problema é o fato de que dentro do cenário científico hoje, não existem trabalhos científicos que apresentem dados suficientes sobre a situação e as causas/motivos por trás das adoções, compras ou abandonos de animais domésticos.<br>
   &nbsp;&nbsp;&nbsp;&nbsp;Além de que, os poucos estudos que existem, apresentam uma visão enviesada do assunto, além de não cobrir o assunto por completo.
   <br>

2. **Quais os dados disponíveis? (fonte e conteúdo - exemplo: dados da área de Compras da empresa descrevendo seus fornecedores - se não houver, apenas indique "não se aplica")**

   1. TAPI - Termo de Adesão do Projeto Inteli: documento descrevendo o problema e destrinchando a solução
   2. Projeto State of Pet Homelessness: website que cria pesquisas e disponibiliza dados sobre a situação de animais em situação de rua.
   3. Projeto Abandono Zero: projeto que visa visitar instituições de ensino e promover eventos e palestras conscientizando as pessoas sobre a problemática do abandono de animais
      <br>

3. **Qual a solução proposta?**

   &nbsp;&nbsp;&nbsp;&nbsp;A solução proposta consiste em criar um website, onde, a princípio, fala sobre o Inspa e seus objetivos, mas também terá a disponibilidade de um formulário para que o público em geral possa contribuir para a pesquisa sobre adoção, compra e abandono de animais.
   <br>

4. **Como a solução proposta deverá ser utilizada?**

   &nbsp;&nbsp;&nbsp;&nbsp;A solução proposta deverá, além de apresentar o instituto e sua proposta para o público em geral, fazer perguntas e coletar dados através de um formulário, além de fazer uma análise e mostrar, de forma gráfica e numérica, os dados coletados.
   <br>

5. **Quais os benefícios trazidos pela solução proposta?**

   &nbsp;&nbsp;&nbsp;&nbsp;A solução pode trazer clareza em relação a situação de animais adotados ou abandonados, além de que, os resultados da pesquisa podem ser utilizados para tomar ações mais efetivas visando diminuir os abandonos de animais e aumentar o número de adoções.
   <br>

6. **Qual será o critério de sucesso e qual medida será utilizada para o avaliar?**

   &nbsp;&nbsp;&nbsp;&nbsp;Inicialmente, o seguinte quadro explicita o critério de sucesso e a sua respectiva métrica.
   <br>
   <div align="center">
   <sup>Quadro 1 - Critérios de sucesso e métricas de monitoramento.</sup>
   </div>

|        **Critério de sucesso**        |                                **Medida utilizada para avaliar**                                |
| :-----------------------------------: | :---------------------------------------------------------------------------------------------: |
| Dados coletados através do formulário |                    Quantidade de respostas e compartilhamentos do formulário                    |
|         Popularidade do Inspa         |                             Quantidade de acessos ao site do Inspa                              |
|         Utilização dos dados          | Possibilidade de utilizar os dados para publicar gráficos e resultados com os dados da pesquisa |
|         Impacto no mundo real         |           Utilização dos dados coletados para tomar ações reais em favor dos animais            |

<div align="center">
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div>
<>
&nbsp;&nbsp;&nbsp;&nbsp;Por fim, a solução proposta pode trazer benefícios significativos à sociedade, como a clareza em relação à situação de animais adotados ou abandonados e a possibilidade de tomar ações mais efetivas para diminuir os abandonos e aumentar o número de adoções. A coleta de dados através de um formulário e sua análise gráfica e numérica pode contribuir para uma visão mais completa e imparcial do assunto. O website também pode ser uma ferramenta eficaz para conscientizar o público em geral sobre a problemática do abandono de animais e promover a adoção responsável.

### 2.1.5. Proposta de Valor

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;O Canvas de Proposta de Valor é uma ferramenta visual usada para descrever e comunicar de forma clara e concisa como um produto ou serviço cria valor para seus clientes. Imagine-o como um mapa que mostra o que uma empresa oferece aos clientes e por que isso é importante. Ele ajuda a entender os problemas dos clientes e como o produto ou serviço resolve esses problemas de uma maneira única e valiosa.
</p>
<div align="center" width=100%>
  <sup> Figura 2 - Canvas de Proposta de Valor.</sup>

<img src="../assets/images/canvas_proposta_valor.png">

<sub>
    Fonte: Material produzido pelos autores (2024).

  </sub>
  <br>
  <sub>
    Elaborado a partir do template do <a href="https://www.strategyzer.com/library/the-value-proposition-canvas">Stragezyser</a>
  </sub>
</div>

<br/>

<p style="text-align: justify">

<br/>1. **Tarefas do Cliente:** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui, descrevemos as principais atividades ou tarefas que os clientes precisam realizar relacionadas ao problema que estão enfrentando. Isso nos ajuda a entender melhor as necessidades dos clientes e como nosso produto ou serviço pode ajudá-los. <br>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui estão os pontos desse tópico:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Buscar fontes confiáveis sobre os perfis de tutores;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Analisar os dados coletados para extrair insights sobre os perfis dos tutores;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Pesquisar dados para entender o perfil das pessoas que adotam, compram ou abandonam animais.<br>

<br/>2. **Dores:** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Nesta seção, listamos os principais desafios, problemas ou frustrações que os clientes enfrentam ao tentar realizar suas tarefas. Identificar essas dores é crucial para desenvolver soluções eficazes que atendam às necessidades dos clientes. <br>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui estão os pontos desse tópico:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Dificuldade em encontrar dados reunidos e atuais sobre o cenário;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Dificuldade em encontrar informações detalhadas sobre os perfis dos melhores tutores, como hábitos de cuidado, preferências de alimentação e experiências passadas com animais.<br>

<br/>3. **Ganhos:** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui, destacamos os benefícios ou ganhos que os clientes desejam alcançar ao resolver seus problemas. Esses ganhos podem ser funcionais, emocionais ou sociais e ajudam a direcionar o desenvolvimento do produto ou serviço para atender às expectativas dos clientes. <br>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui estão os pontos desse tópico:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Visão ampla do cenário de adoção de animais;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Tomada de decisões mais informadas e eficazes com base nos insights extraídos dos dados coletados;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Facilidade em encontrar dados atualizados e estruturados sobre o cenário, economizando tempo na pesquisa de informações.<br>

<br/>4. **Criadores de Ganho:** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Esta seção descreve como o produto ou serviço oferece valor aos clientes, criando benefícios ou ganhos desejados. São os elementos que tornam a proposta de valor única e atraente em comparação com outras soluções disponíveis no mercado. <br>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui estão os pontos desse tópico:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Relatórios detalhados sobre motivos para adotar, comprar ou abandonar animais, facilitando a compreensão das tendências de mercado;<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Economia de tempo e recursos na coleta e análise de dados, permitindo que os clientes se concentrem em outras áreas importantes do trabalho;
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Base de dados universal atualizada sobre os perfis socioeconômicos e psicológicos dos cuidadores de animais.

<br/>5. **Aliviadores:** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui, identificamos como o produto ou serviço alivia ou resolve as dores dos clientes. Esses aliviadores são os recursos ou características que eliminam ou reduzem os problemas enfrentados pelos clientes, tornando a oferta mais atraente e valiosa.

<br>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui estão os pontos desse tópico:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Relatórios abrangentes sobre os perfis atuais dos tutores, fornecendo insights valiosos para a tomada de decisões personalizadas e eficazes;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Dados estratégicos sobre os melhores perfis para adotar um animal auxiliando os clientes na identificação de candidatos adequados para adoção.<br>

<br/>6. **Produto:** <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Por fim, descrevemos o produto ou serviço em si e como ele se encaixa nas necessidades, desejos e expectativas dos clientes. Esta seção oferece uma visão geral do que está sendo oferecido e como ele aborda as tarefas, dores, ganhos, criadores de ganho e aliviadores identificados anteriormente. <br>
&nbsp;&nbsp;&nbsp;&nbsp; Aqui estão os pontos desse tópico:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Aplicação web com sistema de coleta de dados universal de possíveis tutores projetada para ser fácil de usar e capaz de fornecer insights valiosos de maneira rápida e eficiente.<br>

### 2.1.6. Matriz de Riscos

&nbsp;&nbsp;&nbsp;&nbsp;A gestão de riscos é uma parte fundamental da administração eficaz de qualquer organização, visando identificar, avaliar e responder aos diversos desafios que podem impactar seus objetivos. Nesse contexto, a matriz de riscos surge como uma ferramenta importante para ajudar na visualização e priorização dos riscos, facilitando a tomada de decisão informada e a alocação eficiente de recursos. Ao mesmo tempo, o desenvolvimento de um plano de ação é essencial para traduzir as análises de risco em medidas concretas e estratégias de mitigação. <br>
&nbsp;&nbsp;&nbsp;&nbsp;Portanto, uma matriz de riscos robusta aliada a um plano de ação bem elaborado proporciona à organização uma abordagem proativa e sistêmica para lidar com os desafios emergentes e garantir sua sustentabilidade a longo prazo.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Dessa forma, a seguir (Figura 3) está representada a matriz de riscos do projeto.

<div align=center>
 <sup> Figura 3- Matriz de risco.</sup>
<img src="../assets/images/matriz_risco2.png">
 <sup>Fonte: material produzido pelos autores (2024). </sup><br>
<br>
</div>

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;De forma complementar, a seguir estão descritos os riscos previamente indicados, os planos de ação respectivos e os responsáveis pelo monitoramento de cada risco.
</p>

<div align="center">
<sup>Quadro 2 - Monitoramento e tratamento de riscos.</sup>

| Risco                                                                            | Plano de Ação                                                                                                                                                                 | Responsável |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Nosso site ser muito lento, demora para carregar página(1)                       | Revisar o código e procurar o que pode ser melhorado para melhoria                                                                                                            | Ana Heloísa |
| Falha na comunicação entre nosso grupo e o cliente INSPA (2)                     | Compreender a visão do cliente para atender às suas expectativas. Além disso tirar todas as dúvidas que surgirem durante a Sprint para que possa ser alinhando os pensamentos | Lucas       |
| Perda de dados dos usuários(3)                                                   | Revisar o banco dados e revisar o que pode estar de errado                                                                                                                    | Bruno       |
| Site sair do ar (4)                                                              | Entrar no código e encontrar o erro                                                                                                                                           | Vinicius    |
| Perder arquivos importantes. (5)                                                 | Manter as pastas organizadas para não perder os arquivos + compartilhar arquivos no grupo para que todos tenham.                                                              | Gustavo     |
| Não ter conhecimento necessário para criar um site (6)                           | Procurar ajuda do prof, outros membros da equipe ou monitores e se decidir no entendimento dos autoestudos.                                                                   | Ana Heloísa |
| Não conseguir implementar a responsividade do site(7)                            | Procurar ajuda do prof ou outros membros de outras equipes                                                                                                                    | Gustavo     |
| Nosso site ser confuso e não ser intuitivo(8)                                    | Fazer testes antes de ter uma versão final para recebermos feedbacks e fazer melhorias                                                                                        | Isadora     |
| Baixa Visibilidade: O site pode não ser facilmente encontrado pelos usuários.(9) | Solicitar uma campanha de marketing pelo INSPA através das redes sociais para ter mais visibilidade                                                                           | Isadora     |

<sub>Fonte: Material produzido pelos autores (2024).</sub>

</div>

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Portanto, a utilização da matriz de riscos e a elaboração de um plano de ação são elementos cruciais para o gerenciamento eficaz dos desafios e incertezas que enfrentamos como equipe. Ao implementarmos essas ferramentas, podemos identificar, avaliar e priorizar os riscos de maneira mais clara e objetiva, permitindo uma resposta ágil e eficiente diante das ameaças potenciais. Além disso, ao traduzirmos nossas análises de risco em ações concretas por meio do plano de ação, demonstramos nosso compromisso sólido com a mitigação de riscos e nossa busca pela excelência operacional. Dessa forma, ao adotarmos uma abordagem proativa e sistemática para o gerenciamento de riscos, fortalecemos nosso time e nos preparamos melhor para os possíveis dilemas enfrentados no futuro.
</p>

## 2.2. Personas

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Em 1983, Alan Cooper, designer e programador de softwares, foi pioneiro na criação do conceito de persona. Enquanto desenvolvia um sistema de gerenciamento de projetos, Alan utilizou Kathy, uma gestora de projetos, como modelo para uma persona inicial. Dessa forma, ele pôde traçar suas características, analisando seu perfil como um todo.
</p>

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Até os dias atuais, a persona é uma ferramenta valiosa. Representada por um personagem semi fictício, que exemplifica o cliente. É construída a partir de dados baseados em características de clientes reais, como comportamento, dados demográficos, dores e desafios. Dessa forma, é possível mapear os perfis de clientes ideais para um negócio.
</p>

<div align=center>
  <sup> Figura 4 - Persona 1 - Mônica.</sup>
<img src="../assets/images/persona1.png">

<br> <sup> Figura 5 - Persona 2 - José.</sup><br>
<img src="../assets/images/persona2.png"><br>

<sup> Figura 6 - Persona 3 - Isabela.</sup>
<img src="../assets/images/persona3.png">

<sup>Fonte: Material produzido pelos autores (2024).<br>
Template do Canva </sup>

</div>

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;A criação das personas foi fundamental no processo de maturação do trabalho, nos auxiliando a compreender os clientes do nosso negócio de maneira mais personalizada e eficaz. Ao representar características e necessidades reais através de personagens semi fictícios, foi possível adotar estratégias e tomar decisões importantes para o planejamento do projeto.
</p>

## 2.3. User Stories

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;As user stories, ou histórias de usuário, são ferramentas essenciais na metodologia ágil de desenvolvimento de software. Seu objetivo principal é capturar os requisitos do ponto de vista do usuário final, promovendo uma comunicação eficaz entre os membros da equipe de desenvolvimento e os stakeholders. Sendo assim, seu uso é insdispensável no processo de desenvolvimento de software.
</p>

| Identificação        | US01                                                                                                                              |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Persona              | Usuário (Mônica)                                                                                                                  |
| User Story           | Enquanto usuário, quero acessar o site em qualquer dispositivo, para que eu possa responder ao questionário de forma conveniente. |
| Critério de aceite 1 | CR1: O usuário precisa conseguir acessar o site em Desktop/PC e em dispositivos Mobile.                                           |
| Teste de aceitação 1 | Testar o site em diferentes dispositivos e tamanhos de tela para garantir a responsividade.                                       |

| Identificação        | US02                                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona              | Usuário (Mônica)                                                                                                                                      |
| User Story           | Enquanto Usuário, quero ver uma introdução clara sobre a iniciativa social ao entrar no site, para que eu possa entender o propósito do questionário. |
| Critério de aceite 1 | CR1: A página inicial do site deve ter um texto introdutório claro e conciso sobre a iniciativa social.                                               |
| Teste de aceitação 1 | Verificar se o texto introdutório está presente e é facilmente compreensível.                                                                         |

| Identificação        | US03                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Persona              | Usuário (Mônica)                                                                                                           |
| User Story           | Enquanto Usuário, quero começar a responder ao questionário com facilidade, para que eu possa participar sem complicações. |
| Critério de aceite 1 | CR1: Deve haver um botão ou link claramente visível para iniciar o questionário.                                           |
| Teste de aceitação 1 | Verificar se o botão ou link para iniciar o questionário está presente e funciona corretamente.                            |

| Identificação           | US04                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona                 | Usuário (Mônica)                                                                                                                               |
| User Story              | Enquanto Usuário, quero navegar facilmente entre as perguntas do questionário, para que eu possa responder ao questionário de forma eficiente. |
| Critério de aceitação 1 | CR1: Deve haver botões ou links para avançar para a próxima pergunta e voltar para a pergunta anterior.                                        |
| Teste de aceitação 1    | Verificar se os botões ou links para navegar entre as perguntas estão presentes e funcionam corretamente.                                      |

| Identificação        | US05                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona              | Usuário (Mônica)                                                                                                                            |
| User Story           | Enquanto Usuário, quero ver o progresso do questionário, para que eu saiba quantas perguntas restam.                                        |
| Critério de aceite 1 | CR1: Deve haver uma barra de progresso ou um indicador similar mostrando o progresso do questionário.                                       |
| Teste de aceitação 1 | Verificar se a barra de progresso ou indicador similar está presente e atualiza corretamente à medida que o usuário avança no questionário. |

| Identificação        | US06                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Persona              | Usuário (Mônica)                                                                                                   |
| User Story           | Enquanto Usuário, quero poder pausar e retomar o questionário, para que eu possa completá-lo no meu próprio ritmo. |
| Critério de aceite 1 | CR1: Deve haver uma opção para salvar o progresso do questionário e retomar mais tarde.                            |
| Teste de aceitação 1 | Verificar se a opção para salvar o progresso está presente e se o progresso do usuário é salvo corretamente.       |

| Identificação         | US07                                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Persona               | Usuário (Mônica)                                                                                                                    |
| User Story            | Enquanto Usuário, quero enviar minhas respostas quando terminar o questionário, para que minhas respostas sejam registradas.        |
| Critério de aceite 1  | CR1: Deve haver um botão de envio no final do questionário.                                                                         |
| Testes de aceitação 1 | Verificar se o botão de envio está presente e se as respostas do usuário são registradas corretamente quando o botão é pressionado. |

| Identificação         | US08                                                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona               | Usuário (Mônica)                                                                                                                                    |
| User Story            | Enquanto Usuário, quero receber uma confirmação após enviar minhas respostas, para que eu saiba que minhas respostas foram registradas com sucesso. |
| Critérios de aceite 1 | CR1: Após o envio do questionário, o usuário deve ver uma mensagem de confirmação.                                                                  |
| Testes de aceitação 1 | Verificar se a mensagem de confirmação é exibida após o usuário enviar suas respostas                                                               |

| Identificação        | US09                                                                                                                                          |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona              | Pesquisador (José)                                                                                                                            |
| User Story           | Enquanto Pesquisador, quero ter um banco de dados relacional bem modelado, para que eu possa fazer uma análise produtiva dos dados no futuro. |
| Critério de aceite 1 | CR1: O banco de dados deve ser relacional e bem modelado, com tabelas e relações claramente definidas.                                        |
| Teste de aceitação 1 | Verificar se o banco de dados é relacional e se as tabelas e relações estão corretamente definidas.                                           |

| Identificação        | US10                                                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona              | Pesquisador (José)                                                                                                                                                         |
| User Story           | Enquanto Pesquisador, quero ter a opção de enviar lembretes por e-mail para os usuários que não concluíram o questionário, para que possamos aumentar a taxa de conclusão. |
| Critério de aceite 1 | CR1: O sistema deve ser capaz de enviar lembretes por e-mail para os usuários que começaram, mas não concluíram o questionário.                                            |
| Teste de aceitação 1 | Verificar se o sistema é capaz de enviar lembretes por e-mail e se os lembretes são enviados corretamente.                                                                 |

| Identificação        | US11                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------- |
| Persona              | Usuário (Mônica)                                                                                            |
| User Story           | Enquanto Usuário, quero ver um design atraente e intuitivo, para que eu possa navegar facilmente pelo site. |
| Critério de aceite 1 | CR1: O design do site deve ser atraente, intuitivo e fácil de navegar.                                      |
| Teste de aceitação 1 | Verificar se o design do site é atraente e intuitivo e se a navegação é fácil e sem erros.                  |

| Identificação         | US12                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona               | Usuário (Mônica)                                                                                                                                        |
| User Story            | Enquanto Usuário, quero ter a opção de fornecer meu nome, e-mail e telefone antes de começar o questionário, para que eu possa ser contatado no futuro. |
| Critério de aceite 1  | CR1: Deve haver um formulário para coletar o nome, e-mail e telefone do usuário antes de iniciar o questionário.                                        |
| Testes de aceitação 1 | Verificar se o formulário está presente e se coleta corretamente o nome, e-mail e telefone do usuário.                                                  |

| Identificação        | US13                                                                                                                                          |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona              | Usuário (Mônica)                                                                                                                              |
| User Story           | Enquanto Usuário, quero ter a opção de compartilhar o site nas redes sociais, para que eu possa espalhar a palavra sobre a iniciativa social. |
| Critério de aceite 1 | CR1: Deve haver botões de compartilhamento para as principais redes sociais.                                                                  |
| Teste de aceitação 1 | Verificar se os botões de compartilhamento estão presentes e funcionam corretamente.                                                          |

<div align="center">
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div>

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;As user stories são essenciais no desenvolvimento ágil de software, facilitando uma abordagem centrada no usuário e flexível às mudanças. Elas capturam os requisitos de forma clara, promovendo uma comunicação eficaz entre equipe e stakeholders para garantir que o produto final atenda às necessidades do cliente. Ao serem integradas em um processo iterativo e complementar,permitindo à nossa equipe entregar valor de maneira mais rápida e eficiente, adaptando-se às mudanças e potencializando  o retorno sobre a expectativa do parceiro de projeto.
</p>

# <a name="c3"></a>3. Projeto da Aplicação Web

## 3.1. Arquitetura

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;A arquitetura de uma solução de software é o esqueleto estrutural que descreve a organização de um sistema de software, os componentes que o compõem, as relações entre esses componentes e as regras e diretrizes que governam sua evolução ao longo do tempo.<br></p>

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;A arquitetura de software é fundamental para a criação de sistemas eficientes e eficazes. Ela define como os elementos do software interagem e se alinham com os requisitos de negócios e as metas da organização. Além disso, uma boa arquitetura de software facilita a comunicação entre as partes interessadas, promove a reutilização de componentes e fornece uma base para tomar decisões de design e implementação.<br></p>

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Portanto, a arquitetura de uma solução de software é um aspecto crucial no desenvolvimento de sistemas de software, pois desempenha um papel significativo na determinação da qualidade, desempenho e sustentabilidade a longo prazo do software.<br>
</p>

<center>
  <sup> Figura 7 - Arquitetura Autenticação.</sup>

<img src="../assets/images/arq_auth.png"><br>
<br>

<sup> Figura 8 - Arquitetura Formulário.</sup>
<img src="../assets/images/arq_forms.png"><br>
<br>

<sup> Figura 9 - Arquitetura Institucional.</sup><br>
<img src="../assets/images/arq_institucional.png"><br>
<br>

<sup> Figura 10 - Arquitetura Dashboard.</sup><br>

<img src="../assets/images/arq_dashboard.png">
<sub>Fonte: Material produzido pelos autores (2024)</sub>
<br>

</center>
<br>
</div>

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;Esse padrão de arquitetura é ideal para gerenciamento e processamento abrangentes de dados, com interfaces de usuário e APIs para interação contínua. Os serviços centrais garantem o manuseio eficiente dos dados, enquanto o uso de bancos de dados e serviços externos melhora o armazenamento e a funcionalidade. Esse tipo de arquitetura é essencial para negócios que visam sistemas robustos, escaláveis e eficientes, sendo uma escolha estratégica para empresas que buscam otimizar suas operações e inovar em suas ofertas.
<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;O padrão MVC (Model-View-Controller) é uma arquitetura de software que separa a aplicação em três componentes principais, cada um responsável por diferentes aspectos do programa.

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;<b>Model:</b> Representa a camada de dados e a lógica de negócios. No contexto da sua arquitetura, o Model seria responsável pelo gerenciamento de dados, incluindo bancos de dados e serviços externos.<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>View:</b> É a camada de apresentação e interação com o usuário. Na sua arquitetura, a View corresponderia às interfaces de usuário e APIs que permitem a interação contínua e a apresentação de dados.<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Controller:</b> Atua como intermediário entre o Model e a View, controlando o fluxo de dados e as respostas às interações do usuário. Na sua arquitetura, o Controller gerenciaria as solicitações, coordenando os serviços centrais e garantindo a eficiência do processamento de dados.<br>
</p>

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;Utilizar o MVC em sua arquitetura pode trazer benefícios como a separação de preocupações, facilitando a manutenção e a escalabilidade do sistema. Além disso, permite que diferentes aspectos da aplicação sejam desenvolvidos e testados de forma independente, aumentando a eficiência do desenvolvimento
</p>

## 3.2. Wireframes

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;Um wireframe é um esboço visual que define a estrutura e o arranjo dos elementos principais em uma página ou tela de aplicativo. Ele é essencial para planejar a distribuição de conteúdo e funcionalidades antes do design detalhado, facilitando a compreensão da interface e a colaboração entre as equipes. Ao formar o wireframe para nosso website, levamos em conta o engajamento e o fluxo visual do usuário para estabelecer uma base sólida.</p>

<br>
&nbsp;&nbsp;&nbsp;&nbsp;Nas figuras a seguir conseguimos ver os wireframes desenvolvidos, porém, para melhor visualização e outros exemplos, segue os seguintes links:  
<br>

Link para <a href="https://www.figma.com/proto/Hbe96Vi0brP73yECfmGwIQ/Home?type=design&node-id=15-100&t=wLvEgUzI3UfBoLIL-1&scaling=min-zoom&page-id=0%3A1&mode=design">desktop</a>.
<br>

Link para <a href="https://www.figma.com/proto/oRCcuqQFHdFswmZ2rg3fbq/Untitled?type=design&t=zvexqghX4LCwVSnp-1&scaling=min-zoom&page-id=0%3A1&node-id=1-22&mode=design">mobile</a>.

<br>
<center> 
<sup> Figura 11 - Wireframe Desktop.</sup>
<img width=120% src="../assets/images/wireframe_comp1.png"><br>
<br>
<sup> Figura 12- Wireframe Desktop.</sup>
<img src="../assets/images/wireframe_comp2.png">
<br>
<br>
  
<sub>Figura 13 - Wireframe Mobile</sub>
<img src="../assets/images/cel_wire.png">

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>
<br>

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;O formulário segue um padrão comumente usado em websites/formulários famosos, o que torna a experiência do usuário familiar e confortável. Além disso, ele leva em conta a ideia de campanha de abandono zero, garantindo clareza e facilidade de uso. Também considera a possibilidade de compartilhamento do formulário com outros indivíduos, ampliando assim o alcance da campanha ou da causa em questão.</p>

## 3.3. Guia de estilos

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;Nosso site é um portal dedicado à causa animal, onde convidamos o público a se informar e se engajar na luta contra o abandono de animais de estimação. Através de um questionário cuidadosamente elaborado, buscamos entender as motivações por trás desse problema social que impacta a vida de milhões de criaturas inocentes.</p>

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;Pensando nisso, elaboramos um ambiente em que o design visual traga conforto e entusiasmo ao usuário. Para isso, utilizamos elementos que favorecem tais sensações que procuramos transmitir.</p>

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;A paleta de cores, a tipografia e as imagens do site foram cuidadosamente selecionadas para criar um ambiente acolhedor e convidativo, transmitindo ao mesmo tempo seriedade e profissionalismo.</p>

<p style="text-align:justify">
&nbsp;&nbsp;&nbsp;&nbsp;A seguir, todos os elementos visuais podem ser encontrados, acompanhados de suas respectivas justificativas.</p>

### 3.3.1 Cores

&nbsp;&nbsp;&nbsp;&nbsp;As cores são elementos fundamentais na criação de um site eficaz, pois influenciam diretamente a experiência do usuário. Mais do que meras ferramentas estéticas, elas se configuram como poderosas ferramentas de comunicação, capazes de transmitir mensagens com clareza, despertar emoções e induzir à ação.

&nbsp;&nbsp;&nbsp;&nbsp;O vermelho, por exemplo, pulsa com a energia da paixão, do amor e do perigo. Ele eleva a frequência cardíaca, estimula a adrenalina e desperta nossos instintos mais primitivos. Não é por acaso que o vermelho é a cor do fogo, do sangue e do amor ardente.

&nbsp;&nbsp;&nbsp;&nbsp;Em contraposição, o azul nos convida à calma, à serenidade e à paz. Ele acalma o sistema nervoso, reduz a pressão arterial e evoca sensações de tranquilidade e segurança. O azul é a cor do céu infinito, do mar profundo e da noite estrelada.

&nbsp;&nbsp;&nbsp;&nbsp;Ao combinarmos o azul e o vermelho como cores principais, criamos um equilíbrio perfeito entre essas emoções aparentemente contrastantes. Essa harmonia cromática estabelece um ambiente acolhedor e convidativo, onde o usuário se sente ao mesmo tempo calmo e energizado, pronto para explorar e se conectar com o nosso conteúdo. </br>

<div align="center" width="100%">
<sub>Figura 15 - Cores principais</sub>

<img src = "../assets/images/Cores.png"/>

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>
<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;Assim como em uma obra de arte, cada cor desempenha um papel fundamental na composição geral da parte visual do projeto. Como cores complementares, o ciano serve como base tranquilizante, o cinza aporta equilíbrio e profissionalismo, enquanto o amarelo adiciona toques de vibração e entusiasmo. Juntas, elas criam uma experiência visualmente atraente e emocionalmente envolvente, que convida o usuário a mergulhar em nosso mundo e se conectar com o propósito do nosso site. </br>

<div align="center" width="100%">
  
<sub>Figura 16 - Cores complementares</sub>

<img src = "../assets/images/cores2.png"/>

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>
<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;A paleta monocromática da escala de cinza não se limita a tons de preto e branco. Ela se revela como uma ferramenta poderosa, capaz de aumentar a conversão em até 20% e melhorar a legibilidade em 8%, transcendendo a mera estética e moldando a experiência do usuário, a acessibilidade e a comunicação visual de forma eficaz.

&nbsp;&nbsp;&nbsp;&nbsp;Com base nisso, optamos pelo tom de cinza #34323E, uma nuance elegante e equilibrada que se destaca por sua alta legibilidade e harmonia no contraste. Essa escolha foi meticulosamente ponderada, buscando aprimorar a experiência do usuário no nosso ambiente digital.

<div align="center" width="100%">
  
<sub>Figura 17 - Escala de cinza</sub>

<img src = "../assets/images/cinza.png"/>

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>
<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;A escolha meticulosa de cada tom de cor foi realizada com base em estudos aprofundados sobre psicologia das cores, harmonia cromática e acessibilidade universal. Através dessa análise precisa, garantimos que a paleta de cores do nosso site transmita a mensagem desejada com clareza, impacte as emoções do público de forma positiva e proporcione uma experiência visual agradável e inclusiva para todos.

### 3.3.2 Tipografia

&nbsp;&nbsp;&nbsp;&nbsp;Derivada do grego, onde "typos" significa forma e "graphein" escrita, a tipografia engloba o estudo, criação e aplicação de caracteres, estilos, formatos e arranjos visuais das palavras.

&nbsp;&nbsp;&nbsp;&nbsp;Por muito tempo, o trabalho com tipografia era reservado aos tipógrafos, técnicos ou designers especializados. O design de tipos, uma atividade altamente especializada, era dominado por gravadores de tipo ou puncionistas, como Claude Garamond e Giambattista Bodoni, criadores de fontes clássicas ainda apreciadas hoje.

&nbsp;&nbsp;&nbsp;&nbsp;Atualmente, através dos recursos tecnológicos, é possível e necessário utilizar desta ferramenta para obter uma boa estética nos textos, sejam eles físicos ou digitais, a fim de manter uma estética de acordo com que o design procura transmitir ao leitor/usuário.

&nbsp;&nbsp;&nbsp;&nbsp;A escolha das fontes para o nosso site foi cuidadosamente pensada para transmitir uma sensação de conforto e bem-estar aos usuários. Acreditamos que a tipografia pode ter um impacto significativo na experiência do usuário, por isso optamos por fontes que sejam claras, legíveis e esteticamentes agradáveis.

<div align="center" width="100%">
  
<sub>Figura 18 - Tipografia</sub>

<img src = "../assets/images/tipografia.png"/>

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>
<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;A fonte Comfortaa, como o próprio nome sugere, oferece uma leitura descontraída e fluida, enquanto a fonte Alata contribui para um visual moderno e minimalista. Juntas, elas criam um ambiente harmonioso e convidativo, que incentiva os usuários a explorarem o site com tranquilidade. Na imagem a seguir está um exemplo de como a fonte Comfortaa ficaria.
<br>
<br>

<div align="center" width="100%">
  
<sub>Figura 19 - Fonte Comfortaa</sub>

<img src = "../assets/images/home.png"/>

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>

&nbsp;&nbsp;&nbsp;&nbsp;Além disso, a escolha meticulosa dos tamanhos das fontes garante uma hierarquia visual clara e eficiente, facilitando a leitura e a compreensão do conteúdo. Títulos maiores se destacam, enquanto subtítulos e parágrafos possuem tamanhos adequados para uma leitura fluida e confortável. Essa estratégia contribui para uma experiência do usuário mais intuitiva.

&nbsp;&nbsp;&nbsp;&nbsp;As fontes escolhidas não se limitam apenas à estética. Elas também foram selecionadas por sua excelente legibilidade, especialmente em telas menores. Isso garante que todos os usuários, independentemente do dispositivo que estejam usando, possam ler o conteúdo com facilidade e conforto.

&nbsp;&nbsp;&nbsp;&nbsp;Acreditamos que a combinação de fontes adequadas e um design cuidadoso pode criar um site que seja não apenas apelativo, mas também agradável de usar.

&nbsp;&nbsp;&nbsp;&nbsp;A tipografia foi essencial para o sucesso do design do projeto, atuando como um elemento estratégico e complementar. Sua escolha cuidadosa, em conjunto com outros recursos de design, resultou em uma comunicação visual clara, eficaz e esteticamente atraente.

### 3.3.3 Iconografia e imagens

&nbsp;&nbsp;&nbsp;&nbsp;Ícones e imagens são uma linguagem universal que transcende barreiras. Sua natureza intuitiva os torna compreensíveis para todos, independentemente de idioma, idade ou nível de alfabetização. Por isso, são ferramentas essenciais para tornar seu site mais acessível e inclusivo, beneficiando desde crianças até adultos com dificuldade de leitura.
</br>

&nbsp;&nbsp;&nbsp;&nbsp;Nessa perspectiva, nosso site foi cuidadosamente projetado com ícones intuitivos que tornam a navegação mais fácil e agradável para todos. Cada ícone é uma linguagem visual que fala por si só, guiando o usuário pelos diferentes menus e funções do site de forma eficiente e sem esforço.

<div align="center" width="100%">
  
<sub>Figura 20 - Ícones</sub>

<img src = "../assets/images/icones.png"/>

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>
<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;Além dos ícones, a nossa logo representa mais do que um simples símbolo, a imagem com tons em preto, branco e marrom apresenta um cão estilizado, inspirado no jogo Watch Dogs. Essa escolha única e memorável reflete nossa atitude ousada e inovadora no mundo do desenvolvimento. O minimalismo do design transmite nossa filosofia de simplicidade e eficiência, enquanto o nome da nossa equipe, destacado com clareza, garante que as pessoas lembrem quem somos.

<div align="center" width="100%">
  
<sub>Figura 21 - Logotipo</sub>

<img src = "../assets/images/Logoreal.jpeg"/>

<sup>Fonte: material produzido pelos autores (2024).</span>

</div>
<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;Através da utilização estratégica de ícones, imagens e logotipos, e do compromisso com a acessibilidade e inclusão, acreditamos que podemos contribuir para a construção de um mundo digital mais justo e equitativo para todos.

## 3.4 Protótipo de alta fidelidade

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Um protótipo de alta fidelidade é uma representação interativa do produto que se assemelha ao máximo ao produto final em termos de design e funcionalidade. Ele incorpora tanto a interface do usuário (UI) quanto os aspectos da experiência do usuário (UX), incluindo interações, fluxo e comportamento. Nesse sentido, o protótipo é relevante por sua capacidade de validar a aceitação do produto, durante o seu desenvolvimento. Desse modo, é possível testar o produto com design e interatividade semelhantes à entrega final, fornecendo respostas confiáveis sobre a validação buscada.
Dessa forma, o protótipo pode ser acessado <a href="https://www.figma.com/file/tn1D2gMtjfYVmBHShRW0Q4/Website?type=design&node-id=116%3A2&mode=design&t=z1P3hxSUOlKr2wOH-1">aqui</a> e está disposto a seguir (Figuras).
</p>

<div align="center" width=100%>
<sup>Figura 22 - Página da homepage em Desktop</sup><br>
<img src="../assets/images/homepage2.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

<div align="center" width=100%>
<sup>Figura 22 - Página de questão do formulário em Desktop</sup><br>
<img src="../assets/images/prot-desk-form.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

<div align="center" width=30%>
<sup>Figura 23 - Página de questão do formulário em Mobile </sup><br>
<img src="../assets/images/prot-mob-form.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

<div align="center" width=100%>
<sup>Figura 24 - Página de login em Desktop </sup><br>
<img src="../assets/images/prot-desk-login.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

<div align="center" width=30%>
<sup>Figura 25 - Página de login em Mobile </sup><br>
<img src="../assets/images/prot-mob-login.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

<div align="center" width=100%>
<sup>Figura 26 - Página da Homepage </sup><br>
<img src="../assets/images/page.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

<div align="center" width=30%>
<sup>Figura 27 - Página sobre o que é ADM em Mobile </sup><br>
<img src="../assets/images/contato.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

<p style="text-align: justify" >
    Dessa forma, é possível avaliar a validade das ideias levantadas, a partir dos protótipos construídos, de forma a reduzir os custos de refatoração durante o desenvolvimento e a manter a agilidade do processo. Por fim, desse modo, aumenta-se a chance de sucesso do produto e garante que ele esteja alinhado às necessidades e desejos do cliente.
</p>

## 3.5. Modelagem do banco de dados

### 3.5.1. Modelo relacional

<div align="justify">
&nbsp;&nbsp;&nbsp;&nbsp;O modelo relacional de banco de dados é uma estrutura fundamental para a organização e gerenciamento eficiente de dados em sistemas de informação. Ao representar os dados em tabelas relacionadas, esse modelo oferece uma estrutura clara e compreensível, facilitando a navegação e manipulação dos dados. Além disso, o uso de chaves primárias e restrições de integridade referencial garante a precisão e consistência dos dados armazenados. A flexibilidade do modelo relacional permite adaptações conforme as necessidades específicas de uma aplicação, ao mesmo tempo em que oferece eficiência em consultas complexas e escalabilidade para lidar com o crescimento dos dados. Com recursos robustos de segurança e conformidade com padrões de mercado, o modelo relacional continua a ser uma escolha confiável e amplamente adotada na indústria de bancos de dados.</p>

<div align="center" width="100%">
<sup> Figura 28 - Modelo Relacional.</sup>
<br>

<img src="../assets/images/modelo_relacional.png">
<br></br>

**Modelo Relacional para Gestão de Formulários e Submissões de Usuários**

</div>

**1. Descrição Geral**

<p style="text-align:  justify">
&nbsp;&nbsp;&nbsp;&nbsp;Este diagrama ilustra um modelo relacional de um banco de dados projetado para a gestão de formulários e suas respectivas submissões por usuários. O modelo é composto por várias tabelas que armazenam dados sobre usuários, formulários, submissões e perguntas, bem como as opções de resposta para essas perguntas.
</p>

<div style="text-align:  justify">

**2. Tabelas e Relações**

**2.1 User**

**Descrição**: Armazena informações dos usuários.<br>

**Campos**:

- id (Identificador único)
- createdAt (Data de criação)
- updatedAt (Data de atualização)
- name (Nome de usuário)
- email (Email de usuário)
- password (Hash de senha)
- passChangeHash (Token de troca de senha)
- status (Estado do usuário (Ativo ou Inativo))
- isAdmin (Identifica usuários administradores)

**2.2 Form**

**Descrição**: Contém detalhes dos formulários.
<br>

**Campos**:

- id (Identificador único)
- createdAt (Data de criação)
- updatedAt (Data de atualização)
- title (Título do formulário)
- description (Descrição do formulário)
- status (Estado do formulário (Ativo ou Inativo))

**2.3 Submission**

**Descrição**: Registra as submissões de formulários pelos usuários.<br>

**Campos**:

- id (Identificador único)
- createdAt (Data de criação)
- updatedAt (Data de atualização)
- status (Estado da submissão (Ativo ou Inativo))
- id_form (Referência ao formulário)
- id_submissionfield (Referência a cada campo/resposta pertencente à submissão)

**2.4 SubmissionField**

**Descrição**: Detalha os campos específicos submetidos.<br>

**Campos**:

- id (Identificador único)
- createdAt (Data de criação)
- updatedAt (Data de atualização)
- id_question (Referência à pergunta)
- id_submission (Referência as submissões)
- value (Valor submetido)

**2.5 Question**

**Descrição**: Detalha as perguntas incluídas nos formulários.<br>

**Campos**:

- id (Identificador único)
- createdAt (Data de criação)
- updatedAt (Data de atualização)
- id_optionquestion (Referência ao OptiuonQuestion)
- id_form (Referência ao Form)
- question (Texto da pergunta)
- typeQuestion (Tipo de pergunta)
- isRequired (Obrigatório ou não)
- label (Rótulo da pergunta)
- placeholder (Texto aparente na caixa de texto (Somente indicação para o usuário))
- order (Ordenação da questão)
- defaultValue (valor padrão para uma resposta)
- condition (Condição para a questão aparecer)
- status (Estado da questão (Ativo ou Inativo))

**2.6 OptionQuestion**

**Descrição**: Armazena as opções para perguntas de seleção.<br>

**Campos**:

- id (Identificador único)
- createdAt (Data de criação)
- updatedAt (Data de atualização)
- id_question (Referência à pergunta)
- option (Texto da opção de resposta)

**2.7 Contato**

**Descrição**: Armazena as informações de contato de pesquisadores interessados no acesso aos dados.<br>

**Campos**:

- id (Identificador único)
- createdAt (Data de criação)
- updatedAt (Data de atualização)
- name (Nome completo do pesquisador)
- email (Email de contato do pesquisador)
- telefone (Número de telefone para contato do pesquisador)

**3. Relacionamentos**

- **User e Submission**: As submissões podem estar associadas aos usuários, embora isso não esteja explicitamente mostrado no diagrama.
- **Form e Submission**: Um formulário pode ter várias submissões.
- **Submission e SubmissionField**: Uma submissão envolve múltiplos campos (de resposta).
- **Question e SubmissionField**: Os campos em SubmissionFields estão diretamente ligados às perguntas.
- **Question e OptionsQuestion**: Perguntas com múltiplas escolhas estão vinculadas às suas opções específicas.
- **Question e Form**: Cada questão pertence a, no mínimo, um formulário.

</div>

**4. Utilização**

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Este modelo suporta a criação, gerenciamento e submissão de formulários dinâmicos que permitem perguntas variadas e opções múltiplas, mantendo a integridade e segurança dos dados dos usuários.
</p>

**Conclusão**

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Em conclusão, o modelo relacional de banco de dados é uma pedra angular no mundo da gestão de dados, oferecendo uma estrutura organizada, integridade, flexibilidade e eficiência que são essenciais para sistemas de informação modernos. Sua capacidade de fornecer uma representação clara e compreensível dos dados, juntamente com a garantia de precisão e consistência, o torna uma escolha confiável para uma ampla gama de aplicações. A contínua evolução e adaptação do modelo relacional, juntamente com seu suporte robusto de segurança e conformidade, asseguram sua relevância e utilidade no cenário de tecnologia da informação em constante mudança. Em última análise, o modelo relacional continua a ser uma base sólida sobre a qual construir sistemas de informação eficazes e confiáveis.
</p>

#### Modelo Físico

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;O modelo físico do banco de dados corresponde aos scripts SQL responsáveis por criar e definir as tabelas (DLL), inserir, editar e remover dados das tabelas (DML) e por último consultar e visualizar os dados presentes nas tabelas (DQL)</p>

#### DLL - Data Definition Language

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Código SQL que tem por principal objetivo criar as tabelas de um banco de dados, além de definir individualmente as colunas e seus respectivos tipos dentro de cada tabela.</p>

```sql

CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password INTEGER(100) NOT NULL,
    passChangeHash TEXT,
    status BOOLEAN DEFAULT TRUE,
    isAdmin BOOLEAN DEFAULT TRUE
);

CREATE TABLE "Form" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE "Submission" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    id_form INT NOT NULL,
    id_submissionfield INT NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    CONSTRAINT fk_id_form FOREIGN KEY (id_form) REFERENCES "Form" (id)
    CONSTRAINT fk_id_submissionfield FOREIGN KEY (id_submissionfield) REFERENCES "SubmissionField" (id)
);

CREATE TABLE "SubmissionField" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    id_questions INT NOT NULL,
    id_submission INT NOT NULL,
    value TEXT NOT NULL,
    CONSTRAINT fk_question FOREIGN KEY (id_questions) REFERENCES "Question" (id),
    CONSTRAINT fk_submission FOREIGN KEY (id_submission) REFERENCES "Submission" (id)
);

CREATE TABLE "Question" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    question TEXT NOT NULL,
    typeQuestion VARCHAR(50) NOT NULL,
    isRequired BOOLEAN DEFAULT FALSE,
    label VARCHAR(255),
    placeholder VARCHAR(255),
    order INT NOT NULL,
    defaultValue BOOLEAN DEFAULT TRUE,
    condition JSONB NULL,
    status BOOLEAN DEFAULT TRUE,
);

CREATE TABLE "OptionQuestion" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    id_question INT NOT NULL,
    option TEXT NOT NULL,
    CONSTRAINT fk_id_question FOREIGN KEY (id_question) REFERENCES "Question" (id)
);

CREATE TABLE "Contato" (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone INT NOT NULL
);
```

#### DML - Data Modeling Language

<p style="text-align: justify">
&nbsp;&nbsp;&nbsp;&nbsp;Código SQL que tem como principal objetivo adicionar, alterar ou remover dados de uma tabela e suas respectivas colunas.</p>

```sql

INSERT INTO "User" (username, email, pskHash, pskSalt, tokenCreated, tokenExpired, passChangeHash)
VALUES
    ('joao_silva', 'joao@exemplo.com', 'hashedpassword1', 'salt1', '2024-05-01 10:00:00', '2024-06-01 10:00:00', 'changepasshash1'),
    ('maria_oliveira', 'maria@exemplo.com', 'hashedpassword2', 'salt2', '2024-05-02 11:00:00', '2024-06-02 11:00:00', 'changepasshash2');

INSERT INTO "Form" (title)
VALUES
    ('Pesquisa qualitativa sobre o usuário'),
    ('Formulário sobre abandono de cachorros');

INSERT INTO "Submission" (id_forms)
VALUES
    (1),
    (2);

-- Inserindo dados na tabela Questions
INSERT INTO "Questions" (id_profile, question, typeQuestion, isRequired, label, placeholder)
VALUES
    (1, 'Quantos cães você já teve?', 'number', TRUE, 'Questão Quantitativa', 'Escreva sua resposta'),
    (1, 'Algum comentário ou sugestão?', 'text', FALSE, 'Comentários', 'Seu feedback');

-- Inserindo dados na tabela OptionQuestion
INSERT INTO "OptionQuestion" (id_questions, option)
VALUES
    (1, '5'),
    (1, '4'),
    (1, '3'),
    (1, '2'),
    (1, '1');

-- Inserindo dados na tabela SubmissionField
INSERT INTO "SubmissionField" (id_questions, id_submission, value)
VALUES
    (1, 1, '5'),
    (2, 1, 'São Paulo'),
    (1, 2, '4'),
    (2, 2, 'usuario@email.com');

```

### 3.5.2. Consultas SQL e lógica proposicional

&nbsp;&nbsp;&nbsp;&nbsp;Consultas SQL (Structured Query Language) são instruções usadas para interagir com bancos de dados relacionais, permitindo aos usuários realizar tarefas como buscar, inserir, atualizar e deletar dados. Essas consultas são fundamentais para manipular e acessar as informações armazenadas em um banco de dados. Por outro lado, a lógica proposicional é um ramo da lógica matemática que lida com proposições, que podem ser verdadeiras ou falsas, e utiliza operadores lógicos como AND, OR e NOT para formar proposições mais complexas a partir de proposições mais simples. Embora operem em contextos diferentes, tanto as consultas SQL quanto a lógica proposicional envolvem a formação de expressões estruturadas para resolver problemas específicos — no caso do SQL, relacionados a dados em bancos de dados, e na lógica proposicional, relacionados ao raciocínio e argumentação.

&nbsp;&nbsp;&nbsp;&nbsp;Abaixo, encontra-se a descrição das consultas SQL realizadas pelo back-end de uma aplicação web, juntamente com a lógica proposicional que descreve as condições de seleção (quando aplicáveis), acompanhada por uma tabela verdade para cada consulta condicional.

### Consultas SQL e Lógica Proposicional

1. **Consulta: Contar todas as submissões 'finished' no mês atual**

   ```sql
   SELECT COUNT(*)
   FROM submission
   WHERE "status" = 'finished'
   AND "createdAt" BETWEEN ${currentMonth_initDate} AND ${currentMonth_endDate};
   ```

   - **Lógica Proposicional**: \( P \land Q \)
   - \( P \): Status da submissão é 'finished'.
   - \( Q \): Data de criação da submissão está entre ${currentMonth_initDate} e ${currentMonth_endDate}.
   - **Tabela Verdade**:

     | \( P \) | \( Q \) | Resultado  |
     | ------- | ------- | ---------- |
     | V       | V       | Verdadeiro |
     | V       | F       | Falso      |
     | F       | V       | Falso      |
     | F       | F       | Falso      |

2. **Consulta: Contar todas as submissões 'finished' no último mês**

   ```sql
   SELECT COUNT(*)
   FROM submission
   WHERE "status" = 'finished'
   AND "createdAt" BETWEEN ${lastMonth_initDate} AND ${lastMonth_endDate};
   ```

   - **Lógica Proposicional**: \( P \land R \)
   - \( P \): Status da submissão é 'finished'.
   - \( R \): Data de criação da submissão está entre ${lastMonth_initDate} e ${lastMonth_endDate}.
   - **Tabela Verdade**:

     | \( P \) | \( R \) | Resultado  |
     | ------- | ------- | ---------- |
     | V       | V       | Verdadeiro |
     | V       | F       | Falso      |
     | F       | V       | Falso      |
     | F       | F       | Falso      |

3. **Consulta: Contar submissões por perfil 'Já tive cão'**

   ```sql
   SELECT COUNT(*)
   FROM (
       SELECT sf."idQuestion", sf."value"
       FROM submissionfield sf
       WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Já tive cão'
   );
   ```

   - **Lógica Proposicional**: \( S \land T \)
   - \( S \): ID da pergunta é 1.
   - \( T \): Valor da resposta da pergunta é 'Já tive cão'.
   - **Tabela Verdade**:

     | \( S \) | \( T \) | Resultado  |
     | ------- | ------- | ---------- |
     | V       | V       | Verdadeiro |
     | V       | F       | Falso      |
     | F       | V       | Falso      |
     | F       | F       | Falso      |

4. **Consulta: Contar submissões por perfil 'Tenho cão'**

   ```sql
   SELECT COUNT(*)
   FROM (
       SELECT sf."idQuestion", sf."value"
       FROM submissionfield sf
       WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Tenho cão'
   );
   ```

   - **Lógica Proposicional**: \( S \land U \)
   - \( S \): ID da pergunta é 1.
   - \( U \): Valor da resposta da pergunta é 'Tenho cão'.
   - **Tabela Verdade**:

     | \( S \) | \( U \) | Resultado  |
     | ------- | ------- | ---------- |
     | V       | V       | Verdadeiro |
     | V       | F       | Falso      |
     | F       | V       | Falso      |
     | F       | F       | Falso      |

5. **Consulta: Contar submissões por perfil 'Quero ter cão'**

   ```sql
   SELECT COUNT(*)
   FROM (
       SELECT sf."idQuestion", sf."value"
       FROM submissionfield sf
       WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Quero ter cão'
   );
   ```

   - **Lógica Proposicional**: \( S \land V \)
   - \( S \): ID da pergunta é 1.
   - \( V \): Valor da resposta da pergunta é 'Quero ter cão'.
   - **Tabela Verdade**:

     | \( S \) | \( V \) | Resultado  |
     | ------- | ------- | ---------- |
     | V       | V       | Verdadeiro |
     | V       | F       | Falso      |
     | F       | V       | Falso      |
     | F       | F       | Falso      |

6. **Consulta: Contar submissões por perfil 'Não quero ter cão'**

   ```sql
   SELECT COUNT(*)
   FROM (
       SELECT sf."idQuestion", sf."value"
       FROM submissionfield sf
       WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Não quero ter cão'
   );
   ```

   - **Lógica Proposicional**: \( S \land W \)
   - \( S \): ID da pergunta é 1.
   - \( W \): Valor da resposta da pergunta é 'Não quero ter cão'.
   - **Tabela Verdade**:

     | \( S \) | \( W \) | Resultado  |
     | ------- | ------- | ---------- |
     | V       | V       | Verdadeiro |
     | V       | F       | Falso      |
     | F       | V       | Falso      |
     | F       | F       | Falso      |

7. **Consulta: Contar submissões por perfis combinados**

   ```sql
   SELECT COUNT(*)
   FROM (
       SELECT sf."idQuestion", sf."value"
       FROM submissionfield sf
       WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Já tive cão' AND (value->>'value') = 'Não quero ter cão'
   );
   ```

   - **Lógica Proposicional**: \( S \land T \land W \)
   - \( S \): ID da pergunta é 1.
   - \( T \): Valor da resposta da pergunta é 'Já tive cão'.
   - \( W \): Valor da resposta da pergunta é 'Não quero ter cão'.
   - **Tabela Verdade**:

     | \( S \) | \( T \) | \( W \) | Resultado  |
     | ------- | ------- | ------- | ---------- |
     | V       | V       | V       | Verdadeiro |
     | V       | V       | F       | Falso      |
     | V       | F       | V       | Falso      |
     | F       | V       | V       | Falso      |
     | F       | F       | F       | Falso      |

8. **Consulta: Contar submissões por perfis 'Já tive cão' e 'Quero ter cão'**

   ```sql
   SELECT COUNT(*)
   FROM (
       SELECT sf."idQuestion", sf."value"
       FROM submissionfield sf
       WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Já tive cão' AND (value->>'value') = 'Quero ter cão'
   );
   ```

   - **Lógica Proposicional**: \( S \land T \land V \)
   - \( S \): ID da pergunta é 1.
   - \( T \): Valor da resposta da pergunta é 'Já tive cão'.
   - \( V \): Valor da resposta da pergunta é 'Quero ter cão'.
   - **Tabela Verdade**:

     | \( S \) | \( T \) | \( V \) | Resultado  |
     | ------- | ------- | ------- | ---------- |
     | V       | V       | V       | Verdadeiro |
     | V       | V       | F       | Falso      |
     | V       | F       | V       | Falso      |
     | F       | V       | V       | Falso      |
     | F       | F       | F       | Falso      |

9. **Consulta: Contar submissões por perfis 'Já tive cão' e 'Tenho cão'**

   ```sql
   SELECT COUNT(*)
   FROM (
       SELECT sf."idQuestion", sf."value"
   FROM submissionfield sf
   WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Já tive cão' AND (value->>'value') = 'Tenho cão'
   );
   ```

- **Lógica Proposicional**: \( S \land T \land U \)
- \( S \): ID da pergunta é 1.
- \( T \): Valor da resposta da pergunta é 'Já tive cão'.
- \( U \): Valor da resposta da pergunta é 'Tenho cão'.
- **Tabela Verdade**:

  | \( S \) | \( T \) | \( U \) | Resultado  |
  | ------- | ------- | ------- | ---------- |
  | V       | V       | V       | Verdadeiro |
  | V       | V       | F       | Falso      |
  | V       | F       | V       | Falso      |
  | F       | V       | V       | Falso      |
  | F       | F       | F       | Falso      |

10. **Consulta: Contar submissões por perfis 'Já tive cão', 'Tenho cão' e 'Quero ter cão'**

```sql
SELECT COUNT(*)
FROM (
    SELECT sf."idQuestion", sf."value"
    FROM submissionfield sf
    WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Já tive cão' AND (value->>'value') = 'Tenho cão' AND (value->>'value') = 'Quero ter cão'
);
```

- **Lógica Proposicional**: \( S \land T \land U \land V \)
- \( S \): ID da pergunta é 1.
- \( T \): Valor da resposta da pergunta é 'Já tive cão'.
- \( U \): Valor da resposta da pergunta é 'Tenho cão'.
- \( V \): Valor da resposta da pergunta é 'Quero ter cão'.
- **Tabela Verdade**:

  | \( S \) | \( T \) | \( U \) | \( V \) | Resultado  |
  | ------- | ------- | ------- | ------- | ---------- |
  | V       | V       | V       | V       | Verdadeiro |
  | V       | V       | V       | F       | Falso      |
  | V       | V       | F       | V       | Falso      |
  | V       | F       | V       | V       | Falso      |
  | F       | V       | V       | V       | Falso      |
  | F       | F       | F       | F       | Falso      |

11. **Consulta: Contar submissões por perfis 'Já tive cão', 'Tenho cão' e 'Não quero ter cão'**

```sql
SELECT COUNT(*)
FROM (
    SELECT sf."idQuestion", sf."value"
    FROM submissionfield sf
    WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Já tive cão' AND (value->>'value') = 'Tenho cão' AND (value->>'value') = 'Não quero ter cão'
);
```

- **Lógica Proposicional**: \( S \land T \land U \land W \)
- \( S \): ID da pergunta é 1.
- \( T \): Valor da resposta da pergunta é 'Já tive cão'.
- \( U \): Valor da resposta da pergunta é 'Tenho cão'.
- \( W \): Valor da resposta da pergunta é 'Não quero ter cão'.
- **Tabela Verdade**:

  | \( S \) | \( T \) | \( U \) | \( W \) | Resultado  |
  | ------- | ------- | ------- | ------- | ---------- |
  | V       | V       | V       | V       | Verdadeiro |
  | V       | V       | V       | F       | Falso      |
  | V       | V       | F       | V       | Falso      |
  | V       | F       | V       | V       | Falso      |
  | F       | V       | V       | V       | Falso      |
  | F       | F       | F       | F       | Falso      |

12. **Consulta: Contar submissões por perfis 'Já tive cão', 'Quero ter cão' e 'Não quero ter cão'**

```sql
SELECT COUNT(*)
FROM (
    SELECT sf."idQuestion", sf."value"
    FROM submissionfield sf
    WHERE sf."idQuestion" = 1 AND (value->>'value') = 'Já tive cão' AND (value->>'value') = 'Quero ter cão' AND (value->>'value') = 'Não quero ter cão'
);
```

- **Lógica Proposicional**: \( S \land T \land V \land W \)
- \( S \): ID da pergunta é 1.
- \( T \): Valor da resposta da pergunta é 'Já tive cão'.
- \( V \): Valor da resposta da pergunta é 'Quero ter cão'.
- \( W \): Valor da resposta da pergunta é 'Não quero ter cão'.
- **Tabela Verdade**:

  | \( S \) | \( T \) | \( V \) | \( W \) | Resultado  |
  | ------- | ------- | ------- | ------- | ---------- |
  | V       | V       | V       | V       | Verdadeiro |
  | V       | V       | V       | F       | Falso      |
  | V       | V       | F       | V       | Falso      |
  | V       | F       | V       | V       | Falso      |
  | F       | V       | V       | V       | Falso      |
  | F       | F       | F       | F       | Falso      |

13. **Consulta: Seleção de submissões entre datas específicas**

```sql
SELECT sf.*, q."question", q."typeQuestion", s."createdAt"
FROM submissionfield sf
JOIN question q ON sf."idQuestion" = q.id
LEFT JOIN submission s ON sf."idSubmission" = s.id
WHERE true AND s."createdAt" BETWEEN $1 AND $2;
```

- **Lógica Proposicional**: \( X \)
- \( X \): Data de criação da submissão está entre $1 e $2.
- **Tabela Verdade**:

  | \( X \) | Resultado  |
  | ------- | ---------- |
  | V       | Verdadeiro |
  | F       | Falso      |

14. **Consulta: Seleção de submissões por id da pergunta**

```sql
SELECT sf.*, q."question", q."typeQuestion", s."createdAt"
FROM submissionfield sf
JOIN question q ON sf."idQuestion" = q.id
LEFT JOIN submission s ON sf."idSubmission" = s.id
WHERE true AND sf."idQuestion" = $;
```

- **Lógica Proposicional**: \( Y \)
- \( Y \): ID da pergunta é $.
- **Tabela Verdade**:

  | \( Y \) | Resultado  |
  | ------- | ---------- |
  | V       | Verdadeiro |
  | F       | Falso      |

15. **Consulta: Seleção de submissões por id da pergunta e entre datas específicas**

```sql
SELECT sf.*, q."question", q."typeQuestion", s."createdAt"
FROM submissionfield sf
JOIN question q ON sf."idQuestion" = q.id
LEFT JOIN submission s ON sf."idSubmission" = s.id
WHERE true AND sf."idQuestion" = $ AND s."createdAt" BETWEEN $1 AND $2;
```

- **Lógica Proposicional**: \( Y \land X \)
- \( Y \): ID da pergunta é $.
- \( X \): Data de criação da submissão está entre $1 e $2.
- **Tabela Verdade**:

  | \( Y \) | \( X \) | Resultado  |
  | ------- | ------- | ---------- |
  | V       | V       | Verdadeiro |
  | V       | F       | Falso      |
  | F       | V       | Falso      |
  | F       | F       | Falso      |

Este documento descreve as consultas SQL utilizadas no back-end da aplicação, suas respectivas lógicas proposicionais e tabelas verdade, demonstrando como cada consulta é estruturada e quais condições precisam ser atendidas para que as consultas retornem resultados específicos.

## 3.6. WebAPI e Endpoints

&nbsp;&nbsp;&nbsp;&nbsp;Uma Web API é uma interface de programação de aplicativos que permite a interação entre diferentes softwares através da internet usando protocolos web, como HTTP. Ela é projetada para ser usada por outros programas, e não diretamente por usuários, facilitando a comunicação entre diferentes sistemas de software, seja para transferência de dados, integração de serviços ou funcionalidades. Endpoints são pontos específicos dentro de uma Web API que definem onde as requisições para funções ou serviços específicos podem ser acessadas. Cada endpoint está associado a uma URL específica e a uma operação de HTTP (como GET, POST, PUT ou DELETE), determinando exatamente que tipo de operação pode ser realizada e em que dados ou recursos ela afeta. Portanto, a Web API e seus endpoints são essenciais para a construção de aplicações modernas que interagem com outras aplicações ou serviços de maneira eficaz e padronizada.

&nbsp;&nbsp;&nbsp;&nbsp;Aqui estão os detalhes dos endpoints criados para o nosso sistema:

### 1. Endpoints de Administradores (ADM)

#### 1.1. Listar Administrador por ID

**URL:** `/adm/:id`
<br>

**Método:** GET
<br>

**Headers:**
`Authorization: Bearer <token>`
<br>

**Response:**

&nbsp;&nbsp;&nbsp;&nbsp;**Status 200: OK**

```json
{
  "id": "int",
  "name": "string",
  "email": "string",
  "createdAt": "dateTime",
  "updatedAt": "dateTime"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "string"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 404: Not Found**

```json
{
  "erro": "Administrador não encontrado"
}
```

#### 1.2. Listar Todos os Administradores

**URL:** `/adm`
<br>

**Método:** GET
<br>

**Headers:**
`Authorization: Bearer <token>`
<br>

**Response:**

&nbsp;&nbsp;&nbsp;&nbsp;**Status 200: OK**

```json
[
  {
    "id": "int",
    "name": "string",
    "email": "string",
    "createdAt": "dateTime",
    "updatedAt": "dateTime"
  }
]
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "Token inválido ou expirado"
}
```

#### 1.3. Criar Administradores

**URL:** `/adm`
<br>

**Método:** POST
<br>

**Headers:**
`Content-Type:application/json`
`Authorization: Bearer <token>`
<br>

**Body:**

```json
[
  {
    "id": "int",
    "email": "string",
    "senha": "string"
  }
]
```

**Response:**

&nbsp;&nbsp;&nbsp;&nbsp;**Status 201: Created**

```json
{
  "id": "int",
  "name": "string",
  "email": "string",
  "createdAt": "dateTime",
  "updatedAt": "dateTime"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 400: Bad Request**

```json
{
  "erro": "Descrição do erro"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "string"
}
```

#### 1.4. Atualizar Administradores

**URL:** `/adm`
<br>

**Método:** PATCH
<br>

**Headers:**
`Content-Type:application/json`
`Authorization: Bearer <token>`
<br>

**Body:**

```json
[
  {
    "id": "int",
    "name": "string",
    "email": "string",
    "senha": "string"
  }
]
```

**Response:**

&nbsp;&nbsp;&nbsp;&nbsp;**Status 200: OK**

```json
{
  "id": "int",
  "name": "string",
  "email": "string",
  "createdAt": "dateTime",
  "updatedAt": "dateTime"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 400: Bad Request**

```json
{
  "erro": "Descrição do erro"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "string"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 404: Not Found**

```json
{
  "erro": "Registro não encontrado"
}
```

#### 1.5. Deletar Administrador

**URL:** `/adm/:id`
<br>

**Método:** DELETE
<br>

**Headers:**
`Authorization: Bearer <token>`
<br>

**Response:**

&nbsp;&nbsp;&nbsp;&nbsp;**Status 200: OK**

```json
{
  "mensagem": "Administrador deletado com sucesso"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 400: Bad Request**

```json
{
  "erro": "Descrição do erro"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "string"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 404: Not Found**

```json
{
  "erro": "Registro não encontrado"
}
```

### 2. Endpoints de Autenticação (Auth)

#### 2.1. Login

**URL:** `/login`
<br>

**Método:** POST
<br>

**Headers:**
`Content-Type: application/json`
<br>

**Body:**

```json
{
  "email": "string",
  "senha": "string"
}
```

**Response:**

&nbsp;&nbsp;&nbsp;&nbsp;**Status 200: OK**

```json
{
  "token": "string"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 400: Bad Request**

```json
{
  "erro": "Descrição do erro"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "Credenciais inválidas"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "Credenciais inválidas"
}
```

#### 2.2. Logout

**URL:** `/logout`
<br>

**Método:** POST
<br>

**Headers:**
`Authorization: Bearer <token>`
<br>

**Response:**

&nbsp;&nbsp;&nbsp;&nbsp;**Status 200: OK**

```json
{
  "mensagem": "Logout realizado com sucesso"
}
```

&nbsp;&nbsp;&nbsp;&nbsp;**Status 401: Unauthorized**

```json
{
  "erro": "Token inválido ou expirado"
}
```

# <a name="c4"></a>4. Desenvolvimento da Aplicação Web

## 4.1. Primeira versão da aplicação web

## Descrição Geral

&nbsp;&nbsp;&nbsp;&nbsp;A seção 4 do documento detalha o desenvolvimento da primeira versão de uma aplicação web utilizando o framework Sails.js durante o sprint 3. A documentação inclui informações essenciais sobre a configuração e operação da aplicação, como as bibliotecas utilizadas, a versão recomendada do Node.js, e instruções para a instalação e inicialização do sistema. As bibliotecas principais mencionadas incluem `sails` para a construção da aplicação, `sails-disk` e `sails-mysql` para o armazenamento de dados, além de outras para gerenciamento de ORM e operações assíncronas. A seção também orienta sobre a configuração do banco de dados, migração de tabelas e os comandos necessários para iniciar a aplicação e executar testes. Além disso, fornece uma visão da estrutura de diretórios do projeto, organizando claramente os componentes da aplicação e facilitando a navegação e manutenção do código.

&nbsp;&nbsp;&nbsp;&nbsp;Esta documentação fornece uma visão geral da configuração e do uso de uma aplicação Sails.js, incluindo a descrição das bibliotecas utilizadas, a versão do Node.js, e os comandos necessários para migrar tabelas e iniciar a aplicação.

## Bibliotecas Utilizadas

### Dependências Principais

- **sails**: O framework principal usado para construir a aplicação.
- **sails-disk**: Adaptador de banco de dados para armazenamento local em disco (usado para desenvolvimento).
- **sails-mysql**: Adaptador de banco de dados MySQL.
- **sails-hook-orm**: Hook que gerencia a ORM do Sails.js.
- **lodash**: Biblioteca JavaScript para manipulação de arrays, objetos, etc.
- **async**: Biblioteca para gerenciamento de operações assíncronas.

### Dependências de Desenvolvimento

- **mocha**: Estrutura de testes para Node.js.
- **chai**: Biblioteca de asserção para testes.
- **supertest**: Biblioteca para testes de APIs.

## Versão do Node.js

A aplicação foi testada e é recomendada para uso com a seguinte versão do Node.js:

- **Node.js v14.x**

## Instalação

Para instalar as dependências da aplicação, execute o seguinte comando:

```bash
npm install
```

## Configuração do Banco de Dados

Para configurar o banco de dados MySQL, edite o arquivo `config/datastores.js` com suas credenciais de banco de dados:

```javascript
module.exports.datastores = {
  default: {
    adapter: "sails-postgresql",
    url: "postgresql://abandono_zero_2633_user:29TOioSqdZF5S14OmyQ5938y67BSEanb@dpg-coseaufsc6pc73e5h66g-a.oregon-postgres.render.com:5432/abandono_zero_2633",
    ssl: true,
  },
};
```

## Migração de Tabelas

Para migrar as tabelas do banco de dados, utilize o comando de sincronização de modelos do Sails.js:

```bash
sails lift
```

Se precisar recriar as tabelas, você pode usar o comando abaixo para reiniciar o banco de dados (cuidado: este comando irá apagar todos os dados):

```bash
sails db:reset
```

## Iniciando a Aplicação

Para iniciar a aplicação Sails.js, execute o comando:

```bash
sails lift
```

Ou, se preferir, você pode usar o comando do Node.js diretamente:

```bash
node app.js
```

## Testes

Para executar os testes, use o comando:

```bash
npm test
```

## Estrutura de Diretórios

Abaixo está a estrutura básica de diretórios da aplicação Sails.js:

```bash
/api
  /controllers
  /helpers
  /models
  /policies
  /services
  /responses
/assets
  /dependencies
  /fonts
  /images
  /js
  /styles
  /templates
/config
  /env
  /locales
  datastores.js
  routes.js
/views
  /emails
  /layouts
  /dependencies


app.js
package.json
```

## 4.2. Segunda versão da aplicação web

O desenvolvimento do sistema de administração utilizando o Sails.js foi realizado com o objetivo de criar uma aplicação robusta e escalável para a gestão de administradores. O processo incluiu a implementação de funcionalidades essenciais como criação, atualização, exclusão e listagem de administradores, além da criação de páginas de login e recuperação de senha.

## Sucessos:

Funcionamento Completo: Conseguimos implementar todas as funcionalidades planejadas e deixar o sistema totalmente funcional.

Aprendizado e Consolidação: O desenvolvimento do projeto proporcionou um grande aprendizado e a consolidação do conhecimento tanto no back-end quanto no front-end.

Interface de Login: A interface de login foi implementada conforme o design especificado no Figma, garantindo uma experiência de usuário consistente e atraente.

## Dificuldades:

Back-End dos Controllers: Encontramos dificuldades na implementação do back-end dos controllers, principalmente na lógica de criação, atualização e exclusão de administradores.

Integração do Formulário: A integração do formulário com o back-end apresentou desafios, exigindo ajustes e testes constantes para garantir que os dados fossem corretamente salvos e manipulados no banco de dados.

## Controller administrador

Para criar um administrador e salvá-lo no banco de dados, utilizamos um controller que armazena o email e a senha de um usuário conectado ao banco de dados dentro do Sails.js. Este controller inclui funções para criar, deletar, atualizar e listar administradores no banco de dados.

create-adm.js:
module.exports = {
friendlyName: 'Create users',
description: 'Essa rota cria nossos usuarios',
exits: {
success: {
description: 'The requesting user agent has been successfully logged out.'
},
},
inputs: {
name: {
type: "string",
required: true
},
emailAddress: {
type: "string",
required: true
},
password: {
type: "string",
required: true
}
},
fn: async function ({ user, emailAddress, password }) {
return await User.create({
user,
email: emailAddress,
password: await sails.helpers.passwords.hashPassword(password)
});
// Cria um usuário com os parâmetros fornecidos
}
};

## Página de login

Foi desenvolvido o front-end ligado ao controller do administrador, implementado no arquivo “login.ejs”.

## Change password

Foi desenvolvida a funcionalidade de recuperação de senha, abrangendo tanto o front-end quanto o back-end.

## Routes

As rotas no arquivo routes.js definem como o Sails.js acessa os arquivos para interagir com os usuários e o banco de dados.

Exemplos de rotas no routes.js:

'GET /api/v1/adm/:id': { action: 'adm/list-adm' },
'GET /api/v1/adm': { action: 'adm/list-adm' },
'POST /api/v1/adm': { action: 'adm/create-adm' },
'PATCH /api/v1/adm': { action: 'adm/update-adm' },
'DELETE /api/v1/adm/:id': { action: 'adm/delete-adm' },

'POST /api/v1/login': { action: 'auth/login' },
'/logout': { action: 'auth/logout' },

A documentação inclui instruções detalhadas para configurar e operar a aplicação, com ênfase em criar, gerenciar e proteger contas de administrador, além de orientar sobre a estrutura de rotas para facilitar a navegação e manutenção do sistema.

## Forms

O front end do formulário foi desenvolvido nos arquivos form.ejs e textForms.ejs. Tivemos dificuldade de integrar o back-end do formulário com o front-end, portanto isso foi deixado para a próxima sprint considerando o prazo da entrega.

## 4.3. Terceira versão da aplicação web

Exemplo do form.ejs:

<div align="center" width=30%>
<sup>Figura 29 - Código do forms </sup><br>
<img src="../assets/images/formsejs.png"/><br>
<sup> Figura 30 - Código do forms.</sup>
<img src ="../assets/images/formsejs2.png"/>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

## 4.3. Terceira versão da aplicação web

No desenvolvimento da terceira versão da nossa aplicação web, nossa equipe dedicou esforços significativos na criação de uma experiência aprimorada tanto para o administrador quanto para os usuários finais. Um dos focos principais foi aprimorar a página de contato, garantindo não apenas uma interface intuitiva, mas também funcionalidades que facilitam a comunicação eficaz. Além disso, o dashboard foi completamente redesenhado para oferecer uma visão clara e detalhada dos dados, permitindo que o administrador compreenda facilmente as informações essenciais. Incorporamos filtros personalizáveis para que o administrador possa ajustar os dados de acordo com as necessidades específicas, proporcionando uma gestão mais eficiente e informada da aplicação.

A página de contato do administrador foi projetada com o objetivo específico de proporcionar acesso direto aos insights gerados pela pesquisa, fortalecendo assim a capacidade analítica dos administradores. Ao facilitar o acesso a informações críticas, ela desempenha um papel crucial na disseminação de dados relevantes para os destinatários adequados. Isso não apenas promove uma compreensão mais profunda dos resultados da pesquisa, mas também facilita a tomada de decisões informadas e estratégicas.

Além de oferecer acesso aos insights da pesquisa, a página de contato foi concebida para ser intuitiva e de fácil navegação.. Dessa forma, não só se fortalece a análise de dados, mas também se facilita a colaboração e a comunicação eficaz dentro da equipe e além dela.

Essas melhorias na página de contato não apenas aumentam a eficiência operacional, mas também ajudam a maximizar o impacto das descobertas da pesquisa, garantindo que informações valiosas sejam rapidamente aplicadas onde mais são necessárias.

<div align="center" width=30%>
<sup>Figura 31 - Página de contato </sup><br>
<img src="../assets/images/pagcont.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

O dashboard foi desenvolvido utilizando HTML e CSS unidos aos dados do back-end, desempenhando um papel fundamental ao capacitar os pesquisadores a analisar dados de maneira eficiente e intuitiva. Projetado com ferramentas robustas para visualização e manipulação de dados, ele não apenas facilita uma tomada de decisão informada e precisa, mas também promove uma análise detalhada e profunda dos dados disponíveis. Sua interface amigável e responsiva garante uma experiência de usuário fluida em qualquer dispositivo, aumentando significativamente a eficácia do processo de análise. Esses atributos combinados proporcionam um ambiente propício para a descoberta de insights valiosos e a condução de pesquisas de forma mais eficiente e produtiva, como exemplificado a seguir.

<div align="center" width=30%>
<sup>Figura 32 - Dashboard </sup><br>
<img src="../assets/images/dashoboard.png"><br>
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

## Dificuldades

Apesar dos avanços significativos alcançados na criação da interface de administrador e da página de contato, é importante reconhecer que enfrentamos desafios significativos durante o desenvolvimento do dashboard. Este componente crucial da nossa aplicação exigiu um esforço adicional para equilibrar a complexidade técnica com usabilidade intuitiva. Ao longo do processo, nossa equipe enfrentou desafios na integração de diversas fontes de dados, na visualização clara e acessível das informações e na implementação de filtros personalizáveis para atender às necessidades específicas dos usuários.

No entanto, esses desafios foram superados com dedicação e colaboração entre os desenvolvedores, designers e stakeholders envolvidos. Através de iterações cuidadosas e feedback contínuo, conseguimos criar um dashboard que não só atende às expectativas de funcionalidade e desempenho, mas também oferece uma experiência de usuário que facilita a compreensão e a análise dos dados.

Portanto, enquanto reconhecemos as dificuldades enfrentadas, estamos orgulhosos do resultado final alcançado e confiantes de que o dashboard contribuirá significativamente para a eficácia e sucesso da nossa aplicação web. Este processo reforçou nossa capacidade de superar desafios técnicos complexos e demonstrou nosso compromisso em fornecer soluções robustas que agregam valor aos nossos usuários e stakeholders.

## 4.4. Versão final da aplicação web

A aplicação web coleta os dados fornecidos pelos usuários pelo questionário, também coletando um email caso o usário queira ajudar o abandono zero de outra forma. A aplicação tem um login para pesquisadores ou qualquer pessoa que queira acessar os dados coletado, com o INSPA também podendo acessar e filtrar esses resultado.

## Wad

Foi terminado a documentação, procurando revisar e corrigir quaisquer erros ortógraficos ou relacionados a formatação. Seções como 4.3, 4.4 e 5.2 foram terminadas como eram as ultimas seções da documentação e wad.

## Checagem de bugs

Foi feita uma checagem de bugs e erros no sistema, garantindo a partir de um bateria de testes e procurando exploits na aplicação. Os problemas encontrados foram: a integração do back-end e front-end da página de contato e a front-end da homepage quebrou. Todos os problemas encontrados foram corrigidos.

## Conclusão

Nesta sprint final teve poucas feats já que era preciso testar a aplicação e deixar uma margem caso qualquer bug seja encontrado. Algumas alterações como mudar a palavra "logar" no header, o display dos formularios respondidos e reestruturação da homepage foram feitas após a bateria de testes e inputs de integrantes do grupo, mas elas foram feitas rápidas para deixar aplicação web pronta o quanto antes.S

# <a name="c5"></a>5. Testes

## 5.1. Relatório de testes automatizados

### Introdução

Em um ambiente de desenvolvimento de software, os testes unitários representam uma das práticas mais fundamentais para assegurar a qualidade e confiabilidade do código antes de sua disponibilização para produção. Testes unitários focam em verificar a menor parte testável de uma aplicação, como funções ou métodos, garantindo que cada componente funcione conforme esperado de forma isolada dos demais.

Neste projeto, adotamos uma abordagem sistemática e disciplinada para os testes unitários, utilizando ferramentas e tecnologias modernas que permitem não só verificar a lógica de negócios de maneira eficaz, mas também automatizar e integrar esses testes no ciclo de vida de desenvolvimento contínuo. Utilizamos o framework **Mocha**, conhecido por sua flexibilidade e compatibilidade com várias bibliotecas de assertivas, junto com **Sinon** para simulação e controle de funções, **Supertest** para testar APIs, e **Assert** para realizar verificações rigorosas.

### Objetivos dos Testes

Os principais objetivos de implementar testes unitários neste projeto são:

1. **Detecção Precoce de Erros**: Identificar e corrigir falhas no início do ciclo de desenvolvimento, o que reduz custos de correção e evita complicações em etapas mais avançadas do projeto.
2. **Documentação do Comportamento do Código**: Os testes oferecem uma descrição clara de como o código deve se comportar, servindo como uma forma de documentação técnica que auxilia novos desenvolvedores e stakeholders a entenderem as funcionalidades do sistema.
3. **Facilitação de Refatorações**: Com uma suíte de testes abrangente, é possível modificar o código com confiança, assegurando que as alterações não quebrem funcionalidades existentes.
4. **Garantia de Qualidade**: Assegurar a qualidade do produto final, aumentando a confiança dos desenvolvedores e dos usuários finais na estabilidade e segurança do software.

### Ferramentas Utilizadas

- **Mocha**: Oferece uma estrutura de execução de testes com suporte para testes assíncronos, saídas flexíveis e isolamento de testes.
- **Sinon**: Permite a criação de spies, stubs e mocks, essenciais para simular comportamentos e verificar interações entre componentes sem necessidade de implementações reais.
- **Supertest**: Facilita a realização de testes de integração ao simular requisições HTTP para a API, verificando as respostas sem a necessidade de um servidor ativo.
- **Assert**: Biblioteca utilizada para realizar as assertivas nos testes, garantindo que os resultados dos testes estejam conforme o esperado.

Com esta configuração, estamos equipados para abordar uma vasta gama de cenários de testes, desde a lógica de negócios até a integração de componentes, e garantir que cada parte do sistema funcione corretamente antes de avançar para o próximo estágio de desenvolvimento.

### Configuração de Testes

No diretório `/test/util` do projeto, configuramos a função `mockAsync` que permite criar stubs de chamadas assíncronas, além de várias utilidades e mocks, como o objeto `RESPONSE` e o mock de dados de usuários (`USER`).

### Estrutura de Diretórios

A estrutura de diretórios de nossa aplicação é a seguinte:

```bash
/api
  /controllers
  /helpers
  /models
  /policies
  /services
  /responses
/assets
  /dependencies
  /fonts
  /images
  /js
  /styles
  /templates
/config
  /env
  /locales
  datastores.js
  routes.js
/views
  /emails
  /layouts
  /dependencies
  /pages
/test
  /unitary
  /util

app.js
package.json
```

### Descrição dos Testes Implementados

### Auth

#### Login

```javascript
describe("login", () => {
  it("Login", async () => {
    const loginStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(loginStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    loginStub.restore();
  });
});
```

##### Change Password

```javascript
describe("Change password", () => {
  it("Change password", async () => {
    const loginStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(loginStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    loginStub.restore();
  });
});
```

### Admin

#### Create Administrator

```javascript
describe("create-adm", () => {
  it("Create user adm", async () => {
    const createStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    createStub.restore();
  });
});
```

#### Update Administrator

```javascript
describe("update-adm", () => {
  it("Update user adm", async () => {
    const createStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    createStub.restore();
  });
});
```

#### Delete Administrator

```javascript
describe("delete-adm", () => {
  it("should delete an admin user", async () => {
    const createStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    createStub.restore();
  });
});
```

#### List Administrator

```javascript
describe("list-adm", () => {
  it("List users adm", async () => {
    const createStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    createStub.restore();
  });
});
```

### Forms Controller

#### Create, Find and FindOneForm

```javascript
describe("Forms Controller", () => {
  it("should create a form", async () => {
    const createStub = mockAsync(controller, "create", forms);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, forms);
    createStub.restore();
  });

  it("Find forms", async () => {
    const findStub = mockAsync(controller, "find", question);
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, question);
    findStub.restore();
  });

  it("findOne forms", async () => {
    const findOneStub = mockAsync(controller, "findOne", forms);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, forms);
    findOneStub.restore();
  });

  it("findFormFields forms", async () => {
    const findFormFieldsStub = mockAsync(controller, "findFormFields", forms);
    const result = await controller.findFormFields({}, RESPONSE);
    assert.strictEqual(findFormFieldsStub.calledOnce, true);
    assert.deepStrictEqual(result, forms);
    findFormFieldsStub.restore();
  });
});
```

#### Export Data

```javascript
describe("export-data", () => {
  it("Filter forms data", async () => {
    // Stub da função 'fn' do controlador
    const createStub = mockAsync(controller, "fn", {
      csvUrl: "blob:http://localhost:1337/abc123",
      jsonUrl: "blob:http://localhost:1337/def456",
    });

    // Chama a função 'fn' do controlador
    const result = await controller.fn(
      { inputData: { selectedData: { rows: [submission] } } },
      RESPONSE
    );

    // Verifica se o stub foi chamado uma vez
    assert.strictEqual(createStub.calledOnce, true);

    // Verifica se o resultado é igual ao esperado
    assert.deepStrictEqual(result, {
      csvUrl: "blob:http://localhost:1337/abc123",
      jsonUrl: "blob:http://localhost:1337/def456",
    });

    // Restaura o stub
    createStub.restore();
  });
});
```

### Questions Controller

#### Manage Questions

```javascript
describe("Questions Controller", () => {
  it("should create questions for the form", async () => {
    const createStub = mockAsync(controller, "create", question);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, question);
    createStub.restore();
  });
});
```

### Submission Filter

```javascript
describe("submission-filter", () => {
  it("should filter submissions", async () => {
    const createStub = mockAsync(controller, "fn", submissionField);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, submissionField);
    createStub.restore();
  });
});
```

## Métricas de Cobertura de Testes

| File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ---------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files              | 10.4    | 0        | 0       | 11.11   |
| adm                    | 25      | 0        | 0       | 28.57   |
| create-adm.js          | 50      | 100      | 0       | 50      | 24                |
| delete-adm.js          | 20      | 0        | 0       | 25      | 20-22             |
| list-adm.js            | 14.28   | 0        | 0       | 16.66   | 19-25             |
| update-adm.js          | 50      | 100      | 0       | 50      | 24                |
| auth                   | 11.11   | 0        | 0       | 11.11   |
| change-password.js     | 12.5    | 0        | 0       | 12.5    | 34-57             |
| login.js               | 10      | 0        | 0       | 10      | 33-54             |
| dashboard              | 6.66    | 0        | 0       | 6.66    |
| export-data.js         | 6.66    | 100      | 0       | 6.66    | 19-39             |
| submission-filter.js   | 6.66    | 0        | 0       | 6.66    | 29-53             |
| forms                  | 8.33    | 0        | 0       | 8.69    |
| FormsController.js     | 8.33    | 0        | 0       | 8.69    | 21-90             |
| questions              | 8.1     | 0        | 0       | 9.37    |
| QuestionsController.js | 8.1     | 0        | 0       | 9.37    | 19-160            |

## Conclusão

A implementação e manutenção de testes unitários detalhados e abrangentes são vitais para a saúde a longo prazo de qualquer aplicação de software. Os resultados apresentados nas métricas de cobertura de testes revelam áreas críticas do código que demandam maior atenção, seja para aumentar a cobertura de testes ou para resolver possíveis fragilidades e erros de implementação.

Através dos testes realizados, foi possível validar a lógica de negócios crítica de diversos componentes do sistema, proporcionando uma garantia substancial de que as funcionalidades atendem às expectativas e especificações requeridas. No entanto, as métricas indicam uma cobertura de apenas 10.4% em declarações (statements) e 11.11% em linhas de código, que são valores consideravelmente baixos. Isso sugere a necessidade de uma estratégia de teste mais robusta para abranger mais cenários e garantir a confiabilidade do software.

### Ações Recomendadas

1. **Ampliar Testes de Casos de Borda**: Expandir os testes para cobrir casos de borda e condições anormais que podem não ter sido contempladas inicialmente.
2. **Integração Contínua**: Integrar os testes unitários no processo de integração contínua para garantir que as alterações no código mantenham a integridade das funcionalidades já testadas.
3. **Revisão e Refatoração**: Revisar e, se necessário, refatorar blocos de código que apresentam complexidade elevada ou baixa cobertura de testes, simplificando a lógica ou dividindo funções grandes em partes menores e mais testáveis.
4. **Formação e Conscientização**: Investir na formação contínua da equipe de desenvolvimento em práticas de teste eficazes para melhorar a qualidade e a cobertura dos testes ao longo do tempo.
5. **Monitoramento de Regressões**: Utilizar as ferramentas de cobertura de testes para monitorar quaisquer regressões em funcionalidades previamente testadas e corrigidas.

### Impacto no Projeto

Adotar estas recomendações e melhorar a cobertura de testes permitirá não apenas aumentar a confiança no comportamento do sistema sob variadas condições, mas também facilitará futuras manutenções e expansões do código base. Testes bem planejados e executados são um investimento que se traduz em menor custo de manutenção, menos falhas em produção e maior satisfação do usuário final.

Implementar uma estrutura de testes unitários eficiente é fundamental para o desenvolvimento ágil e sustentável, e os esforços para melhorar a cobertura de testes e a qualidade do código deverão trazer retornos significativos em termos de confiabilidade e robustez do sistema.

## 5.2. Testes de usabilidade

### 5.2.1 Registros de testes e melhorias

<div align="center" width=30%>
<sup>Figura 31 - Código Teste de Usabilidade</sup><br>
<img src="../assets/images/bateria_teste_1.png">
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

Analisando os comentários feitos pelos participantes todos acharam que o site em geral era intuitivo e responsivo. As maiores dificuldades e pontos de melhoria apontados era relacionado ao pano de fundo, a página de login estar na palavra “logar” e algumas perguntas no questionário não terem uma resposta com multipla escolha.

A terceira participante teve bastante dificuldade de usar a aplicação, porém notou em seus comentários que achou a aplicação intuitiva e bem feita e que parte de suas dificuldades vieram de pouca experiência com computadores.

<div align="center" width=30%>
<sup>Figura 32 - Código Teste de Usabilidade</sup><br>
<img src="../assets/images/bateria_teste_2.png">
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

Das três tarefas a logar dentro de sua conta foi a mais intuitiva e todos participantes concluiram com sucesso. A maior dificuldade se encontrou na homepage, onde por dois fatores apontados dois participantes tiveram dificuldade, esses sendo o pano de fundo e a palavra “logar”. Na tarefa de responder o questionário a maior dificuldade encontrada foi o pano de fundo, já citado na homepage, e as questões se referindo a qual país/estado a pessoa reside.

<div align="center" width=30%>
<sup>Figura 32 - Código Teste de Usabilidade</sup><br>
<img src="../assets/images/bateria_teste_3.png">
<sub>Fonte: Material produzido pelos autores (2024).</sub>
</div><br>

Como um todo o site foi um sucesso, com a maioria dos participantes achando intuitivo e completando as tarefas rapidamente, porém, foi apontado problemas que afetem diversos usuários como o pano de fundo e a palavra “logar” que precisem ser corrigidos e features que ajudem a acessibilidade como a opção de visualizar a senha sendo digitada.

# <a name="c6"></a>6. Conclusões e trabalhos futuros

O grupo WatchDogs recebeu o pedido do Inspa para desenvolver um site dedicado ao projeto Abandono Zero, com o objetivo de incentivar as pessoas a responderem um questionário sobre o abandono de cachorros. Enfrentamos o desafio significativo de atrair participantes sem causar desconforto com um tema tabu. Desde o início, estabelecemos uma série de objetivos para garantir um processo organizado e alcançar nossa meta principal.

**1 | Homepage**

A criação da Homepage foi fundamental para causar uma excelente primeira impressão nos usuários ao acessarem o site. Desenvolvemos uma Homepage atraente e intuitiva, garantindo uma experiência de uso fluida.

**2 |Login**

A área de login desempenhou um papel crucial no estabelecimento de um relacionamento positivo entre o usuário e o site, facilitando uma navegação mais personalizada. Além disso, ela permite o armazenamento de informações, economizando tempo ao evitar que o usuário precise preencher formulários e outras informações repetidamente. Dessa maneira, o grupo WatchDogs concluiu essa etapa com grande êxito.

**3 |Recuperação de senha**

A funcionalidade de recuperação de senha é essencial para garantir que o usuário possa retornar ao site facilmente caso tenha esquecido sua senha. Desenvolvemos uma aplicação intuitiva que permite ao usuário criar uma nova senha através do seu e-mail, garantindo uma experiência simples e eficaz.

**4 |Formulário**

A criação do formulário foi o foco central do nosso site. Enfrentamos o desafio de incluir todas as perguntas solicitadas pelo Inspa e, ao mesmo tempo, torná-lo dinâmico e envolvente. Para isso, utilizamos uma variedade de recursos visuais e abordagens inovadoras na apresentação das perguntas, o que resultou em um formulário interessante e de fácil compreensão.

**5 |Acessibilidade no formulário**

Desde o início do projeto, reconhecemos a importância de tornar nosso site acessível a todos, garantindo a inclusão de toda a população no preenchimento do formulário e alcançando um público mais amplo. No entanto, este processo está em constante desenvolvimento e está previsto para ser implementado em versões futuras do site.

**6 |Criação e edição de formulários**

Nós, como desenvolvedores, compreendemos a necessidade de proporcionar ao administrador do site a capacidade de fazer alterações no formulário de forma simplificada, sem a necessidade de alterar diretamente o código de programação. Estabelecemos como objetivo implementar uma área que permita essas modificações de maneira intuitiva. No entanto, esse recurso ainda está em processo de otimização.

**7 |Integração de formulários**

O Inspa nos forneceu uma série de formulários específicos para diferentes perfis de usuários, que precisavam ser integrados ao banco de dados do projeto. Com sucesso, alcançamos esse objetivo, garantindo a funcionalidade integral dos formulários.

**8 |Dashboard**

Além de coletar dados, nossa aplicação web precisava processá-los para fornecer métricas precisas. Com essa meta em mente, desenvolvemos um dashboard que extrai dados do banco de dados e os transforma em informações claras e simples, facilitando a compreensão dos administradores.

**9 |Sistemas de recompensas**

Incentivar o usuário a preencher todas as informações sem abandonar o formulário foi um objetivo primordial que estabelecemos, pois é essencial para coletar todas as informações necessárias. Entretanto, estamos em constante trabalho para aprimorar esse recurso já nas próximas versões.

**10 |Idiomas**

A inclusão de múltiplos idiomas em um site é essencial para alcançar e engajar uma audiência global. Ao oferecer conteúdo adaptado às preferências linguísticas dos usuários, não apenas facilitamos a compreensão, mas também demonstramos respeito pela diversidade cultural e nacionalidade dos visitantes. A versão atual do site está disponível apenas em português brasileiro (PT-BR), como exigido para o projeto. Reconhecemos a importância de incluir o idioma inglês e espanhol para globalizá-lo. No entanto, este objetivo está atualmente em fase de desenvolvimento e está previsto para ser implementado nas próximas versões da aplicação web.

**11 |Área de contatos para pesquisador**

A presença de uma área dedicada a pesquisadores em um site desempenha um papel fundamental na promoção do conhecimento acadêmico e na colaboração científica. Essa seção, além de fornecer um espaço para destacar as publicações e projetos de pesquisa do pesquisador, permite que o administrador tenha acesso a informações precisas e confidenciais, contribuindo para projetos científicos. Contudo, ainda estamos trabalhando para entregar esse recurso de maneira otimizada.

Durante um período de 10 semanas, dedicamos esforço integral para garantir não apenas a satisfação do nosso parceiro no projeto, mas também a dos usuários. O site foi concebido com um design atrativo e acessível, visando engajar os visitantes de forma sensível e informativa sobre a problemática do abandono de animais. No entanto, temos objetivos que estão sendo otimizados.

# <a name="c7"></a>7. Referências

MAGRETTA, Joan. Entendendo Michael Porter: o guia essencial da competição e estratégia. Rio de Janeiro: Alta Books, 2019.

Como fazer uma análise SWOT? Disponível em: https://rockcontent.com/br/blog/como-fazer-uma-analise-swot/. Acesso em: 20 Abril 2024.

GOMES, Gustavo. Mínimo produto viável: O que é? Para que serve? Como testar? Disponível em: https://www.rdstation.com/blog/marketing/mvp-minimo-produto-viavel/. Acesso em: 20 Abril 2024.

FERREIRA, Kellison. Canvas de proposta de valor: para que serve e como preencher. Disponível em: https://blog.somostera.com/product-management/canvas-de-proposta-de-valor. Acesso em: 20 Abril 2024.

NAPOLEÃO, Bianca Minetto. Matriz de Riscos: Matriz de Probabilidade e Impacto. Disponível em: https://ferramentasdaqualidade.org/matriz-de-riscos-matriz-de-probabilidade-e-impacto/. Acesso em: 20 Abril 2024.

INSPA - Instituto de Psicologia Animal. Disponível em: https://inspa.com.br/. Acesso em: 20 Abril 2024.

# <a name="c8"></a>Anexos

<a href="https://drive.google.com/file/d/1r754jHsX2JmS0yHlKpwXXzX3UldoUPt6/view?usp=sharing">Questionários Base e Perfil 1 em PDF.</a>

<a href="https://drive.google.com/file/d/15O1hOmRoB6QI8o9D1QsWClFS3IhZVMPT/view?usp=sharing">Questionários Perfis 2, 3 e 4 em PDF.</a>
