const topics = [
  {
    id: "ansiedad",
    title: "Ansiedad y preocupación",
    summary:
      "La Biblia no trata tu inquietud como algo pequeño; te invita a convertirla en oración y a descansar en el cuidado de Dios.",
    keywords: [
      "ansiedad",
      "ansioso",
      "ansiosa",
      "preocupacion",
      "preocupado",
      "estres",
      "nervios",
      "inquietud",
      "angustia",
      "agobiado",
      "agobiada",
      "panico",
      "miedo al futuro",
    ],
    verses: [
      {
        reference: "Filipenses 4:6-7",
        text:
          "Por nada estéis afanosos; sino sean notorias vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias. Y la paz de Dios guardará vuestros corazones.",
        action: "Ora con nombre y detalle por lo que te inquieta, y acompáñalo con gratitud concreta.",
      },
      {
        reference: "1 Pedro 5:7",
        text: "Echando toda vuestra solicitud en él, porque él tiene cuidado de vosotros.",
        action: "Entrega la carga a Dios en vez de cargarla solo; vuelve a hacerlo cuando regrese la preocupación.",
      },
      {
        reference: "Mateo 6:34",
        text: "Así que, no os congojéis por el día de mañana; que el día de mañana traerá su fatiga.",
        action: "Enfócate en obedecer y recibir gracia para hoy, no en resolver todo el futuro de una vez.",
      },
    ],
  },
  {
    id: "tristeza",
    title: "Tristeza y corazón quebrantado",
    summary:
      "Dios se acerca al dolor honesto y no exige que escondas tus lágrimas para poder recibir consuelo.",
    keywords: [
      "triste",
      "tristeza",
      "dolor",
      "llorar",
      "llanto",
      "quebrantado",
      "deprimido",
      "deprimida",
      "desanimado",
      "desanimada",
      "desesperanza",
      "vacio",
      "vacío",
    ],
    verses: [
      {
        reference: "Salmos 34:18",
        text: "Cercano está Jehová a los quebrantados de corazón; y salvará a los contritos de espíritu.",
        action: "Acércate sin maquillar el dolor; la cercanía de Dios empieza donde ya no finges fuerza.",
      },
      {
        reference: "Mateo 5:4",
        text: "Bienaventurados los que lloran: porque ellos recibirán consolación.",
        action: "Permite el duelo delante de Dios y busca consuelo verdadero, no solo distracción rápida.",
      },
      {
        reference: "Salmos 42:11",
        text: "¿Por qué te abates, oh alma mía, y por qué te conturbas en mí? Espera a Dios.",
        action: "Háblale a tu alma con esperanza: reconoce lo que sientes y vuelve a mirar a Dios.",
      },
    ],
  },
  {
    id: "miedo",
    title: "Miedo e inseguridad",
    summary:
      "El llamado bíblico no es negar el miedo, sino recordar quién está contigo y actuar desde esa presencia.",
    keywords: [
      "miedo",
      "temor",
      "asustado",
      "asustada",
      "inseguro",
      "insegura",
      "peligro",
      "amenaza",
      "no puedo",
      "terror",
      "incertidumbre",
    ],
    verses: [
      {
        reference: "Isaías 41:10",
        text: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo.",
        action: "Haz el siguiente acto de obediencia recordando que no caminas sin ayuda.",
      },
      {
        reference: "2 Timoteo 1:7",
        text: "Porque no nos ha dado Dios el espíritu de temor, sino el de fortaleza, y de amor, y de templanza.",
        action: "Discierne si la decisión viene del temor o de la fortaleza, amor y dominio propio.",
      },
      {
        reference: "Salmos 56:3",
        text: "En el día que temo, yo en ti confío.",
        action: "Convierte el momento exacto del miedo en una declaración simple de confianza.",
      },
    ],
  },
  {
    id: "culpa",
    title: "Culpa, pecado y arrepentimiento",
    summary:
      "La Biblia distingue la culpa que aplasta de la convicción que te lleva a confesar, recibir perdón y cambiar.",
    keywords: [
      "culpa",
      "culpable",
      "pecado",
      "falle",
      "fallé",
      "verguenza",
      "vergüenza",
      "arrepentido",
      "arrepentida",
      "condenado",
      "condenada",
      "perdon",
      "perdón",
    ],
    verses: [
      {
        reference: "1 Juan 1:9",
        text: "Si confesamos nuestros pecados, él es fiel y justo para que nos perdone nuestros pecados, y nos limpie de toda maldad.",
        action: "Confiesa con honestidad, sin excusas, y recibe la limpieza como parte del perdón.",
      },
      {
        reference: "Romanos 8:1",
        text: "Ahora pues, ninguna condenación hay para los que están en Cristo Jesús.",
        action: "No confundas arrepentimiento con vivir condenado; vuelve a Cristo y camina en novedad.",
      },
      {
        reference: "Proverbios 28:13",
        text: "El que encubre sus pecados, no prosperará: mas el que los confiesa y se aparta, alcanzará misericordia.",
        action: "Da un paso verificable: confiesa, repara si corresponde y apártate de lo que te llevó allí.",
      },
    ],
  },
  {
    id: "soledad",
    title: "Soledad y abandono",
    summary:
      "La Escritura presenta a Dios como una presencia fiel, especialmente cuando otros no están o no entienden.",
    keywords: [
      "solo",
      "sola",
      "soledad",
      "abandonado",
      "abandonada",
      "nadie",
      "olvidado",
      "olvidada",
      "rechazado",
      "rechazada",
      "invisible",
    ],
    verses: [
      {
        reference: "Deuteronomio 31:8",
        text: "Jehová es el que va delante de ti; él será contigo, no te dejará, ni te desamparará.",
        action: "Recuerda que tu día no empieza en abandono; Dios va delante y permanece contigo.",
      },
      {
        reference: "Salmos 27:10",
        text: "Aunque mi padre y mi madre me dejaran, con todo, Jehová me recogerá.",
        action: "Lleva el rechazo a Dios y permite que su cuidado sea más profundo que la ausencia humana.",
      },
      {
        reference: "Mateo 28:20",
        text: "He aquí, yo estoy con vosotros todos los días, hasta el fin del mundo.",
        action: "Busca una forma concreta de vivir hoy como alguien acompañado por Cristo.",
      },
    ],
  },
  {
    id: "cansancio",
    title: "Cansancio y carga",
    summary:
      "Cuando la fuerza se acaba, Jesús no solo exige más rendimiento; llama a venir, aprender y descansar en él.",
    keywords: [
      "cansado",
      "cansada",
      "agotado",
      "agotada",
      "fatiga",
      "quemado",
      "quemada",
      "no puedo mas",
      "no puedo más",
      "carga",
      "sobrecargado",
      "sobrecargada",
    ],
    verses: [
      {
        reference: "Mateo 11:28-30",
        text: "Venid a mí todos los que estáis trabajados y cargados, que yo os haré descansar. Llevad mi yugo sobre vosotros, y aprended de mí.",
        action: "Ve a Cristo antes de seguir empujando; cambia una carga autoimpuesta por su enseñanza.",
      },
      {
        reference: "Isaías 40:31",
        text: "Mas los que esperan a Jehová tendrán nuevas fuerzas; levantarán las alas como águilas.",
        action: "Espera en Dios con paciencia activa: ora, descansa y retoma lo necesario con fuerzas renovadas.",
      },
      {
        reference: "Salmos 23:2-3",
        text: "En lugares de delicados pastos me hará yacer: junto a aguas de reposo me pastoreará. Confortará mi alma.",
        action: "Acepta límites santos; deja espacio real para que Dios restaure tu alma.",
      },
    ],
  },
  {
    id: "direccion",
    title: "Dirección y decisiones",
    summary:
      "La sabiduría bíblica une confianza, humildad y obediencia práctica al momento de decidir.",
    keywords: [
      "direccion",
      "dirección",
      "decidir",
      "decision",
      "decisión",
      "confundido",
      "confundida",
      "camino",
      "no se que hacer",
      "no sé qué hacer",
      "guia",
      "guía",
      "futuro",
      "discernir",
    ],
    verses: [
      {
        reference: "Proverbios 3:5-6",
        text: "Fíate de Jehová de todo tu corazón, y no estribes en tu prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.",
        action: "No decidas solo desde control; reconoce a Dios en la decisión y somete tus motivos.",
      },
      {
        reference: "Santiago 1:5",
        text: "Y si alguno de vosotros tiene falta de sabiduría, demándela a Dios, el cual da a todos abundantemente.",
        action: "Pide sabiduría de forma específica y actúa con la luz que ya tienes.",
      },
      {
        reference: "Salmos 119:105",
        text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
        action: "Busca una obediencia clara para el siguiente paso, no una vista completa de todo el camino.",
      },
    ],
  },
  {
    id: "enojo",
    title: "Enojo y conflicto",
    summary:
      "La Biblia toma en serio la ira, pero la dirige hacia dominio propio, verdad y reconciliación justa.",
    keywords: [
      "enojo",
      "enojado",
      "enojada",
      "ira",
      "rabia",
      "coraje",
      "resentimiento",
      "pelea",
      "conflicto",
      "venganza",
      "ofendido",
      "ofendida",
    ],
    verses: [
      {
        reference: "Santiago 1:19-20",
        text: "Todo hombre sea pronto para oír, tardo para hablar, tardo para airarse; porque la ira del hombre no obra la justicia de Dios.",
        action: "Baja la velocidad: escucha primero, habla después y no confundas reacción con justicia.",
      },
      {
        reference: "Efesios 4:26",
        text: "Airaos, y no pequéis; no se ponga el sol sobre vuestro enojo.",
        action: "Atiende el enojo pronto; evita que se convierta en pecado, silencio hostil o venganza.",
      },
      {
        reference: "Proverbios 15:1",
        text: "La blanda respuesta quita la ira: mas la palabra áspera hace subir el furor.",
        action: "Elige palabras que bajen la temperatura sin negar la verdad.",
      },
    ],
  },
  {
    id: "perdonar",
    title: "Perdonar una herida",
    summary:
      "Perdonar bíblicamente no niega el daño; entrega la deuda a Dios y abre camino a una obediencia libre.",
    keywords: [
      "perdonar",
      "herida",
      "traicion",
      "traición",
      "me lastimaron",
      "rencor",
      "amargura",
      "odio",
      "no puedo perdonar",
      "dolido",
      "dolida",
    ],
    verses: [
      {
        reference: "Efesios 4:32",
        text: "Antes sed los unos con los otros benignos, misericordiosos, perdonándoos los unos a los otros, como también Dios os perdonó en Cristo.",
        action: "Mide el perdón desde lo que recibiste en Cristo, no desde lo que la otra persona merece.",
      },
      {
        reference: "Colosenses 3:13",
        text: "Soportándoos los unos a los otros, y perdonándoos los unos a los otros si alguno tuviere queja del otro.",
        action: "Nombra la queja delante de Dios y entrega el derecho de cobrar venganza.",
      },
      {
        reference: "Romanos 12:19",
        text: "No os venguéis vosotros mismos, amados míos; antes dad lugar a la ira de Dios.",
        action: "Perdonar no borra la justicia; deja la justicia final en manos de Dios.",
      },
    ],
  },
  {
    id: "tentacion",
    title: "Tentación y dominio propio",
    summary:
      "La tentación se enfrenta con vigilancia, salida concreta y dependencia de Dios, no con pura fuerza de voluntad.",
    keywords: [
      "tentacion",
      "tentación",
      "adiccion",
      "adicción",
      "caer",
      "recaer",
      "impulso",
      "deseo",
      "dominio propio",
      "no resisto",
      "debilidad",
    ],
    verses: [
      {
        reference: "1 Corintios 10:13",
        text: "Fiel es Dios, que no os dejará ser tentados más de lo que podéis llevar; antes dará también juntamente con la tentación la salida.",
        action: "Busca la salida concreta que Dios provee y tómala temprano, antes de negociar con el deseo.",
      },
      {
        reference: "Mateo 26:41",
        text: "Velad y orad, para que no entréis en tentación: el espíritu a la verdad está presto, mas la carne enferma.",
        action: "Ora y pon vigilancia práctica en tus horarios, lugares, pantallas y compañía.",
      },
      {
        reference: "Gálatas 5:16",
        text: "Andad en el Espíritu, y no satisfagáis la concupiscencia de la carne.",
        action: "Llena el día con pasos del Espíritu; no dejes vacío el espacio donde crece la tentación.",
      },
    ],
  },
  {
    id: "gratitud",
    title: "Gratitud y alegría",
    summary:
      "La alegría bíblica no depende solo de que todo esté perfecto; aprende a reconocer la bondad de Dios.",
    keywords: [
      "agradecido",
      "agradecida",
      "gratitud",
      "feliz",
      "alegre",
      "gozo",
      "bendecido",
      "bendecida",
      "contento",
      "contenta",
      "celebrar",
    ],
    verses: [
      {
        reference: "1 Tesalonicenses 5:16-18",
        text: "Estad siempre gozosos. Orad sin cesar. Dad gracias en todo; porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.",
        action: "Convierte la gratitud en oración, no solo en emoción momentánea.",
      },
      {
        reference: "Salmos 103:2",
        text: "Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios.",
        action: "Haz memoria: escribe o di en voz alta beneficios concretos que no quieres olvidar.",
      },
      {
        reference: "Santiago 1:17",
        text: "Toda buena dádiva y todo don perfecto es de lo alto, que desciende del Padre de las luces.",
        action: "Disfruta lo bueno como regalo recibido y úsalo para amar mejor.",
      },
    ],
  },
  {
    id: "provision",
    title: "Necesidad y provisión",
    summary:
      "La Biblia llama a pedir el pan diario, trabajar con fidelidad y confiar en el Padre que conoce la necesidad.",
    keywords: [
      "dinero",
      "provision",
      "provisión",
      "necesidad",
      "escasez",
      "deuda",
      "trabajo",
      "sin trabajo",
      "no alcanza",
      "preocupado por dinero",
      "pagar",
    ],
    verses: [
      {
        reference: "Mateo 6:31-33",
        text: "No os congojéis, pues, diciendo: ¿Qué comeremos, o qué beberemos? Mas buscad primeramente el reino de Dios y su justicia.",
        action: "Pon primero el reino de Dios sin negar la necesidad; pide, trabaja y decide con justicia.",
      },
      {
        reference: "Filipenses 4:19",
        text: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús.",
        action: "Presenta la necesidad real a Dios y mantén fidelidad en lo que ya está en tus manos.",
      },
      {
        reference: "Proverbios 3:9-10",
        text: "Honra a Jehová de tu substancia, y de las primicias de todos tus frutos.",
        action: "Ordena tus recursos con honra a Dios: gratitud, generosidad y responsabilidad.",
      },
    ],
  },
];

