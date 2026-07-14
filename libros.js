const libros = [
{
    titulo: "MANIAC",
    autor: "Benjamín Labatut",
    categoria: "Ciencia",
    imagen: "img/maniac.jpg",
    sinopsis: "Una novela que mezcla historia, ciencia y ficción para explorar la vida de John von Neumann, uno de los científicos más influyentes del siglo XX. A través de distintos personajes, el libro reflexiona sobre el origen de la computadora moderna, la inteligencia artificial y el enorme poder de las matemáticas."
},

{
    titulo: "Breve historia del tiempo",
    autor: "Stephen Hawking",
    categoria: "Ciencia",
    imagen: "img/breve_historia_del_tiempo.jpg",
    sinopsis: "Uno de los libros de divulgación científica más importantes de la historia. Stephen Hawking explica de forma accesible conceptos como el Big Bang, los agujeros negros, el espacio-tiempo, la relatividad y el origen del universo."
},

{
    titulo: "El universo en una cáscara de nuez",
    autor: "Stephen Hawking",
    categoria: "Ciencia",
    imagen: "img/universo_cascara_nuez.jpg",
    sinopsis: "Continuación de las ideas presentadas en Breve historia del tiempo. Hawking presenta temas como la teoría M, la física cuántica, los viajes en el tiempo y las dimensiones adicionales con abundantes ilustraciones."
},

{
    titulo: "La gran ilusión",
    autor: "Stephen Hawking",
    categoria: "Ciencia",
    imagen: "img/gran_ilusion.jpg",
    sinopsis: "Obra de divulgación que explora las preguntas fundamentales de la física moderna, el origen del universo y las leyes que gobiernan la naturaleza, acercando conceptos complejos al lector general."
},

{
    titulo: "Momentos estelares de la ciencia",
    autor: "Isaac Asimov",
    categoria: "Ciencia",
    imagen: "img/momentos_estelares.jpg",
    sinopsis: "Isaac Asimov narra algunos de los descubrimientos científicos más importantes de la historia, mostrando cómo la curiosidad humana ha transformado nuestra comprensión del mundo."
},

{
    titulo: "El bosón de Higgs no te va a hacer la cama",
    autor: "Javier Santaolalla",
    categoria: "Ciencia",
    imagen: "img/boson_higgs.jpg",
    sinopsis: "Con humor y ejemplos cotidianos, Javier Santaolalla explica conceptos de física de partículas, el funcionamiento del CERN y la importancia del bosón de Higgs para entender el universo."
},

{
    titulo: "El Hobbit",
    autor: "J.R.R. Tolkien",
    categoria: "Fantasía",
    imagen: "img/el_hobbit.jpg",
    sinopsis: "Bilbo Bolsón, un tranquilo hobbit, emprende una inesperada aventura junto al mago Gandalf y trece enanos para recuperar el reino de Erebor del dragón Smaug. Un clásico que dio origen al universo de la Tierra Media."
},

{
    titulo: "La Comunidad del Anillo",
    autor: "J.R.R. Tolkien",
    categoria: "Fantasía",
    imagen: "img/comunidad_del_anillo.jpg",
    sinopsis: "Frodo Bolsón recibe la misión de destruir el Anillo Único antes de que caiga en manos de Sauron. Comienza así una de las aventuras más importantes de la literatura fantástica."
},

{
    titulo: "Las Dos Torres",
    autor: "J.R.R. Tolkien",
    categoria: "Fantasía",
    imagen: "img/las_dos_torres.jpg",
    sinopsis: "Mientras Frodo continúa su viaje hacia Mordor, la Comunidad se separa y libra grandes batallas por el destino de la Tierra Media."
},

{
    titulo: "El Retorno del Rey",
    autor: "J.R.R. Tolkien",
    categoria: "Fantasía",
    imagen: "img/el_retorno_del_rey.jpg",
    sinopsis: "La conclusión de la trilogía de El Señor de los Anillos. Los Pueblos Libres enfrentan la batalla definitiva contra Sauron mientras Frodo intenta destruir el Anillo."
},

{
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    categoria: "Fantasía",
    imagen: "img/harry_potter_1.jpg",
    sinopsis: "Harry descubre que es un mago y comienza sus estudios en Hogwarts, donde conocerá la amistad, la magia y el misterio que rodea a sus padres."
},

{
    titulo: "Harry Potter y la cámara secreta",
    autor: "J.K. Rowling",
    categoria: "Fantasía",
    imagen: "img/harry_potter_2.jpg",
    sinopsis: "Un misterioso enemigo amenaza Hogwarts mientras Harry intenta descubrir quién ha abierto la legendaria Cámara Secreta."
},

{
    titulo: "Renegados",
    autor: "Marissa Meyer",
    categoria: "Fantasía",
    imagen: "img/renegados.jpg",
    sinopsis: "En un mundo donde los superhumanos dominan la sociedad, una joven busca vengarse de los héroes que cambiaron su vida, pero sus sentimientos comienzan a complicar su misión."
},

{
    titulo: "Escuadrón",
    autor: "Brandon Sanderson",
    categoria: "Fantasía",
    imagen: "img/escuadron.jpg",
    sinopsis: "Spensa sueña con convertirse en piloto de combate para defender a la humanidad de una amenaza alienígena, mientras intenta limpiar el nombre de su padre."
},

{
    titulo: "Estelar",
    autor: "Brandon Sanderson",
    categoria: "Fantasía",
    imagen: "img/estelar.jpg",
    sinopsis: "Continuación de Escuadrón. Spensa explora el universo y descubre secretos que cambiarán para siempre la guerra entre la humanidad y sus enemigos."
},

{
    titulo: "Guardianes de la Ciudadela: El Bestiario de Axlin",
    autor: "Laura Gallego",
    categoria: "Fantasía",
    imagen: "img/bestiario_axlin.jpg",
    sinopsis: "Axlin vive en un mundo plagado de monstruos y decide recopilar información sobre ellos para ayudar a la humanidad a sobrevivir."
},

{
    titulo: "Juego de Tronos",
    autor: "George R. R. Martin",
    categoria: "Fantasía",
    imagen: "img/juego_de_tronos.jpg",
    sinopsis: "Las grandes casas de Poniente luchan por el Trono de Hierro mientras antiguas amenazas resurgen más allá del Muro. Una obra maestra de la fantasía épica."
},

{
    titulo: "Choque de Reyes",
    autor: "George R. R. Martin",
    categoria: "Fantasía",
    imagen: "img/choque_de_reyes.jpg",
    sinopsis: "Cinco reyes reclaman el Trono de Hierro, desencadenando una guerra que pone en peligro el futuro de los Siete Reinos."
},

{
    titulo: "Tormenta de Espadas",
    autor: "George R. R. Martin",
    categoria: "Fantasía",
    imagen: "img/tormenta_de_espadas.jpg",
    sinopsis: "Las guerras alcanzan su punto más crítico en una novela llena de giros inesperados, alianzas y traiciones inolvidables."
},

{
    titulo: "Festín de Cuervos",
    autor: "George R. R. Martin",
    categoria: "Fantasía",
    imagen: "img/festin_de_cuervos.jpg",
    sinopsis: "Tras años de guerra, las consecuencias del conflicto transforman Poniente mientras nuevos jugadores buscan el poder."
},

{
    titulo: "Danza de Dragones",
    autor: "George R. R. Martin",
    categoria: "Fantasía",
    imagen: "img/danza_de_dragones.jpg",
    sinopsis: "Daenerys gobierna Meereen, Jon Nieve enfrenta nuevos desafíos en el Muro y el destino de Poniente continúa complicándose."
},

{
    titulo: "La canción de Aquiles",
    autor: "Madeline Miller",
    categoria: "Fantasía",
    imagen: "img/cancion_de_aquiles.jpg",
    sinopsis: "Una reinterpretación de la Ilíada narrada desde la perspectiva de Patroclo, que explora la amistad, el amor y la tragedia entre él y Aquiles."
},

{
    titulo: "La verdad sobre el caso Harry Quebert",
    autor: "Joël Dicker",
    categoria: "Thriller",
    imagen: "img/harry_quebert.jpg",
    sinopsis: "Cuando el cadáver de una joven desaparecida hace más de treinta años aparece enterrado en el jardín del famoso escritor Harry Quebert, su antiguo alumno Marcus Goldman inicia una investigación que cambiará la vida de todos los implicados."
},

{
    titulo: "El enigma de la habitación 622",
    autor: "Joël Dicker",
    categoria: "Thriller",
    imagen: "img/habitacion_622.jpg",
    sinopsis: "Durante unas vacaciones en los Alpes suizos, un escritor descubre el misterio de un asesinato ocurrido años atrás en la habitación 622 de un exclusivo hotel. Una historia llena de giros y secretos."
},

{
    titulo: "La desaparición de Stephanie Mailer",
    autor: "Joël Dicker",
    categoria: "Thriller",
    imagen: "img/stephanie_mailer.jpg",
    sinopsis: "Una periodista asegura que un famoso caso de asesinato fue resuelto de manera incorrecta. Poco después desaparece sin dejar rastro, iniciando una investigación repleta de sorpresas."
},

{
    titulo: "La isla de la mujer dormida",
    autor: "Arturo Pérez-Reverte",
    categoria: "Thriller",
    imagen: "img/isla_mujer_dormida.jpg",
    sinopsis: "En plena Guerra Civil Española, un marino mercante es enviado a una peligrosa misión en una isla del mar Egeo. Allí descubrirá una compleja red de secretos, espionaje y pasiones."
},

{
    titulo: "Instituto",
    autor: "Stephen King",
    categoria: "Thriller",
    imagen: "img/instituto.jpg",
    sinopsis: "Luke Ellis despierta en un misterioso instituto donde niños con habilidades especiales son utilizados para experimentos. Escapar parece imposible."
},

{
    titulo: "Revival",
    autor: "Stephen King",
    categoria: "Thriller",
    imagen: "img/revival.jpg",
    sinopsis: "La obsesión de un pastor por descubrir qué existe después de la muerte lo llevará a realizar experimentos con consecuencias aterradoras."
},

{
    titulo: "22/11/63",
    autor: "Stephen King",
    categoria: "Thriller",
    imagen: "img/221163.jpg",
    sinopsis: "Un profesor viaja al pasado para intentar impedir el asesinato de John F. Kennedy, descubriendo que cambiar la historia tiene un alto precio."
},

{
    titulo: "La larga marcha",
    autor: "Stephen King",
    categoria: "Thriller",
    imagen: "img/larga_marcha.jpg",
    sinopsis: "Cien adolescentes participan en una competencia donde caminar es la única regla. Quien se detenga tres veces será ejecutado. Solo uno sobrevivirá."
},

{
    titulo: "La milla verde",
    autor: "Stephen King",
    categoria: "Thriller",
    imagen: "img/milla_verde.jpg",
    sinopsis: "En el corredor de la muerte de una prisión llega John Coffey, un condenado con un misterioso don que cambiará para siempre la vida de los guardias."
},

{
    titulo: "El silencio de los inocentes",
    autor: "Thomas Harris",
    categoria: "Thriller",
    imagen: "img/silencio_inocentes.jpg",
    sinopsis: "La agente Clarice Starling solicita la ayuda del brillante pero peligroso Hannibal Lecter para capturar a un asesino serial conocido como Buffalo Bill."
},

{
    titulo: "La mano del diablo",
    autor: "Douglas Preston y Lincoln Child",
    categoria: "Thriller",
    imagen: "img/mano_diablo.jpg",
    sinopsis: "Una investigación científica aparentemente rutinaria termina convirtiéndose en una carrera contra el tiempo para detener una amenaza letal."
},

{
    titulo: "The Good Nurse (Ingles)",
    autor: "Charles Graeber",
    categoria: "Thriller",
    imagen: "img/good_nurse.jpg",
    sinopsis: "Basado en hechos reales, narra la historia de Charles Cullen, uno de los asesinos seriales más prolíficos de la historia moderna y la investigación que permitió detenerlo."
},

{
    titulo: "El libro del cementerio",
    autor: "Neil Gaiman",
    categoria: "Thriller",
    imagen: "img/libro_cementerio.jpg",
    sinopsis: "Tras el asesinato de su familia, un niño es criado por los fantasmas de un cementerio mientras una misteriosa figura continúa buscándolo."
},

{
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoievski",
    categoria: "Literatura",
    imagen: "img/crimen_y_castigo.jpg",
    sinopsis: "Raskólnikov, un estudiante empobrecido, comete un asesinato creyéndose moralmente superior. Sin embargo, la culpa y el remordimiento lo conducirán a un intenso conflicto psicológico."
},

{
    titulo: "Noches blancas",
    autor: "Fiódor Dostoievski",
    categoria: "Literatura",
    imagen: "img/noches_blancas.jpg",
    sinopsis: "Un joven soñador conoce a una misteriosa mujer durante cuatro noches en San Petersburgo. Una novela corta sobre el amor, la esperanza y la soledad."
},

{
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    categoria: "Literatura",
    imagen: "img/cien_anos_soledad.jpg",
    sinopsis: "La historia de la familia Buendía y del pueblo de Macondo, una de las obras más importantes del realismo mágico y de la literatura hispanoamericana."
},

{
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    categoria: "Literatura",
    imagen: "img/amor_tiempos_colera.jpg",
    sinopsis: "Florentino Ariza espera más de cincuenta años para reencontrarse con Fermina Daza, demostrando que el amor puede sobrevivir al paso del tiempo."
},

{
    titulo: "El lector",
    autor: "Bernhard Schlink",
    categoria: "Literatura",
    imagen: "img/el_lector.jpg",
    sinopsis: "Michael Berg mantiene una relación con una mujer mayor cuyo pasado saldrá a la luz años después, enfrentándolo a profundas cuestiones éticas y morales."
},

{
    titulo: "El gran Gatsby",
    autor: "F. Scott Fitzgerald",
    categoria: "Literatura",
    imagen: "img/gran_gatsby.jpg",
    sinopsis: "Jay Gatsby dedica su vida a recuperar el amor perdido de Daisy Buchanan, en una historia sobre el sueño americano, la riqueza y la obsesión."
},

{
    titulo: "Momo",
    autor: "Michael Ende",
    categoria: "Literatura",
    imagen: "img/momo.jpg",
    sinopsis: "Una niña con el don de escuchar enfrenta a los Hombres Grises, quienes roban el tiempo de las personas. Una novela que invita a reflexionar sobre el valor del tiempo."
},

{
    titulo: "Alicia en el país de las maravillas",
    autor: "Lewis Carroll",
    categoria: "Literatura",
    imagen: "img/alicia.jpg",
    sinopsis: "Alicia cae por una madriguera hacia un mundo fantástico donde conocerá personajes inolvidables y vivirá aventuras llenas de imaginación."
},

{
    titulo: "Hojas de hierba",
    autor: "Walt Whitman",
    categoria: "Literatura",
    imagen: "img/hojas_hierba.jpg",
    sinopsis: "La obra poética más importante de Walt Whitman, una celebración de la naturaleza, la libertad, la democracia y la experiencia humana."
},

{
    titulo: "Las batallas en el desierto",
    autor: "José Emilio Pacheco",
    categoria: "Literatura",
    imagen: "img/batallas_desierto.jpg",
    sinopsis: "Carlos recuerda su infancia en el México de los años cuarenta y el amor imposible que marcó su vida. Una de las novelas mexicanas más emblemáticas."
},

{
    titulo: "La vuelta al mundo en 80 días",
    autor: "Julio Verne",
    categoria: "Literatura",
    imagen: "img/vuelta_mundo_80.jpg",
    sinopsis: "Phileas Fogg apuesta que puede dar la vuelta al mundo en ochenta días, iniciando un viaje lleno de aventuras y desafíos."
},

{
    titulo: "Nuestra parte de noche",
    autor: "Mariana Enríquez",
    categoria: "Literatura",
    imagen: "img/nuestra_parte_noche.jpg",
    sinopsis: "Una mezcla de terror, dictadura, ocultismo y drama familiar que sigue el viaje de un padre y su hijo en la Argentina de finales del siglo XX."
},

{
    titulo: "Una educación",
    autor: "Tara Westover",
    categoria: "Literatura",
    imagen: "img/una_educacion.jpg",
    sinopsis: "Las memorias de una mujer que creció en una familia aislada y logró transformar su vida gracias a la educación."
},

{
    titulo: "La ciudad y sus muros inciertos",
    autor: "Haruki Murakami",
    categoria: "Literatura",
    imagen: "img/ciudad_muros_inciertos.jpg",
    sinopsis: "Una novela sobre la memoria, la identidad y los mundos paralelos, donde Murakami mezcla realidad y fantasía con su característico estilo."
},