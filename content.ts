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
  choices:{
    title: string;
    content: string;
    images: string[];
  }
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
    metaDescription: "Site template MCP",
    title: "Site Template MCP",
  },
  social: {
    whatsAppNumber: "5511997970066",
    instagramLink: "https://www.instagram.com/felipe.maffezzolli/",
  },
  hero: {
    title: "Dra. MCP",
    titleHighlighted: "Especialização do MCP!",
  },
  welcomeMessage: {
    title: "Sejam Bem-Vindas(os)!",
    content: "Sed vitae lectus venenatis, pulvinar erat a, tristique diam. Vivamus id massa quam. Morbi porta aliquet sem, sed porttitor neque tempor quis. Etiam tristique viverra dolor, sed malesuada justo pharetra vitae.Morbi porta aliquet sem, sed porttitor neque tempor quis. Etiam tristique viverra dolor, sed malesuada justo pharetra vitae.",
  },
  features: {
    items: [
      {
        title: "",
        imagesrc: "./atuacao/image1.jpg",
        content: ``,
      },
      {
        title: "",
        imagesrc: "./atuacao/image2.jpg",
        content: ``,
      },
      {
        title: "",
        imagesrc: "./atuacao/image3.jpg",
        content: ``,
      },
      {
        title: "",
        imagesrc: "./atuacao/image4.jpg",
        content: ``,
      },
      {
        title: "",
        imagesrc: "./atuacao/image5.jpg",
        content: ``,
      },
      {
        title: "",
        imagesrc: "./atuacao/image6.jpg",
        content: ``,
      },
    ],
  },
  presentation: {
    title: "Quem sou eu",
    content: "Vivamus pellentesque velit nec quam cursus, eu ornare elit rhoncus. Pellentesque hendrerit, enim ut mattis sagittis, libero leo malesuada lectus, sed vulputate ex tellus ut sapien. Nam luctus turpis eget enim porta cursus. Donec mollis, libero quis laoreet auctor, tortor justo interdum urna, vitae blandit neque risus vel ligula. Integer scelerisque tempor sapien, ut lobortis urna mollis ut. Quisque vestibulum, dui in placerat dignissim, tellus orci laoreet ipsum, sit amet vestibulum nisi tortor id felis. Mauris sodales massa vel rutrum hendrerit. Maecenas vel mollis dolor. In a vestibulum lorem, ac cursus nibh. Sed facilisis maximus nulla cursus blandit. Duis metus sapien, molestie sit amet turpis quis, vestibulum tempor felis. Etiam quis tristique ipsum. Ut pretium vehicula libero eget sollicitudin. Curabitur ultrices tellus nulla, id convallis nibh pretium sed. Sed eget eleifend mi, in tempor velit. Donec efficitur orci tellus, vel mollis nulla tempor eu. In vehicula sollicitudin tortor sit amet feugiat. Phasellus tincidunt ligula at nisl faucibus tempus.",
  },
  choices: {
    title: "Espaço para você",
    content: "Vivamus pellentesque velit nec quam cursus, eu ornare elit rhoncus. Pellentesque hendrerit, enim ut mattis sagittis, libero leo malesuada lectus, sed vulputate ex tellus ut sapien. Nam luctus turpis eget enim porta cursus. Donec mollis, libero quis laoreet auctor, tortor justo interdum urna, vitae blandit neque risus vel ligula. Integer scelerisque tempor sapien, ut lobortis urna mollis ut. Quisque vestibulum, dui in placerat dignissim, tellus orci laoreet ipsum, sit amet vestibulum nisi tortor id felis. Mauris sodales massa vel rutrum hendrerit. Maecenas vel mollis dolor. In a vestibulum lorem, ac cursus nibh. Sed facilisis maximus nulla cursus blandit. Duis metus sapien, molestie sit amet turpis quis, vestibulum tempor felis. Etiam quis tristique ipsum. Ut pretium vehicula libero eget sollicitudin. Curabitur ultrices tellus nulla, id convallis nibh pretium sed. Sed eget eleifend mi, in tempor velit. Donec efficitur orci tellus, vel mollis nulla tempor eu. In vehicula sollicitudin tortor sit amet feugiat. Phasellus tincidunt ligula at nisl faucibus tempus.",
    images: [
    "/swipper/Consultorio-Yumi-001.jpg",
    "/swipper/Consultorio-Yumi-002.jpg",
    "/swipper/Consultorio-Yumi-003.jpg",
    "/swipper/Consultorio-Yumi-004.jpg",
    "/swipper/Consultorio-Yumi-005.jpg",
    "/swipper/Consultorio-Yumi-006.jpg",
  ],
  },
  faq: {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'Como funcionam os agendamentos?',
        answer: 'Os agendamentos são realizados pelo telefone celular, podendo ser por ligação telefônica com WhatsApp. 51 995962973 Link do WhatsApp: https://wa.me/5551995962973 No momento do agendamento são solicitados os dados cadastrais do paciente, se for a primeira consulta. Tais como: Nome completo, Data de nascimento, CPF, E-mail, Endereço completo (com CEP e bairro) e Celular.',
      },
      {
        question: 'O que é a Medicina de Família e Comunidade?',
        answer: 'Cuidado das pessoas de maneira integral (todas as queixas do paciente), respeitando as especificidades de cada indivíduo, família e organizações comunitárias. Também pode acompanhar todos os membros da família, desde o bebê até o mais idoso, ao longo do tempo. É premissa da medicina de família que o paciente tenha acesso ao médico tanto nas consultas de rotina como nas de emergência com premissa o acesso essa especialidade é capaz de solucionar a maioria dos problemas de saúde sem necessidade de encaminhamento para outros especialistas. O que é a Homeopatia? cuidado das pessoas de forma individualizada, por meio de uma escuta ativa. Essa especialidade não alivia somente os sintomas, visa reequilibrar a energia do organismo do paciente e trazer de volta para sua melhor versão de saúde e bem-estar. Entende-se que a saúde do indivíduo vai muito além da ausência de doenças, tem relação com como o indivíduo vive e se relaciona com o mundo. Além disso, a homeopatia pode ser utilizada como tratamento para quaisquer tipos de diagnóstico e pacientes, sem contraindicação.',
      },
      {
        question: 'Como é a minha consulta?',
        answer: 'A consulta é um momento de acolhimento, escuta e respeito, ao paciente e sua família. O atendimento é realizado com calma e cuidando por inteiro de todos os pacientes. Durante a consulta serão abordadas questões de estilo de vida, hábitos, comportamentos. As condutas são construídas junto com o paciente, de maneira compartilhada. A médica trará as evidências científicas necessárias para que o paciente tenha autonomia para decidir, de forma ativa e esclarecida, sobre o melhor cuidado que é possível para ele, no seu contexto, cuidar da sua própria saúde. Após a consulta, o paciente receberá um relatório de orientações para lembrar das combinações feitas entre ele e a médica. A necessidade de realização de exames, prescrição de medicação tanto alopática, quanto homeopática e fitoterápica, e o período até o próximo encontro também será definida de maneira compartilhada entre médica e paciente durante a consulta. Cada consulta tem duração média de 60 minutos e os resultados são incríveis, após poucos encontros. A consulta presencial é realizada no município de Porto Alegre/RS e a consulta on-line é realizada por vídeo chamada. A consulta de retorno não está inclusa no valor da primeira consulta/ consulta anterior. As consultas são avulsas, ainda não trabalho com planos de acompanhamento. O pagamento pode ser através de dinheiro ou PIX.'
      }
    ]
  },
  testimonials: [
    {
      content: 'Sem palavras para o atendimento humanizado da Dra Daniela. Uma das melhores profissionais que já consultei.',
      clientName: 'Joana Fonseca',
      clientDescription: 'Mãe da Clara',
    },
    {
      content: 'Atendimento maravilhoso. Eu e meu filho fomos muitos bem atendidos.',
      clientName: 'Márcio Faria',
      clientDescription: 'Pai do Victor',
    }
  ],
  cta: {
    title: 'Como posso te ajudar?',
    content: 'Os agendamentos são realizados pelo telefone celular, podendo ser por ligação telefônica com whatsapp no número +55 11 997970066',
  },
  footer: {
    address: 'Av. Brigadeiro Luis Antônio, 4893 - Jardim Paulista - São Paulo/SP.',
    addressLink: 'https://www.google.com.br/maps/place/Av.+Brigadeiro+Lu%C3%ADs+Ant%C3%B4nio,+4893+-+Jardim+Paulista,+S%C3%A3o+Paulo+-+SP,+01401-002/@-23.5833203,-46.6702496,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce59e178b11e29:0xc8df9dc7bbe3e937!8m2!3d-23.5833252!4d-46.6680609'
  },
  colors: {
    scheme: "yellow",
    primaryLight: "#FFFACD",
    primary: "#FFD700",
    primaryDark: "#CDA543",
  },
};

export default content;