const extraVerses = {
  ansiedad: [
    {
      reference: "Salmos 55:22",
      text: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo.",
      action: "Nombra tu carga y entrégala a Dios como algo que Él puede sostener mejor que tú.",
    },
    {
      reference: "Juan 14:27",
      text: "La paz os dejo, mi paz os doy: no como el mundo la da, yo os la doy. No se turbe vuestro corazón, ni tenga miedo.",
      action: "Recibe la paz de Cristo como una paz más profunda que la ausencia de problemas.",
    },
    {
      reference: "Salmos 94:19",
      text: "En la multitud de mis pensamientos dentro de mí, tus consolaciones alegraban mi alma.",
      action: "Cuando la mente se llene de escenarios, vuelve a las consolaciones de Dios.",
    },
    {
      reference: "Mateo 6:26",
      text: "Mirad las aves del cielo, que no siembran, ni siegan, ni allegan en alfolíes; y vuestro Padre celestial las alimenta.",
      action: "Recuerda que tu Padre ve necesidades concretas y cuida aun lo que parece pequeño.",
    },
    {
      reference: "Salmos 37:5",
      text: "Encomienda a Jehová tu camino, y espera en él; y él hará.",
      action: "Entrega el camino, no solo el resultado, y espera sin dejar de obedecer.",
    },
    {
      reference: "Isaías 26:3",
      text: "Tú le guardarás en completa paz, cuyo pensamiento en ti persevera; porque en ti se ha confiado.",
      action: "Dirige tus pensamientos hacia Dios con perseverancia, especialmente cuando quieran dispersarse.",
    },
  ],
  tristeza: [
    {
      reference: "Salmos 147:3",
      text: "Él sana a los quebrantados de corazón, y liga sus heridas.",
      action: "Permite que Dios trate la herida como algo que puede ser vendado y sanado.",
    },
    {
      reference: "Apocalipsis 21:4",
      text: "Y limpiará Dios toda lágrima de los ojos de ellos; y la muerte no será más.",
      action: "Mira tu dolor desde la esperanza final de Dios, no solo desde este momento.",
    },
    {
      reference: "2 Corintios 1:3-4",
      text: "El Padre de misericordias, y el Dios de toda consolación, nos consuela en todas nuestras tribulaciones.",
      action: "Recibe consuelo para ti y deja que ese consuelo te prepare para acompañar a otros.",
    },
    {
      reference: "Salmos 30:5",
      text: "Por la tarde durará el lloro, y a la mañana vendrá la alegría.",
      action: "No confundas una noche difícil con el final de la historia.",
    },
    {
      reference: "Isaías 61:3",
      text: "A ordenar a Sión a los enlutados, para darles gloria en lugar de ceniza, óleo de gozo en lugar del luto.",
      action: "Pídele a Dios que cambie la ceniza del dolor por esperanza viva.",
    },
    {
      reference: "Salmos 6:9",
      text: "Jehová ha oído mi ruego; ha recibido Jehová mi oración.",
      action: "Ora aun con lágrimas; Dios no necesita que estés fuerte para escucharte.",
    },
  ],
  miedo: [
    {
      reference: "Josué 1:9",
      text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios será contigo.",
      action: "Actúa con valentía basada en la presencia de Dios, no en sentirte invencible.",
    },
    {
      reference: "Salmos 27:1",
      text: "Jehová es mi luz y mi salvación: ¿de quién temeré? Jehová es la fortaleza de mi vida.",
      action: "Recuerda quién ilumina, salva y sostiene tu vida antes de mirar la amenaza.",
    },
    {
      reference: "Deuteronomio 3:22",
      text: "No los temáis; porque Jehová vuestro Dios, él es el que pelea por vosotros.",
      action: "Deja de medir la batalla solo por tus fuerzas; Dios también pelea por los suyos.",
    },
    {
      reference: "Salmos 118:6",
      text: "Jehová está por mí: no temeré lo que me pueda hacer el hombre.",
      action: "No permitas que el temor a otros sea más grande que la fidelidad de Dios.",
    },
    {
      reference: "Isaías 43:2",
      text: "Cuando pasares por las aguas, yo seré contigo; y por los ríos, no te anegarán.",
      action: "Confía en que Dios no siempre evita el paso difícil, pero promete atravesarlo contigo.",
    },
    {
      reference: "Marcos 5:36",
      text: "No temas, cree solamente.",
      action: "Cuando el miedo quiera dictar la historia, vuelve a la fe sencilla en Cristo.",
    },
  ],
  culpa: [
    {
      reference: "Salmos 51:10",
      text: "Crea en mí, oh Dios, un corazón limpio; y renueva un espíritu recto dentro de mí.",
      action: "Pide algo más profundo que alivio: un corazón renovado.",
    },
    {
      reference: "Isaías 1:18",
      text: "Si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos.",
      action: "Lleva tu pecado a Dios con esperanza en su limpieza, no con autoengaño.",
    },
    {
      reference: "Hechos 3:19",
      text: "Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados.",
      action: "Responde con arrepentimiento que cambia de dirección, no solo con remordimiento.",
    },
    {
      reference: "Miqueas 7:19",
      text: "Él tornará, él tendrá misericordia de nosotros; él sujetará nuestras iniquidades.",
      action: "Confía en la misericordia de Dios como más fuerte que tu historial.",
    },
    {
      reference: "Salmos 32:5",
      text: "Mi pecado te declaré, y no encubrí mi iniquidad; y tú perdonaste la maldad de mi pecado.",
      action: "Saca a la luz lo que has estado cubriendo y recibe perdón con humildad.",
    },
    {
      reference: "2 Corintios 7:10",
      text: "Porque el dolor que es según Dios, obra arrepentimiento saludable.",
      action: "Deja que la tristeza correcta te mueva hacia vida, no hacia condenación.",
    },
  ],
  soledad: [
    {
      reference: "Hebreos 13:5",
      text: "No te desampararé, ni te dejaré.",
      action: "Repite esta promesa cuando la soledad quiera definir tu identidad.",
    },
    {
      reference: "Salmos 68:6",
      text: "Dios hace habitar en familia a los solos.",
      action: "Pide a Dios comunidad sabia y da un paso concreto para acercarte a otros.",
    },
    {
      reference: "Juan 14:18",
      text: "No os dejaré huérfanos: vendré a vosotros.",
      action: "Recibe a Cristo como presencia fiel cuando te sientes sin amparo.",
    },
    {
      reference: "Salmos 139:7",
      text: "¿Adónde me iré de tu espíritu? ¿Y adónde huiré de tu presencia?",
      action: "Recuerda que ningún lugar emocional queda fuera de la presencia de Dios.",
    },
    {
      reference: "Isaías 49:15",
      text: "Aunque se olviden ellas, yo no me olvidaré de ti.",
      action: "Pon tu sentido de valor en la memoria fiel de Dios, no en la atención humana.",
    },
    {
      reference: "2 Timoteo 4:17",
      text: "Mas el Señor me ayudó, y me esforzó.",
      action: "Cuando otros falten, pide al Señor fuerza real para permanecer firme.",
    },
  ],
  cansancio: [
    {
      reference: "Gálatas 6:9",
      text: "No nos cansemos, pues, de hacer bien; que a su tiempo segaremos, si no hubiéremos desmayado.",
      action: "Sigue haciendo el bien con esperanza, pero sin ignorar tu necesidad de descanso.",
    },
    {
      reference: "2 Corintios 12:9",
      text: "Bástate mi gracia; porque mi potencia en la flaqueza se perfecciona.",
      action: "Deja que tu debilidad sea un lugar donde la gracia de Dios se vea suficiente.",
    },
    {
      reference: "Salmos 46:10",
      text: "Estad quietos, y conoced que yo soy Dios.",
      action: "Practica quietud delante de Dios antes de volver a responder a todo.",
    },
    {
      reference: "Éxodo 33:14",
      text: "Mi rostro irá contigo, y te haré descansar.",
      action: "Busca descanso en la presencia de Dios, no solo en cambiar la agenda.",
    },
    {
      reference: "Nehemías 8:10",
      text: "El gozo de Jehová es vuestra fortaleza.",
      action: "Permite que el gozo de Dios sea fuerza interior cuando se agota la tuya.",
    },
    {
      reference: "Isaías 41:13",
      text: "Yo Jehová soy tu Dios, que te ase de tu mano derecha, y te dice: No temas, yo te ayudé.",
      action: "Camina como alguien sostenido por la mano de Dios, no solo por disciplina personal.",
    },
  ],
  direccion: [
    {
      reference: "Salmos 32:8",
      text: "Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos.",
      action: "Pide enseñanza y acepta ser guiado, no solo informado.",
    },
    {
      reference: "Isaías 30:21",
      text: "Entonces tus oídos oirán a tus espaldas palabra que diga: Este es el camino, andad por él.",
      action: "Permanece atento a la dirección de Dios mientras das pasos obedientes.",
    },
    {
      reference: "Jeremías 33:3",
      text: "Clama a mí, y te responderé, y te enseñaré cosas grandes y dificultosas que tú no sabes.",
      action: "Clama antes de decidir desde la presión o la autosuficiencia.",
    },
    {
      reference: "Proverbios 16:9",
      text: "El corazón del hombre piensa su camino: mas Jehová endereza sus pasos.",
      action: "Planifica con humildad y deja espacio para que Dios corrija tus pasos.",
    },
    {
      reference: "Colosenses 3:15",
      text: "Y la paz de Dios gobierne en vuestros corazones.",
      action: "No ignores la paz de Dios al discernir entre opciones.",
    },
    {
      reference: "Romanos 12:2",
      text: "Transformaos por la renovación de vuestro entendimiento, para que experimentéis cuál sea la buena voluntad de Dios.",
      action: "Busca una mente renovada antes de buscar una respuesta rápida.",
    },
  ],
  enojo: [
    {
      reference: "Proverbios 14:29",
      text: "El que tarde se aíra, es grande de entendimiento; mas el corto de espíritu engrandece la necedad.",
      action: "Practica lentitud como sabiduría, no como debilidad.",
    },
    {
      reference: "Romanos 12:21",
      text: "No seas vencido de lo malo; mas vence con el bien el mal.",
      action: "Responde de una forma que no te convierta en aquello que te hirió.",
    },
    {
      reference: "Proverbios 19:11",
      text: "La cordura del hombre detiene su furor; y su honra es disimular la ofensa.",
      action: "Escoge qué ofensas deben tratarse y cuáles no merecen gobernar tu corazón.",
    },
    {
      reference: "Mateo 5:9",
      text: "Bienaventurados los pacificadores: porque ellos serán llamados hijos de Dios.",
      action: "Busca paz activa, no silencio cargado de resentimiento.",
    },
    {
      reference: "Efesios 4:31",
      text: "Toda amargura, y enojo, e ira, y voces, y maledicencia sea quitada de vosotros.",
      action: "Quita lo que alimenta la amargura antes de que se vuelva una manera de vivir.",
    },
    {
      reference: "Colosenses 3:15",
      text: "Y la paz de Dios gobierne en vuestros corazones.",
      action: "Deja que la paz de Dios gobierne antes de responder.",
    },
  ],
  perdonar: [
    {
      reference: "Mateo 6:14",
      text: "Porque si perdonareis a los hombres sus ofensas, os perdonará también a vosotros vuestro Padre celestial.",
      action: "Mira el perdón como una respuesta al perdón que recibes de Dios.",
    },
    {
      reference: "Lucas 6:36",
      text: "Sed pues misericordiosos, como también vuestro Padre es misericordioso.",
      action: "Pide misericordia que refleje al Padre, incluso mientras estableces límites sabios.",
    },
    {
      reference: "Proverbios 17:9",
      text: "El que cubre la prevaricación, busca amistad; mas el que reitera la palabra, aparta al amigo.",
      action: "Evita revivir la ofensa como combustible constante para tu dolor.",
    },
    {
      reference: "Mateo 18:21-22",
      text: "No te digo hasta siete, mas aun hasta setenta veces siete.",
      action: "Perdona como una práctica perseverante, no solo como una emoción inmediata.",
    },
    {
      reference: "Marcos 11:25",
      text: "Y cuando estuviereis orando, perdonad, si tenéis algo contra alguno.",
      action: "Lleva el rencor a la oración y no lo protejas como si fuera justicia.",
    },
    {
      reference: "1 Pedro 3:9",
      text: "No volviendo mal por mal, ni maldición por maldición, sino antes por el contrario, bendiciendo.",
      action: "Rompe el ciclo de daño respondiendo desde la bendición de Dios.",
    },
  ],
  tentacion: [
    {
      reference: "Santiago 4:7",
      text: "Someteos pues a Dios; resistid al diablo, y de vosotros huirá.",
      action: "Empieza sometiéndote a Dios; la resistencia nace de pertenecerle.",
    },
    {
      reference: "Salmos 119:11",
      text: "En mi corazón he guardado tus dichos, para no pecar contra ti.",
      action: "Llena tu mente con la Palabra antes del momento de presión.",
    },
    {
      reference: "Romanos 6:14",
      text: "Porque el pecado no se enseñoreará de vosotros; pues no estáis bajo la ley, sino bajo la gracia.",
      action: "Recuerda que la gracia no solo perdona; también rompe dominio.",
    },
    {
      reference: "2 Timoteo 2:22",
      text: "Huye también los deseos juveniles; y sigue la justicia, la fe, la caridad y la paz.",
      action: "No negocies con la tentación; huye y persigue algo mejor.",
    },
    {
      reference: "Tito 2:11-12",
      text: "La gracia de Dios se ha manifestado, enseñándonos que, renunciando a la impiedad, vivamos templada y justamente.",
      action: "Deja que la gracia te entrene para decir no y vivir con dominio propio.",
    },
    {
      reference: "Hebreos 4:15-16",
      text: "No tenemos un Pontífice que no se pueda compadecer de nuestras flaquezas; lleguémonos pues confiadamente al trono de la gracia.",
      action: "Acércate a Cristo por gracia antes de aislarte por vergüenza.",
    },
  ],
  gratitud: [
    {
      reference: "Salmos 100:4",
      text: "Entrad por sus puertas con reconocimiento, por sus atrios con alabanza.",
      action: "Haz de la gratitud una puerta para acercarte a Dios.",
    },
    {
      reference: "Colosenses 3:17",
      text: "Todo lo que hacéis, sea de palabra, o de hecho, hacedlo todo en el nombre del Señor Jesús, dando gracias a Dios Padre por él.",
      action: "Convierte tus palabras y acciones de hoy en gratitud visible.",
    },
    {
      reference: "Salmos 107:1",
      text: "Alabad a Jehová, porque es bueno; porque para siempre es su misericordia.",
      action: "Agradece primero por quién es Dios, no solo por lo que salió bien.",
    },
    {
      reference: "Hebreos 13:15",
      text: "Ofrezcamos por medio de él a Dios siempre sacrificio de alabanza.",
      action: "Alaba también cuando agradecer requiere intención y sacrificio.",
    },
    {
      reference: "Filipenses 4:4",
      text: "Gozaos en el Señor siempre: otra vez digo: Que os gocéis.",
      action: "Busca tu gozo en el Señor, no solo en circunstancias favorables.",
    },
    {
      reference: "Salmos 136:1",
      text: "Alabad a Jehová, porque es bueno; porque para siempre es su misericordia.",
      action: "Repite la misericordia de Dios hasta que tu memoria vuelva a verla.",
    },
  ],
  provision: [
    {
      reference: "Mateo 6:11",
      text: "Danos hoy nuestro pan cotidiano.",
      action: "Pide lo necesario para hoy con confianza sencilla.",
    },
    {
      reference: "Salmos 37:25",
      text: "Joven fui, y he envejecido, y no he visto justo desamparado, ni su simiente que mendigue pan.",
      action: "Recuerda la fidelidad de Dios a lo largo del tiempo, no solo la presión de hoy.",
    },
    {
      reference: "2 Corintios 9:8",
      text: "Poderoso es Dios para hacer que abunde en vosotros toda gracia; a fin de que tengáis siempre en todas las cosas todo lo que basta.",
      action: "Confía en una provisión que también te capacita para hacer el bien.",
    },
    {
      reference: "Proverbios 10:22",
      text: "La bendición de Jehová es la que enriquece, y no añade tristeza con ella.",
      action: "Busca provisión con bendición, no caminos que destruyan tu paz o integridad.",
    },
    {
      reference: "Lucas 12:32",
      text: "No temáis, manada pequeña; porque al Padre ha placido daros el reino.",
      action: "Recuerda que el Padre no solo da recursos; da un reino y una identidad.",
    },
    {
      reference: "Salmos 23:1",
      text: "Jehová es mi pastor; nada me faltará.",
      action: "Mira tu necesidad desde el cuidado del Pastor que guía y provee.",
    },
  ],
};

