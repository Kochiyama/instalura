// For demonstration and tests this is a hardcoded version of the api /feed response

const response = [
  {
    id: 3,
    postDate: "2018-02-23T23:00:15.000Z",
    url:
      "https://www.imagemhost.com.br/images/2019/11/27/47117459_2143415245698396_1579765390659818341_n.jpg",
    description: "comentario da foto",
    allowComments: false,
    likes: 0,
    comments: 0,
    userId: 1,
    userName: "Alura",
    userURL:
      "https://raw.githubusercontent.com/bugan/instalura-api/master/uploads/logo.jpg",
    comentarios: [],
  },
  {
    id: 2,
    postDate: "2018-02-13T14:30:25.000Z",
    url:
      "https://www.imagemhost.com.br/images/2019/11/27/65471462_1193154477523428_3282751902607052484_n.jpg",
    description: "comentario da foto",
    allowComments: false,
    likes: 0,
    comments: 0,
    userId: 1,
    userName: "Alura",
    userURL:
      "https://raw.githubusercontent.com/bugan/instalura-api/master/uploads/logo.jpg",
    comentarios: [],
  },
  {
    id: 1,
    postDate: "2018-02-01T19:10:50.000Z",
    url: "https://www.imagemhost.com.br/images/2019/11/27/foto_3.jpg",
    description: "comentario da foto",
    allowComments: false,
    likes: 1,
    comments: 2,
    userId: 1,
    userName: "Alura",
    userURL:
      "https://raw.githubusercontent.com/bugan/instalura-api/master/uploads/logo.jpg",
    comentarios: [
      {
        date: "2020-09-19 07:42:04",
        text: "Muito bom!!",
        userName: "gabrielleitealura",
      },
      {
        date: "2020-09-19 07:42:04",
        text: "Parabéns aos envolvidos!!",
        userName: "pauloscalercioalura",
      },
    ],
  },
];

export default response;
