import {Component} from "solid-js";
import {Dynamic} from "solid-js/web";

export default {
    "headDescription":"Site portifólio pessoal de Cauã Rinaldi, destacando escolaridade, cursos, linguagens de programação, e projetps.",
    "greeting": "Olá, Eu sou Cauã Rinaldi!",
    description: (adj1Tag: Component<any>, adj2Tag: Component<any>) => <>
        Um Desenvolvedor Web <Dynamic component={adj1Tag}>proativo</Dynamic> e <Dynamic component={adj2Tag}>estudioso</Dynamic>
    </>,
    subtitle: (tag: Component<any>) => <>
        Tu tenho quase 18 anos e se tem <Dynamic component={tag}>uma</Dynamic> coisa que eu sei é que amo encontrar soluções criativas para problemas.
        <br/>
        Além disso, gosto de construir aplicações grandes e pequenas, enquanto trabalhando no frontend e/ou backend.
    </>,
    aboutMeText: () => <>
        Eu sou brasileiro e Português é minha língua nativa, mas eu também sou fluente em inglês (C1). <br/>
        Eu comecei a programar em 2017 como um hobby, mas começei a aprender seriamente em 2021. <br/>
        Nesse tempo, eu fiz vários cursos e criei vários projetos open-source no meu GitHub, explorando tecnologias diversas. <br/>
        Agora, eu estarei estudando Engenharia de Software na Unijuí de 2023 a 2028. <br/>
    </>,
    
    "elementarySchool": "Ensino Fundamental",
    "highSchool": "Ensino Médio",
    "englishCourse": "Curso de Inglês",
    "softwareEngineering": "Engenharia de Software",
    "presentTime": "Presente",
    
    "viewCertificate": "Ver Certificado",
    
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
    
    "handwrittenDigitsRecognitionDescription": "Uma biblioteca de Deep Learning acelerada por GPU, feita em Rust praticamente do zero. " +
        "Além de um playground online para usá-la para reconhecer dígitos escritos manualmente (dataset MNIST).",
    
    "graphicalRegexDesignerDescription": "Um site feito com Angular que permite criar Regex usando blocos coloridos. " +
        "Também suporta variáveis e testes, e produz a expressão no formato do JavaScript.",
    
    "codeShareDescription": "Uma rede social que permite usuários escrever e postar snippets de código em diferentes linguaguens com um editor de código, " +
        "e interagir com perfis e publicações de outros usuários. Usa Supabase como a base de dados e inclui 2 microserviços containerizados.",
}