const biblicalExamples = {
  ansiedad: [
    {
      name: "Ana",
      reference: "1 Samuel 1",
      summary: "Ana llegó al templo con amargura de alma y derramó su oración delante de Dios. El Señor la escuchó y transformó su dolor en testimonio de gratitud.",
    },
    {
      name: "Los discípulos en la tormenta",
      reference: "Marcos 4:35-41",
      summary: "Ellos tuvieron miedo cuando el mar se levantó, pero Jesús reprendió el viento y mostró que aun la tormenta obedece su voz.",
    },
    {
      name: "David perseguido",
      reference: "Salmos 55",
      summary: "David expresó angustia y deseo de huir, pero aprendió a echar su carga sobre Jehová, quien sostiene a los suyos.",
    },
  ],
  tristeza: [
    {
      name: "María y Marta",
      reference: "Juan 11",
      summary: "Lloraron la muerte de Lázaro, y Jesús lloró con ellas antes de revelar su poder sobre la muerte.",
    },
    {
      name: "Job",
      reference: "Job 1-2; 42",
      summary: "Job sufrió pérdidas profundas, pero Dios se reveló como soberano y finalmente restauró su vida.",
    },
    {
      name: "Jeremías",
      reference: "Lamentaciones 3",
      summary: "Jeremías conoció el duelo de su pueblo, pero recordó que las misericordias de Dios son nuevas cada mañana.",
    },
  ],
  miedo: [
    {
      name: "Gedeón",
      reference: "Jueces 6-7",
      summary: "Gedeón se veía pequeño e inseguro, pero Dios lo llamó varón esforzado y usó su obediencia para librar a Israel.",
    },
    {
      name: "Josué",
      reference: "Josué 1",
      summary: "Al recibir una tarea enorme, Dios le mandó esforzarse y ser valiente porque Él estaría con él.",
    },
    {
      name: "Pedro en el agua",
      reference: "Mateo 14:22-33",
      summary: "Pedro tuvo miedo al mirar el viento, pero Jesús lo tomó de la mano y lo levantó.",
    },
  ],
  culpa: [
    {
      name: "David",
      reference: "2 Samuel 12; Salmos 51",
      summary: "David pecó gravemente, fue confrontado y clamó por un corazón limpio. Dios mostró misericordia sin negar la seriedad del pecado.",
    },
    {
      name: "Pedro",
      reference: "Lucas 22; Juan 21",
      summary: "Pedro negó a Jesús, pero Cristo lo restauró y volvió a llamarlo a servir.",
    },
    {
      name: "El hijo pródigo",
      reference: "Lucas 15:11-32",
      summary: "Volvió avergonzado después de malgastar todo, y el padre lo recibió con misericordia y gozo.",
    },
  ],
  soledad: [
    {
      name: "Elías",
      reference: "1 Reyes 19",
      summary: "Elías se sintió solo y agotado, pero Dios lo alimentó, le habló con ternura y le mostró que no estaba abandonado.",
    },
    {
      name: "José",
      reference: "Génesis 37-50",
      summary: "José fue vendido y apartado de su familia, pero Dios estuvo con él y usó su historia para preservar vida.",
    },
    {
      name: "Pablo",
      reference: "2 Timoteo 4",
      summary: "Pablo dijo que muchos lo abandonaron, pero también confesó que el Señor estuvo a su lado y lo fortaleció.",
    },
  ],
  cansancio: [
    {
      name: "Elías bajo el enebro",
      reference: "1 Reyes 19",
      summary: "Dios no lo reprendió primero; le dio alimento, descanso y después dirección para continuar.",
    },
    {
      name: "Moisés",
      reference: "Éxodo 18",
      summary: "Moisés estaba sobrecargado, y Dios usó consejo sabio para enseñarle a compartir la carga.",
    },
    {
      name: "Jesús y el descanso",
      reference: "Marcos 6:30-32",
      summary: "Jesús llamó a sus discípulos a apartarse y descansar un poco después de servir intensamente.",
    },
  ],
  direccion: [
    {
      name: "Abraham",
      reference: "Génesis 12",
      summary: "Salió sin conocer todos los detalles, confiando en la promesa de Dios y caminando por fe.",
    },
    {
      name: "Nehemías",
      reference: "Nehemías 1-2",
      summary: "Antes de actuar, oró, esperó y luego dio pasos claros para reconstruir lo que estaba en ruinas.",
    },
    {
      name: "Pablo",
      reference: "Hechos 16:6-10",
      summary: "Dios cerró unas puertas y abrió otra dirección, guiando el evangelio hacia Macedonia.",
    },
  ],
  enojo: [
    {
      name: "Moisés",
      reference: "Números 20",
      summary: "Su enojo lo llevó a actuar mal, mostrando que aun líderes usados por Dios necesitan obedecer con reverencia.",
    },
    {
      name: "Jonás",
      reference: "Jonás 4",
      summary: "Jonás se enojó por la misericordia de Dios, y el Señor expuso su corazón para enseñarle compasión.",
    },
    {
      name: "José y sus hermanos",
      reference: "Génesis 50",
      summary: "José tenía razones para vengarse, pero reconoció la mano de Dios y respondió con perdón y provisión.",
    },
  ],
  perdonar: [
    {
      name: "José",
      reference: "Génesis 45; 50",
      summary: "Perdonó a quienes lo vendieron, viendo que Dios había usado incluso el mal para salvar vidas.",
    },
    {
      name: "Esteban",
      reference: "Hechos 7",
      summary: "Mientras era apedreado, pidió que aquel pecado no les fuera tomado en cuenta, reflejando la gracia de Cristo.",
    },
    {
      name: "Jesús en la cruz",
      reference: "Lucas 23:34",
      summary: "Jesús pidió perdón para quienes lo crucificaban, mostrando la gloria de Dios aun en el sufrimiento injusto.",
    },
  ],
  tentacion: [
    {
      name: "Jesús en el desierto",
      reference: "Mateo 4:1-11",
      summary: "Respondió a la tentación con la Palabra de Dios, adorando al Padre por encima de todo ofrecimiento falso.",
    },
    {
      name: "José en Egipto",
      reference: "Génesis 39",
      summary: "José huyó de la tentación y prefirió honrar a Dios aunque eso le trajera consecuencias injustas.",
    },
    {
      name: "Eva",
      reference: "Génesis 3",
      summary: "La caída muestra cómo la tentación distorsiona la Palabra de Dios y por qué necesitamos confiar en Él.",
    },
  ],
  gratitud: [
    {
      name: "El leproso samaritano",
      reference: "Lucas 17:11-19",
      summary: "De diez sanados, uno volvió para dar gloria a Dios. Jesús destacó su fe y gratitud.",
    },
    {
      name: "María",
      reference: "Lucas 1:46-55",
      summary: "María respondió al favor de Dios con alabanza, engrandeciendo al Señor por su misericordia.",
    },
    {
      name: "David",
      reference: "1 Crónicas 29",
      summary: "David reconoció que todo viene de Dios y convirtió la abundancia en adoración humilde.",
    },
  ],
  provision: [
    {
      name: "La viuda de Sarepta",
      reference: "1 Reyes 17",
      summary: "En escasez, Dios proveyó harina y aceite mientras ella respondió con fe a la palabra dada por Elías.",
    },
    {
      name: "Israel en el desierto",
      reference: "Éxodo 16",
      summary: "Dios dio maná diario, enseñando dependencia cotidiana y confianza en su provisión.",
    },
    {
      name: "La multitud alimentada",
      reference: "Juan 6",
      summary: "Jesús multiplicó panes y peces, mostrando que la necesidad humana es pequeña frente a su poder generoso.",
    },
  ],
};

