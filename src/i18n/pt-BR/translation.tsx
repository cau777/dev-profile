import {Component} from "solid-js";
import {Dynamic} from "solid-js/web";
import { getMyAge } from "~/utils/dates"
import { A } from "solid-start"
import { CustomLink } from "~/components/CustomLink"

export default {
    "headDescription":"Site portifólio pessoal de Cauã Rinaldi, destacando escolaridade, cursos, linguagens de programação, e projetos.",
    "greeting": "Olá, Eu sou Cauã Rinaldi!",
    description: (adj1Tag: Component<any>, adj2Tag: Component<any>) => <>
        Um Desenvolvedor Full-Stack <Dynamic component={adj1Tag}>proativo</Dynamic> e <Dynamic component={adj2Tag}>criativo</Dynamic>
    </>,
    subtitle: (tag: Component<any>) => <>
        Tu tenho {getMyAge()} anos e se tem <Dynamic component={tag}>uma</Dynamic> coisa que eu sei é que amo encontrar soluções criativas para problemas.
        <br/>
        Além disso, gosto de construir aplicações grandes e pequenas, enquanto trabalhando no frontend e/ou backend.
    </>,
    aboutMeText: () => <>
        Eu sou brasileiro e Português é minha língua nativa, mas eu também sou fluente em inglês (C1). <br/>
        Eu comecei a programar em 2017 como um hobby, mas começei a aprender seriamente em 2021. <br/>
        Nesse tempo, eu fiz vários cursos e criei vários projetos open-source no meu GitHub, explorando tecnologias diversas. <br/>
        Agora, estou trabalhando como desenvolvedor Full-Stack na <CustomLink href="https://aerialops.io/">Aerial</CustomLink> <br/>
    </>,

    "elementarySchool": "Ensino Fundamental",
    "highSchool": "Ensino Médio",
    "englishCourse": "Curso de Inglês",
    "softwareEngineering": "Engenharia de Software",
    "presentTime": "Presente",

    "viewCertificate": "Ver Certificado",

    "career": "Carreira",
    "aerialPeriod": "Aerial (Abril de 2023 - Presente)",
    "aerialDescription": "Aerial é uma plataforma que auxilia startups a coletar, organizar e referenciar " +
      "as informações e documentos essenciais para administrar e obter investimentos em suas empresas.",
    "aerialMlDescription": "Aerial aproveita o poder de Machine Learning para automaticamente organizar documentos, para que estejam prontos " +
      "para o processo de 'due diligence' a qualquer momento.",
    "aerialRedFlagsDescription": "A plataforma também identifica e reporta 'bandeiras vermelhas', problemas com os documentos que podem atrapalhar" +
      "captação de recursos ou aquisição.",
    "aerialIntern": () => <>
        Eu iniciei como estagiário em tempo integral quando <CustomLink href={"https://www.linkedin.com/in/tianhuili/"}>Michael Li</CustomLink> viu
        potencial em meu trabalho, apesar da minha falta de experiência profissional.
        Nesse momento, Eu foquei principalmente em desenvolver a aplicação web com NextJS, TS e tRPC.
    </>,
    "aerialFullStack": "Depois do período de estágio, eu fui promovido para desenvolvedor Full-Stack em tempo integral. " +
        "Minhas responsabilidades aumentaram: além de trabalhar no front-end, eu comecei a revisar código e desenvolver " +
        "a parte de IA da empresa, usando Python, sklearn, e OpenAI.",

    "checkDemo": "Ver Demo",
    "checkSource": "Ver Código",
    "prev": "Anterior",
    "next": "Próximo",
    "scrollDown": "Ir para baixo",

    "aboutMe": "Sobre mim",
    "education": "Educação",
    "courses": "Cursos",
    "projects": "Projetos",
    "languages": "Linguagens",
    "languagesDescription": "Minha experiência com diferentes linguagens ao longo do tempo, medida por CodersRank com base na minha atividade no GitHub",

    "sudokuSolverDescription": "Um algoritmo feito para solucionar jogos de Sudoku de tamanhos diferentes eficientemente. " +
        "Ele é implementado em Rust e roda no navegador usando Web Assembly. " +
        "O projeto inclui uma interface simples feita com React para visualizar o algoritmo passo a passo.",

    "aipgDescription": "Uma biblioteca de Deep Learning acelerada por GPU, feita em Rust praticamente do zero. " +
        "Além de um playground online para usá-la para reconhecer dígitos escritos manualmente (dataset MNIST).",

    "graphicalRegexDesignerDescription": "Um site feito com Angular que permite criar Regex usando blocos coloridos. " +
        "Também suporta variáveis e testes, e produz a expressão no formato do JavaScript.",

    "codeShareDescription": "Uma rede social que permite usuários escrever e postar snippets de código em diferentes linguaguens com um editor de código, " +
        "e interagir com perfis e publicações de outros usuários. Usa Supabase como a base de dados e inclui 2 microserviços containerizados.",
}