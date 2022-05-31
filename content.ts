import { ThemeTypings } from "@chakra-ui/react";

type Content = {
  head: {
    metaDescription: string;
    title: string;
  };
  social: {
    whatsAppNumber: string;
    instagramLink: string;
    email?: string;
  };
  hero: {
    title: string;
    titleHighlighted: string;
  };
  welcomeMessage: {
    title: string;
    content: string;
  };
  features: {
    items: Array<{
      title: string;
      content: string;
      imagesrc: string;
    }>;
  };
  presentation: {
    title: string;
    content: string;
  };
  choices: {
    title: string;
    content: string;
    images: string[];
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  testimonials?: Array<{
    content: string;
    clientName: string;
    clientDescription: string;
  }>;
  cta: {
    title: string;
    content: string;
  };
  footer: {
    address: string;
    addressLink: string;
  };
  colors: {
    scheme: ThemeTypings["colorSchemes"];
    primaryLight: string;
    primary: string;
    primaryDark: string;
  };
};

const content: Content = {
  head: {
    metaDescription: "Site da Dra. Andréa Rufino",
    title: "Dra. Andréa Rufino",
  },
  social: {
    whatsAppNumber: "558695183172",
    instagramLink: "https://www.instagram.com/andrearufino_/",
  },
  hero: {
    title: "Dra. Andréa Rufino",
    titleHighlighted: "Ginecologista e Sexóloga.",
  },
  welcomeMessage: {
    title: "Sejam Bem-Vindas(os)!",
    content:
      "SEXUALIDADE, VIDA E SAÚDE: REVOLUCIONE A SUA! Medicina sexual.",
  },
  features: {
    items: [
      {
        title: "Medicina sexual",
        imagesrc: "./atuacao/image1.jpg",
        content: `Medicina sexual: Diagnóstico de queixas sexuais que envolvem problemas físicos, emocionais, de relacionamento e sociais. `,
      },
      {
        title: "Terapia especializada",
        imagesrc: "./atuacao/image2.jpg",
        content: `Disponibiliza terapia especializada com equipe multiprofissional para indivíduos e casais com o objetivo de restabelecer sua função sexual e saúde integral.`,
      },
      {
        title: "Programa de educação sexual",
        imagesrc: "./atuacao/image3.jpg",
        content: `Também oferta programa de educação sexual em jornada que atende as necessidades individuais.`,
      },
    ],
  },
  presentation: {
    title: "Quem sou eu",
    content:
      `Olá! Eu posso imaginar sua trajetória até chegar ao meu encontro. Seja bem vinda, bem vindo, bem vinde!

Eu sei que falar sobre sexualidade ainda pode ser difícil para muitas pessoas, mas se você chegou até aqui, saiba que eu posso te ajudar.

Eu me formei médica (CRM 2006/PI), me especializei em Ginecologia (RQE 434) e busquei formações que me habilitaram para atuar como Sexóloga (RQE 1484).

A especialização em Sexologia Clínica e a formação em Análise Psicodramática me capacitaram para a atuação em terapia sexual individual e de casal.

Minha trajetória como professora universitária, pesquisadora, autora de artigos e capítulos de livros sobre temas sexuais me garantiu expertise adicional para ofertar psicoeducação sexual, considerada o pilar da terapia sexual baseada em evidências científicas.

Toda essa trajetória pessoal e profissional me levou a criar o melhor espaço para cuidar da sua saúde sexual de forma integral: a Casa das Mulheres.

Será um prazer acompanhar você no restabelecimento e manutenção da sua saúde sexual. Vem comigo!
`,
  },
  choices: {
    title: "Espaço para você",
    content:
      `A Casa das Mulheres é um espaço para você vivenciar uma experiência única em saúde integral, conquistar bem-estar sexual e satisfação com a sua sexualidade. Somos uma equipe preparada para ofertar a você o melhor suporte multiprofissional para o restabelecimento e manutenção da sua saúde sexual. O nosso conceito de bem estar sexual possibilita unirmos os 3 pilares fundamentais da assistência em saúde sexual segundo a Internacional Society for Sexual Medicine: educação, funcionalidade e satisfação sexual. Minha atuação profissional que une assistência em saúde sexual, ensino e pesquisa em sexualidade me preparou para tratar as suas queixas sexuais integrando de forma dinâmica as causas orgânicas, interrelacionais e psicossociais. `,
    images: [
      "/swipper/image1.jpg",
      "/swipper/image2.jpg",
      "/swipper/image3.jpg",
      "/swipper/image4.jpg",
      "/swipper/image5.jpg",
      "/swipper/image6.jpg",
    ],
  },
  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        question: "Estou sem desejo sexual: o que fazer?",
        answer:
          "Começamos investigando as possíveis causas. Precisamos descartar alterações hormonais, como doenças da tireoide, prolactina elevada, menopausa e uso de hormônios. Importante observar se há conflitos de relacionamento e questões emocionais que afetam a autoestima. Lembrar que o stress cotidiano, maus hábitos de vida, cansaço e a monotonia nos relacionamentos podem impactar de forma negativa no desejo sexual. Desconhecimento e crenças limitantes sobre sexualidade impõe dificuldades para o desejo sexual se expressar livremente. Uma equipe multiprofissional preparada para te escutar, diagnosticar, orientar e tratar as possíveis causas é fundamental para ajudar a recuperar o desejo sexual.",
      },
      {
        question: "Sinto muita dor na relação sexual!",
        answer:
          "Primeiro, NÃO é normal sentir dor na prática sexual! Então, precisamos valorizar sua queixa e pesquisar as causas. Doenças como endometriose, infecção pélvica e vaginites podem causar dor durante as relações sexuais. Conflitos sexuais e no relacionamento, experiências de violência, desconhecimento sobre sexualidade e educação muito repressora também podem resultar em dor e medo que dificultam a prática sexual. Uma avaliação com equipe multiprofissional te ajuda a identificar as causas e tratar adequadamente para que a prática sexual seja confortável e prazerosa. Afinal, sexo deve ser sinônimo de prazer!",
      },
      {
        question: "Não consigo ficar lubrificada na prática sexual!",
        answer:
          "A lubrificação é resultado de uma boa excitação que inclui estímulos sexuais adequados. O estímulo sexual deve ter duração, intensidade e frequência suficientes para congestão genital e prazer garantido! A falta de desejo sexual, falta de estímulo adequado, penetração vaginal sem estimulação adequada, menopausa, pós parto e medicamentos podem causar lubrificação diminuída. Uma boa consulta ginecológica com orientações adequadas te ajudam a resolver o problema.",
      },
      {
        question: "Não consigo sentir prazer e finjo orgasmo!",
        answer:
          "O prazer sexual feminino inclui o conhecimento sobre o corpo, zonas erógenas e, principalmente, o clitóris. Clima envolvente com estímulos sexuais que despertam os 5 sentidos são o caminho para o prazer. Fingir o orgasmo é enganar a si mesma. Uma jornada educativa de autoconhecimento te ajudará a descobrir o que te dá prazer.",
      },
      {
        question: "Tenho um relacionamento longo e o desejo sexual acabou!",
        answer:
          "Manter o desejo sexual em relacionamentos longos é um desafio mesmo. O cotidiano que impõe uma monotonia e eventuais conflitos afastam o casal e o desejo sexual também. Conhecer o que te dá prazer, repensar e mudar comportamentos são estratégias que a terapia de casal pode ajudar.",
      },
    ],
  },
  testimonials: [
    {
      content:
        "Eu chegava aos 50 com uma vontade de deixar vir “de dentro de mim uma nova mulher”, ao mesmo tempo com o medo da menopausa que batia na minha porta e me lembrava que um tipo de maternidade já não era mais uma opção para mim. Nas conversas com a Dra Andréa Rufino, fui me dando conta de que mal sabia distinguir o que era emoção de reação, como um olhar para dentro de mim tem feito diferença!  A Casa das Mulheres tem sido um lugar de acolhimento, onde eu só preciso ser eu mesma.",
      clientName: "Vânia Soares",
      clientDescription: "51 anos",
    },
    {
      content:
        "O encontro com Dra. Andréa, ilumina um caminho que a gente precisa  aprender a seguir. Anima a nos afirmar como mulher, com as alegrias, as dores, as rugas, as perdas e os ganhos. Encoraja a sustentar nossas opiniões, a enfrentar os medos e admitir os desejos.Dra. Andréa  agrega,  articula encontros, faz as mulheres ouvirem umas às outras  e ajuda a entender cada uma a sua história e as suas lutas. E saber que aquilo que nos faz rir e chorar, também o faz a outras mulheres como eu,  com outra idade, outro percurso...isso soma, fortalece, humaniza! E nos faz celebrar a vida! Que casa das mulheres, seja a casa de muitas mulheres.",
      clientName: "Sadia Castro",
      clientDescription: "56 anos",
    },
  ],
  cta: {
    title: "Como posso te ajudar?",
    content:
      "Nossas consultas serão por hora marcada com 1 hora de duração. Vou escutar as suas queixas e propor a melhor estratégia terapêutica para atender suas necessidades. O agendamento pode ser feito pelo telefone celular por ligação ou whatssap no horário de 8:00 às 19:00. Te espero em breve!",
  },
  footer: {
    address:
      "Rua Angélica 1732, Fátima, Teresina-Pi, Casa das Mulheres.",
    addressLink:
      "https://www.google.com/maps/place/Casa+das+Mulheres+PI-+Dra.+Andrea+Rufino/@-5.0652979,-42.7944397,15z/data=!4m2!3m1!1s0x0:0x8646eba9091d0d40?sa=X&ved=2ahUKEwi_rduD7fr3AhUFuZUCHfHlDpUQ_BJ6BAhREAU",
  },
  colors: {
    scheme: "yellow",
    primaryLight: "#FFFACD",
    primary: "#BD3361",
    primaryDark: "#009090",
  },
};

export default content;