topics.forEach((topic) => {
  topic.verseBank = [...topic.verses, ...(extraVerses[topic.id] || [])];
  topic.examples = biblicalExamples[topic.id] || biblicalExamples.direccion;
});

const reflectionContent = {
  ansiedad: {
    questions: [
      "¿Qué preocupación estoy intentando controlar como si dependiera completamente de mí?",
      "¿Qué cambiaría hoy si creyera de verdad que Dios cuida de mí en lo concreto?",
      "¿Cuál es el siguiente paso fiel que sí puedo dar sin cargar todo el futuro?",
    ],
    lessons: [
      "Si le pides paz a Dios, muchas veces no quitará primero todas las preguntas; te enseñará a respirar, orar y caminar con Él en medio de ellas.",
      "Si le pides confianza, no siempre te dará el mapa completo; te dará una lámpara para el siguiente paso.",
      "Dios puede usar la ansiedad para enseñarte a soltar el trono del control y volver al lugar seguro de hijo.",
    ],
  },
  tristeza: {
    questions: [
      "¿Qué dolor necesito dejar de esconder delante de Dios?",
      "¿Estoy buscando consuelo verdadero o solo formas rápidas de no sentir?",
      "¿Qué parte de mi tristeza puede convertirse en una oración honesta?",
    ],
    lessons: [
      "Si le pides consuelo, Dios no siempre borrará inmediatamente la lágrima; muchas veces se sentará contigo hasta que aprendas que no lloras solo.",
      "Si le pides esperanza, puede mostrarte pequeñas luces antes de cambiar todo el paisaje.",
      "Dios puede usar el dolor para hacer más tierno tu corazón y más profunda tu dependencia de Él.",
    ],
  },
  miedo: {
    questions: [
      "¿A qué le estoy dando más autoridad: al miedo o a la promesa de Dios?",
      "¿Qué acto de obediencia estoy evitando porque quiero sentir seguridad absoluta primero?",
      "¿Cómo se vería la valentía si empezara con un paso pequeño y no con ausencia de temor?",
    ],
    lessons: [
      "Si le pides valentía, Dios no siempre quitará el gigante; puede darte una piedra, una honda y la certeza de que Él pelea contigo.",
      "Si le pides seguridad, quizá no te dé control total; te dará su presencia fiel.",
      "Dios puede usar el miedo para enseñarte que la fe no es no temblar, sino mirar a quién te sostiene.",
    ],
  },
  culpa: {
    questions: [
      "¿Estoy permitiendo que la culpa me lleve a Cristo o que me esconda de Él?",
      "¿Qué debo confesar, reparar o abandonar con honestidad?",
      "¿Creo que el perdón de Dios es suficiente o sigo intentando pagar lo que Cristo ya cargó?",
    ],
    lessons: [
      "Si le pides limpieza, Dios no solo tapa la mancha; te invita a una vida nueva.",
      "Si le pides perdón, puede darte también convicción, humildad y valor para reparar.",
      "Dios puede usar el arrepentimiento para destruir la condenación y formar obediencia real.",
    ],
  },
  soledad: {
    questions: [
      "¿Estoy midiendo mi valor por quién me busca o por quién Dios dice que soy?",
      "¿Qué espacio de mi corazón necesita recordar que Dios no abandona?",
      "¿A qué persona o comunidad sana podría acercarme con humildad esta semana?",
    ],
    lessons: [
      "Si le pides compañía, Dios puede darte primero la certeza de su presencia antes de abrir nuevas relaciones.",
      "Si le pides ser visto, puede enseñarte que sus ojos nunca se apartaron de ti.",
      "Dios puede usar la soledad para sanar dependencias y formar una identidad más firme en Él.",
    ],
  },
  cansancio: {
    questions: [
      "¿Qué carga estoy llevando que Dios nunca me pidió cargar solo?",
      "¿Estoy confundiendo fidelidad con agotarme hasta no poder escuchar a Dios?",
      "¿Qué límite sano puede ser hoy una forma de obediencia y confianza?",
    ],
    lessons: [
      "Si le pides fuerza a Dios, no siempre te dará músculos de golpe; muchas veces te dará las pesas, el descanso y la disciplina para formarte.",
      "Si le pides alivio, quizá no quite toda responsabilidad; puede enseñarte a cargarla con Cristo y no desde la autosuficiencia.",
      "Dios puede usar el cansancio para mostrarte que eres criatura amada, no máquina de rendimiento.",
    ],
  },
  direccion: {
    questions: [
      "¿Estoy buscando la voluntad de Dios o una garantía de que no tendré que confiar?",
      "¿Qué decisión puedo rendir antes de pedir claridad?",
      "¿Qué principio de la Palabra ya ilumina el siguiente paso?",
    ],
    lessons: [
      "Si le pides dirección, Dios no siempre te dará todo el mapa; puede darte una lámpara para tus pies.",
      "Si le pides claridad, puede formar primero humildad para obedecer lo que ya está claro.",
      "Dios puede usar la espera para ordenar tus deseos antes de abrir una puerta.",
    ],
  },
  enojo: {
    questions: [
      "¿Mi enojo está defendiendo justicia o protegiendo orgullo herido?",
      "¿Qué palabras necesito detener antes de que hagan más daño?",
      "¿Cómo puedo decir la verdad sin dejar de reflejar el carácter de Cristo?",
    ],
    lessons: [
      "Si le pides dominio propio, Dios no siempre eliminará la provocación; puede darte una pausa donde antes había reacción.",
      "Si le pides justicia, puede enseñarte a buscarla sin convertirte en esclavo de la ira.",
      "Dios puede usar el conflicto para formar mansedumbre, verdad y paciencia.",
    ],
  },
  perdonar: {
    questions: [
      "¿Qué deuda sigo intentando cobrar con mi mente o mis palabras?",
      "¿Qué diferencia hay entre perdonar y negar que hubo daño?",
      "¿Qué límite sabio podría acompañar un perdón sincero?",
    ],
    lessons: [
      "Si le pides libertad, Dios puede pedirte soltar la venganza que parecía darte control.",
      "Si le pides sanar, no siempre borrará la memoria de inmediato; puede quitarle poco a poco el poder de gobernarte.",
      "Dios puede usar el perdón para hacer visible en ti la misericordia que recibiste en Cristo.",
    ],
  },
  tentacion: {
    questions: [
      "¿En qué momento suelo negociar con lo que ya sé que debo huir?",
      "¿Qué salida concreta me está mostrando Dios antes de que sea tarde?",
      "¿Qué deseo legítimo estoy intentando satisfacer fuera del orden de Dios?",
    ],
    lessons: [
      "Si le pides libertad, Dios no siempre quitará la tentación de golpe; puede darte una puerta de salida y pedirte que camines hacia ella.",
      "Si le pides dominio propio, puede darte límites, rendición de cuentas y hambre por algo mejor.",
      "Dios puede usar la lucha para enseñarte a depender del Espíritu y no de pura fuerza de voluntad.",
    ],
  },
  gratitud: {
    questions: [
      "¿Qué regalo de Dios he normalizado tanto que ya casi no agradezco?",
      "¿Cómo puedo convertir la alegría de hoy en adoración y servicio?",
      "¿Qué beneficio de Dios necesito recordar antes de pedir algo más?",
    ],
    lessons: [
      "Si le pides gozo, Dios puede enseñarte a encontrarlo primero en Él y no solo en lo que sale bien.",
      "Si le pides más, puede abrirte los ojos para valorar lo que ya puso en tus manos.",
      "Dios puede usar la gratitud para proteger tu corazón del orgullo y del olvido.",
    ],
  },
  provision: {
    questions: [
      "¿Estoy buscando provisión con confianza o desde desesperación?",
      "¿Qué responsabilidad práctica me toca asumir mientras espero en Dios?",
      "¿Cómo puedo honrar a Dios con lo poco o mucho que tengo hoy?",
    ],
    lessons: [
      "Si le pides provisión, Dios no siempre dejará caer todo terminado; puede darte sabiduría, trabajo, ayuda y contentamiento.",
      "Si le pides pan para mañana, puede enseñarte primero a confiar en el pan de hoy.",
      "Dios puede usar la necesidad para formar dependencia, generosidad y una fe menos atada al dinero.",
    ],
  },
};

