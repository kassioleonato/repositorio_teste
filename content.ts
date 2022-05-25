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
    metaDescription: "Site da Dra. Andrea Cronemberger",
    title: "Dra. Andrea Cronemberger",
  },
  social: {
    whatsAppNumber: "558695183172",
    instagramLink: "https://www.instagram.com/andrearufino_/",
  },
  hero: {
    title: "Dra. Andrea Cronemberger",
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
      `      Dra. Andréa Rufino é médica (CRM 2006/PI) e ginecologista (RQE 434) com área de atuação em sexologia (RQE 1484).

      A expertise em medicina sexual foi construída em longos anos de residência médica, pós-graduação em sexologia clínica e formação em psicanálise.

      A atuação como professora universitária e pesquisadora de temas sexuais promoveu expertise adicional para a psicoeducação sexual, considerada o pilar da terapia sexual baseada em evidências científicas. 
`,
  },
  choices: {
    title: "Espaço para você",
    content:
      "A trajetória profissional que une assistência, ensino e pesquisa a preparou para tratar as queixas sexuais de forma dinâmica e integradora de causas orgânicas, relacionais e psicossociais. Realizo atendimento junto à Rua Angélica 1732, Fátima, Teresina-Pi, Casa das Mulheres. O agendamento pode ser feito pelo telefone celular, por ligação ou whatsapp.",
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
        question: "Não consigo sentir prazer e fingo orgasmo!",
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
        "Quando penso em atendimento ginecológico, pra mim alguns aspectos são de extrema importância: empatia e uma escuta sem pré conceitos. Ter uma médica com essas duas qualidades faz a diferença nessa relação que de certa forma é tão íntima. E a Dra Andrea trabalha dessa forma. Isso fortalece o vínculo médica-paciente, influenciando até no resultado de qualquer tratamento. Deixo aqui todo meu respeito e admiração por ela e pelo seu trabalho. Me orgulho muito de tê-la como médica.",
      clientName: "ADRIANA PEDRINI",
      clientDescription: "",
    },
    {
      content:
        "Desde que comecei a ser atendida pela Dra. Andréa Rufino, tenho uma médica humana e profissional de excelência, que busca sempre um atendimento personalizado para pacientes, seja nas consultas ginecológicas, seja nos atendimentos terapêuticos. Me senti confortável inclusive para levar a minha filha, ainda adolescente, para ser atendida e acompanhada por ela e tive a certeza de que seu trabalho é diferenciado, pois ela tem um olhar especial para esse público. Consegue acesso fácil, porque sabe ouvir sem julgamento e mantem a privacidade que era muito importante para eles. Além disso, encontro na Casa das Mulheres um espeço de acolhimento e cuidado. Por todas essas razões, indico a Dra. Andréa Rufino para todo mundo!",
      clientName: "Alexandra Cronemberger",
      clientDescription: "",
    },
  ],
  cta: {
    title: "Como posso te ajudar?",
    content:
      "Os atendimentos de consulta são individualizados onde conheceremos a respeito das suas queixas para melhor atender suas necessidades. Disponibilizamos um retorno que deverá ser realizado com até 25 dias da consulta inicial. O agendamento pode ser feito pelo telefone celular, por ligação ou whatsapp. Atendimento de segunda a sexta, 8:30 às 12:30. Segunda e quinta, de 15:00 às 19:00. Terça e quarta de 17:00 às 19:00.",
  },
  footer: {
    address:
      "Rua Angélica 1732, Fátima, Teresina-Pi, Casa das Mulheres",
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