const devotionalContent = {
  ansiedad: {
    prayer: (situation) =>
      `Señor, pongo delante de ti ${situation}. Ordena mis pensamientos, guarda mi corazón con tu paz y ayúdame a vivir este día sin cargar el mañana antes de tiempo. Enséñame a confiar en tu cuidado y a hacer con fe solo el siguiente paso. Amén.`,
    gratitude: [
      "Porque Dios escucha aun cuando mi oración sale inquieta o incompleta.",
      "Porque hoy puedo recibir paz para este día, no para todos los problemas de una vez.",
      "Porque todavía hay pequeñas provisiones, personas o momentos que me recuerdan que no estoy fuera del cuidado de Dios.",
    ],
  },
  tristeza: {
    prayer: (situation) =>
      `Dios, me acerco a ti con ${situation}, sin fingir que todo está bien. Consuela mi corazón, acompáñame en el dolor y ayúdame a esperar en ti aunque mis emociones vayan despacio. Que tu presencia sea más real que mi tristeza. Amén.`,
    gratitude: [
      "Porque Dios se acerca al corazón quebrantado y no desprecia mis lágrimas.",
      "Porque el dolor de hoy no tiene la última palabra sobre mi vida.",
      "Porque puedo encontrar señales de cuidado en lo simple: respirar, descansar, hablar con alguien o volver a intentarlo.",
    ],
  },
  miedo: {
    prayer: (situation) =>
      `Señor, cuando miro ${situation} siento temor, pero decido recordar que tú estás conmigo. Dame fortaleza, amor y templanza para no actuar desde el pánico. Ayúdame a obedecerte con valentía en lo que sí puedo hacer hoy. Amén.`,
    gratitude: [
      "Porque Dios promete estar conmigo en medio de lo incierto.",
      "Porque no tengo que resolver todo antes de dar un paso fiel.",
      "Porque el temor puede convertirse en una oportunidad para aprender a confiar más profundamente.",
    ],
  },
  culpa: {
    prayer: (situation) =>
      `Padre, traigo ante ti ${situation}. Muéstrame lo que debo confesar, limpia mi corazón y guíame a reparar lo que sea necesario. No quiero esconderme ni vivir condenado; quiero volver a ti con arrepentimiento y esperanza. Amén.`,
    gratitude: [
      "Porque en Cristo hay perdón real y no solo alivio momentáneo.",
      "Porque Dios me llama a cambiar sin dejarme atrapado en la condenación.",
      "Porque todavía puedo tomar decisiones honestas, pedir perdón y caminar de una manera nueva.",
    ],
  },
  soledad: {
    prayer: (situation) =>
      `Dios, en medio de ${situation}, recuérdame que tú no me dejas ni me desamparas. Sana lo que se siente abandonado en mí y abre mis ojos para reconocer tu compañía. Ayúdame también a acercarme con humildad a las personas correctas. Amén.`,
    gratitude: [
      "Porque la presencia de Dios no depende de que otras personas estén disponibles.",
      "Porque sigo siendo visto, amado y sostenido por el Señor.",
      "Porque hoy puede haber una conversación, un gesto o un momento sencillo que me recuerde que no estoy solo.",
    ],
  },
  cansancio: {
    prayer: (situation) =>
      `Jesús, vengo a ti con ${situation}. Estoy cansado de cargar más de lo que puedo sostener. Enséñame a descansar en ti, a soltar cargas que no me corresponden y a recibir nuevas fuerzas para lo necesario. Amén.`,
    gratitude: [
      "Porque Jesús invita a los cansados a venir, no a esconder su agotamiento.",
      "Porque descansar también puede ser un acto de confianza en Dios.",
      "Porque aún en días pesados hay fuerzas pequeñas que Dios renueva para seguir con fidelidad.",
    ],
  },
  direccion: {
    prayer: (situation) =>
      `Señor, necesito tu sabiduría para ${situation}. No quiero apoyarme solo en mi prudencia ni decidir desde la presión. Guía mis pasos, corrige mis motivos y dame claridad para obedecer lo que ya me estás mostrando. Amén.`,
    gratitude: [
      "Porque Dios da sabiduría generosamente a quien la pide.",
      "Porque no necesito ver todo el camino para obedecer el siguiente paso.",
      "Porque incluso la confusión puede llevarme a depender más de la Palabra y menos del control.",
    ],
  },
  enojo: {
    prayer: (situation) =>
      `Dios, te entrego ${situation} y la ira que se ha levantado en mí. Dame dominio propio para escuchar, hablar con verdad y no pecar en mi enojo. Ayúdame a buscar justicia y paz sin alimentar resentimiento. Amén.`,
    gratitude: [
      "Porque Dios puede ordenar mis emociones antes de que mis palabras hagan daño.",
      "Porque no tengo que responder desde la herida para ser tomado en serio.",
      "Porque cada conflicto puede convertirse en una oportunidad para practicar verdad, humildad y reconciliación.",
    ],
  },
  perdonar: {
    prayer: (situation) =>
      `Señor, tú conoces ${situation} y sabes cuánto me ha dolido. Ayúdame a soltar la venganza, a buscar límites sabios y a perdonar desde lo que tú me has perdonado en Cristo. Sana mi corazón sin negar la verdad. Amén.`,
    gratitude: [
      "Porque Dios ve el daño con justicia y no me pide fingir que no importó.",
      "Porque perdonar puede liberarme de vivir atado a la herida.",
      "Porque el amor de Cristo me da una base más firme que el rencor para seguir adelante.",
    ],
  },
  tentacion: {
    prayer: (situation) =>
      `Padre, reconozco mi debilidad frente a ${situation}. Muéstrame la salida que ya estás proveyendo y dame voluntad para tomarla a tiempo. Llena mi mente y mis deseos con tu Espíritu para no alimentar lo que me aparta de ti. Amén.`,
    gratitude: [
      "Porque Dios no me deja sin salida cuando soy tentado.",
      "Porque reconocer mi debilidad es el comienzo de depender mejor de Él.",
      "Porque hoy puedo elegir un límite, una ayuda o una práctica que me acerque a la libertad.",
    ],
  },
  gratitud: {
    prayer: (situation) =>
      `Señor, gracias por ${situation} y por toda buena dádiva que viene de ti. Guarda mi corazón de olvidar tus beneficios y enséñame a usar mi alegría para amar, servir y vivir con humildad delante de ti. Amén.`,
    gratitude: [
      "Porque todo lo bueno que recibo puede convertirse en adoración.",
      "Porque la gratitud me ayuda a recordar que mi vida no depende solo de mis logros.",
      "Porque Dios sigue dando regalos diarios que merecen ser reconocidos con humildad.",
    ],
  },
  provision: {
    prayer: (situation) =>
      `Padre, tú conoces ${situation} y sabes lo que necesito. Ayúdame a buscar primero tu reino, a trabajar con responsabilidad y a confiar en tu provisión sin caer en desesperación. Dame contentamiento, sabiduría y generosidad. Amén.`,
    gratitude: [
      "Porque Dios conoce mis necesidades antes de que yo las explique perfectamente.",
      "Porque el pan de hoy, una oportunidad o una ayuda pequeña también son provisión.",
      "Porque puedo honrar a Dios con lo que tengo, incluso mientras espero lo que falta.",
    ],
  },
};

const fallbackTopic = topics.find((topic) => topic.id === "direccion") || topics[0];
const storageKeys = {
  search: "asolas.searchState.static.v1",
  journal: "asolas.journal.static.v1",
  favorites: "asolas.favoriteVerses.static.v1",
  theme: "asolas.theme.static.v1",
  habit: "asolas.habit.static.v1",
  dailyVerse: "asolas.dailyVerse.static.v1",
  reminder: "asolas.reminder.static.v1",
  music: "asolas.music.static.v1",
};

const fallbackDailyVerses = [
  {
    reference: "Salmos 46:10",
    text: "Estad quietos, y conoced que yo soy Dios.",
    translation: "Reina-Valera 1909",
  },
  {
    reference: "Mateo 11:28",
    text: "Venid a mí todos los que estáis trabajados y cargados, que yo os haré descansar.",
    translation: "Reina-Valera 1909",
  },
  {
    reference: "Isaías 41:10",
    text: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo.",
    translation: "Reina-Valera 1909",
  },
];

const form = document.querySelector("#searchForm");
const input = document.querySelector("#feelingInput");
const quickTopics = document.querySelectorAll("[data-query]");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const matchedTopic = document.querySelector("#matchedTopic");
const verseGrid = document.querySelector("#verseGrid");
const prayerText = document.querySelector("#prayerText");
const gratitudeList = document.querySelector("#gratitudeList");
const exampleGrid = document.querySelector("#exampleGrid");
const reflectionQuestions = document.querySelector("#reflectionQuestions");
const formationLessons = document.querySelector("#formationLessons");
const previousResult = document.querySelector("#previousResult");
const nextResult = document.querySelector("#nextResult");
const historyStatus = document.querySelector("#historyStatus");
const copyStatus = document.querySelector("#copyStatus");
const savedCopyStatus = document.querySelector("#savedCopyStatus");
const journalList = document.querySelector("#journalList");
const savedVersesList = document.querySelector("#savedVersesList");
const habitCount = document.querySelector("#habitCount");
const themeToggle = document.querySelector("#themeToggle");
const musicToggle = document.querySelector("#musicToggle");
const startButton = document.querySelector("#startButton");
const reminderTime = document.querySelector("#reminderTime");
const reminderToggle = document.querySelector("#reminderToggle");
const reminderStatus = document.querySelector("#reminderStatus");
const dailyReference = document.querySelector("#dailyReference");
const dailyText = document.querySelector("#dailyText");
const dailyTranslation = document.querySelector("#dailyTranslation");

let searchState = readLocal(storageKeys.search, { counters: {}, history: [], activeIndex: -1 });
let journal = readLocal(storageKeys.journal, []);
let favorites = readLocal(storageKeys.favorites, []);
let habit = readLocal(storageKeys.habit, { streak: 0, lastWriteDate: "" });
let reminder = readLocal(storageKeys.reminder, { enabled: false, time: "08:00", permission: "default" });
let currentTopic = topics[0];
let currentVerses = [];
let currentVariant = null;
let audioState = null;
let reminderTimer = null;

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function readLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The app keeps working even when localStorage is blocked.
  }
}

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function yesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return todayKey(date);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function scoreTopic(query, topic) {
  const cleanQuery = normalize(query);
  if (!cleanQuery) return topic.id === "ansiedad" ? 1 : 0;

  let score = 0;
  topic.keywords.forEach((keyword) => {
    const cleanKeyword = normalize(keyword);
    if (cleanQuery.includes(cleanKeyword)) score += cleanKeyword.split(" ").length + 3;
  });

  cleanQuery.split(" ").forEach((word) => {
    if (word.length < 4) return;
    topic.keywords.forEach((keyword) => {
      if (normalize(keyword).includes(word)) score += 1;
    });
    topic.title
      .toLowerCase()
      .split(/\W+/)
      .forEach((titleWord) => {
        if (normalize(titleWord) === word) score += 1;
      });
  });

  return score;
}

function findBestTopic(query) {
  const ranked = topics
    .map((topic) => ({ topic, score: scoreTopic(query, topic) }))
    .sort((a, b) => b.score - a.score);

  return ranked[0].score > 0 ? ranked[0].topic : fallbackTopic;
}

function pickVerseSet(topic, offset = 0) {
  const bank = topic.verseBank || topic.verses;
  const start = offset % bank.length;
  return Array.from({ length: Math.min(3, bank.length) }, (_, index) => bank[(start + index) % bank.length]);
}

function createVariant(topic, query) {
  const currentCount = searchState.counters[topic.id] || 0;
  const offset = (currentCount * 3) % topic.verseBank.length;
  searchState.counters[topic.id] = currentCount + 1;

  return {
    id: `${Date.now()}-${topic.id}-${currentCount}`,
    topicId: topic.id,
    topicTitle: topic.title,
    query: query.trim(),
    offset,
    createdAt: new Date().toISOString(),
  };
}

function getTopicById(topicId) {
  return topics.find((topic) => topic.id === topicId) || fallbackTopic;
}

function rememberVariant(variant) {
  searchState.history.push(variant);
  if (searchState.history.length > 30) searchState.history.shift();
  searchState.activeIndex = searchState.history.length - 1;
  writeLocal(storageKeys.search, searchState);
}

function updateHistoryControls() {
  const total = searchState.history.length;
  const position = total ? searchState.activeIndex + 1 : 1;
  historyStatus.textContent = `Opción ${position} de ${Math.max(total, 1)}`;
  previousResult.disabled = total <= 1 || searchState.activeIndex <= 0;
  nextResult.disabled = total <= 1 || searchState.activeIndex >= total - 1;
}

function verseId(verse) {
  return `${verse.reference}::${verse.text}`;
}

function allVerses() {
  return topics.flatMap((topic) => topic.verseBank || topic.verses);
}

function randomVerse() {
  const verses = allVerses();
  return verses[Math.floor(Math.random() * verses.length)] || fallbackDailyVerses[0];
}

function getNotificationDelay(time) {
  const [hours = "8", minutes = "0"] = time.split(":");
  const now = new Date();
  const target = new Date();
  target.setHours(Number(hours), Number(minutes), 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target.getTime() - now.getTime();
}

function getSituationPhrase(query) {
  const cleanQuery = query.trim();
  if (!cleanQuery) return "este momento";
  if (cleanQuery.length > 72) return "lo que acabo de expresar";
  return "esto que estoy sintiendo";
}

function buildGeneratedResponse(topic, query, variant = null) {
  const devotional = devotionalContent[topic.id] || devotionalContent.direccion;
  const reflection = reflectionContent[topic.id] || reflectionContent.direccion;
  const situation = getSituationPhrase(query);
  const verses = variant ? pickVerseSet(topic, variant.offset) : pickVerseSet(topic, 0);

  return {
    topic,
    verses,
    prayer: devotional.prayer(situation),
    gratitude: devotional.gratitude,
    examples: topic.examples || [],
    reflection,
  };
}

function renderTopic(topic, query = "", variant = null) {
  const generated = buildGeneratedResponse(topic, query, variant);
  currentTopic = topic;
  currentVariant = variant;
  currentVerses = generated.verses;

  resultTitle.textContent = topic.title;
  resultSummary.textContent = topic.summary;
  matchedTopic.querySelector("strong").textContent = topic.title;
  prayerText.textContent = generated.prayer;
  gratitudeList.innerHTML = generated.gratitude.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  exampleGrid.innerHTML = generated.examples
    .map(
      (example) => `
        <article class="example-card">
          <strong>${escapeHtml(example.name)}</strong>
          <span class="example-ref">${escapeHtml(example.reference)}</span>
          <p>${escapeHtml(example.summary)}</p>
        </article>
      `,
    )
    .join("");
  reflectionQuestions.innerHTML = generated.reflection.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("");
  formationLessons.innerHTML = generated.reflection.lessons.map((lesson) => `<li>${escapeHtml(lesson)}</li>`).join("");

  verseGrid.innerHTML = generated.verses
    .map((verse, index) => {
      const saved = favorites.some((item) => verseId(item) === verseId(verse));
      return `
        <article class="verse-card">
          <div class="verse-main">
            <span class="reference">${escapeHtml(verse.reference)}</span>
            <p class="verse-text">“${escapeHtml(verse.text)}”</p>
          </div>
          <div class="action">
            <span>Qué hacer</span>
            <p>${escapeHtml(verse.action)}</p>
            <div class="verse-actions">
              <button class="verse-button secondary" type="button" data-verse-index="${index}" data-action="favorite">
                ${saved ? "Guardado" : "Guardar"}
              </button>
              <button class="verse-button primary" type="button" data-verse-index="${index}" data-action="copy">
                Compartir
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  if (query.trim()) {
    window.history.replaceState(null, "", `#${encodeURIComponent(query.trim())}`);
  }

  updateHistoryControls();
  renderSavedVerses();
  return generated;
}

function runSearch(query, shouldRemember = true) {
  const topic = findBestTopic(query);
  const variant = createVariant(topic, query);
  if (shouldRemember) rememberVariant(variant);
  const generated = renderTopic(topic, query, variant);
  if (shouldRemember && query.trim()) {
    saveJournalEntry(query, generated);
    updateHabitAfterWriting();
  }
  setActiveView("escribir", true);
}

function renderHistoryAt(index) {
  if (!searchState.history[index]) return;
  searchState.activeIndex = index;
  const variant = searchState.history[index];
  input.value = variant.query;
  renderTopic(getTopicById(variant.topicId), variant.query, variant);
  writeLocal(storageKeys.search, searchState);
}

function setActiveView(viewName, shouldScroll = false) {
  document.querySelectorAll("[data-view]").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === viewName);
  });
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === viewName);
  });
  if (viewName === "diario") renderJournal();
  if (viewName === "versiculos") renderSavedVerses();
  if (shouldScroll) {
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 40);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function saveJournalEntry(query, generated) {
  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    query: query.trim(),
    response: {
      topic: generated.topic.title,
      summary: generated.topic.summary,
      verses: generated.verses,
      prayer: generated.prayer,
      gratitude: generated.gratitude,
    },
  };
  journal = [...journal, entry].slice(-100);
  writeLocal(storageKeys.journal, journal);
  renderJournal();
}

function renderJournal() {
  const ordered = [...journal].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (!ordered.length) {
    journalList.innerHTML = `<p class="empty-state">Todavía no hay entradas. Cuando escribas y lleves algo a Dios, aparecerá aquí.</p>`;
    return;
  }

  journalList.innerHTML = ordered
    .map(
      (entry) => `
        <article class="journal-entry">
          <div class="entry-head">
            <div>
              <span class="entry-date">${escapeHtml(formatDate(entry.createdAt))}</span>
              <h3>${escapeHtml(entry.response.topic)}</h3>
            </div>
            <button class="entry-button" type="button" data-journal-id="${escapeHtml(entry.id)}">Eliminar</button>
          </div>
          <p class="entry-query">${escapeHtml(entry.query)}</p>
          <div class="entry-verses">
            ${entry.response.verses
              .map(
                (verse) => `
                  <div class="entry-verse">
                    <strong>${escapeHtml(verse.reference)}</strong>
                    <p>${escapeHtml(verse.text)}</p>
                  </div>
                `,
              )
              .join("")}
          </div>
          <p class="entry-prayer">“${escapeHtml(entry.response.prayer)}”</p>
        </article>
      `,
    )
    .join("");
}

function deleteJournalEntry(id) {
  journal = journal.filter((entry) => entry.id !== id);
  writeLocal(storageKeys.journal, journal);
  renderJournal();
}

function updateHabitAfterWriting() {
  const today = todayKey();
  if (habit.lastWriteDate === today) return;
  habit = {
    lastWriteDate: today,
    streak: habit.lastWriteDate === yesterdayKey() ? habit.streak + 1 : 1,
  };
  writeLocal(storageKeys.habit, habit);
  renderHabit();
}

function renderHabit() {
  habitCount.textContent = habit.streak || 0;
}

function toggleFavorite(verse) {
  const exists = favorites.some((item) => verseId(item) === verseId(verse));
  favorites = exists
    ? favorites.filter((item) => verseId(item) !== verseId(verse))
    : [{ ...verse, topic: currentTopic.title, savedAt: new Date().toISOString() }, ...favorites];
  writeLocal(storageKeys.favorites, favorites);
  renderTopic(currentTopic, currentVariant?.query || input.value, currentVariant);
  renderSavedVerses();
}

function renderSavedVerses() {
  if (!savedVersesList) return;
  if (!favorites.length) {
    savedVersesList.innerHTML = `<p class="empty-state">Todavía no has guardado versículos.</p>`;
    return;
  }

  savedVersesList.innerHTML = favorites
    .map(
      (verse, index) => `
        <article class="saved-card">
          <span class="example-ref">${escapeHtml(verse.topic || "Versículo guardado")}</span>
          <strong>${escapeHtml(verse.reference)}</strong>
          <p class="saved-text">“${escapeHtml(verse.text)}”</p>
          <div class="verse-actions">
            <button class="verse-button primary" type="button" data-saved-index="${index}" data-action="copy-saved">Compartir</button>
            <button class="verse-button secondary" type="button" data-saved-index="${index}" data-action="remove-saved">Eliminar</button>
          </div>
        </article>
      `,
    )
    .join("");
}

async function copyVerse(verse, target = copyStatus) {
  const text = `${verse.reference}\n"${verse.text}"\n\nA Solas con Dios — Brújula Bíblica`;
  try {
    await navigator.clipboard.writeText(text);
    target.textContent = `Copiado: ${verse.reference}`;
  } catch {
    target.textContent = "No se pudo copiar automáticamente en este navegador.";
  }
  window.setTimeout(() => {
    target.textContent = "";
  }, 2800);
}

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
  writeLocal(storageKeys.theme, theme);
}

function showToast(message) {
  let toast = document.querySelector("#appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  window.setTimeout(() => {
    toast.textContent = "";
  }, 2800);
}

async function loadDailyVerse() {
  const date = todayKey();
  const cached = readLocal(storageKeys.dailyVerse, null);
  if (cached?.date === date) {
    renderDailyVerse(cached.verse);
    return;
  }

  try {
    const response = await fetch("https://bible-api.com/data/rvr1909/random/NT");
    if (!response.ok) throw new Error("Daily verse unavailable");
    const data = await response.json();
    const verse = {
      reference: `${data.random_verse.book} ${data.random_verse.chapter}:${data.random_verse.verse}`,
      text: data.random_verse.text.replace(/\s+/g, " ").trim(),
      translation: data.translation?.name || "Reina-Valera 1909",
    };
    writeLocal(storageKeys.dailyVerse, { date, verse });
    renderDailyVerse(verse);
  } catch {
    const verse = fallbackDailyVerses[new Date().getDate() % fallbackDailyVerses.length];
    renderDailyVerse(verse);
  }
}

function renderDailyVerse(verse) {
  dailyReference.textContent = verse.reference;
  dailyText.textContent = `“${verse.text}”`;
  dailyTranslation.textContent = verse.translation;
}

async function requestReminderPermission() {
  if (!("Notification" in window)) {
    reminder = { ...reminder, enabled: false, permission: "unsupported" };
    reminderStatus.textContent = "Este navegador no permite notificaciones.";
    writeLocal(storageKeys.reminder, reminder);
    return;
  }

  const permission = await Notification.requestPermission();
  reminder = { ...reminder, permission, enabled: permission === "granted" };
  writeLocal(storageKeys.reminder, reminder);
  renderReminder();
  scheduleReminder();
}

function renderReminder() {
  reminderTime.value = reminder.time || "08:00";
  reminderToggle.textContent = reminder.enabled ? "Desactivar" : "Activar";
  if (reminder.permission === "denied") {
    reminderStatus.textContent = "El navegador tiene bloqueadas las notificaciones para este sitio.";
  } else if (reminder.enabled) {
    reminderStatus.textContent = `Recordatorio activo a las ${reminder.time}.`;
  } else {
    reminderStatus.textContent = "Guarda una hora en este dispositivo y recibe una invitación diaria con un versículo.";
  }
}

function scheduleReminder() {
  if (reminderTimer) window.clearTimeout(reminderTimer);
  if (!reminder.enabled || reminder.permission !== "granted") return;

  reminderTimer = window.setTimeout(() => {
    showReminder();
    scheduleReminder();
  }, getNotificationDelay(reminder.time));
}

function showReminder() {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const verse = randomVerse();
  new Notification("A Solas con Dios", {
    body: `${verse.reference}: ${verse.text}`,
  });
}

async function startMusic() {
  if (audioState) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    showToast("Este navegador no permite audio ambiental.");
    return;
  }

  const context = new AudioContext();
  const master = context.createGain();
  master.gain.value = 0.032;
  master.connect(context.destination);

  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 900;
  filter.connect(master);

  const frequencies = [196, 246.94, 293.66, 392];
  const oscillators = frequencies.map((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = index % 2 === 0 ? "sine" : "triangle";
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 3 ? 0.018 : 0.034;
    oscillator.connect(gain);
    gain.connect(filter);
    oscillator.start();
    return oscillator;
  });

  await context.resume();
  audioState = { context, oscillators };
  musicToggle.textContent = "Pausar música";
  writeLocal(storageKeys.music, true);
}

function stopMusic() {
  if (!audioState) return;
  audioState.oscillators.forEach((oscillator) => oscillator.stop());
  audioState.context.close();
  audioState = null;
  musicToggle.textContent = "Música suave";
  writeLocal(storageKeys.music, false);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(input.value);
});

quickTopics.forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.query;
    runSearch(input.value);
    input.focus();
  });
});

previousResult.addEventListener("click", () => {
  renderHistoryAt(searchState.activeIndex - 1);
});

nextResult.addEventListener("click", () => {
  renderHistoryAt(searchState.activeIndex + 1);
});

verseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const index = Number(button.dataset.verseIndex);
  const verse = currentVerses[index];
  if (!verse) return;
  if (button.dataset.action === "favorite") toggleFavorite(verse);
  if (button.dataset.action === "copy") copyVerse(verse, copyStatus);
});

journalList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-journal-id]");
  if (button) deleteJournalEntry(button.dataset.journalId);
});

savedVersesList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const index = Number(button.dataset.savedIndex);
  const verse = favorites[index];
  if (!verse) return;
  if (button.dataset.action === "copy-saved") copyVerse(verse, savedCopyStatus);
  if (button.dataset.action === "remove-saved") {
    favorites = favorites.filter((_, itemIndex) => itemIndex !== index);
    writeLocal(storageKeys.favorites, favorites);
    renderSavedVerses();
    renderTopic(currentTopic, currentVariant?.query || input.value, currentVariant);
  }
});

document.querySelectorAll("[data-view-target]").forEach((button) => {
  button.addEventListener("click", () => setActiveView(button.dataset.viewTarget, button.dataset.viewTarget === "escribir"));
});

startButton.addEventListener("click", () => setActiveView("escribir", true));

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
});

musicToggle.addEventListener("click", async () => {
  if (audioState) {
    stopMusic();
  } else {
    await startMusic();
  }
});

reminderTime.addEventListener("change", () => {
  reminder = { ...reminder, time: reminderTime.value || "08:00" };
  writeLocal(storageKeys.reminder, reminder);
  renderReminder();
  scheduleReminder();
});

reminderToggle.addEventListener("click", async () => {
  if (reminder.permission !== "granted") {
    await requestReminderPermission();
    return;
  }
  reminder = { ...reminder, enabled: !reminder.enabled };
  writeLocal(storageKeys.reminder, reminder);
  renderReminder();
  scheduleReminder();
});

applyTheme(readLocal(storageKeys.theme, "light"));
renderHabit();
renderJournal();
renderSavedVerses();
renderReminder();
scheduleReminder();
loadDailyVerse();

const initialQuery = decodeURIComponent(window.location.hash.replace(/^#/, ""));
if (initialQuery) {
  input.value = initialQuery;
  runSearch(initialQuery, false);
  setActiveView("escribir", true);
} else {
  const initialTopic = topics[0];
  renderTopic(initialTopic, "", { offset: 0 });
}
