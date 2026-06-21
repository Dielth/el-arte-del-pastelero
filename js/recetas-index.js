// Índice para búsqueda de recetas
// Estrategia: Archivo JavaScript estático con array de recetas
// Para agregar nuevas recetas, añadir objetos al array RECETAS_INDEX
//Esto es una mejora QOL al sitio

const RECETAS_INDEX = [
  {
    "nombre": "Empanadas",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Pasta de hojaldre",
      "Crema de chantilly",
      "Jarabe"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta de hojaldre a un grosor de 3 mm.",
      "Cortar círculos y extender la pasta del centro dando forma del óvalo, pero dejando las orillas ligeramente más gruesas que en el centro.",
      "Barnizar las orillas de huevo.",
      "Rellenar y doblar.",
      "Sellar la orilla con un tenedor.",
      "Barnizar con un huevo.",
      "Dejar reposar por 30 min.",
      "Hornear a 200°C por 20 min."
    ],
    "recomendaciones": [],
    "keywords": [
      "crema de chantilly",
      "empanadas",
      "jarabe",
      "pasta de hojaldre"
    ],
    "contenido": "Empanadas Bocadillos Salados y Panes Rellenos Pasta de hojaldre Crema de chantilly Jarabe Identificar y preparar componentes. Extender la pasta de hojaldre a un grosor de 3 mm. Cortar círculos y extender la pasta del centro dando forma del óvalo, pero dejando las orillas ligeramente más gruesas que en el centro. Barnizar las orillas de huevo. Rellenar y doblar. Sellar la orilla con un tenedor. Barnizar con un huevo. Dejar reposar por 30 min. Hornear a 200°C por 20 min. "
  },
  {
    "nombre": "Relleno para Empanadas",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Jitomate",
      "Cebolla",
      "Ajo",
      "Aceite",
      "Perejil",
      "Atún"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Se frien la cebolla y el ajo en el aceite.",
      "Agregar el jitomate y sal al gusto.",
      "Dejar hervir hasta sazonar.",
      "Incorporar el perejil.",
      "Agregar el atún y retirar del fuego.",
      "Dejar enfriar."
    ],
    "recomendaciones": [],
    "keywords": [
      "aceite",
      "ajo",
      "atún",
      "cebolla",
      "empanadas",
      "jitomate",
      "para",
      "perejil",
      "relleno"
    ],
    "contenido": "Relleno para Empanadas Bocadillos Salados y Panes Rellenos Jitomate Cebolla Ajo Aceite Perejil Atún Identificar y pesar ingredientes. Se frien la cebolla y el ajo en el aceite. Agregar el jitomate y sal al gusto. Dejar hervir hasta sazonar. Incorporar el perejil. Agregar el atún y retirar del fuego. Dejar enfriar. "
  },
  {
    "nombre": "Bocadillos masa de brioche",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Agua",
      "Mantequilla",
      "Huevo",
      "Azucar",
      "Levadura"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro: sal, azúcar y huevo.",
      "Amasar hasta obtener un premezclado, incorporar el resto de la harina, levadura, 50% de agua, seguir amasando hasta obtener una masa suave y elástica.",
      "Incorporar la materia grasa poco a poco hasta integrar perfectamente.",
      "Dejar fermentar a que doble su volumen.",
      "Tornear y colocar en charola blanca previamente engrasada con aceite.",
      "Refrigerar durante 24 horas máximo y 5 mínimo."
    ],
    "recomendaciones": [
      "Agregar poco a poco la materia grasa y el agua para evitar trabajarla demasiado.",
      "La mantequilla debe estar suave para trabajar."
    ],
    "keywords": [
      "agua",
      "azucar",
      "bocadillos",
      "brioche",
      "harina",
      "huevo",
      "levadura",
      "mantequilla",
      "masa",
      "sal"
    ],
    "contenido": "Bocadillos masa de brioche Bocadillos Salados y Panes Rellenos Harina Sal Agua Mantequilla Huevo Azucar Levadura Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro: sal, azúcar y huevo. Amasar hasta obtener un premezclado, incorporar el resto de la harina, levadura, 50% de agua, seguir amasando hasta obtener una masa suave y elástica. Incorporar la materia grasa poco a poco hasta integrar perfectamente. Dejar fermentar a que doble su volumen. Tornear y colocar en charola blanca previamente engrasada con aceite. Refrigerar durante 24 horas máximo y 5 mínimo. Agregar poco a poco la materia grasa y el agua para evitar trabajarla demasiado. La mantequilla debe estar suave para trabajar."
  },
  {
    "nombre": "Bocadillos \"Salchichas en Hojaldre\"",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Pasta de Hojaldre",
      "Salchicha Cocktel",
      "Mostaza",
      "Huevo",
      "Ajonjolí"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Mezclar las salchichas con mostaza.",
      "Extender la pasta y obtener una forma de banda de 10 cm. de ancho aprox.",
      "Acomodar las salchichas en el borde de la pasta dejando una separación de 3 cm., entre c/u.",
      "Envolver las salchichas con la pasta y sellar las orillas con el huevo.",
      "Colocar sobre la charola negra, barnizar con huevo y decorar con ajonjolí.",
      "Dejar reposar durante 30 min.",
      "Hornear a 200 ° C por 20 min.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "El producto se puede refrigerar en crudo de 2 a 3 días.",
      "Conservar a temperatura ambiente durante 1 o 2 días."
    ],
    "keywords": [
      "ajonjolí",
      "bocadillos",
      "hojaldre",
      "huevo",
      "mostaza",
      "pasta de hojaldre",
      "salchicha cocktel",
      "salchichas"
    ],
    "contenido": "Bocadillos \"Salchichas en Hojaldre\" Bocadillos Salados y Panes Rellenos Pasta de Hojaldre Salchicha Cocktel Mostaza Huevo Ajonjolí Identificar y preparar los componentes. Mezclar las salchichas con mostaza. Extender la pasta y obtener una forma de banda de 10 cm. de ancho aprox. Acomodar las salchichas en el borde de la pasta dejando una separación de 3 cm., entre c/u. Envolver las salchichas con la pasta y sellar las orillas con el huevo. Colocar sobre la charola negra, barnizar con huevo y decorar con ajonjolí. Dejar reposar durante 30 min. Hornear a 200 ° C por 20 min. Presentar el producto. El producto se puede refrigerar en crudo de 2 a 3 días. Conservar a temperatura ambiente durante 1 o 2 días."
  },
  {
    "nombre": "Bocadillos \"Triángulos de Jamón\"",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Pasta de Hojaldre",
      "Jamón",
      "Mayonesa/Mostaza",
      "Huevo",
      "Aceitunas rellenas"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Extender la pasta a un grosor de 3 mm. formando un rectángulo.",
      "Cortar el rectángulo a la mitad.",
      "Untar la superficie de la pasta 1 con mayonesa, colocar el jamón en la superficie y untar una capa ligera de mayonesa.",
      "Cubrir con la pasta 2.",
      "Barnizar con huevo y rayar con un tenedor.",
      "Cortar los triángulos y decorar con una rodaja de aceituna.",
      "Dejar reposar 30 min.",
      "Hornear a 210 °C por 20 min.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 1-2 días a temperatura ambiente."
    ],
    "keywords": [
      "aceitunas rellenas",
      "bocadillos",
      "huevo",
      "jamón",
      "mayonesa/mostaza",
      "pasta de hojaldre",
      "triángulos"
    ],
    "contenido": "Bocadillos \"Triángulos de Jamón\" Bocadillos Salados y Panes Rellenos Pasta de Hojaldre Jamón Mayonesa/Mostaza Huevo Aceitunas rellenas Identificar y preparar los componentes. Extender la pasta a un grosor de 3 mm. formando un rectángulo. Cortar el rectángulo a la mitad. Untar la superficie de la pasta 1 con mayonesa, colocar el jamón en la superficie y untar una capa ligera de mayonesa. Cubrir con la pasta 2. Barnizar con huevo y rayar con un tenedor. Cortar los triángulos y decorar con una rodaja de aceituna. Dejar reposar 30 min. Hornear a 210 °C por 20 min. Presentar el producto. Conservación de 1-2 días a temperatura ambiente."
  },
  {
    "nombre": "Bocadillos \"Pizzetas\"",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Pasta de Hojaldre",
      "Salsa roja",
      "Jamón",
      "Queso manchego"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Cortar círculos de 4 cm de diametro aprox.",
      "Colocar sobre c/círculo un poco de salsa.",
      "Colocar el jamón y el queso.",
      "Dejar reposar durante 30 min.",
      "Hornear a 210 ° C durante 20 min.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 1-2 días a temperatura ambiente."
    ],
    "keywords": [
      "bocadillos",
      "jamón",
      "pasta de hojaldre",
      "pizzetas",
      "queso manchego",
      "salsa roja"
    ],
    "contenido": "Bocadillos \"Pizzetas\" Bocadillos Salados y Panes Rellenos Pasta de Hojaldre Salsa roja Jamón Queso manchego Identificar y preparar los componentes. Extender la pasta a un grosor de 3 mm. Cortar círculos de 4 cm de diametro aprox. Colocar sobre c/círculo un poco de salsa. Colocar el jamón y el queso. Dejar reposar durante 30 min. Hornear a 210 ° C durante 20 min. Presentar el producto. Conservación de 1-2 días a temperatura ambiente."
  },
  {
    "nombre": "Bocadillos \"Vol Au Vent\"",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Pasta de Hojaldre",
      "Huevo",
      "Queso Crema",
      "Perejil",
      "Perejil chino",
      "Cebollín"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Extender la pasta a un grosor de 2 mm. aproximadamente.",
      "Cortar círculos con huevo y colocar un aro del lado contrario de como se cortó.",
      "Barnizar el aro y dejar reposar durante 30 min.",
      "Hornear a 210 °C durante 20 min.",
      "Dejar enfriar y rellenar con queso crema mezclado con perejil y cebollín.",
      "Decorar con perejil chino.",
      "Presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 12 horas a temperatura ambiente.",
      "El queso se aplica con manga y dulla rizada en forma decorativa."
    ],
    "keywords": [
      "bocadillos",
      "cebollín",
      "huevo",
      "pasta de hojaldre",
      "perejil",
      "perejil chino",
      "queso crema",
      "vent",
      "vol"
    ],
    "contenido": "Bocadillos \"Vol Au Vent\" Bocadillos Salados y Panes Rellenos Pasta de Hojaldre Huevo Queso Crema Perejil Perejil chino Cebollín Identificar y preparar los componentes. Extender la pasta a un grosor de 2 mm. aproximadamente. Cortar círculos con huevo y colocar un aro del lado contrario de como se cortó. Barnizar el aro y dejar reposar durante 30 min. Hornear a 210 °C durante 20 min. Dejar enfriar y rellenar con queso crema mezclado con perejil y cebollín. Decorar con perejil chino. Presentar producto. Conservación de 12 horas a temperatura ambiente. El queso se aplica con manga y dulla rizada en forma decorativa."
  },
  {
    "nombre": "Bocadillos \"Palitos de queso\"",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Pasta de Hojaldre",
      "Huevo",
      "Queso Gruyere Rallado",
      "Paprika"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Barnizar con huevo.",
      "Espolvorear con queso y paprika.",
      "Pasar el rodillo suavemente.",
      "Repetir la operación al reverso.",
      "Cortar tiras de 1 cm. de ancho por 10 cm. de largo aproximadamente.",
      "Torcer y colocar sobre la charola.",
      "Dejar reposar 30 min. aproximadamente.",
      "Hornear a 200 ° C por 25 min."
    ],
    "recomendaciones": [
      "Conservación de 12 horas a temperatura ambiente."
    ],
    "keywords": [
      "bocadillos",
      "huevo",
      "palitos",
      "paprika",
      "pasta de hojaldre",
      "queso",
      "queso gruyere rallado"
    ],
    "contenido": "Bocadillos \"Palitos de queso\" Bocadillos Salados y Panes Rellenos Pasta de Hojaldre Huevo Queso Gruyere Rallado Paprika Identificar y pesar los ingredientes. Extender la pasta a un grosor de 3 mm. Barnizar con huevo. Espolvorear con queso y paprika. Pasar el rodillo suavemente. Repetir la operación al reverso. Cortar tiras de 1 cm. de ancho por 10 cm. de largo aproximadamente. Torcer y colocar sobre la charola. Dejar reposar 30 min. aproximadamente. Hornear a 200 ° C por 25 min. Conservación de 12 horas a temperatura ambiente."
  },
  {
    "nombre": "Banderillas",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Pasta de hojaldre",
      "Azúcar"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Extender la pasta a un grosor de 4 mm y cortar tiras de 3 cm de ancho por 20 cm de largo.",
      "Dejar reposar durante 30 minutos.",
      "Hornear a 225°C durante 15 minutos.",
      "Sacar y espolvorear azúcar glass.",
      "Meter al horno a la misma temperatura hasta que se funda el azúcar.",
      "Dejar enfriar y presentar el producto."
    ],
    "recomendaciones": [
      "Respetar la temperatura del horno para que el producto crezca lo necesario y el azúcar se caramelice.",
      "Conservación de 2 semanas en lugar seco."
    ],
    "keywords": [
      "azúcar",
      "banderillas",
      "pasta de hojaldre"
    ],
    "contenido": "Banderillas Bocadillos Salados y Panes Rellenos Pasta de hojaldre Azúcar Identificar y preparar los componentes. Extender la pasta a un grosor de 4 mm y cortar tiras de 3 cm de ancho por 20 cm de largo. Dejar reposar durante 30 minutos. Hornear a 225°C durante 15 minutos. Sacar y espolvorear azúcar glass. Meter al horno a la misma temperatura hasta que se funda el azúcar. Dejar enfriar y presentar el producto. Respetar la temperatura del horno para que el producto crezca lo necesario y el azúcar se caramelice. Conservación de 2 semanas en lugar seco."
  },
  {
    "nombre": "Papas rellenas",
    "categoria": "Bocadillos Salados y Panes Rellenos",
    "urlCategoria": "categorias/bocadillos-salados-panes-rellenos.html",
    "ingredientes": [
      "Papa blanca",
      "Queso amarillo",
      "Leche líquida",
      "Mantequilla",
      "Sal y pimienta al gusto"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Lavar perfectamente las papas.",
      "Cocer las papas con todo y cáscara en el horno a 180°C.",
      "Cortar las papas por la mitad y, con la ayuda de una cuchara, sacar el puré.",
      "Colocar en la batidora el puré con la mantequilla y el queso.",
      "Batir hasta incorporar.",
      "Condimentar con sal y pimienta.",
      "Agregar la leche y batir hasta esponjar.",
      "Con la ayuda de una manga y duya rizada, rellenar la cáscara de la papa con el puré.",
      "Decorar con un pedacito de queso amarillo."
    ],
    "recomendaciones": [],
    "keywords": [
      "leche líquida",
      "mantequilla",
      "papa blanca",
      "papas",
      "queso amarillo",
      "rellenas",
      "sal y pimienta al gusto"
    ],
    "contenido": "Papas rellenas Bocadillos Salados y Panes Rellenos Papa blanca Queso amarillo Leche líquida Mantequilla Sal y pimienta al gusto Identificar y pesar los ingredientes. Lavar perfectamente las papas. Cocer las papas con todo y cáscara en el horno a 180°C. Cortar las papas por la mitad y, con la ayuda de una cuchara, sacar el puré. Colocar en la batidora el puré con la mantequilla y el queso. Batir hasta incorporar. Condimentar con sal y pimienta. Agregar la leche y batir hasta esponjar. Con la ayuda de una manga y duya rizada, rellenar la cáscara de la papa con el puré. Decorar con un pedacito de queso amarillo. "
  },
  {
    "nombre": "Biscuit de vainilla",
    "categoria": "Cakes y Bizcochos",
    "urlCategoria": "categorias/cakes-bizcochos.html",
    "ingredientes": [
      "Huevo",
      "Azúcar",
      "Harina",
      "Vainilla"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Desclarar el huevo y mezclar las yemas con la vainilla.",
      "Montar las claras a punto de nieve.",
      "Agregar el azucar poco a poco y batir hasta formar merengue.",
      "Agregar las yemas con la vainilla y mezclar suavemente.",
      "Incorporar el harina en forma envolvente.",
      "Vaciar a un molde engrasado.",
      "Hornear a 180°C por 20 min.",
      "Desmoldar sobre papel de estraza con azucar y dejar enfriar."
    ],
    "recomendaciones": [
      "Evitar golpear el batido para que no se baje.",
      "Conservación de 2 a 3 Semanas envuelto en papel aluminio."
    ],
    "keywords": [
      "azúcar",
      "biscuit",
      "harina",
      "huevo",
      "vainilla"
    ],
    "contenido": "Biscuit de vainilla Cakes y Bizcochos Huevo Azúcar Harina Vainilla Identificar y pesar ingredientes. Desclarar el huevo y mezclar las yemas con la vainilla. Montar las claras a punto de nieve. Agregar el azucar poco a poco y batir hasta formar merengue. Agregar las yemas con la vainilla y mezclar suavemente. Incorporar el harina en forma envolvente. Vaciar a un molde engrasado. Hornear a 180°C por 20 min. Desmoldar sobre papel de estraza con azucar y dejar enfriar. Evitar golpear el batido para que no se baje. Conservación de 2 a 3 Semanas envuelto en papel aluminio."
  },
  {
    "nombre": "Pastel de 3 leches",
    "categoria": "Cakes y Bizcochos",
    "urlCategoria": "categorias/cakes-bizcochos.html",
    "ingredientes": [
      "Biscuit de vainilla",
      "Envinado de 3 leches",
      "Crema chantilly",
      "Ganache",
      "Cerezas"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Cortar la costra del biscuit.",
      "Forrar el molde con papel encerado y colocar el biscuit dentro del mismo.",
      "Vaciar el envinado tibio.",
      "Dejar reposar durante 30 min.",
      "Voltear el pastel sobre un disco.",
      "Cubrir el pastel con la crema chantilly.",
      "Hacer un espiral con ganache semilíquido en la superficie del pastel.",
      "Jalar con un palillo el espiral para formar una telaraña.",
      "Cubrir el contorno del pastel con ganache.",
      "Colocar la cereza en forma decorativa.",
      "Colocar el pastel en charola con carpeta."
    ],
    "recomendaciones": [
      "No aplicar exceso de brillo.",
      "Conservación de 3-4 días en refrigeración, dependiendo el aspecto de las fresas."
    ],
    "keywords": [
      "biscuit de vainilla",
      "cerezas",
      "crema chantilly",
      "envinado de 3 leches",
      "ganache",
      "leches",
      "pastel"
    ],
    "contenido": "Pastel de 3 leches Cakes y Bizcochos Biscuit de vainilla Envinado de 3 leches Crema chantilly Ganache Cerezas Identificar y pesar ingredientes. Cortar la costra del biscuit. Forrar el molde con papel encerado y colocar el biscuit dentro del mismo. Vaciar el envinado tibio. Dejar reposar durante 30 min. Voltear el pastel sobre un disco. Cubrir el pastel con la crema chantilly. Hacer un espiral con ganache semilíquido en la superficie del pastel. Jalar con un palillo el espiral para formar una telaraña. Cubrir el contorno del pastel con ganache. Colocar la cereza en forma decorativa. Colocar el pastel en charola con carpeta. No aplicar exceso de brillo. Conservación de 3-4 días en refrigeración, dependiendo el aspecto de las fresas."
  },
  {
    "nombre": "Pastel Kahlua",
    "categoria": "Cakes y Bizcochos",
    "urlCategoria": "categorias/cakes-bizcochos.html",
    "ingredientes": [
      "Genoise de vainilla",
      "Crema de chantilly",
      "Jarabe",
      "Esencia de café",
      "Nuez molida",
      "Ganache"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar una banda de genoise en dos.",
      "Colocar una banda de genoise completa y envinarla.",
      "Rellenar con crema chantilly mezclada con esencia de café.",
      "Colocar una capa de genoise delgada y envinar.",
      "Cubrir el pastel con crema de café.",
      "Colocar nuez molida en las paredes del pastel.",
      "Decorar con manga con crema de café y ganache."
    ],
    "recomendaciones": [
      "Conservación de 3 a 5 días en refrigeración."
    ],
    "keywords": [
      "crema de chantilly",
      "esencia de café",
      "ganache",
      "genoise de vainilla",
      "jarabe",
      "kahlua",
      "nuez molida",
      "pastel"
    ],
    "contenido": "Pastel Kahlua Cakes y Bizcochos Genoise de vainilla Crema de chantilly Jarabe Esencia de café Nuez molida Ganache Identificar y preparar componentes. Cortar una banda de genoise en dos. Colocar una banda de genoise completa y envinarla. Rellenar con crema chantilly mezclada con esencia de café. Colocar una capa de genoise delgada y envinar. Cubrir el pastel con crema de café. Colocar nuez molida en las paredes del pastel. Decorar con manga con crema de café y ganache. Conservación de 3 a 5 días en refrigeración."
  },
  {
    "nombre": "Panque de chocolate",
    "categoria": "Cakes y Bizcochos",
    "urlCategoria": "categorias/cakes-bizcochos.html",
    "ingredientes": [
      "Claras",
      "Yemas",
      "Azúcar",
      "Mantequilla",
      "Harina",
      "Cobertura"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar mantequilla con azúcar.",
      "Incorporar las yemas y batir hasta esponjar.",
      "Incorporar la cobertura previamente fundida.",
      "Agregar la harina suavemente.",
      "Incorporar las claras previamente batidas a punto de nieve.",
      "Vaciar la mezcla a un molde engrasado y enharinado.",
      "Hornear a 180°C por 30 min. aprox."
    ],
    "recomendaciones": [
      "No trabajar demasiado con el harina para evitar que se ligue.",
      "Conservación de 1 semana en refrigeración."
    ],
    "keywords": [
      "azúcar",
      "chocolate",
      "claras",
      "cobertura",
      "harina",
      "mantequilla",
      "panque",
      "yemas"
    ],
    "contenido": "Panque de chocolate Cakes y Bizcochos Claras Yemas Azúcar Mantequilla Harina Cobertura Identificar y pesar ingredientes. Acremar mantequilla con azúcar. Incorporar las yemas y batir hasta esponjar. Incorporar la cobertura previamente fundida. Agregar la harina suavemente. Incorporar las claras previamente batidas a punto de nieve. Vaciar la mezcla a un molde engrasado y enharinado. Hornear a 180°C por 30 min. aprox. No trabajar demasiado con el harina para evitar que se ligue. Conservación de 1 semana en refrigeración."
  },
  {
    "nombre": "Panque infantil",
    "categoria": "Cakes y Bizcochos",
    "urlCategoria": "categorias/cakes-bizcochos.html",
    "ingredientes": [
      "Huevo",
      "Azúcar",
      "Mantequilla",
      "Harina",
      "Royal",
      "Vainilla"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar mantequilla y azúcar hasta blanquear.",
      "Agregar las yemas y la vainilla, batir hasta esponjar.",
      "Incorporar suavemente el harina con el royal.",
      "Agregar las claras batidas en forma envolvente.",
      "Vaciar al molde engrasado y enharinado.",
      "Hornear a 180°C por 30 min.",
      "Desmoldar y dejar enfriar."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar",
      "harina",
      "huevo",
      "infantil",
      "mantequilla",
      "panque",
      "royal",
      "vainilla"
    ],
    "contenido": "Panque infantil Cakes y Bizcochos Huevo Azúcar Mantequilla Harina Royal Vainilla Identificar y pesar ingredientes. Acremar mantequilla y azúcar hasta blanquear. Agregar las yemas y la vainilla, batir hasta esponjar. Incorporar suavemente el harina con el royal. Agregar las claras batidas en forma envolvente. Vaciar al molde engrasado y enharinado. Hornear a 180°C por 30 min. Desmoldar y dejar enfriar. "
  },
  {
    "nombre": "Pastel Moka de chocolate",
    "categoria": "Cakes y Bizcochos",
    "urlCategoria": "categorias/cakes-bizcochos.html",
    "ingredientes": [
      "Harina",
      "Azucar blanca",
      "Cocoa sin azucar",
      "Bicarbonato",
      "Sal",
      "Agua",
      "Aceite vegetal",
      "Huevo"
    ],
    "tecnica": [
      "Poner en la batidora todos los ingredientes secos y mezclar con una espatula.",
      "Añadir el agua, el aceite y los huevos, uno a uno mientras se mezcla en velocidad baja, hasta obtener una mezcla tensa.",
      "Aumentar la velocidad y batir por 90 segundos en velocidad alta.",
      "Engrasar ligeramente el molde con aceite en spray para hornear y vaciar la mezcla en el molde para Pastel Micro Plus.",
      "Programar en el horno de microondas de 10 a 12 min. al 100% de potencia.",
      "Sacar y dejar enfriar de 5-6 min. antes de desmoldar.",
      "Guardar en refrigeración minimo 12 hrs. antes de servir."
    ],
    "recomendaciones": [],
    "keywords": [
      "aceite vegetal",
      "agua",
      "azucar blanca",
      "bicarbonato",
      "chocolate",
      "cocoa sin azucar",
      "harina",
      "huevo",
      "moka",
      "pastel",
      "sal"
    ],
    "contenido": "Pastel Moka de chocolate Cakes y Bizcochos Harina Azucar blanca Cocoa sin azucar Bicarbonato Sal Agua Aceite vegetal Huevo Poner en la batidora todos los ingredientes secos y mezclar con una espatula. Añadir el agua, el aceite y los huevos, uno a uno mientras se mezcla en velocidad baja, hasta obtener una mezcla tensa. Aumentar la velocidad y batir por 90 segundos en velocidad alta. Engrasar ligeramente el molde con aceite en spray para hornear y vaciar la mezcla en el molde para Pastel Micro Plus. Programar en el horno de microondas de 10 a 12 min. al 100% de potencia. Sacar y dejar enfriar de 5-6 min. antes de desmoldar. Guardar en refrigeración minimo 12 hrs. antes de servir. "
  },
  {
    "nombre": "Pasta de trufa",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Genoise",
      "Crema de mantequilla",
      "Jarabe",
      "Ron",
      "Ganache",
      "Pasas",
      "Nueces"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Mezclar todos los ingredientes con las manos hasta formar una pasta suave.",
      "Refrigerar."
    ],
    "recomendaciones": [],
    "keywords": [
      "crema de mantequilla",
      "ganache",
      "genoise",
      "jarabe",
      "nueces",
      "pasas",
      "pasta",
      "ron",
      "trufa"
    ],
    "contenido": "Pasta de trufa Confitería Genoise Crema de mantequilla Jarabe Ron Ganache Pasas Nueces Identificar y preparar componentes. Mezclar todos los ingredientes con las manos hasta formar una pasta suave. Refrigerar. "
  },
  {
    "nombre": "Truffe",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Pasta sablee",
      "Pasta de truffa",
      "Crema de mantequilla",
      "Ganache",
      "Cocoa",
      "Cerezas"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Forrar moldes con la pasta sablee.",
      "Dejar reposar 10 min., (picar los fondos con un tenedor para evitar que se inflen)",
      "Hornear a 180°C durante 15 min.",
      "Desmoldar y dejar enfriar.",
      "Rellenar con pasta de truffe, y cubrir la superficie en forma decorativa con crema de trufa (75% ganache, 25% crema de mantequilla).",
      "Espolvorear con cocoa y colocar cerezas, encapacillar y presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "cerezas",
      "cocoa",
      "crema de mantequilla",
      "ganache",
      "pasta de truffa",
      "pasta sablee",
      "truffe"
    ],
    "contenido": "Truffe Confitería Pasta sablee Pasta de truffa Crema de mantequilla Ganache Cocoa Cerezas Identificar y preparar componentes. Forrar moldes con la pasta sablee. Dejar reposar 10 min., (picar los fondos con un tenedor para evitar que se inflen) Hornear a 180°C durante 15 min. Desmoldar y dejar enfriar. Rellenar con pasta de truffe, y cubrir la superficie en forma decorativa con crema de trufa (75% ganache, 25% crema de mantequilla). Espolvorear con cocoa y colocar cerezas, encapacillar y presentar producto. "
  },
  {
    "nombre": "Anillos de chabacano",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Mantequilla",
      "Margarina",
      "Harina",
      "Huevo",
      "Azucar",
      "Limón",
      "Zumo de limón",
      "Mermelada de chabacano",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar materia grasa y azucar a punto de pomada hasta blanquear.",
      "Agregar el huevo y mezclar bien.",
      "Incorporar el zumo y el jugo de limón.",
      "Agregar el harina en forma envolvente con la raspa y reposar la pasta durante 20 min aproximadamente.",
      "Extender la pasta a un grosor de 4 mm. y cortar con el molde deseado por pares, una base y una tapa perforada al centro.",
      "Hornear a 180°C por 15 min. dejar enfriar.",
      "Espolvorear la galleta perforada con azucar glass y a la base aplicarle un punto de mermelada.",
      "Unir las galletas en forma de sandwich.",
      "Presentar producto."
    ],
    "recomendaciones": [
      "Conservación de la pasta cruda 1-2 meses en refrigeración envuelta en plástico.",
      "Conservación de la galleta 1-2 semanas a temperatura ambiente."
    ],
    "keywords": [
      "anillos",
      "azucar",
      "azucar glass",
      "chabacano",
      "harina",
      "huevo",
      "limón",
      "mantequilla",
      "margarina",
      "mermelada de chabacano",
      "zumo de limón"
    ],
    "contenido": "Anillos de chabacano Confitería Mantequilla Margarina Harina Huevo Azucar Limón Zumo de limón Mermelada de chabacano Azucar glass Identificar y pesar ingredientes. Acremar materia grasa y azucar a punto de pomada hasta blanquear. Agregar el huevo y mezclar bien. Incorporar el zumo y el jugo de limón. Agregar el harina en forma envolvente con la raspa y reposar la pasta durante 20 min aproximadamente. Extender la pasta a un grosor de 4 mm. y cortar con el molde deseado por pares, una base y una tapa perforada al centro. Hornear a 180°C por 15 min. dejar enfriar. Espolvorear la galleta perforada con azucar glass y a la base aplicarle un punto de mermelada. Unir las galletas en forma de sandwich. Presentar producto. Conservación de la pasta cruda 1-2 meses en refrigeración envuelta en plástico. Conservación de la galleta 1-2 semanas a temperatura ambiente."
  },
  {
    "nombre": "Cuernitos de nuez",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Harina",
      "Margarina",
      "Mantequilla",
      "Azucar",
      "Huevo",
      "Nuez molida",
      "Cobertura",
      "Mermelada de fresa"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar materia grasa y azucar a punto de pomada hasta blanquear.",
      "Agregar huevo poco a poco y airear.",
      "Mezclar nuez molida y harina en harina en forma envolvente con la raspa.",
      "Refrigerar durante 20 min. aproximadamente.",
      "Tomar una bolita de pasta alargandola un poco y dando forma de cuernito.",
      "Hacer bolitas haciendo un hundimiento al centro sin perforarlo.",
      "Colocar en charola negra.",
      "Hornear a 180°C por 15 min, dejar enfriar.",
      "Decorar las puntas de los cuernos con ganache.",
      "Espolvorear las bolitas con un poco de azucar glass y en el centro un poco de chocolate.",
      "Presentar producto."
    ],
    "recomendaciones": [
      "Conservación de la pasta de 1-2 meses en refrigeración envuelta en plástico.",
      "Conservación de la galleta 1-2 semanas a temperatura ambiente."
    ],
    "keywords": [
      "azucar",
      "cobertura",
      "cuernitos",
      "harina",
      "huevo",
      "mantequilla",
      "margarina",
      "mermelada de fresa",
      "nuez",
      "nuez molida"
    ],
    "contenido": "Cuernitos de nuez Confitería Harina Margarina Mantequilla Azucar Huevo Nuez molida Cobertura Mermelada de fresa Identificar y pesar ingredientes. Acremar materia grasa y azucar a punto de pomada hasta blanquear. Agregar huevo poco a poco y airear. Mezclar nuez molida y harina en harina en forma envolvente con la raspa. Refrigerar durante 20 min. aproximadamente. Tomar una bolita de pasta alargandola un poco y dando forma de cuernito. Hacer bolitas haciendo un hundimiento al centro sin perforarlo. Colocar en charola negra. Hornear a 180°C por 15 min, dejar enfriar. Decorar las puntas de los cuernos con ganache. Espolvorear las bolitas con un poco de azucar glass y en el centro un poco de chocolate. Presentar producto. Conservación de la pasta de 1-2 meses en refrigeración envuelta en plástico. Conservación de la galleta 1-2 semanas a temperatura ambiente."
  },
  {
    "nombre": "Galletas de manga",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Harina",
      "Mantequilla",
      "Margarina",
      "Azucar",
      "Huevo",
      "Cereza"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar materia grasa con azucar hasta blanquear.",
      "Incorporar huevo y batir, hasta esponjar y airear.",
      "Incorporar el harina suavemente.",
      "Colocar la pasta en una manga con dulla rizada.",
      "Cortar las galletas sobre una charola engrasada y enharinar.",
      "Decorar con cerezas.",
      "Hornear a 180°C por 15 min."
    ],
    "recomendaciones": [
      "Conservación de la pasta cruda de 1-2 meses en refrigeración envuelta en plástico.",
      "Conservación de la galleta 1-2 semanas a temperatura ambiente."
    ],
    "keywords": [
      "azucar",
      "cereza",
      "galletas",
      "harina",
      "huevo",
      "manga",
      "mantequilla",
      "margarina"
    ],
    "contenido": "Galletas de manga Confitería Harina Mantequilla Margarina Azucar Huevo Cereza Identificar y pesar ingredientes. Acremar materia grasa con azucar hasta blanquear. Incorporar huevo y batir, hasta esponjar y airear. Incorporar el harina suavemente. Colocar la pasta en una manga con dulla rizada. Cortar las galletas sobre una charola engrasada y enharinar. Decorar con cerezas. Hornear a 180°C por 15 min. Conservación de la pasta cruda de 1-2 meses en refrigeración envuelta en plástico. Conservación de la galleta 1-2 semanas a temperatura ambiente."
  },
  {
    "nombre": "Emparedados",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Harina",
      "Mantequilla",
      "Azúcar",
      "Yema",
      "Mermelada de fresa",
      "Azúcar p/espolvorear"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar mantequilla y azúcar a punto de pomada hasta blanquear.",
      "Incorporar yemas y batir hasta esponjar y airear.",
      "Agregar el harina en forma envolvente, refrigerar durante 20 min.",
      "Extender la pasta a un grosor de 3 mm. y cortar círculos.",
      "Hornear a 180°C durante 15 min.",
      "Calientes revolcar en azúcar granulada.",
      "Pegar 2 galletas con un poco de mermelada.",
      "Presentar producto."
    ],
    "recomendaciones": [
      "Conservación de la pasta de 1-2 meses en refrigeración envuelta en plástico."
    ],
    "keywords": [
      "azúcar",
      "azúcar p/espolvorear",
      "emparedados",
      "harina",
      "mantequilla",
      "mermelada de fresa",
      "yema"
    ],
    "contenido": "Emparedados Confitería Harina Mantequilla Azúcar Yema Mermelada de fresa Azúcar p/espolvorear Identificar y pesar ingredientes. Acremar mantequilla y azúcar a punto de pomada hasta blanquear. Incorporar yemas y batir hasta esponjar y airear. Agregar el harina en forma envolvente, refrigerar durante 20 min. Extender la pasta a un grosor de 3 mm. y cortar círculos. Hornear a 180°C durante 15 min. Calientes revolcar en azúcar granulada. Pegar 2 galletas con un poco de mermelada. Presentar producto. Conservación de la pasta de 1-2 meses en refrigeración envuelta en plástico."
  },
  {
    "nombre": "Almendrinas",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Pasta sablee",
      "Crema de almendra",
      "Almendra fileteada",
      "Ron",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Forrar moldes para tartaleta.",
      "Rellenar con crema de almendra y decorar con almendra fileteada.",
      "Hornear a 180°C durante 20 minutos.",
      "Rociar con ron y desmoldar.",
      "Aplicar brillo y encapacillar el producto.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 6-8 días envuelto en plástico."
    ],
    "keywords": [
      "almendra fileteada",
      "almendrinas",
      "brillo",
      "crema de almendra",
      "pasta sablee",
      "ron"
    ],
    "contenido": "Almendrinas Confitería Pasta sablee Crema de almendra Almendra fileteada Ron Brillo Identificar y preparar los componentes. Extender la pasta a un grosor de 3 mm. Forrar moldes para tartaleta. Rellenar con crema de almendra y decorar con almendra fileteada. Hornear a 180°C durante 20 minutos. Rociar con ron y desmoldar. Aplicar brillo y encapacillar el producto. Presentar el producto. Conservación de 6-8 días envuelto en plástico."
  },
  {
    "nombre": "Galleta sevillana",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Mantequilla",
      "Margarina",
      "Azúcar",
      "Royal",
      "Pan molido",
      "Huevo",
      "Vainilla",
      "Harina",
      "Huevo para barnizar",
      "Azúcar para decorar"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Acremar la materia grasa con el azúcar hasta obtener un punto de pomada.",
      "Incorporar el huevo poco a poco y airear.",
      "Agregar la harina, el pan molido y el royal.",
      "Mezclar hasta obtener una pasta manejable.",
      "Incorporar la vainilla.",
      "Extender la pasta a un grosor de 4 mm y cortar con un molde adecuado.",
      "Barnizar con huevo y decorar con punto de azúcar.",
      "Hornear a 180°C durante 15-20 minutos.",
      "Dejar enfriar y presentar el producto."
    ],
    "recomendaciones": [
      "No trabajar mucho la pasta para evitar que se queme."
    ],
    "keywords": [
      "azúcar",
      "azúcar para decorar",
      "galleta",
      "harina",
      "huevo",
      "huevo para barnizar",
      "mantequilla",
      "margarina",
      "pan molido",
      "royal",
      "sevillana",
      "vainilla"
    ],
    "contenido": "Galleta sevillana Confitería Mantequilla Margarina Azúcar Royal Pan molido Huevo Vainilla Harina Huevo para barnizar Azúcar para decorar Identificar y preparar los componentes. Acremar la materia grasa con el azúcar hasta obtener un punto de pomada. Incorporar el huevo poco a poco y airear. Agregar la harina, el pan molido y el royal. Mezclar hasta obtener una pasta manejable. Incorporar la vainilla. Extender la pasta a un grosor de 4 mm y cortar con un molde adecuado. Barnizar con huevo y decorar con punto de azúcar. Hornear a 180°C durante 15-20 minutos. Dejar enfriar y presentar el producto. No trabajar mucho la pasta para evitar que se queme."
  },
  {
    "nombre": "Galletas en Microondas",
    "categoria": "Confitería",
    "urlCategoria": "categorias/confiteria.html",
    "ingredientes": [
      "Mantequilla sin sal a temperatura ambiente",
      "Azúcar moreno",
      "Huevo batido",
      "Extracto de vainilla",
      "Harina de trigo",
      "Chispas de chocolate"
    ],
    "tecnica": [
      "Mezclamos la mantequilla con el azúcar moreno hasta que la mezcla esté cremosa.",
      "Agregamos el huevo batido en la mezcla.",
      "Vertemos media cucharadita de vainilla y mezclamos bien.",
      "Añadimos la harina y la integramos en la mezcla hasta que no queden grumos.",
      "Agregamos las chispas de chocolate y mezclamos bien.",
      "Cortamos dos papeles de horno con el mismo tamaño que el plato del microondas.",
      "Hacemos 8 bolitas con la masa.",
      "Colocamos 4 galletas sobre el papel de horno y las cocinamos durante 1 minuto en el microondas.",
      "Repetimos con las otras 4 bolitas.",
      "Dejamos enfriar las galletas un poco antes de retirarlas del papel de horno.",
      "Una vez frías, las servimos."
    ],
    "recomendaciones": [
      "Tiempo de preparación: 10 minutos",
      "Tiempo de cocinado: 2 minutos",
      "Tiempo total: 15 minutos",
      "Raciones: 4 a 8 unidades"
    ],
    "keywords": [
      "azúcar moreno",
      "chispas de chocolate",
      "extracto de vainilla",
      "galletas",
      "harina de trigo",
      "huevo batido",
      "mantequilla sin sal a temperatura ambiente",
      "microondas"
    ],
    "contenido": "Galletas en Microondas Confitería Mantequilla sin sal a temperatura ambiente Azúcar moreno Huevo batido Extracto de vainilla Harina de trigo Chispas de chocolate Mezclamos la mantequilla con el azúcar moreno hasta que la mezcla esté cremosa. Agregamos el huevo batido en la mezcla. Vertemos media cucharadita de vainilla y mezclamos bien. Añadimos la harina y la integramos en la mezcla hasta que no queden grumos. Agregamos las chispas de chocolate y mezclamos bien. Cortamos dos papeles de horno con el mismo tamaño que el plato del microondas. Hacemos 8 bolitas con la masa. Colocamos 4 galletas sobre el papel de horno y las cocinamos durante 1 minuto en el microondas. Repetimos con las otras 4 bolitas. Dejamos enfriar las galletas un poco antes de retirarlas del papel de horno. Una vez frías, las servimos. Tiempo de preparación: 10 minutos Tiempo de cocinado: 2 minutos Tiempo total: 15 minutos Raciones: 4 a 8 unidades"
  },
  {
    "nombre": "Crema Pastelera",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Agua",
      "Leche en polvo",
      "Azúcar",
      "C.P.T.",
      "Huevo"
    ],
    "tecnica": [
      "Mezclar el agua con la leche en polvo, poner a hervir la leche con el 50% de azúcar.",
      "Mezclar en seco el CPT y el 50% restante del azúcar.",
      "Agregar el huevo y mezclar.",
      "Vaciar a la mezcla anterior una taza de leche hirviendo y mezclar.",
      "Vaciar la mezcla anterior a la leche hirviendo.",
      "Dejar en el fuego hasta que espese sin dejar de mover.",
      "Vaciar la crema a un bowl y espolvorearla con azúcar granulada o untar con mantequilla la superficie para evitar que se haga costra.",
      "Dejar enfriar y refrigerar."
    ],
    "recomendaciones": [
      "Mover constantemente para evitar grumos y que se pegue al fondo.",
      "Refrigerar cubierta con plástico film pegado a la superficie para evitar costra."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "c.p.t.",
      "crema",
      "huevo",
      "leche en polvo",
      "pastelera"
    ],
    "contenido": "Crema Pastelera Cremas y Rellenos Agua Leche en polvo Azúcar C.P.T. Huevo Mezclar el agua con la leche en polvo, poner a hervir la leche con el 50% de azúcar. Mezclar en seco el CPT y el 50% restante del azúcar. Agregar el huevo y mezclar. Vaciar a la mezcla anterior una taza de leche hirviendo y mezclar. Vaciar la mezcla anterior a la leche hirviendo. Dejar en el fuego hasta que espese sin dejar de mover. Vaciar la crema a un bowl y espolvorearla con azúcar granulada o untar con mantequilla la superficie para evitar que se haga costra. Dejar enfriar y refrigerar. Mover constantemente para evitar grumos y que se pegue al fondo. Refrigerar cubierta con plástico film pegado a la superficie para evitar costra."
  },
  {
    "nombre": "Crema de Limón",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Jugo de limón",
      "Ralladura de limón",
      "Margarina",
      "Azúcar",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Colocar todos los ingredientes en un cazo de cobre, sobre la lumbre a fuego lento.",
      "Mover hasta que la crema se incorpore y se espese.",
      "Vaciar a un bowl y dejar enfriar."
    ],
    "recomendaciones": [
      "La cantidad de limón puede variar dependiendo la cantidad de jugo que tenga el limón.",
      "Conservación de 3-4 días en refrigeración."
    ],
    "keywords": [
      "azúcar",
      "crema",
      "huevo",
      "jugo de limón",
      "limón",
      "margarina",
      "ralladura de limón"
    ],
    "contenido": "Crema de Limón Cremas y Rellenos Jugo de limón Ralladura de limón Margarina Azúcar Huevo Identificar y pesar ingredientes. Colocar todos los ingredientes en un cazo de cobre, sobre la lumbre a fuego lento. Mover hasta que la crema se incorpore y se espese. Vaciar a un bowl y dejar enfriar. La cantidad de limón puede variar dependiendo la cantidad de jugo que tenga el limón. Conservación de 3-4 días en refrigeración."
  },
  {
    "nombre": "Crema Mousseline",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Leche líquida",
      "C.P.T.",
      "Azúcar",
      "Yemas",
      "Mantequilla",
      "Licor de naranja"
    ],
    "tecnica": [
      "Poner a hervir la leche con el 50% de azúcar.",
      "Mezclar en seco CPT y el 50% del azúcar.",
      "Agregar una taza de leche tibia a la mezcla anterior.",
      "Airear las yemas y batir hasta incorporar.",
      "Agregar la mezcla anterior a la leche hirviendo.",
      "Dejar hervir hasta espesar sin dejar de mover.",
      "Vertir a un bowl y dejar entibiar.",
      "Agregar la mantequilla poco a poco y batir.",
      "Incorporar el licor y batir.",
      "Refrigerar."
    ],
    "recomendaciones": [
      "La crema debe estar completamente fría antes de usar.",
      "Conservación de 3-4 días en refrigeración."
    ],
    "keywords": [
      "azúcar",
      "c.p.t.",
      "crema",
      "leche líquida",
      "licor de naranja",
      "mantequilla",
      "mousseline",
      "yemas"
    ],
    "contenido": "Crema Mousseline Cremas y Rellenos Leche líquida C.P.T. Azúcar Yemas Mantequilla Licor de naranja Poner a hervir la leche con el 50% de azúcar. Mezclar en seco CPT y el 50% del azúcar. Agregar una taza de leche tibia a la mezcla anterior. Airear las yemas y batir hasta incorporar. Agregar la mezcla anterior a la leche hirviendo. Dejar hervir hasta espesar sin dejar de mover. Vertir a un bowl y dejar entibiar. Agregar la mantequilla poco a poco y batir. Incorporar el licor y batir. Refrigerar. La crema debe estar completamente fría antes de usar. Conservación de 3-4 días en refrigeración."
  },
  {
    "nombre": "Crema de mantequilla",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Margarina",
      "Mantequilla",
      "Huevo",
      "Azucar",
      "Agua"
    ],
    "tecnica": [
      "Identificar y preparar ingredientes.",
      "Poner el azucar al fuego con un poco de agua.",
      "Cocer a 117°C. (punto de bola suave)",
      "Al mismo tiempo, montar a un punto de listón el huevo.",
      "Agregar el azucar al huevo en forma de hilo y seguir batiendo hasta entibiar.",
      "Agregar la margarina poco a poco en porciones pequeñas, y despues la mantequilla sin dejar de batir.",
      "Batir la crema hasta blanquear y desaparecer grumos."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azucar",
      "crema",
      "huevo",
      "mantequilla",
      "margarina"
    ],
    "contenido": "Crema de mantequilla Cremas y Rellenos Margarina Mantequilla Huevo Azucar Agua Identificar y preparar ingredientes. Poner el azucar al fuego con un poco de agua. Cocer a 117°C. (punto de bola suave) Al mismo tiempo, montar a un punto de listón el huevo. Agregar el azucar al huevo en forma de hilo y seguir batiendo hasta entibiar. Agregar la margarina poco a poco en porciones pequeñas, y despues la mantequilla sin dejar de batir. Batir la crema hasta blanquear y desaparecer grumos. "
  },
  {
    "nombre": "Merengue",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Claras",
      "Azucar",
      "Jugo de limon",
      "Color vegetal"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Batir las claras a punto de nieve.",
      "Agregar el azucar poco a poco y seguir batiendo.",
      "Incorporar el limón y el color vegetal.",
      "Batir hasta que el merengue forme picos.",
      "Cortar en forma deseada sobre charola negra previamente engrasada y enharinada.",
      "Hornear a 60°C durante 1 hora."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar",
      "claras",
      "color vegetal",
      "jugo de limon",
      "merengue"
    ],
    "contenido": "Merengue Cremas y Rellenos Claras Azucar Jugo de limon Color vegetal Identificar y pesar ingredientes. Batir las claras a punto de nieve. Agregar el azucar poco a poco y seguir batiendo. Incorporar el limón y el color vegetal. Batir hasta que el merengue forme picos. Cortar en forma deseada sobre charola negra previamente engrasada y enharinada. Hornear a 60°C durante 1 hora. "
  },
  {
    "nombre": "Merengue para Decoración (Honguitos)",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Claras",
      "Azucar",
      "Limon"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Batir las claras a punto de nieve.",
      "Agregar el azucar poco a poco y seguir batiendo.",
      "Incorporar el limón.",
      "Batir hasta que el merengue forme picos.",
      "Cortar en forma deseada sobre charola negra previamente engrasada y enharinada.",
      "Hornear a 60°C durante 1 hora."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar",
      "claras",
      "decoración",
      "honguitos",
      "limon",
      "merengue",
      "para"
    ],
    "contenido": "Merengue para Decoración (Honguitos) Cremas y Rellenos Claras Azucar Limon Identificar y pesar ingredientes. Batir las claras a punto de nieve. Agregar el azucar poco a poco y seguir batiendo. Incorporar el limón. Batir hasta que el merengue forme picos. Cortar en forma deseada sobre charola negra previamente engrasada y enharinada. Hornear a 60°C durante 1 hora. "
  },
  {
    "nombre": "Crema de almendra",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Azucar",
      "Mantequillla",
      "Claras",
      "Almendra molida",
      "Maizena"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar mantequilla con azucar a blanquear hasta obtener un punto de pomada.",
      "Incorporar las claras poco a poco y airear.",
      "Agregar la almendra previamente mezclada con la maizena."
    ],
    "recomendaciones": [
      "Se mantiene a temperatura ambiente de 4-6 días."
    ],
    "keywords": [
      "almendra",
      "almendra molida",
      "azucar",
      "claras",
      "crema",
      "maizena",
      "mantequillla"
    ],
    "contenido": "Crema de almendra Cremas y Rellenos Azucar Mantequillla Claras Almendra molida Maizena Identificar y pesar ingredientes. Acremar mantequilla con azucar a blanquear hasta obtener un punto de pomada. Incorporar las claras poco a poco y airear. Agregar la almendra previamente mezclada con la maizena. Se mantiene a temperatura ambiente de 4-6 días."
  },
  {
    "nombre": "Ganache",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Cobertura",
      "Agua",
      "Leche en polvo",
      "Manteca vegetal"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Picar la cobertura finalmente y colocarla en un bowl.",
      "Poner a hervir agua, leche en polvo, y manteca vegetal.",
      "Vaciar la leche hirviendo a la cobertura picada.",
      "Mover con un batidor hasta disolver la cobertura."
    ],
    "recomendaciones": [
      "Se puede conservar en refrigeración tapado hasta 1 mes.",
      "El ganache se puede suavizar fundiendolo en baño maría."
    ],
    "keywords": [
      "agua",
      "cobertura",
      "ganache",
      "leche en polvo",
      "manteca vegetal"
    ],
    "contenido": "Ganache Cremas y Rellenos Cobertura Agua Leche en polvo Manteca vegetal Identificar y pesar ingredientes. Picar la cobertura finalmente y colocarla en un bowl. Poner a hervir agua, leche en polvo, y manteca vegetal. Vaciar la leche hirviendo a la cobertura picada. Mover con un batidor hasta disolver la cobertura. Se puede conservar en refrigeración tapado hasta 1 mes. El ganache se puede suavizar fundiendolo en baño maría."
  },
  {
    "nombre": "Ganache 2",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Cobertura oscura",
      "Leche",
      "Manteca vegetal o mantequilla"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Picar finamente la cobertura.",
      "Poner a hervir la leche y la manteca vegetal/mantequilla.",
      "Vaciar la leche hirviendo a la cobertura.",
      "Mezclar hasta disolver los grumos.",
      "Dejar enfriar y conservar en refrigeración."
    ],
    "recomendaciones": [],
    "keywords": [
      "cobertura oscura",
      "ganache",
      "leche",
      "manteca vegetal o mantequilla"
    ],
    "contenido": "Ganache 2 Cremas y Rellenos Cobertura oscura Leche Manteca vegetal o mantequilla Identificar y pesar ingredientes. Picar finamente la cobertura. Poner a hervir la leche y la manteca vegetal/mantequilla. Vaciar la leche hirviendo a la cobertura. Mezclar hasta disolver los grumos. Dejar enfriar y conservar en refrigeración. "
  },
  {
    "nombre": "Relleno para pie de piña con queso",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Queso crema",
      "Huevo",
      "Leche condensada",
      "Piña en almíbar"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar queso crema y la leche condensada.",
      "Vaciar esta mezcla a un bowl.",
      "Incorporar el huevo poco a poco y mezclar con la ayuda del batidor.",
      "Incorporar la piña previamente picada."
    ],
    "recomendaciones": [],
    "keywords": [
      "con",
      "huevo",
      "leche condensada",
      "para",
      "pie",
      "piña",
      "piña en almíbar",
      "queso",
      "queso crema",
      "relleno"
    ],
    "contenido": "Relleno para pie de piña con queso Cremas y Rellenos Queso crema Huevo Leche condensada Piña en almíbar Identificar y pesar ingredientes. Acremar queso crema y la leche condensada. Vaciar esta mezcla a un bowl. Incorporar el huevo poco a poco y mezclar con la ayuda del batidor. Incorporar la piña previamente picada. "
  },
  {
    "nombre": "Crema de pera",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Yemas",
      "Azúcar",
      "Leche líquida",
      "Puré de pera",
      "Grenetina",
      "Chantilly",
      "Claras",
      "Azúcar cocida"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Hidratar la grenetina y ponerla a baño maría.",
      "Mezclar la pulpa de pera con la chantilly.",
      "Poner a hervir la leche.",
      "Batir las yemas con el azúcar hasta blanquear.",
      "Vaciar las yemas batidas en la leche hirviendo.",
      "Dejar hervir hasta formar una crema inglesa.",
      "Incorporar la grenetina.",
      "Batir las claras a punto de nieve e incorporar el azúcar cocida.",
      "Batir hasta formar un merengue italiano.",
      "Incorporar las tres mezclas suavemente."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar",
      "azúcar cocida",
      "chantilly",
      "claras",
      "crema",
      "grenetina",
      "leche líquida",
      "pera",
      "puré de pera",
      "yemas"
    ],
    "contenido": "Crema de pera Cremas y Rellenos Yemas Azúcar Leche líquida Puré de pera Grenetina Chantilly Claras Azúcar cocida Identificar y preparar los componentes. Hidratar la grenetina y ponerla a baño maría. Mezclar la pulpa de pera con la chantilly. Poner a hervir la leche. Batir las yemas con el azúcar hasta blanquear. Vaciar las yemas batidas en la leche hirviendo. Dejar hervir hasta formar una crema inglesa. Incorporar la grenetina. Batir las claras a punto de nieve e incorporar el azúcar cocida. Batir hasta formar un merengue italiano. Incorporar las tres mezclas suavemente. "
  },
  {
    "nombre": "Crema de naranja",
    "categoria": "Cremas y Rellenos",
    "urlCategoria": "categorias/cremas-rellenos.html",
    "ingredientes": [
      "Jugo de naranja",
      "Azúcar",
      "C.P.T.",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Poner a hervir el jugo de naranja con el 50% del azúcar.",
      "Mezclar en un bowl el 50% de azúcar restante con el C.P.T. en seco.",
      "Agregar el huevo y batir hasta incorporar.",
      "Incorporar la mezcla anterior al jugo caliente.",
      "Dejar en el fuego hasta que espese.",
      "Vaciar en un bowl y espolvorear con azúcar."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar",
      "c.p.t.",
      "crema",
      "huevo",
      "jugo de naranja",
      "naranja"
    ],
    "contenido": "Crema de naranja Cremas y Rellenos Jugo de naranja Azúcar C.P.T. Huevo Identificar y preparar los componentes. Poner a hervir el jugo de naranja con el 50% del azúcar. Mezclar en un bowl el 50% de azúcar restante con el C.P.T. en seco. Agregar el huevo y batir hasta incorporar. Incorporar la mezcla anterior al jugo caliente. Dejar en el fuego hasta que espese. Vaciar en un bowl y espolvorear con azúcar. "
  },
  {
    "nombre": "Glass royal",
    "categoria": "Decoración y Glaseados",
    "urlCategoria": "categorias/decoracion-glaseados.html",
    "ingredientes": [
      "Azúcar Glass",
      "Claras",
      "Limón",
      "Color vegetal"
    ],
    "tecnica": [
      "Batir la clara hasta espumar ligeramente.",
      "Agregar el azúcar poco a poco y batir hasta incorporar.",
      "Incorporar el jugo de limón y mezclar.",
      "Dar el color deseado."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días en refrigeración tapado.",
      "Tapar con trapo húmedo para evitar que se haga costra."
    ],
    "keywords": [
      "azúcar glass",
      "claras",
      "color vegetal",
      "glass",
      "limón",
      "royal"
    ],
    "contenido": "Glass royal Decoración y Glaseados Azúcar Glass Claras Limón Color vegetal Batir la clara hasta espumar ligeramente. Agregar el azúcar poco a poco y batir hasta incorporar. Incorporar el jugo de limón y mezclar. Dar el color deseado. Conservación de 3-4 días en refrigeración tapado. Tapar con trapo húmedo para evitar que se haga costra."
  },
  {
    "nombre": "Pasta de azúcar",
    "categoria": "Decoración y Glaseados",
    "urlCategoria": "categorias/decoracion-glaseados.html",
    "ingredientes": [
      "Azucar glass",
      "Goma de tragacanto",
      "Glucosa",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Mezclar en seco azucar y goma de tragacanto.",
      "Disolver en el agua la glucosa.",
      "Incorporar las dos mezclas hasta formar una pasta homogénea.",
      "Dar forma deseada."
    ],
    "recomendaciones": [
      "Guardar en una bolsa de plástico o un envase hermético a temperatura ambiente.",
      "Conservación de 8-10 días a temperatura ambiente."
    ],
    "keywords": [
      "agua",
      "azucar glass",
      "azúcar",
      "glucosa",
      "goma de tragacanto",
      "pasta"
    ],
    "contenido": "Pasta de azúcar Decoración y Glaseados Azucar glass Goma de tragacanto Glucosa Agua Identificar y pesar ingredientes. Mezclar en seco azucar y goma de tragacanto. Disolver en el agua la glucosa. Incorporar las dos mezclas hasta formar una pasta homogénea. Dar forma deseada. Guardar en una bolsa de plástico o un envase hermético a temperatura ambiente. Conservación de 8-10 días a temperatura ambiente."
  },
  {
    "nombre": "Betum",
    "categoria": "Decoración y Glaseados",
    "urlCategoria": "categorias/decoracion-glaseados.html",
    "ingredientes": [
      "Manteca vegetal",
      "Azúcar",
      "Claras"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar manteca vegetal con azúcar glass, hasta blanquear.",
      "Incorporar las claras y batir con ayuda de un globo hasta esponjar."
    ],
    "recomendaciones": [
      "La materia grasa debe estar a temperatura ambiente.",
      "Batir a velocidad media-alta para obtener un betún aireado."
    ],
    "keywords": [
      "azúcar",
      "betum",
      "claras",
      "manteca vegetal"
    ],
    "contenido": "Betum Decoración y Glaseados Manteca vegetal Azúcar Claras Identificar y pesar ingredientes. Acremar manteca vegetal con azúcar glass, hasta blanquear. Incorporar las claras y batir con ayuda de un globo hasta esponjar. La materia grasa debe estar a temperatura ambiente. Batir a velocidad media-alta para obtener un betún aireado."
  },
  {
    "nombre": "Brillo",
    "categoria": "Decoración y Glaseados",
    "urlCategoria": "categorias/decoracion-glaseados.html",
    "ingredientes": [
      "Grenetina",
      "Agua",
      "Azúcar"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hidratar la grenetina en agua fría.",
      "Calentar hasta disolver completamente.",
      "Agregar el azúcar y mezclar hasta disolver.",
      "Dejar enfriar antes de usar."
    ],
    "recomendaciones": [
      "Usar el brillo cuando esté tibio para mejor aplicación.",
      "Conservar en refrigeración hasta 1 semana."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "brillo",
      "grenetina"
    ],
    "contenido": "Brillo Decoración y Glaseados Grenetina Agua Azúcar Identificar y pesar ingredientes. Hidratar la grenetina en agua fría. Calentar hasta disolver completamente. Agregar el azúcar y mezclar hasta disolver. Dejar enfriar antes de usar. Usar el brillo cuando esté tibio para mejor aplicación. Conservar en refrigeración hasta 1 semana."
  },
  {
    "nombre": "Templado de cobertura",
    "categoria": "Decoración y Glaseados",
    "urlCategoria": "categorias/decoracion-glaseados.html",
    "ingredientes": [
      "Cobertura de chocolate"
    ],
    "tecnica": [
      "Trocear el chocolate en pedazos pequeños y uniformes para un derretido controlado.",
      "Reservar 2/3 del chocolate y derretir 1/3 en un tazón resistente al calor sobre un baño maría suave.",
      "Asegurar que el agua no toque el fondo del tazón y evitar el contacto del vapor con el chocolate.",
      "Llevar el chocolate a la temperatura adecuada: Chocolate negro: 45-50°C (113-122°F) Chocolate con leche: 40-45°C (104-113°F) Chocolate blanco: 35-40°C (95-104°F)",
      "Chocolate negro: 45-50°C (113-122°F)",
      "Chocolate con leche: 40-45°C (104-113°F)",
      "Chocolate blanco: 35-40°C (95-104°F)",
      "Retirar del baño maría y agregar el 1/3 restante del chocolate troceado.",
      "Mezclar suavemente hasta alcanzar la siguiente temperatura: Chocolate negro: 27-28°C (80-82°F) Chocolate con leche: 26-27°C (79-80°F) Chocolate blanco: 25-26°C (77-79°F)",
      "Chocolate negro: 27-28°C (80-82°F)",
      "Chocolate con leche: 26-27°C (79-80°F)",
      "Chocolate blanco: 25-26°C (77-79°F)",
      "Recalentar suavemente hasta la temperatura de trabajo: Chocolate negro: 31-32°C (88-90°F) Chocolate con leche: 29-30°C (84-86°F) Chocolate blanco: 28-29°C (82-84°F)",
      "Chocolate negro: 31-32°C (88-90°F)",
      "Chocolate con leche: 29-30°C (84-86°F)",
      "Chocolate blanco: 28-29°C (82-84°F)"
    ],
    "recomendaciones": [
      "Ser paciente y seguir los pasos con precisión para obtener resultados óptimos.",
      "Evitar cualquier contacto con agua o humedad para evitar que el chocolate se endurezca o se vuelva granuloso.",
      "Usar termómetros de cocina confiables para medir las temperaturas con precisión.",
      "Probar el templado en una pequeña cantidad antes de trabajar con cantidades mayores."
    ],
    "keywords": [
      "cobertura",
      "cobertura de chocolate",
      "templado"
    ],
    "contenido": "Templado de cobertura Decoración y Glaseados Cobertura de chocolate Trocear el chocolate en pedazos pequeños y uniformes para un derretido controlado. Reservar 2/3 del chocolate y derretir 1/3 en un tazón resistente al calor sobre un baño maría suave. Asegurar que el agua no toque el fondo del tazón y evitar el contacto del vapor con el chocolate. Llevar el chocolate a la temperatura adecuada: Chocolate negro: 45-50°C (113-122°F) Chocolate con leche: 40-45°C (104-113°F) Chocolate blanco: 35-40°C (95-104°F) Chocolate negro: 45-50°C (113-122°F) Chocolate con leche: 40-45°C (104-113°F) Chocolate blanco: 35-40°C (95-104°F) Retirar del baño maría y agregar el 1/3 restante del chocolate troceado. Mezclar suavemente hasta alcanzar la siguiente temperatura: Chocolate negro: 27-28°C (80-82°F) Chocolate con leche: 26-27°C (79-80°F) Chocolate blanco: 25-26°C (77-79°F) Chocolate negro: 27-28°C (80-82°F) Chocolate con leche: 26-27°C (79-80°F) Chocolate blanco: 25-26°C (77-79°F) Recalentar suavemente hasta la temperatura de trabajo: Chocolate negro: 31-32°C (88-90°F) Chocolate con leche: 29-30°C (84-86°F) Chocolate blanco: 28-29°C (82-84°F) Chocolate negro: 31-32°C (88-90°F) Chocolate con leche: 29-30°C (84-86°F) Chocolate blanco: 28-29°C (82-84°F) Ser paciente y seguir los pasos con precisión para obtener resultados óptimos. Evitar cualquier contacto con agua o humedad para evitar que el chocolate se endurezca o se vuelva granuloso. Usar termómetros de cocina confiables para medir las temperaturas con precisión. Probar el templado en una pequeña cantidad antes de trabajar con cantidades mayores."
  },
  {
    "nombre": "Chocolate plástico",
    "categoria": "Decoración y Glaseados",
    "urlCategoria": "categorias/decoracion-glaseados.html",
    "ingredientes": [
      "Cobertura",
      "Glucosa",
      "Ron"
    ],
    "tecnica": [
      "Fundir la cobertura.",
      "Agregar la glucosa y mezclar hasta integrar.",
      "Incorporar el ron y refrigerar durante 10 minutos.",
      "Formar las figuras deseadas."
    ],
    "recomendaciones": [
      "Mantener el chocolate a temperatura ambiente antes de trabajar.",
      "Usar guantes para manipular el chocolate plástico y evitar que se derrita con el calor de las manos."
    ],
    "keywords": [
      "chocolate",
      "cobertura",
      "glucosa",
      "plástico",
      "ron"
    ],
    "contenido": "Chocolate plástico Decoración y Glaseados Cobertura Glucosa Ron Fundir la cobertura. Agregar la glucosa y mezclar hasta integrar. Incorporar el ron y refrigerar durante 10 minutos. Formar las figuras deseadas. Mantener el chocolate a temperatura ambiente antes de trabajar. Usar guantes para manipular el chocolate plástico y evitar que se derrita con el calor de las manos."
  },
  {
    "nombre": "Genoise de Vainilla",
    "categoria": "Genoise",
    "urlCategoria": "categorias/genoise.html",
    "ingredientes": [
      "Huevo",
      "Azúcar",
      "Harina",
      "Vainilla"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Batir el huevo con el azúcar a punto de listón.",
      "Incorporar el harina previamente cernida en forma de lluvia y en forma envolvente.",
      "Incorporar la vainilla.",
      "Vaciar a un molde engrasado.",
      "Hornear a 180°C por 20 min.",
      "Desmoldar y dejar enfriar."
    ],
    "recomendaciones": [
      "No golpear el batido porque se baja.",
      "Conservación de 1 semana en refrigeración."
    ],
    "keywords": [
      "azúcar",
      "genoise",
      "harina",
      "huevo",
      "vainilla"
    ],
    "contenido": "Genoise de Vainilla Genoise Huevo Azúcar Harina Vainilla Identificar y pesar ingredientes. Batir el huevo con el azúcar a punto de listón. Incorporar el harina previamente cernida en forma de lluvia y en forma envolvente. Incorporar la vainilla. Vaciar a un molde engrasado. Hornear a 180°C por 20 min. Desmoldar y dejar enfriar. No golpear el batido porque se baja. Conservación de 1 semana en refrigeración."
  },
  {
    "nombre": "Genoise de Chocolate",
    "categoria": "Genoise",
    "urlCategoria": "categorias/genoise.html",
    "ingredientes": [
      "Huevo",
      "Azúcar",
      "Harina",
      "Cocoa"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Batir huevo y azucar a punto de listón.",
      "Incorporar en forma envolvente el harina previamente con la cocoa.",
      "Vertir a un molde previamente engrasado y enharinado.",
      "Hornear a 180° C durante 20 min.",
      "Desmoldar y dejar enfriar."
    ],
    "recomendaciones": [
      "Desmoldar y dejar enfriar antes de usar.",
      "Conservar en lugar fresco y seco."
    ],
    "keywords": [
      "azúcar",
      "chocolate",
      "cocoa",
      "genoise",
      "harina",
      "huevo"
    ],
    "contenido": "Genoise de Chocolate Genoise Huevo Azúcar Harina Cocoa Identificar y pesar ingredientes. Batir huevo y azucar a punto de listón. Incorporar en forma envolvente el harina previamente con la cocoa. Vertir a un molde previamente engrasado y enharinado. Hornear a 180° C durante 20 min. Desmoldar y dejar enfriar. Desmoldar y dejar enfriar antes de usar. Conservar en lugar fresco y seco."
  },
  {
    "nombre": "Pastel francés",
    "categoria": "Genoise",
    "urlCategoria": "categorias/genoise.html",
    "ingredientes": [
      "Genoise de chocolate",
      "Ganache",
      "Crema para batir",
      "Cocoa",
      "Cereza",
      "Jarabe"
    ],
    "tecnica": [
      "Identificar y preparar ingredientes.",
      "Mezclar la crema batida con el ganache.",
      "Preparar un aro para mousse y colocar una capa de genoise.",
      "Envinar y rellenar un tercio del aro con crema de chocolate.",
      "Colocar otro disco de genoise, y envinarlo.",
      "Rellenar con crema de chocolate el resto del aro.",
      "Refrigerar durante 2 horas aproximadamente.",
      "Colocar el producto en disco y quitar el aro.",
      "Decorar y espolvorear con cocoa.",
      "Colocar la cereza en forma decorativa.",
      "Presentar producto en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "cereza",
      "cocoa",
      "crema para batir",
      "francés",
      "ganache",
      "genoise de chocolate",
      "jarabe",
      "pastel"
    ],
    "contenido": "Pastel francés Genoise Genoise de chocolate Ganache Crema para batir Cocoa Cereza Jarabe Identificar y preparar ingredientes. Mezclar la crema batida con el ganache. Preparar un aro para mousse y colocar una capa de genoise. Envinar y rellenar un tercio del aro con crema de chocolate. Colocar otro disco de genoise, y envinarlo. Rellenar con crema de chocolate el resto del aro. Refrigerar durante 2 horas aproximadamente. Colocar el producto en disco y quitar el aro. Decorar y espolvorear con cocoa. Colocar la cereza en forma decorativa. Presentar producto en charola con carpeta. "
  },
  {
    "nombre": "Pastel domino",
    "categoria": "Genoise",
    "urlCategoria": "categorias/genoise.html",
    "ingredientes": [
      "Genoise de chocolate",
      "Genoise de vainilla",
      "Crema de mantequilla",
      "Ganache",
      "Jarabe",
      "Granillo de chocolate",
      "Chocolate en barra",
      "Cerezas",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y preparar ingredientes.",
      "Colocar una plancha de genoise y envinar.",
      "Esparcir crema de mantequilla blanca.",
      "Colocar sobre la crema blanca una plancha de genoise de chocolate.",
      "Envinar y cortar a la mitad.",
      "Tomar una parte y esparcir con crema de mantequilla.",
      "Colocar sobre la crema la otra mitad de genoise.",
      "Emparejar y cortar una rebanada de 2.5 cm de ancho.",
      "Colocar la rebanada sobre una banda, envinar y untar con crema de mantequilla de chocolate.",
      "Colocar otra rebanada en forma invertida.",
      "Emparejar y cubrir el pastel con crema de chocolate.",
      "Refrigerar durante 1 hora.",
      "Bañar con ganache y decorar con canelas de chocolate y cerezas.",
      "Espolvorear con azucar glass las canelas."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar glass",
      "cerezas",
      "chocolate en barra",
      "crema de mantequilla",
      "domino",
      "ganache",
      "genoise de chocolate",
      "genoise de vainilla",
      "granillo de chocolate",
      "jarabe",
      "pastel"
    ],
    "contenido": "Pastel domino Genoise Genoise de chocolate Genoise de vainilla Crema de mantequilla Ganache Jarabe Granillo de chocolate Chocolate en barra Cerezas Azucar glass Identificar y preparar ingredientes. Colocar una plancha de genoise y envinar. Esparcir crema de mantequilla blanca. Colocar sobre la crema blanca una plancha de genoise de chocolate. Envinar y cortar a la mitad. Tomar una parte y esparcir con crema de mantequilla. Colocar sobre la crema la otra mitad de genoise. Emparejar y cortar una rebanada de 2.5 cm de ancho. Colocar la rebanada sobre una banda, envinar y untar con crema de mantequilla de chocolate. Colocar otra rebanada en forma invertida. Emparejar y cubrir el pastel con crema de chocolate. Refrigerar durante 1 hora. Bañar con ganache y decorar con canelas de chocolate y cerezas. Espolvorear con azucar glass las canelas. "
  },
  {
    "nombre": "Pastel del limón",
    "categoria": "Genoise",
    "urlCategoria": "categorias/genoise.html",
    "ingredientes": [
      "Genoise de vainilla",
      "Crema pastelera",
      "Crema de limón",
      "Jarabe",
      "Ron",
      "Crema de mantequilla",
      "Granillo",
      "Ganache",
      "Color vegetal verde"
    ],
    "tecnica": [
      "Identificar y preparar ingredientes.",
      "Mezclar la crema pastelera con la crema de limón.",
      "Cortar el genoise en 3 partes.",
      "Envinar con jarabe y ron, y rellenar con la crema anterior mencionada el genoise.",
      "Dar color a la crema de mantequilla, con el color vegetal verde.",
      "Cubrir el pastel con la crema de mantequilla, y colocar granillo en el contorno del pastel.",
      "Decorar con ganache y presentar en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "color vegetal verde",
      "crema de limón",
      "crema de mantequilla",
      "crema pastelera",
      "del",
      "ganache",
      "genoise de vainilla",
      "granillo",
      "jarabe",
      "limón",
      "pastel",
      "ron"
    ],
    "contenido": "Pastel del limón Genoise Genoise de vainilla Crema pastelera Crema de limón Jarabe Ron Crema de mantequilla Granillo Ganache Color vegetal verde Identificar y preparar ingredientes. Mezclar la crema pastelera con la crema de limón. Cortar el genoise en 3 partes. Envinar con jarabe y ron, y rellenar con la crema anterior mencionada el genoise. Dar color a la crema de mantequilla, con el color vegetal verde. Cubrir el pastel con la crema de mantequilla, y colocar granillo en el contorno del pastel. Decorar con ganache y presentar en charola con carpeta. "
  },
  {
    "nombre": "Mokas",
    "categoria": "Genoise",
    "urlCategoria": "categorias/genoise.html",
    "ingredientes": [
      "Genoise de chocolate",
      "Crema de mantequilla",
      "Cafe soluble",
      "Licor de cafe",
      "Granillo de chocolate",
      "Jarabe",
      "Cerezas",
      "Color vegetal al gusto"
    ],
    "tecnica": [
      "Identificar y preparar ingredientes.",
      "Cortar en 2 capas el genoise.",
      "Tomar la primera capa y envinarla.",
      "Al licor de café le agregamos los 10 grs. de café soluble hasta integrar.",
      "Colocar un poco de crema de mantequilla mezclada con esencia de café.",
      "Colocar la otra capa de genoise, y envinarla.",
      "Cortar cuadros de 7 por 7, y cubrir con crema las paredes.",
      "Colocar granillo en las paredes.",
      "Cubrir la superficie con crema decafé con la ayuda de una manga con dulla rizada en forma de zig zag.",
      "Decorar con cereza.",
      "Encapacillar y presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "cafe soluble",
      "cerezas",
      "color vegetal al gusto",
      "crema de mantequilla",
      "genoise de chocolate",
      "granillo de chocolate",
      "jarabe",
      "licor de cafe",
      "mokas"
    ],
    "contenido": "Mokas Genoise Genoise de chocolate Crema de mantequilla Cafe soluble Licor de cafe Granillo de chocolate Jarabe Cerezas Color vegetal al gusto Identificar y preparar ingredientes. Cortar en 2 capas el genoise. Tomar la primera capa y envinarla. Al licor de café le agregamos los 10 grs. de café soluble hasta integrar. Colocar un poco de crema de mantequilla mezclada con esencia de café. Colocar la otra capa de genoise, y envinarla. Cortar cuadros de 7 por 7, y cubrir con crema las paredes. Colocar granillo en las paredes. Cubrir la superficie con crema decafé con la ayuda de una manga con dulla rizada en forma de zig zag. Decorar con cereza. Encapacillar y presentar producto. "
  },
  {
    "nombre": "Zuppa inglesa",
    "categoria": "Genoise",
    "urlCategoria": "categorias/genoise.html",
    "ingredientes": [
      "Biscuit en plancha",
      "Crema mousselini",
      "Durazno",
      "Nuez",
      "Jarabe",
      "Merengue",
      "Cerezas",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Forrar el interior de un bowl con bandas de biscuit.",
      "Envinar ligeramente con jarabe",
      "Rellenar con crema mousseline, durazno y nuez picada hasta la mitad.",
      "Colocar otra capa de biscuit y rellenar nuevamente con el resto de la crema: durazno y nuez.",
      "Cubrir con otra capa de biscuit, y envinar.",
      "Refrigerar durante 2 horas aproximadamente.",
      "Desmoldar y cubrir con merengue, con la ayuda de una manga con dulla rizada.",
      "Espolvorear con azucar glass.",
      "Hornear de 220°C solo a que dore el merengue.",
      "Decorar con la cereza.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar glass",
      "biscuit en plancha",
      "cerezas",
      "crema mousselini",
      "durazno",
      "inglesa",
      "jarabe",
      "merengue",
      "nuez",
      "zuppa"
    ],
    "contenido": "Zuppa inglesa Genoise Biscuit en plancha Crema mousselini Durazno Nuez Jarabe Merengue Cerezas Azucar glass Identificar y pesar ingredientes. Forrar el interior de un bowl con bandas de biscuit. Envinar ligeramente con jarabe Rellenar con crema mousseline, durazno y nuez picada hasta la mitad. Colocar otra capa de biscuit y rellenar nuevamente con el resto de la crema: durazno y nuez. Cubrir con otra capa de biscuit, y envinar. Refrigerar durante 2 horas aproximadamente. Desmoldar y cubrir con merengue, con la ayuda de una manga con dulla rizada. Espolvorear con azucar glass. Hornear de 220°C solo a que dore el merengue. Decorar con la cereza. Presentar el producto en charola con carpeta. "
  },
  {
    "nombre": "Jarabe",
    "categoria": "Jarabe y Envinados",
    "urlCategoria": "categorias/jarabes-envinados.html",
    "ingredientes": [
      "Agua",
      "Azucar",
      "Limón",
      "Naranja"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Colocar todos los ingredientes en un cazo.",
      "Colocar sobre el fuego y dejar hervir 10 min.",
      "Retirar del fuego y colar.",
      "Dejar enfriar y refrigerar."
    ],
    "recomendaciones": [
      "Se le agrega el licor deseado, dependiendo el sabor del pastel.",
      "Conservación de 7 días en refrigeracion."
    ],
    "keywords": [
      "agua",
      "azucar",
      "jarabe",
      "limón",
      "naranja"
    ],
    "contenido": "Jarabe Jarabe y Envinados Agua Azucar Limón Naranja Identificar y pesar ingredientes. Colocar todos los ingredientes en un cazo. Colocar sobre el fuego y dejar hervir 10 min. Retirar del fuego y colar. Dejar enfriar y refrigerar. Se le agrega el licor deseado, dependiendo el sabor del pastel. Conservación de 7 días en refrigeracion."
  },
  {
    "nombre": "Envinado para 3 leches",
    "categoria": "Jarabe y Envinados",
    "urlCategoria": "categorias/jarabes-envinados.html",
    "ingredientes": [
      "Leche condensada",
      "Leche evaporada",
      "Media crema",
      "Canela",
      "Ron"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hervir la leche condensada, la leche evaporada y la canela.",
      "Dejar hervir 5 min. y retirar la canela.",
      "Dejar entibiar la mezcla, agregar la media crema y el ron.",
      "Vaciar sobre el pastel cuando el envinado este tibio."
    ],
    "recomendaciones": [],
    "keywords": [
      "canela",
      "envinado",
      "leche condensada",
      "leche evaporada",
      "leches",
      "media crema",
      "para",
      "ron"
    ],
    "contenido": "Envinado para 3 leches Jarabe y Envinados Leche condensada Leche evaporada Media crema Canela Ron Identificar y pesar ingredientes. Hervir la leche condensada, la leche evaporada y la canela. Dejar hervir 5 min. y retirar la canela. Dejar entibiar la mezcla, agregar la media crema y el ron. Vaciar sobre el pastel cuando el envinado este tibio. "
  },
  {
    "nombre": "Pasta de choux",
    "categoria": "Masa de Choux y Eclairs",
    "urlCategoria": "categorias/masa-choux-eclairs.html",
    "ingredientes": [
      "Agua",
      "Manteca vegetal",
      "Harina",
      "Sal",
      "Azúcar",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Poner a hervir agua, manteca vegetal, azúcar y sal.",
      "Cuando está hirviendo, agregar el harina de golpe y mezclar con una pala de madera.",
      "Cocer y deshidratar la pasta.",
      "Retirar del fuego y vaciar la mezcla a un bowl.",
      "Agregar los huevos de uno a uno y mezclar con una pala de madera.",
      "Cortar las piezas en forma deseada.",
      "Hornear a 220°C por 20 minutos."
    ],
    "recomendaciones": [
      "Al momento de cocer la pasta en el cazo de cobre deshidratarla hasta que quede compacta.",
      "Retirar el producto del horno hasta que se haya desarrollado y que este bien seco.",
      "Conservación en refrigeración de 8-10 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "choux",
      "harina",
      "huevo",
      "manteca vegetal",
      "pasta",
      "sal"
    ],
    "contenido": "Pasta de choux Masa de Choux y Eclairs Agua Manteca vegetal Harina Sal Azúcar Huevo Identificar y pesar ingredientes. Poner a hervir agua, manteca vegetal, azúcar y sal. Cuando está hirviendo, agregar el harina de golpe y mezclar con una pala de madera. Cocer y deshidratar la pasta. Retirar del fuego y vaciar la mezcla a un bowl. Agregar los huevos de uno a uno y mezclar con una pala de madera. Cortar las piezas en forma deseada. Hornear a 220°C por 20 minutos. Al momento de cocer la pasta en el cazo de cobre deshidratarla hasta que quede compacta. Retirar el producto del horno hasta que se haya desarrollado y que este bien seco. Conservación en refrigeración de 8-10 días envuelto en plástico."
  },
  {
    "nombre": "Choux de chocolate",
    "categoria": "Masa de Choux y Eclairs",
    "urlCategoria": "categorias/masa-choux-eclairs.html",
    "ingredientes": [
      "Pasta de choux",
      "Crema pastelera",
      "Ganache",
      "Cobertura rallada o granillo oscuro"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar la pasta de choux en forma de profiterol con la ayuda de una manga.",
      "Hornear a 200°C durante 20 min.",
      "Dejar enfriar.",
      "Mezclar la crema pastelera con el 50% de ganache para formar una crema de chocolate.",
      "Hacer una perforación en la base al profiterol.",
      "Colocar la crema de chocolate en una manga con dulla rizada e inyectar al profiterol por perforación.",
      "Bañar la superficie del profiterol con ganache semilíquido y espolvorear granillo o cobertura rallada."
    ],
    "recomendaciones": [
      "Escurrir bien el choux al momento de bañarlo con el ganache.",
      "Conservación de 3 a 4 días en refrigeración."
    ],
    "keywords": [
      "chocolate",
      "choux",
      "cobertura rallada o granillo oscuro",
      "crema pastelera",
      "ganache",
      "pasta de choux"
    ],
    "contenido": "Choux de chocolate Masa de Choux y Eclairs Pasta de choux Crema pastelera Ganache Cobertura rallada o granillo oscuro Identificar y preparar componentes. Cortar la pasta de choux en forma de profiterol con la ayuda de una manga. Hornear a 200°C durante 20 min. Dejar enfriar. Mezclar la crema pastelera con el 50% de ganache para formar una crema de chocolate. Hacer una perforación en la base al profiterol. Colocar la crema de chocolate en una manga con dulla rizada e inyectar al profiterol por perforación. Bañar la superficie del profiterol con ganache semilíquido y espolvorear granillo o cobertura rallada. Escurrir bien el choux al momento de bañarlo con el ganache. Conservación de 3 a 4 días en refrigeración."
  },
  {
    "nombre": "Cisnes",
    "categoria": "Masa de Choux y Eclairs",
    "urlCategoria": "categorias/masa-choux-eclairs.html",
    "ingredientes": [
      "Pasta de choux",
      "Crema chantilly",
      "Durazno en almíbar",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar con la pasta de choux gotas y cuellos de cisnes.",
      "Hornear a 220°C durante 20 min.",
      "Dejar enfriar.",
      "Cortar a la mitad la gota.",
      "Rellenar la base con crema chantilly y duraznos.",
      "Decorar con crema chantilly para cubrir el relleno.",
      "Cortar la parte superior de la gota a la mitad verticalmente y espolvorearla con azúcar glass.",
      "Colocar en la parte de enfrente de la gota en el cuello del cisne.",
      "Colocar las alas del cisne en forma invertida de como las cortamos.",
      "Encapacillar y presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 3 a 4 días en refrigeración."
    ],
    "keywords": [
      "azucar glass",
      "cisnes",
      "crema chantilly",
      "durazno en almíbar",
      "pasta de choux"
    ],
    "contenido": "Cisnes Masa de Choux y Eclairs Pasta de choux Crema chantilly Durazno en almíbar Azucar glass Identificar y preparar componentes. Cortar con la pasta de choux gotas y cuellos de cisnes. Hornear a 220°C durante 20 min. Dejar enfriar. Cortar a la mitad la gota. Rellenar la base con crema chantilly y duraznos. Decorar con crema chantilly para cubrir el relleno. Cortar la parte superior de la gota a la mitad verticalmente y espolvorearla con azúcar glass. Colocar en la parte de enfrente de la gota en el cuello del cisne. Colocar las alas del cisne en forma invertida de como las cortamos. Encapacillar y presentar el producto. Conservación de 3 a 4 días en refrigeración."
  },
  {
    "nombre": "Eclair de café",
    "categoria": "Masa de Choux y Eclairs",
    "urlCategoria": "categorias/masa-choux-eclairs.html",
    "ingredientes": [
      "Pasta de choux",
      "Crema pastelera",
      "Fondant",
      "Ron",
      "Café soluble"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar con la pasta de choux barras de 7 cm. aprox., con la ayuda de una manga.",
      "Hornear a 220°C durante 20 min.",
      "Dejar enfriar.",
      "Mezclar el café soluble con el ron para obtener una esencia café.",
      "Cortar a la mitad la barra de choux y rellenar con la ayuda de una manga y dulla rizada.",
      "Mezclar el fondant con un poco de esencia de café.",
      "Colocarlo en el fuego a que tenga una consistencia semilíquida y enfondanar la base de la barra.",
      "Encapacillar y presentar producto."
    ],
    "recomendaciones": [
      "El fondant debe estar tibio para evitar que se pierda el brillo o se escurra.",
      "Conservación de 3 a 4 días en refrigeración."
    ],
    "keywords": [
      "café",
      "café soluble",
      "crema pastelera",
      "eclair",
      "fondant",
      "pasta de choux",
      "ron"
    ],
    "contenido": "Eclair de café Masa de Choux y Eclairs Pasta de choux Crema pastelera Fondant Ron Café soluble Identificar y preparar componentes. Cortar con la pasta de choux barras de 7 cm. aprox., con la ayuda de una manga. Hornear a 220°C durante 20 min. Dejar enfriar. Mezclar el café soluble con el ron para obtener una esencia café. Cortar a la mitad la barra de choux y rellenar con la ayuda de una manga y dulla rizada. Mezclar el fondant con un poco de esencia de café. Colocarlo en el fuego a que tenga una consistencia semilíquida y enfondanar la base de la barra. Encapacillar y presentar producto. El fondant debe estar tibio para evitar que se pierda el brillo o se escurra. Conservación de 3 a 4 días en refrigeración."
  },
  {
    "nombre": "Paris-Brest",
    "categoria": "Masa de Choux y Eclairs",
    "urlCategoria": "categorias/masa-choux-eclairs.html",
    "ingredientes": [
      "Pasta de choux",
      "Ganache",
      "Crema pastelera",
      "Crema chantilly",
      "Durazno",
      "Almendra fileteada",
      "Azúcar glass"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Cortar una corona con la pasta de choux y espolvorear la superficie con almendra fileteada.",
      "Hornear a 200°C por 20 min.",
      "Dejar enfriar y cortar en 2 capas la corona.",
      "Tomar la base y rociar con ganache la superficie.",
      "Rellenar con crema pastelera, y colocar el durazno picado en el centro.",
      "Decorar con crema chantilly.",
      "Colocar la tapa y espolvorear con azúcar glass.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "almendra fileteada",
      "azúcar glass",
      "brest",
      "crema chantilly",
      "crema pastelera",
      "durazno",
      "ganache",
      "paris",
      "pasta de choux"
    ],
    "contenido": "Paris-Brest Masa de Choux y Eclairs Pasta de choux Ganache Crema pastelera Crema chantilly Durazno Almendra fileteada Azúcar glass Identificar y pesar ingredientes. Cortar una corona con la pasta de choux y espolvorear la superficie con almendra fileteada. Hornear a 200°C por 20 min. Dejar enfriar y cortar en 2 capas la corona. Tomar la base y rociar con ganache la superficie. Rellenar con crema pastelera, y colocar el durazno picado en el centro. Decorar con crema chantilly. Colocar la tapa y espolvorear con azúcar glass. Presentar el producto en charola con carpeta. "
  },
  {
    "nombre": "Saint-Honoré",
    "categoria": "Masa de Choux y Eclairs",
    "urlCategoria": "categorias/masa-choux-eclairs.html",
    "ingredientes": [
      "Pasta de hojaldre",
      "Pasta de choux",
      "Crema pastelera",
      "Crema chantilly",
      "Durazno",
      "Cereza",
      "Ganache"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Extender la pasta de hojaldre a un grosor de 3 mm y cortar un círculo de aprox. 25 cm de diámetro.",
      "Hacer un contorno de aprox. 1 cm de ancho de pasta de choux sobre el círculo.",
      "Dejar reposar por 30 min. y hornear a 200°C por 25 min.",
      "Hacer 4 profiteroles y cisnes pequeños, y hornear a 200°C durante 10 min.",
      "Dejar enfriar.",
      "Rellenar con crema pastelera, mezclada con crema chantilly y duraznos.",
      "Pintar crema chantilly con ganache.",
      "Cubrir el relleno con crema chantilly blanca y de chocolate con la ayuda de una manga con dulla rizada.",
      "Decorar con los profiteroles y los cisnes previamente decorados.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "cereza",
      "crema chantilly",
      "crema pastelera",
      "durazno",
      "ganache",
      "honoré",
      "pasta de choux",
      "pasta de hojaldre",
      "saint"
    ],
    "contenido": "Saint-Honoré Masa de Choux y Eclairs Pasta de hojaldre Pasta de choux Crema pastelera Crema chantilly Durazno Cereza Ganache Identificar y pesar ingredientes. Extender la pasta de hojaldre a un grosor de 3 mm y cortar un círculo de aprox. 25 cm de diámetro. Hacer un contorno de aprox. 1 cm de ancho de pasta de choux sobre el círculo. Dejar reposar por 30 min. y hornear a 200°C por 25 min. Hacer 4 profiteroles y cisnes pequeños, y hornear a 200°C durante 10 min. Dejar enfriar. Rellenar con crema pastelera, mezclada con crema chantilly y duraznos. Pintar crema chantilly con ganache. Cubrir el relleno con crema chantilly blanca y de chocolate con la ayuda de una manga con dulla rizada. Decorar con los profiteroles y los cisnes previamente decorados. Presentar el producto en charola con carpeta. "
  },
  {
    "nombre": "Pasta Brisse",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Azúcar",
      "Mantequilla",
      "Margarina",
      "Huevo",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Mezclar harina, sal y azúcar.",
      "Agregar materia grasa y mezclar frotándola con las manos hasta formar un punto de arenado.",
      "Agregar huevo y agua e incorporar hasta obtener una pasta manejable.",
      "Refrigerar durante 20 min."
    ],
    "recomendaciones": [
      "La materia grasa debe estar a temperatura ambiente.",
      "Evitar trabajar demasiado la pasta para evitar que se ligue.",
      "Conservación aproximada de al menos 30 días envuelta en plástico."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "brisse",
      "harina",
      "huevo",
      "mantequilla",
      "margarina",
      "pasta",
      "sal"
    ],
    "contenido": "Pasta Brisse Masas y Bases Harina Sal Azúcar Mantequilla Margarina Huevo Agua Identificar y pesar los ingredientes. Mezclar harina, sal y azúcar. Agregar materia grasa y mezclar frotándola con las manos hasta formar un punto de arenado. Agregar huevo y agua e incorporar hasta obtener una pasta manejable. Refrigerar durante 20 min. La materia grasa debe estar a temperatura ambiente. Evitar trabajar demasiado la pasta para evitar que se ligue. Conservación aproximada de al menos 30 días envuelta en plástico."
  },
  {
    "nombre": "Masa de Cuerno",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Leche",
      "Mantequilla",
      "Levadura",
      "Flex Azul"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Agregar al centro de la fuente: el azúcar, sal, mantequilla y el 50% de la leche.",
      "Amasar hasta obtener un premezclado e incorporar el resto de la leche con la levadura.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Dejar fermentar durante 1 hr. cubierta con un plástico.",
      "Dar forma de cruz dejando un montículo en el centro con la ayuda de un rodillo.",
      "Colocar al centro, el flex azul y cubrirlo con la masa.",
      "Extender en forma rectangular 3 veces más largo que de ancho.",
      "Doblar en 3 partes iguales, girar la pasta a que la cerradura quede de lado.",
      "Repetir la operación 2 veces más.",
      "Refrigerar durante 1 día."
    ],
    "recomendaciones": [
      "Suavizar el flex azul para que tenga la misma consistencia de la masa.",
      "Al momento de dar la 1er vuelta, dejar la llave/unión a la derecha."
    ],
    "keywords": [
      "azúcar",
      "cuerno",
      "flex azul",
      "harina",
      "leche",
      "levadura",
      "mantequilla",
      "masa",
      "sal"
    ],
    "contenido": "Masa de Cuerno Masas y Bases Harina Azúcar Sal Leche Mantequilla Levadura Flex Azul Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Agregar al centro de la fuente: el azúcar, sal, mantequilla y el 50% de la leche. Amasar hasta obtener un premezclado e incorporar el resto de la leche con la levadura. Amasar hasta obtener una masa suave, lisa y elástica. Dejar fermentar durante 1 hr. cubierta con un plástico. Dar forma de cruz dejando un montículo en el centro con la ayuda de un rodillo. Colocar al centro, el flex azul y cubrirlo con la masa. Extender en forma rectangular 3 veces más largo que de ancho. Doblar en 3 partes iguales, girar la pasta a que la cerradura quede de lado. Repetir la operación 2 veces más. Refrigerar durante 1 día. Suavizar el flex azul para que tenga la misma consistencia de la masa. Al momento de dar la 1er vuelta, dejar la llave/unión a la derecha."
  },
  {
    "nombre": "Masa de Pizza",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Mantequilla",
      "Sal",
      "Levadura",
      "Agua"
    ],
    "tecnica": [
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro de la fuente los demás ingredientes.",
      "Agregar el 50% de agua y formar un premezclado.",
      "Incorporar el resto del agua y la levadura, y amasar hasta obtener una masa suave, lisa y elástica."
    ],
    "recomendaciones": [
      "Conservación de 2 días en refrigeración cubierta."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "harina",
      "levadura",
      "mantequilla",
      "masa",
      "pizza",
      "sal"
    ],
    "contenido": "Masa de Pizza Masas y Bases Harina Azúcar Mantequilla Sal Levadura Agua Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro de la fuente los demás ingredientes. Agregar el 50% de agua y formar un premezclado. Incorporar el resto del agua y la levadura, y amasar hasta obtener una masa suave, lisa y elástica. Conservación de 2 días en refrigeración cubierta."
  },
  {
    "nombre": "Pasta de manteca de cacao (para rosas)",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Manteca de cacao",
      "Glucosa",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Picar finamente la manteca de cacao.",
      "Fundir a baño maría la manteca de cacao sin calentarla.",
      "Agregar la glucosa y mezclar hasta incorporar totalmente.",
      "Agregar el azucar glass, y mover hasta incorporar (hasta obtener un atole).",
      "Vaciar en una charola y dejar enfriar a temperatura ambiente hasta que quede manejable.",
      "Dar color deseado.",
      "Dar forma deseada y dejar secar."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar glass",
      "cacao",
      "glucosa",
      "manteca",
      "manteca de cacao",
      "para",
      "pasta",
      "rosas"
    ],
    "contenido": "Pasta de manteca de cacao (para rosas) Masas y Bases Manteca de cacao Glucosa Azucar glass Identificar y pesar ingredientes. Picar finamente la manteca de cacao. Fundir a baño maría la manteca de cacao sin calentarla. Agregar la glucosa y mezclar hasta incorporar totalmente. Agregar el azucar glass, y mover hasta incorporar (hasta obtener un atole). Vaciar en una charola y dejar enfriar a temperatura ambiente hasta que quede manejable. Dar color deseado. Dar forma deseada y dejar secar. "
  },
  {
    "nombre": "Masa de bizcocho",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Harina",
      "Azucar",
      "Mantequilla",
      "Huevo",
      "Sal",
      "Levadura",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Agregar al centro de la fuente el 50% de azucar, sal y huevo.",
      "Amasar hasta obtener un premezclado e incorporar agua poco a poco con el azucar restante y la levadura.",
      "Agregar la mantequilla poco a poco hasta integrar.",
      "Amasar hasta obtener una masa suave, lisa y elastica.",
      "Dejar reposar 10 min. en charola engrasada.",
      "Refrigerar durante 24 hrs."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azucar",
      "bizcocho",
      "harina",
      "huevo",
      "levadura",
      "mantequilla",
      "masa",
      "sal"
    ],
    "contenido": "Masa de bizcocho Masas y Bases Harina Azucar Mantequilla Huevo Sal Levadura Agua Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Agregar al centro de la fuente el 50% de azucar, sal y huevo. Amasar hasta obtener un premezclado e incorporar agua poco a poco con el azucar restante y la levadura. Agregar la mantequilla poco a poco hasta integrar. Amasar hasta obtener una masa suave, lisa y elastica. Dejar reposar 10 min. en charola engrasada. Refrigerar durante 24 hrs. "
  },
  {
    "nombre": "Pasta para tapar concha",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Azucar glass",
      "Manteca vegetal",
      "Harina",
      "Cocoa"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Acremar la manteca vegetal con el azucar glass hasta que desaparezcan los grumos.",
      "Incorporar harina y trabajar, hasta obtener una pasta manejable."
    ],
    "recomendaciones": [
      "Para las conchas de chocolate se le incorpora cocoa a la pasta."
    ],
    "keywords": [
      "azucar glass",
      "cocoa",
      "concha",
      "harina",
      "manteca vegetal",
      "para",
      "pasta",
      "tapar"
    ],
    "contenido": "Pasta para tapar concha Masas y Bases Azucar glass Manteca vegetal Harina Cocoa Identificar y preparar componentes. Acremar la manteca vegetal con el azucar glass hasta que desaparezcan los grumos. Incorporar harina y trabajar, hasta obtener una pasta manejable. Para las conchas de chocolate se le incorpora cocoa a la pasta."
  },
  {
    "nombre": "Feite danoise",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Azucar",
      "Levadura",
      "Huevo",
      "Leche en polvo",
      "Mantequilla",
      "Flex Rojo",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Agregar al centro de la fuente: sal, azucar, leche, huevo y mantequilla.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el agua y la levadura, seguir amasando hasta obtener una masa suave, lisa y elástica.",
      "Dejar reposar durante 10 min.",
      "Dar forma de cruz dejando un montículo en el centro.",
      "Suavizar la flex y colocarla al centro.",
      "Dar 3 vueltas y refrigerar durante 1 día."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azucar",
      "danoise",
      "feite",
      "flex rojo",
      "harina",
      "huevo",
      "leche en polvo",
      "levadura",
      "mantequilla",
      "sal"
    ],
    "contenido": "Feite danoise Masas y Bases Harina Sal Azucar Levadura Huevo Leche en polvo Mantequilla Flex Rojo Agua Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Agregar al centro de la fuente: sal, azucar, leche, huevo y mantequilla. Amasar hasta obtener un premezclado. Agregar el agua y la levadura, seguir amasando hasta obtener una masa suave, lisa y elástica. Dejar reposar durante 10 min. Dar forma de cruz dejando un montículo en el centro. Suavizar la flex y colocarla al centro. Dar 3 vueltas y refrigerar durante 1 día. "
  },
  {
    "nombre": "Batido de aceite",
    "categoria": "Masas y Bases",
    "urlCategoria": "categorias/masas-bases.html",
    "ingredientes": [
      "Harina",
      "Huevo",
      "Aceite",
      "Azúcar",
      "Leche",
      "Levadura",
      "Royal"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Colocar en un bowl el huevo y el azúcar, luego batir con el globo hasta obtener un punto de listón.",
      "Agregar la leche poco a poco y seguir batiendo.",
      "Incorporar el aceite poco a poco y mezclar.",
      "Agregar la harina mezclada con el royal y la levadura.",
      "Mezclar suavemente y vaciar en un molde previamente engrasado y enharinado.",
      "Hornear a 100°C durante 20 minutos.",
      "Desmoldar y dejar enfriar."
    ],
    "recomendaciones": [
      "Asegurarse de que el molde esté bien engrasado y enharinado para facilitar el desmolde.",
      "No abrir el horno durante los primeros 15 minutos de horneado.",
      "Dejar enfriar completamente antes de desmoldar para evitar que se rompa."
    ],
    "keywords": [
      "aceite",
      "azúcar",
      "batido",
      "harina",
      "huevo",
      "leche",
      "levadura",
      "royal"
    ],
    "contenido": "Batido de aceite Masas y Bases Harina Huevo Aceite Azúcar Leche Levadura Royal Identificar y pesar los ingredientes. Colocar en un bowl el huevo y el azúcar, luego batir con el globo hasta obtener un punto de listón. Agregar la leche poco a poco y seguir batiendo. Incorporar el aceite poco a poco y mezclar. Agregar la harina mezclada con el royal y la levadura. Mezclar suavemente y vaciar en un molde previamente engrasado y enharinado. Hornear a 100°C durante 20 minutos. Desmoldar y dejar enfriar. Asegurarse de que el molde esté bien engrasado y enharinado para facilitar el desmolde. No abrir el horno durante los primeros 15 minutos de horneado. Dejar enfriar completamente antes de desmoldar para evitar que se rompa."
  },
  {
    "nombre": "Pasta Sablee",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Margarina",
      "Mantequilla",
      "Azúcar",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar materia grasa con azúcar a blanquear, hasta obtener un punto de pomada.",
      "Agregar el huevo poco a poco y airear.",
      "Agregar el harina en forma envolvente con la ayuda de la raspa y refrigerar."
    ],
    "recomendaciones": [
      "La materia grasa debe estar a temperatura ambiente.",
      "Agregar el huevo poco a poco para evitar que se corte."
    ],
    "keywords": [
      "azúcar",
      "harina",
      "huevo",
      "mantequilla",
      "margarina",
      "pasta",
      "sablee"
    ],
    "contenido": "Pasta Sablee Masas Básicas Harina Margarina Mantequilla Azúcar Huevo Identificar y pesar ingredientes. Acremar materia grasa con azúcar a blanquear, hasta obtener un punto de pomada. Agregar el huevo poco a poco y airear. Agregar el harina en forma envolvente con la ayuda de la raspa y refrigerar. La materia grasa debe estar a temperatura ambiente. Agregar el huevo poco a poco para evitar que se corte."
  },
  {
    "nombre": "Pasta para pie",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Maizena",
      "Leche condensada",
      "Huevo",
      "Sal",
      "Royal"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Mezclar las harinas, sal, royal y mantequilla en forma de arenado.",
      "Agregar la leche condensada y el huevo.",
      "Incorporar hasta formar una pasta."
    ],
    "recomendaciones": [
      "No trabajar mucho la pasta para evitar que se queme.",
      "Conservación de 2-3 semanas en refrigeración envuelto en plástico."
    ],
    "keywords": [
      "harina",
      "huevo",
      "leche condensada",
      "maizena",
      "para",
      "pasta",
      "pie",
      "royal",
      "sal"
    ],
    "contenido": "Pasta para pie Masas Básicas Harina Maizena Leche condensada Huevo Sal Royal Identificar y pesar ingredientes. Mezclar las harinas, sal, royal y mantequilla en forma de arenado. Agregar la leche condensada y el huevo. Incorporar hasta formar una pasta. No trabajar mucho la pasta para evitar que se queme. Conservación de 2-3 semanas en refrigeración envuelto en plástico."
  },
  {
    "nombre": "Pasta para lasagna",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Huevo",
      "Manteca vegetal",
      "Aceite"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina.",
      "Colocar al centro de la fuente: aceite, sal y huevo.",
      "Amasar hasta incorporar los ingredientes.",
      "Incorporar agua poco a poco y amasar hasta obtener una masa suave, lisa y elastica.",
      "Dejar reposar la pasta durante 10 min.",
      "Extender la pasta a un grosor de 3 mm.",
      "Cortar cuadros de 5 x 5 cm.",
      "Cocer la pasta en agua hirviendo con sal, hierbas de olor y aceite.",
      "Escurrir perfectamente la pasta."
    ],
    "recomendaciones": [],
    "keywords": [
      "aceite",
      "harina",
      "huevo",
      "lasagna",
      "manteca vegetal",
      "para",
      "pasta",
      "sal"
    ],
    "contenido": "Pasta para lasagna Masas Básicas Harina Sal Huevo Manteca vegetal Aceite Identificar y pesar ingredientes. Hacer una fuente con el harina. Colocar al centro de la fuente: aceite, sal y huevo. Amasar hasta incorporar los ingredientes. Incorporar agua poco a poco y amasar hasta obtener una masa suave, lisa y elastica. Dejar reposar la pasta durante 10 min. Extender la pasta a un grosor de 3 mm. Cortar cuadros de 5 x 5 cm. Cocer la pasta en agua hirviendo con sal, hierbas de olor y aceite. Escurrir perfectamente la pasta. "
  },
  {
    "nombre": "Masa vieja",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Agua",
      "Azucar",
      "Sal",
      "Levadura"
    ],
    "tecnica": [
      "Colocar una fuente con la levadura por fuera, el azucar, sal y agua dentro de la fuente.",
      "Ir incorporando poco a poco los ingredientes.",
      "Al final se incorpora la levadura.",
      "Amasar hasta integrar.",
      "Se deja reposar por 1 dia en el refrigerador cubierta con aceite, en un recipiente o en una bolsa de plastico."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azucar",
      "harina",
      "levadura",
      "masa",
      "sal",
      "vieja"
    ],
    "contenido": "Masa vieja Masas Básicas Harina Agua Azucar Sal Levadura Colocar una fuente con la levadura por fuera, el azucar, sal y agua dentro de la fuente. Ir incorporando poco a poco los ingredientes. Al final se incorpora la levadura. Amasar hasta integrar. Se deja reposar por 1 dia en el refrigerador cubierta con aceite, en un recipiente o en una bolsa de plastico. "
  },
  {
    "nombre": "Masa de dona",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Azucar",
      "Mantequilla",
      "Levadura",
      "Sal",
      "Huevo",
      "Leche"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: azucar, sal, y huevo.",
      "Amasar hasta obtener un premezclado, agregar la leche poco hasta integrar bien.",
      "Agregar mantequilla poco a poco hasta incorporar.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Dejar reposar en charola previamente engrasada con aceite por 1 hr., tornear y refrigerar por 1 día."
    ],
    "recomendaciones": [
      "Agregar la leche poco a poco para evitar que quede muy aguada.",
      "La masa debe permanecer en el refrigerador máx. 2 días."
    ],
    "keywords": [
      "azucar",
      "dona",
      "harina",
      "huevo",
      "leche",
      "levadura",
      "mantequilla",
      "masa",
      "sal"
    ],
    "contenido": "Masa de dona Masas Básicas Harina Azucar Mantequilla Levadura Sal Huevo Leche Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro de la fuente: azucar, sal, y huevo. Amasar hasta obtener un premezclado, agregar la leche poco hasta integrar bien. Agregar mantequilla poco a poco hasta incorporar. Amasar hasta obtener una masa suave, lisa y elástica. Dejar reposar en charola previamente engrasada con aceite por 1 hr., tornear y refrigerar por 1 día. Agregar la leche poco a poco para evitar que quede muy aguada. La masa debe permanecer en el refrigerador máx. 2 días."
  },
  {
    "nombre": "Masa muerta",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Leche en polvo",
      "Azúcar",
      "Manteca vegetal",
      "Agua",
      "Huevo para barnizar",
      "Colores vegetales"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina.",
      "Incorporar al centro sal, leche en polvo, azúcar y manteca vegetal.",
      "Incorporar hasta obtener un premezclado e incorporar el agua poco a poco.",
      "Amasar hasta obtener una masa lisa.",
      "Dejar reposar durante 5 minutos.",
      "Dar forma deseada y barnizar 2 veces dejando secar entre cada una.",
      "Colorear un poco de masa y decorar al gusto.",
      "Hornear a 180°C durante 25 minutos."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azúcar",
      "colores vegetales",
      "harina",
      "huevo para barnizar",
      "leche en polvo",
      "manteca vegetal",
      "masa",
      "muerta",
      "sal"
    ],
    "contenido": "Masa muerta Masas Básicas Harina Sal Leche en polvo Azúcar Manteca vegetal Agua Huevo para barnizar Colores vegetales Identificar y pesar los ingredientes. Hacer una fuente con la harina. Incorporar al centro sal, leche en polvo, azúcar y manteca vegetal. Incorporar hasta obtener un premezclado e incorporar el agua poco a poco. Amasar hasta obtener una masa lisa. Dejar reposar durante 5 minutos. Dar forma deseada y barnizar 2 veces dejando secar entre cada una. Colorear un poco de masa y decorar al gusto. Hornear a 180°C durante 25 minutos. "
  },
  {
    "nombre": "Masa de bolillo",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Levadura",
      "Manteca vegetal",
      "Azúcar",
      "Agua",
      "Leche en polvo"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Agregar al centro de la fuente: sal, azúcar, manteca vegetal y agua.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el resto del agua con la levadura.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Fermentar hasta que doble su volumen.",
      "Dividir en porciones de 60 grs, bolear y dar forma de bolillo.",
      "Cortar con navaja la parte del medio.",
      "Barnizar con leche y hornear a 220°C durante 20-25 minutos.",
      "Colocar un recipiente con agua dentro del horno mientras se hornea el pan."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azúcar",
      "bolillo",
      "harina",
      "leche en polvo",
      "levadura",
      "manteca vegetal",
      "masa",
      "sal"
    ],
    "contenido": "Masa de bolillo Masas Básicas Harina Sal Levadura Manteca vegetal Azúcar Agua Leche en polvo Identificar y pesar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Agregar al centro de la fuente: sal, azúcar, manteca vegetal y agua. Amasar hasta obtener un premezclado. Agregar el resto del agua con la levadura. Amasar hasta obtener una masa suave, lisa y elástica. Fermentar hasta que doble su volumen. Dividir en porciones de 60 grs, bolear y dar forma de bolillo. Cortar con navaja la parte del medio. Barnizar con leche y hornear a 220°C durante 20-25 minutos. Colocar un recipiente con agua dentro del horno mientras se hornea el pan. "
  },
  {
    "nombre": "Masa para danés",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Mantequilla",
      "Levadura",
      "Agua",
      "Flex azul",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: azúcar, huevo y sal.",
      "Mezclar hasta obtener un premezclado.",
      "Agregar el agua poco a poco, hasta obtener una masa semielástica.",
      "Extender la masa formando un rectángulo de aproximadamente 30 cm x 15 cm.",
      "Esparcir el flex azul sobre la masa y doblar en 3 partes iguales.",
      "Extender con la llave o unión a la derecha, triplicando el ancho.",
      "Doblar en 3 partes iguales y repetir la operación 2 veces más."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azúcar",
      "danés",
      "flex azul",
      "harina",
      "huevo",
      "levadura",
      "mantequilla",
      "masa",
      "para",
      "sal"
    ],
    "contenido": "Masa para danés Masas Básicas Harina Azúcar Sal Mantequilla Levadura Agua Flex azul Huevo Identificar y pesar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Incorporar al centro de la fuente: azúcar, huevo y sal. Mezclar hasta obtener un premezclado. Agregar el agua poco a poco, hasta obtener una masa semielástica. Extender la masa formando un rectángulo de aproximadamente 30 cm x 15 cm. Esparcir el flex azul sobre la masa y doblar en 3 partes iguales. Extender con la llave o unión a la derecha, triplicando el ancho. Doblar en 3 partes iguales y repetir la operación 2 veces más. "
  },
  {
    "nombre": "Masa para savarín",
    "categoria": "Masas Básicas",
    "urlCategoria": "categorias/masas-basicas.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Mantequilla",
      "Leche en polvo",
      "Levadura",
      "Huevo",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: azúcar, sal, leche en polvo y huevo.",
      "Amasar hasta obtener un premezclado.",
      "Incorporar el agua poco a poco y la levadura, amasar hasta obtener una masa suave, lisa y elástica.",
      "Incorporar la mantequilla poco a poco.",
      "Colocar la masa en un molde de rosca previamente engrasado y enharinado.",
      "Dejar fermentar hasta que se llene el molde.",
      "Hornear a 200°C durante 15 minutos.",
      "Desmoldar y dejar enfriar."
    ],
    "recomendaciones": [
      "Cuidar y no golpear el molde con la masa fermentada.",
      "Conservación de 1 a 2 semanas en refrigeración."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "harina",
      "huevo",
      "leche en polvo",
      "levadura",
      "mantequilla",
      "masa",
      "para",
      "sal",
      "savarín"
    ],
    "contenido": "Masa para savarín Masas Básicas Harina Azúcar Sal Mantequilla Leche en polvo Levadura Huevo Agua Identificar y pesar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Incorporar al centro de la fuente: azúcar, sal, leche en polvo y huevo. Amasar hasta obtener un premezclado. Incorporar el agua poco a poco y la levadura, amasar hasta obtener una masa suave, lisa y elástica. Incorporar la mantequilla poco a poco. Colocar la masa en un molde de rosca previamente engrasado y enharinado. Dejar fermentar hasta que se llene el molde. Hornear a 200°C durante 15 minutos. Desmoldar y dejar enfriar. Cuidar y no golpear el molde con la masa fermentada. Conservación de 1 a 2 semanas en refrigeración."
  },
  {
    "nombre": "Danesas",
    "categoria": "Masas Laminadas",
    "urlCategoria": "categorias/masas-laminadas.html",
    "ingredientes": [
      "Masa de cuerno",
      "Crema pastelera",
      "Nuez picada",
      "Pasas",
      "Ron",
      "Huevo",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la pasta del refrigerador.",
      "Extender la pasta en forma rectangular de 25 cm de ancho por 3 mm. de grosor.",
      "Esparcir crema pastelera ligeramente dejando una pestaña en la parte de abajo.",
      "Esparcir la fruta sobre la crema pastelera.",
      "Enrollar de arriba hacia abajo, e ir apretando para evitar que se salga la fruta.",
      "Cortar porciones de 2 cm de ancho y jalar la parte que no tiene crema y colocar por abajo.",
      "Poner sobre charola negra y dejar fermentar.",
      "Barnizar con huevo y dejar secar.",
      "Hornear a 200°C durante 25 min.",
      "Dejar enfriar, brillar y presentar producto."
    ],
    "recomendaciones": [
      "La capa de crema debe ser ligera para evitar que se salga al momento de cortar.",
      "Escurrir la fruta antes de esparcirla.",
      "Apretar bien a la hora de enrollar para evitar que se deforme."
    ],
    "keywords": [
      "brillo",
      "crema pastelera",
      "danesas",
      "huevo",
      "masa de cuerno",
      "nuez picada",
      "pasas",
      "ron"
    ],
    "contenido": "Danesas Masas Laminadas Masa de cuerno Crema pastelera Nuez picada Pasas Ron Huevo Brillo Identificar y preparar componentes. Sacar la pasta del refrigerador. Extender la pasta en forma rectangular de 25 cm de ancho por 3 mm. de grosor. Esparcir crema pastelera ligeramente dejando una pestaña en la parte de abajo. Esparcir la fruta sobre la crema pastelera. Enrollar de arriba hacia abajo, e ir apretando para evitar que se salga la fruta. Cortar porciones de 2 cm de ancho y jalar la parte que no tiene crema y colocar por abajo. Poner sobre charola negra y dejar fermentar. Barnizar con huevo y dejar secar. Hornear a 200°C durante 25 min. Dejar enfriar, brillar y presentar producto. La capa de crema debe ser ligera para evitar que se salga al momento de cortar. Escurrir la fruta antes de esparcirla. Apretar bien a la hora de enrollar para evitar que se deforme."
  },
  {
    "nombre": "Torzadas",
    "categoria": "Masas Laminadas",
    "urlCategoria": "categorias/masas-laminadas.html",
    "ingredientes": [
      "Masa de cuerno",
      "Nuez picada",
      "Azúcar",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la masa del refrigerador y extenderla a 20 cm de ancho y a un grosor de 3 mm.",
      "Barnizar con huevo y espolvorear la nuez molida a que cubra.",
      "Pasar el rodillo por encima para que pegue la nuez.",
      "Cortar rectángulos de 10 cm de largo por 5 cm de ancho.",
      "Doblar a la mitad y dar un corte al centro, pasar la punta por el centro y sacarla hasta voltearla toda.",
      "Colocar sobre charola negra y dejar fermentar a que doble su volumen.",
      "Hornear a 180°C de 15-20 min.",
      "Dejar enfriar y espolvorear con azúcar granulada."
    ],
    "recomendaciones": [
      "Se pueden hacer las torzadas de diferentes maneras."
    ],
    "keywords": [
      "azúcar",
      "huevo",
      "masa de cuerno",
      "nuez picada",
      "torzadas"
    ],
    "contenido": "Torzadas Masas Laminadas Masa de cuerno Nuez picada Azúcar Huevo Identificar y preparar componentes. Sacar la masa del refrigerador y extenderla a 20 cm de ancho y a un grosor de 3 mm. Barnizar con huevo y espolvorear la nuez molida a que cubra. Pasar el rodillo por encima para que pegue la nuez. Cortar rectángulos de 10 cm de largo por 5 cm de ancho. Doblar a la mitad y dar un corte al centro, pasar la punta por el centro y sacarla hasta voltearla toda. Colocar sobre charola negra y dejar fermentar a que doble su volumen. Hornear a 180°C de 15-20 min. Dejar enfriar y espolvorear con azúcar granulada. Se pueden hacer las torzadas de diferentes maneras."
  },
  {
    "nombre": "Chocolatines",
    "categoria": "Masas Laminadas",
    "urlCategoria": "categorias/masas-laminadas.html",
    "ingredientes": [
      "Masa de cuerno",
      "Harina",
      "Huevo",
      "Chocolatín"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la pasta del refrigerador.",
      "Extender la pasta a lo largo y sacar bandas de 15 cm de ancho por 3 mm de grosor.",
      "Colocar el chocolate en el borde de la pasta dejando 1 cm entre uno y otro.",
      "Cortar y enrollar, y colocar sobre charola negra con la unión hacia abajo.",
      "Dejar fermentar a que doble su volumen.",
      "Barnizar con huevo y dejar secar, barnizar nuevamente y dejar secar.",
      "Hornear a 220°C de 20-25 min."
    ],
    "recomendaciones": [
      "Dejar la unión hacia abajo para evitar que se desenrolle.",
      "Dejar secar bien entre cada barnizado para evitar que salga pinto."
    ],
    "keywords": [
      "chocolatines",
      "chocolatín",
      "harina",
      "huevo",
      "masa de cuerno"
    ],
    "contenido": "Chocolatines Masas Laminadas Masa de cuerno Harina Huevo Chocolatín Identificar y preparar componentes. Sacar la pasta del refrigerador. Extender la pasta a lo largo y sacar bandas de 15 cm de ancho por 3 mm de grosor. Colocar el chocolate en el borde de la pasta dejando 1 cm entre uno y otro. Cortar y enrollar, y colocar sobre charola negra con la unión hacia abajo. Dejar fermentar a que doble su volumen. Barnizar con huevo y dejar secar, barnizar nuevamente y dejar secar. Hornear a 220°C de 20-25 min. Dejar la unión hacia abajo para evitar que se desenrolle. Dejar secar bien entre cada barnizado para evitar que salga pinto."
  },
  {
    "nombre": "Hojaldras",
    "categoria": "Masas Laminadas",
    "urlCategoria": "categorias/masas-laminadas.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Levadura",
      "Huevo",
      "Agua",
      "Flex Azul"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar el agua poco a poco.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el resto del agua.",
      "Amasar hasta obtener una masa lisa y elástica.",
      "Dejar reposar por 5-10 minutos a temperatura ambiente.",
      "Incorporar la materia grasa y dar 3 vueltas.",
      "Guardar en refrigeración por 1 hora.",
      "Extender a un grosor de medio cm y cortar en cuadros de 8x8 cm.",
      "Colocar las puntas al centro y bolear suavemente.",
      "Colocar sobre charolas negras y dejar fermentar de 60-90 minutos.",
      "Hornear a 180°C durante 20 minutos."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azúcar",
      "flex azul",
      "harina",
      "hojaldras",
      "huevo",
      "levadura",
      "sal"
    ],
    "contenido": "Hojaldras Masas Laminadas Harina Azúcar Sal Levadura Huevo Agua Flex Azul Identificar y pesar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Incorporar el agua poco a poco. Amasar hasta obtener un premezclado. Agregar el resto del agua. Amasar hasta obtener una masa lisa y elástica. Dejar reposar por 5-10 minutos a temperatura ambiente. Incorporar la materia grasa y dar 3 vueltas. Guardar en refrigeración por 1 hora. Extender a un grosor de medio cm y cortar en cuadros de 8x8 cm. Colocar las puntas al centro y bolear suavemente. Colocar sobre charolas negras y dejar fermentar de 60-90 minutos. Hornear a 180°C durante 20 minutos. "
  },
  {
    "nombre": "Hojaldre",
    "categoria": "Masas Laminadas",
    "urlCategoria": "categorias/masas-laminadas.html",
    "ingredientes": [
      "Harina",
      "Agua",
      "Sal",
      "Manteca vegetal",
      "Flex rojo"
    ],
    "tecnica": [
      "Mezclar el agua con el azúcar y la sal.",
      "Incorporar la harina y, por último, la manteca previamente acremada.",
      "Batir hasta obtener una mezcla homogénea.",
      "Dejar reposar por 10 minutos.",
      "Extender en forma rectangular y doblar en forma de cartera 3 veces, con un reposo de 10 minutos entre cada vuelta."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "flex rojo",
      "harina",
      "hojaldre",
      "manteca vegetal",
      "sal"
    ],
    "contenido": "Hojaldre Masas Laminadas Harina Agua Sal Manteca vegetal Flex rojo Mezclar el agua con el azúcar y la sal. Incorporar la harina y, por último, la manteca previamente acremada. Batir hasta obtener una mezcla homogénea. Dejar reposar por 10 minutos. Extender en forma rectangular y doblar en forma de cartera 3 veces, con un reposo de 10 minutos entre cada vuelta. "
  },
  {
    "nombre": "Hojaldre envinado",
    "categoria": "Masas Laminadas",
    "urlCategoria": "categorias/masas-laminadas.html",
    "ingredientes": [
      "Harina",
      "Leche en polvo",
      "Brandy",
      "Yema",
      "Sal",
      "Flex rojo",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina.",
      "Agregar al centro: leche, brandy, sal y yema.",
      "Incorporar el agua poco a poco y amasar hasta obtener una masa suave.",
      "Dejar reposar durante 10 minutos.",
      "Extender en forma de cruz, dejando un montículo en el centro.",
      "Suavizar el flex y colocarlo sobre el montículo.",
      "Dar 6 vueltas, dejando reposar 10 minutos entre cada 2 vueltas, cubierta con plástico.",
      "Refrigerar durante 1 día."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "brandy",
      "envinado",
      "flex rojo",
      "harina",
      "hojaldre",
      "leche en polvo",
      "sal",
      "yema"
    ],
    "contenido": "Hojaldre envinado Masas Laminadas Harina Leche en polvo Brandy Yema Sal Flex rojo Agua Identificar y pesar los ingredientes. Hacer una fuente con la harina. Agregar al centro: leche, brandy, sal y yema. Incorporar el agua poco a poco y amasar hasta obtener una masa suave. Dejar reposar durante 10 minutos. Extender en forma de cruz, dejando un montículo en el centro. Suavizar el flex y colocarlo sobre el montículo. Dar 6 vueltas, dejando reposar 10 minutos entre cada 2 vueltas, cubierta con plástico. Refrigerar durante 1 día. "
  },
  {
    "nombre": "Mousse de Fresa",
    "categoria": "Mousses y Bavarois",
    "urlCategoria": "categorias/mousses-bavarois.html",
    "ingredientes": [
      "Yemas",
      "Azucar",
      "Fresas",
      "Grenetina",
      "Brandy",
      "Chantilly",
      "Claras",
      "Azucar cocida"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Hidratar la grenetina en el brandy y ponerla a baño maria.",
      "Licuar las fresas y ponerlas a hervir.",
      "Blanquear las yemas con el azucar y vaciarlas a la pulpa de fresas hirviendo.",
      "Dejar hervir durante 5 min.",
      "Retirar del fuego y agregar la grenetina hidratada.",
      "Batir las claras a punto de nieve.",
      "Agregar el azucar cocida a las claras batidas.",
      "Batir hasta formar un merengue italiano.",
      "Mezclar la crema chantily con el merengue suavemente.",
      "Incorporar las 2 mezclas en forma envolvente."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar",
      "azucar cocida",
      "brandy",
      "chantilly",
      "claras",
      "fresa",
      "fresas",
      "grenetina",
      "mousse",
      "yemas"
    ],
    "contenido": "Mousse de Fresa Mousses y Bavarois Yemas Azucar Fresas Grenetina Brandy Chantilly Claras Azucar cocida Identificar y preparar componentes. Hidratar la grenetina en el brandy y ponerla a baño maria. Licuar las fresas y ponerlas a hervir. Blanquear las yemas con el azucar y vaciarlas a la pulpa de fresas hirviendo. Dejar hervir durante 5 min. Retirar del fuego y agregar la grenetina hidratada. Batir las claras a punto de nieve. Agregar el azucar cocida a las claras batidas. Batir hasta formar un merengue italiano. Mezclar la crema chantily con el merengue suavemente. Incorporar las 2 mezclas en forma envolvente. "
  },
  {
    "nombre": "Bavaroise",
    "categoria": "Mousses y Bavarois",
    "urlCategoria": "categorias/mousses-bavarois.html",
    "ingredientes": [
      "Leche",
      "Azucar",
      "Yemas",
      "Grenetina",
      "Escencia de café",
      "Cobertura",
      "Chantilly"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Hidratar la grenetina y ponerla a baño maría.",
      "Poner a hervir la leche.",
      "Batir las yemas con el azucar a blanquear.",
      "Incorporar las yemas batidas a la leche hirviendo.",
      "Dejar hervir hasta formar una crema inglesa.",
      "Retirar del fuego e incorporar la grenetina.",
      "Agregar el sabor deseado (escencia de café).",
      "Dejar enfriar e incorporar la crema chantilly."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar",
      "bavaroise",
      "chantilly",
      "cobertura",
      "escencia de café",
      "grenetina",
      "leche",
      "yemas"
    ],
    "contenido": "Bavaroise Mousses y Bavarois Leche Azucar Yemas Grenetina Escencia de café Cobertura Chantilly Identificar y preparar componentes. Hidratar la grenetina y ponerla a baño maría. Poner a hervir la leche. Batir las yemas con el azucar a blanquear. Incorporar las yemas batidas a la leche hirviendo. Dejar hervir hasta formar una crema inglesa. Retirar del fuego e incorporar la grenetina. Agregar el sabor deseado (escencia de café). Dejar enfriar e incorporar la crema chantilly. "
  },
  {
    "nombre": "Pastel Bavaroise",
    "categoria": "Mousses y Bavarois",
    "urlCategoria": "categorias/mousses-bavarois.html",
    "ingredientes": [
      "Genoise de chocolate",
      "Bavaroise",
      "Ganache"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Preparar un aro para mousse.",
      "Colocar la capa de genoise dentro del aro.",
      "Vaciar el bavaroise de cafe y refrigerar hasta cuajar.",
      "Vaciar el bavaroise de chocolate y refrigerar hasta cuajar.",
      "Bañar con ganache la superficie.",
      "Desmoldar y presentar en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "bavaroise",
      "ganache",
      "genoise de chocolate",
      "pastel"
    ],
    "contenido": "Pastel Bavaroise Mousses y Bavarois Genoise de chocolate Bavaroise Ganache Identificar y preparar componentes. Preparar un aro para mousse. Colocar la capa de genoise dentro del aro. Vaciar el bavaroise de cafe y refrigerar hasta cuajar. Vaciar el bavaroise de chocolate y refrigerar hasta cuajar. Bañar con ganache la superficie. Desmoldar y presentar en charola con carpeta. "
  },
  {
    "nombre": "Mousse de Mango",
    "categoria": "Mousses y Bavarois",
    "urlCategoria": "categorias/mousses-bavarois.html",
    "ingredientes": [
      "Claras",
      "Azucar",
      "Grenetina",
      "Chantilly",
      "Pulpa de mango",
      "Brillo",
      "Color vegetal amarillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Hidratar grenetina y poner a baño maria.",
      "Cocer el azucar a punto de bola suave(117°C).",
      "Batir las claras a punto de nieve y agregar el azucar cocida.",
      "Batir hasta formar un merengue italiano.",
      "Mezclar la crema chantilly con la pulpa de fruta.",
      "Agregar la grenetina al merengue italiano y batir hasta incorporar.",
      "Incorporar las 2 mezclas suavemente.",
      "Vaciar a un aro previamente forrado.",
      "Refrigerar hasta cuajar.",
      "Brillar y decorar con ganache.",
      "Presentar en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar",
      "brillo",
      "chantilly",
      "claras",
      "color vegetal amarillo",
      "grenetina",
      "mango",
      "mousse",
      "pulpa de mango"
    ],
    "contenido": "Mousse de Mango Mousses y Bavarois Claras Azucar Grenetina Chantilly Pulpa de mango Brillo Color vegetal amarillo Identificar y preparar componentes. Hidratar grenetina y poner a baño maria. Cocer el azucar a punto de bola suave(117°C). Batir las claras a punto de nieve y agregar el azucar cocida. Batir hasta formar un merengue italiano. Mezclar la crema chantilly con la pulpa de fruta. Agregar la grenetina al merengue italiano y batir hasta incorporar. Incorporar las 2 mezclas suavemente. Vaciar a un aro previamente forrado. Refrigerar hasta cuajar. Brillar y decorar con ganache. Presentar en charola con carpeta. "
  },
  {
    "nombre": "Mousse de Camarón",
    "categoria": "Mousses y Bavarois",
    "urlCategoria": "categorias/mousses-bavarois.html",
    "ingredientes": [
      "Mayonesa",
      "Jugo de limón",
      "Perejil picado",
      "Cebolla Cambray picada",
      "Mostaza",
      "Camaron cocido",
      "Crema batida",
      "Grenetina",
      "Sal y pimienta"
    ],
    "tecnica": [
      "Poner a hidratar la grenetina en 60 mls de agua.",
      "Incorporar en un bowl: mayonesa, jugo de limón, perejil, cebolla y mostaza.",
      "Incorporar a la mezcla anterior los camarones desmenuzados.",
      "Agregar la crema previamente montada.",
      "Incorporar la grenetina hidratada.",
      "Mezclar todo muy bien, vertir en un molde apropiado y refrigerar hasta cuajar."
    ],
    "recomendaciones": [],
    "keywords": [
      "camaron cocido",
      "camarón",
      "cebolla cambray picada",
      "crema batida",
      "grenetina",
      "jugo de limón",
      "mayonesa",
      "mostaza",
      "mousse",
      "perejil picado",
      "sal y pimienta"
    ],
    "contenido": "Mousse de Camarón Mousses y Bavarois Mayonesa Jugo de limón Perejil picado Cebolla Cambray picada Mostaza Camaron cocido Crema batida Grenetina Sal y pimienta Poner a hidratar la grenetina en 60 mls de agua. Incorporar en un bowl: mayonesa, jugo de limón, perejil, cebolla y mostaza. Incorporar a la mezcla anterior los camarones desmenuzados. Agregar la crema previamente montada. Incorporar la grenetina hidratada. Mezclar todo muy bien, vertir en un molde apropiado y refrigerar hasta cuajar. "
  },
  {
    "nombre": "Mousse de Atún",
    "categoria": "Mousses y Bavarois",
    "urlCategoria": "categorias/mousses-bavarois.html",
    "ingredientes": [
      "Atún",
      "Cebolla",
      "Apio",
      "Perejil",
      "Pimiento Morrón",
      "Aceitunas",
      "Pepinillos Dulces",
      "Mayonesa",
      "Crema",
      "Salsa inglesa",
      "Grenetina",
      "Sal",
      "Pimienta"
    ],
    "tecnica": [
      "Hidratar la grenetina con 80 mls. de agua.",
      "Desmenuzar el atún.",
      "Incorporar la cebolla, el apio, perejil, pimiento morrón, aceitunas y pepinillos dulces previamente picados.",
      "Agregar la crema y mayonesa, mezclar suavemente.",
      "Sazonar con salsa inglesa, sal y pimienta.",
      "Vertir a un molde.",
      "Refrigerar hasta cuajar."
    ],
    "recomendaciones": [],
    "keywords": [
      "aceitunas",
      "apio",
      "atún",
      "cebolla",
      "crema",
      "grenetina",
      "mayonesa",
      "mousse",
      "pepinillos dulces",
      "perejil",
      "pimienta",
      "pimiento morrón",
      "sal",
      "salsa inglesa"
    ],
    "contenido": "Mousse de Atún Mousses y Bavarois Atún Cebolla Apio Perejil Pimiento Morrón Aceitunas Pepinillos Dulces Mayonesa Crema Salsa inglesa Grenetina Sal Pimienta Hidratar la grenetina con 80 mls. de agua. Desmenuzar el atún. Incorporar la cebolla, el apio, perejil, pimiento morrón, aceitunas y pepinillos dulces previamente picados. Agregar la crema y mayonesa, mezclar suavemente. Sazonar con salsa inglesa, sal y pimienta. Vertir a un molde. Refrigerar hasta cuajar. "
  },
  {
    "nombre": "Mousse de Jamón",
    "categoria": "Mousses y Bavarois",
    "urlCategoria": "categorias/mousses-bavarois.html",
    "ingredientes": [
      "Cebolla",
      "Apio",
      "Harina",
      "Mantequilla",
      "Leche líquida",
      "Crema",
      "Sal",
      "Pimienta",
      "Nuez moscada",
      "Jamón",
      "Crema batida",
      "Grenetina"
    ],
    "tecnica": [
      "Poner a hidratar la grenetina con 80 mls. de agua.",
      "Poner a dorar el harina.",
      "Agregar la mantequilla.",
      "Incorporar la cebolla y el apio.",
      "Agregar la leche y la crema.",
      "Condimentar con sal, pimienta y nuez moscada.",
      "Dejar enfriar.",
      "Incorporar el jamón previamente molido con la crema anterior.",
      "Incorporar la grenetina hidratada.",
      "Agregar la crema previamente batida suavemente.",
      "Vertir a un molde.",
      "Refrigerar hasta cuajar."
    ],
    "recomendaciones": [],
    "keywords": [
      "apio",
      "cebolla",
      "crema",
      "crema batida",
      "grenetina",
      "harina",
      "jamón",
      "leche líquida",
      "mantequilla",
      "mousse",
      "nuez moscada",
      "pimienta",
      "sal"
    ],
    "contenido": "Mousse de Jamón Mousses y Bavarois Cebolla Apio Harina Mantequilla Leche líquida Crema Sal Pimienta Nuez moscada Jamón Crema batida Grenetina Poner a hidratar la grenetina con 80 mls. de agua. Poner a dorar el harina. Agregar la mantequilla. Incorporar la cebolla y el apio. Agregar la leche y la crema. Condimentar con sal, pimienta y nuez moscada. Dejar enfriar. Incorporar el jamón previamente molido con la crema anterior. Incorporar la grenetina hidratada. Agregar la crema previamente batida suavemente. Vertir a un molde. Refrigerar hasta cuajar. "
  },
  {
    "nombre": "Pan de Papa",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Levadura",
      "Margarina",
      "Azucar",
      "Leche en polvo",
      "Sal",
      "Agua",
      "Pure de papa",
      "Huevo para barnizar",
      "Sal y pimienta al gusto"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Agregar al centro de la fuente: margarina, leche en polvo, azucar, sal y el 50% de agua.",
      "Amasar hasta obtener un premezclado.",
      "Incorporar la levadura y el resto del agua, amasar hasta obtener una masa suave, lisa y elástica.",
      "Incorporar el puré de papa previamente previamente condimentado con mantequilla, sal y pimienta.",
      "Pesar y dar forma deseada.",
      "Dejar fermentar hasta que doble su volumen.",
      "Barnizar con huevo y dejar secar.",
      "Hornear a 200 °C durante 20 min."
    ],
    "recomendaciones": [
      "No dejar la masa tan aguada, para evitar que se baje el pan con el peso del puré.",
      "Conservación de 8-10 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "azucar",
      "harina",
      "huevo para barnizar",
      "leche en polvo",
      "levadura",
      "margarina",
      "pan",
      "papa",
      "pure de papa",
      "sal",
      "sal y pimienta al gusto"
    ],
    "contenido": "Pan de Papa Panadería Básica Harina Levadura Margarina Azucar Leche en polvo Sal Agua Pure de papa Huevo para barnizar Sal y pimienta al gusto Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Agregar al centro de la fuente: margarina, leche en polvo, azucar, sal y el 50% de agua. Amasar hasta obtener un premezclado. Incorporar la levadura y el resto del agua, amasar hasta obtener una masa suave, lisa y elástica. Incorporar el puré de papa previamente previamente condimentado con mantequilla, sal y pimienta. Pesar y dar forma deseada. Dejar fermentar hasta que doble su volumen. Barnizar con huevo y dejar secar. Hornear a 200 °C durante 20 min. No dejar la masa tan aguada, para evitar que se baje el pan con el peso del puré. Conservación de 8-10 días envuelto en plástico."
  },
  {
    "nombre": "Tropezienne",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Masa de brioche",
      "Crema mousseline",
      "Cerezas",
      "Almendras fileteadas",
      "Azúcar glass",
      "Huevo para barnizar"
    ],
    "tecnica": [
      "Identificar y preparar los ingredientes.",
      "Engrasar y enharinar un molde redondo.",
      "Bolear la masa de brioche y colocarla en el molde.",
      "Dejar fermentar hasta que doble su volumen.",
      "Barnizar con huevo y espolvorear las almendras fileteadas.",
      "Hornear a 210°C durante 20 minutos.",
      "Dejar enfriar y cortar a la mitad.",
      "Untar crema mousseline y colocar las cerezas sobre una parte del pan.",
      "Cubrir con la otra mitad del pan.",
      "Espolvorear con azúcar glass y presentar el producto."
    ],
    "recomendaciones": [
      "Conservar en refrigeración durante 2-3 días."
    ],
    "keywords": [
      "almendras fileteadas",
      "azúcar glass",
      "cerezas",
      "crema mousseline",
      "huevo para barnizar",
      "masa de brioche",
      "tropezienne"
    ],
    "contenido": "Tropezienne Panadería Básica Masa de brioche Crema mousseline Cerezas Almendras fileteadas Azúcar glass Huevo para barnizar Identificar y preparar los ingredientes. Engrasar y enharinar un molde redondo. Bolear la masa de brioche y colocarla en el molde. Dejar fermentar hasta que doble su volumen. Barnizar con huevo y espolvorear las almendras fileteadas. Hornear a 210°C durante 20 minutos. Dejar enfriar y cortar a la mitad. Untar crema mousseline y colocar las cerezas sobre una parte del pan. Cubrir con la otra mitad del pan. Espolvorear con azúcar glass y presentar el producto. Conservar en refrigeración durante 2-3 días."
  },
  {
    "nombre": "Pie de Elote",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Pasta sablée",
      "Relleno para pie de elote",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Extender la pasta hasta un grosor de 3 mm.",
      "Forrar un molde para pie.",
      "Colocar el relleno y emparejar con una raspa.",
      "Hornear a 180°C durante 20 minutos.",
      "Dejar enfriar y aplicar el brillo.",
      "Presentar el producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "brillo",
      "elote",
      "pasta sablée",
      "pie",
      "relleno para pie de elote"
    ],
    "contenido": "Pie de Elote Panadería Básica Pasta sablée Relleno para pie de elote Brillo Identificar y preparar los componentes. Extender la pasta hasta un grosor de 3 mm. Forrar un molde para pie. Colocar el relleno y emparejar con una raspa. Hornear a 180°C durante 20 minutos. Dejar enfriar y aplicar el brillo. Presentar el producto. "
  },
  {
    "nombre": "Relleno para Pie de Elote",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Mantequilla",
      "Azúcar",
      "Harina",
      "Huevo",
      "Elote"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar mantequilla y azúcar hasta obtener un punto de pomada.",
      "Incorporar el huevo poco a poco y airear.",
      "Incorporar la harina y el elote."
    ],
    "recomendaciones": [
      "Incorporar el huevo poco a poco para evitar que se corte."
    ],
    "keywords": [
      "azúcar",
      "elote",
      "harina",
      "huevo",
      "mantequilla",
      "para",
      "pie",
      "relleno"
    ],
    "contenido": "Relleno para Pie de Elote Panadería Básica Mantequilla Azúcar Harina Huevo Elote Identificar y pesar ingredientes. Acremar mantequilla y azúcar hasta obtener un punto de pomada. Incorporar el huevo poco a poco y airear. Incorporar la harina y el elote. Incorporar el huevo poco a poco para evitar que se corte."
  },
  {
    "nombre": "Masa de Canasta",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Levadura",
      "Leche en polvo",
      "Agua",
      "Mantequilla",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y colocar la levadura por fuera.",
      "Colocar en el centro de la fuente: azúcar, sal, leche en polvo, huevo y el 50% de agua.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Dejar reposar por 5 minutos y dar forma.",
      "Explicación en clase de la formación del trenzado.",
      "Engrasar el molde y hornear a 180-200°C durante 15 minutos.",
      "Dejar enfriar y pegar el asa con caramelo.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 3 días en refrigeración."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "canasta",
      "harina",
      "huevo",
      "leche en polvo",
      "levadura",
      "mantequilla",
      "masa",
      "sal"
    ],
    "contenido": "Masa de Canasta Panadería Básica Harina Azúcar Sal Levadura Leche en polvo Agua Mantequilla Huevo Identificar y pesar los ingredientes. Hacer una fuente con la harina y colocar la levadura por fuera. Colocar en el centro de la fuente: azúcar, sal, leche en polvo, huevo y el 50% de agua. Amasar hasta obtener una masa suave, lisa y elástica. Dejar reposar por 5 minutos y dar forma. Explicación en clase de la formación del trenzado. Engrasar el molde y hornear a 180-200°C durante 15 minutos. Dejar enfriar y pegar el asa con caramelo. Presentar el producto. Conservación de 3 días en refrigeración."
  },
  {
    "nombre": "Canasta",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Masa de canasta",
      "Huevo"
    ],
    "tecnica": [
      "Utilizar un molde para pastel de 15 o 20 cm aproximadamente, engrasándolo por la parte exterior.",
      "Extender la masa con un rodillo y cortar tiras de 2 cm de ancho y 0.5 cm de grosor.",
      "Colocar las tiras sobre el molde engrasado, formando un trenzado en forma de petate hasta cubrir todo el molde.",
      "Barnizar con huevo dos veces, dejando secar entre cada barnizada.",
      "Con la masa restante, formar dos cordones y trenzarlos.",
      "Medir en el molde para ajustar el tamaño adecuado y darle forma de asa.",
      "Aplanar los bordes, barnizar con huevo y hornear a 180°C durante 15 minutos.",
      "Dejar enfriar y desmoldar con cuidado, evitando romper la canasta.",
      "Pegar el asa con caramelo.",
      "Presentar el producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "canasta",
      "huevo",
      "masa de canasta"
    ],
    "contenido": "Canasta Panadería Básica Masa de canasta Huevo Utilizar un molde para pastel de 15 o 20 cm aproximadamente, engrasándolo por la parte exterior. Extender la masa con un rodillo y cortar tiras de 2 cm de ancho y 0.5 cm de grosor. Colocar las tiras sobre el molde engrasado, formando un trenzado en forma de petate hasta cubrir todo el molde. Barnizar con huevo dos veces, dejando secar entre cada barnizada. Con la masa restante, formar dos cordones y trenzarlos. Medir en el molde para ajustar el tamaño adecuado y darle forma de asa. Aplanar los bordes, barnizar con huevo y hornear a 180°C durante 15 minutos. Dejar enfriar y desmoldar con cuidado, evitando romper la canasta. Pegar el asa con caramelo. Presentar el producto. "
  },
  {
    "nombre": "Pan de Canela",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Levadura",
      "Manteca vegetal",
      "Mantequilla",
      "Huevo",
      "Agua",
      "Canela"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar en el centro de la fuente: sal, azúcar, manteca, mantequilla y huevo.",
      "Agregar el 50% del agua y mezclar.",
      "Incorporar el resto del agua y la levadura, amasando hasta obtener una masa manejable.",
      "Incorporar la canela y trabajar hasta integrar completamente.",
      "Pesar porciones de 60 grs.",
      "Bolear y dar la forma deseada.",
      "Colocar sobre una charola negra y hornear a 180°C de 15 a 20 minutos.",
      "Espolvorear con azúcar y canela al salir del horno.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "Espolvorear azúcar y canela justo al salir del horno para mejor adherencia.",
      "Conservación de 1 a 2 semanas cubierto con plástico."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "canela",
      "harina",
      "huevo",
      "levadura",
      "manteca vegetal",
      "mantequilla",
      "pan",
      "sal"
    ],
    "contenido": "Pan de Canela Panadería Básica Harina Azúcar Sal Levadura Manteca vegetal Mantequilla Huevo Agua Canela Identificar y pesar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Incorporar en el centro de la fuente: sal, azúcar, manteca, mantequilla y huevo. Agregar el 50% del agua y mezclar. Incorporar el resto del agua y la levadura, amasando hasta obtener una masa manejable. Incorporar la canela y trabajar hasta integrar completamente. Pesar porciones de 60 grs. Bolear y dar la forma deseada. Colocar sobre una charola negra y hornear a 180°C de 15 a 20 minutos. Espolvorear con azúcar y canela al salir del horno. Presentar el producto. Espolvorear azúcar y canela justo al salir del horno para mejor adherencia. Conservación de 1 a 2 semanas cubierto con plástico."
  },
  {
    "nombre": "Pan poblano",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Masa de bizcocho",
      "Crema pastelera",
      "Nuez",
      "Pasas",
      "Brillo"
    ],
    "tecnica": [
      "Sacar la masa del refrigerador.",
      "Engrasar y enharinar un molde redondo.",
      "Con un rodillo extender la masa rectangular.",
      "Untar la crema pastelera.",
      "Agregar la fruta necesaria.",
      "Enrollar la masa en forma de espiral.",
      "Hacer cortes de 3 cm de ancho.",
      "Colocar los rollitos en todo el molde dejando un espacio de aprox. 1 cm.",
      "Dejar fermentar por 1 hora aproximadamente.",
      "Barnizar con huevo y hornear a 200°C por 15 min aproximadamente."
    ],
    "recomendaciones": [],
    "keywords": [
      "brillo",
      "crema pastelera",
      "masa de bizcocho",
      "nuez",
      "pan",
      "pasas",
      "poblano"
    ],
    "contenido": "Pan poblano Panadería Básica Masa de bizcocho Crema pastelera Nuez Pasas Brillo Sacar la masa del refrigerador. Engrasar y enharinar un molde redondo. Con un rodillo extender la masa rectangular. Untar la crema pastelera. Agregar la fruta necesaria. Enrollar la masa en forma de espiral. Hacer cortes de 3 cm de ancho. Colocar los rollitos en todo el molde dejando un espacio de aprox. 1 cm. Dejar fermentar por 1 hora aproximadamente. Barnizar con huevo y hornear a 200°C por 15 min aproximadamente. "
  },
  {
    "nombre": "Bisquet",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Margarina",
      "Azucar",
      "Sal",
      "Royal",
      "Leche en polvo",
      "Levadura",
      "Huevo",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Mezclar harina y margarina, hasta integrar.",
      "Agregar azucar, sal y royal, mezclar hasta incorporar.",
      "Mezclar en un bowl: leche en polvo, levadura, huevo y agua.",
      "Agregar esta mezcla a la pasta y amasar hasta obtener una pasta homogenea.",
      "Refrigerar durante 30 min aprox.",
      "Dar 2 vueltas y cortar con molde adecuado.",
      "Dejar fermentar y barnizar con huevo 2 veces dejando secar entre cada una de ellas.",
      "Hornear a 200°C por 20 min aprox."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azucar",
      "bisquet",
      "harina",
      "huevo",
      "leche en polvo",
      "levadura",
      "margarina",
      "royal",
      "sal"
    ],
    "contenido": "Bisquet Panadería Básica Harina Margarina Azucar Sal Royal Leche en polvo Levadura Huevo Agua Identificar y pesar ingredientes. Mezclar harina y margarina, hasta integrar. Agregar azucar, sal y royal, mezclar hasta incorporar. Mezclar en un bowl: leche en polvo, levadura, huevo y agua. Agregar esta mezcla a la pasta y amasar hasta obtener una pasta homogenea. Refrigerar durante 30 min aprox. Dar 2 vueltas y cortar con molde adecuado. Dejar fermentar y barnizar con huevo 2 veces dejando secar entre cada una de ellas. Hornear a 200°C por 20 min aprox. "
  },
  {
    "nombre": "Pan de muerto",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Mantequilla",
      "Margarina",
      "Azucar",
      "Sal",
      "Levadura",
      "Huevo",
      "Agua",
      "Leche en polvo",
      "Ralladura de limón",
      "Ralladura de naranja",
      "Escencia de Limón",
      "Escencia de Naranja",
      "Azahar",
      "Masa vieja"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: azucar, sal, leche en polvo.",
      "Amasar hasta obtener un premezclado y agregar la masa vieja.",
      "Seguir amasando hasta integrar obteniendo una masa semi elastica.",
      "Incorporar materia grasa hasta integrar.",
      "Seguir amasando hasta obtener una masa suave, lisa y elastica.",
      "Incorporar las ralladuras y las escencias.",
      "Dejar reposar en charola engrasada con aceite a que doble su volumen.",
      "Ponchar la masa, una vez doblado su volumen, y dividir la masa en dos.",
      "Reservar un poco de masa para hacer los huesitos.",
      "Bolear la masa y dejar en charola negra engrasada.",
      "Con las manos formar los huesitos y colocarlos sobre los panes.",
      "Colocar una bolita de masa en medio.",
      "Dejar fermentar a que doble su volumen.",
      "Barnizar con huevo.",
      "Hornear a 180°C durante 25 min.",
      "Sacar del horno y dejar enfriar.",
      "Ya calientes, colocar mantequilla y azucar espolvoreada."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azahar",
      "azucar",
      "escencia de limón",
      "escencia de naranja",
      "harina",
      "huevo",
      "leche en polvo",
      "levadura",
      "mantequilla",
      "margarina",
      "masa vieja",
      "muerto",
      "pan",
      "ralladura de limón",
      "ralladura de naranja",
      "sal"
    ],
    "contenido": "Pan de muerto Panadería Básica Harina Mantequilla Margarina Azucar Sal Levadura Huevo Agua Leche en polvo Ralladura de limón Ralladura de naranja Escencia de Limón Escencia de Naranja Azahar Masa vieja Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro de la fuente: azucar, sal, leche en polvo. Amasar hasta obtener un premezclado y agregar la masa vieja. Seguir amasando hasta integrar obteniendo una masa semi elastica. Incorporar materia grasa hasta integrar. Seguir amasando hasta obtener una masa suave, lisa y elastica. Incorporar las ralladuras y las escencias. Dejar reposar en charola engrasada con aceite a que doble su volumen. Ponchar la masa, una vez doblado su volumen, y dividir la masa en dos. Reservar un poco de masa para hacer los huesitos. Bolear la masa y dejar en charola negra engrasada. Con las manos formar los huesitos y colocarlos sobre los panes. Colocar una bolita de masa en medio. Dejar fermentar a que doble su volumen. Barnizar con huevo. Hornear a 180°C durante 25 min. Sacar del horno y dejar enfriar. Ya calientes, colocar mantequilla y azucar espolvoreada. "
  },
  {
    "nombre": "Pan de cebolla",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Levadura",
      "Mantequilla",
      "Azucar",
      "Cebolla",
      "Agua",
      "Aceite de olivo",
      "Paprika y Pimienta"
    ],
    "tecnica": [
      "Identificar y preparar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar el centro de la fuente: sal, azucar, mantequilla y el 50% de agua.",
      "Amasar hasta obtener un premezclado.",
      "Incorporar el resto del agua y levadura, y amasar hasta obtener una masa suave, lisa y elástica.",
      "Incorporar la cebolla previamente blanqueada y fría.",
      "Pesar y dar forma deseada.",
      "Condimentar con paprika, pimienta y aceite de olivo.",
      "Dejar fermentar a que doble su volumen.",
      "Hornear a 220°C por 20 a 25 min.",
      "Barnizar saliendo del horno con aceite de olivo.",
      "Dejar enfriar, desmoldar y presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 4-6 días CUBIERTO EN PLÁSTICO."
    ],
    "keywords": [
      "aceite de olivo",
      "agua",
      "azucar",
      "cebolla",
      "harina",
      "levadura",
      "mantequilla",
      "pan",
      "paprika y pimienta",
      "sal"
    ],
    "contenido": "Pan de cebolla Panadería Básica Harina Sal Levadura Mantequilla Azucar Cebolla Agua Aceite de olivo Paprika y Pimienta Identificar y preparar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Incorporar el centro de la fuente: sal, azucar, mantequilla y el 50% de agua. Amasar hasta obtener un premezclado. Incorporar el resto del agua y levadura, y amasar hasta obtener una masa suave, lisa y elástica. Incorporar la cebolla previamente blanqueada y fría. Pesar y dar forma deseada. Condimentar con paprika, pimienta y aceite de olivo. Dejar fermentar a que doble su volumen. Hornear a 220°C por 20 a 25 min. Barnizar saliendo del horno con aceite de olivo. Dejar enfriar, desmoldar y presentar producto. Conservación de 4-6 días CUBIERTO EN PLÁSTICO."
  },
  {
    "nombre": "Pan de chorizo",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Azucar",
      "Mantequilla",
      "Levadura",
      "Agua",
      "Chorizo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: sal, azucar, mantequilla y el 50% de agua.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el resto del agua y la levadura, amasar hasta obtener una masa suave, lisa y elástica.",
      "Incorporar el chorizo previamente desgrasado y frio.",
      "Pesar y dar forma deseada.",
      "Dejar fermentar a que doble su volumen.",
      "Hornear de 215°C a 220°C durante 25 min.",
      "Barnizar con mantequilla saliendo del horno.",
      "Dejar enfriar y presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azucar",
      "chorizo",
      "harina",
      "levadura",
      "mantequilla",
      "pan",
      "sal"
    ],
    "contenido": "Pan de chorizo Panadería Básica Harina Sal Azucar Mantequilla Levadura Agua Chorizo Identificar y preparar componentes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro de la fuente: sal, azucar, mantequilla y el 50% de agua. Amasar hasta obtener un premezclado. Agregar el resto del agua y la levadura, amasar hasta obtener una masa suave, lisa y elástica. Incorporar el chorizo previamente desgrasado y frio. Pesar y dar forma deseada. Dejar fermentar a que doble su volumen. Hornear de 215°C a 220°C durante 25 min. Barnizar con mantequilla saliendo del horno. Dejar enfriar y presentar producto. "
  },
  {
    "nombre": "Pan de tocino",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Leche en polvo",
      "Levadura",
      "Margarina",
      "Tocino",
      "Azucar",
      "Agua",
      "Huevo para barnizar"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro: sal, leche, margarina, malta y el 50% de agua.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Agregar el tocino previamente desgrasado y amasar hasta incorporar.",
      "Dar forma deseada y dejar que doble su volumen.",
      "Barnizar con huevo y dejar secar.",
      "Hornear a 220°C durante 25 min."
    ],
    "recomendaciones": [
      "Conservación de 6-8 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "azucar",
      "harina",
      "huevo para barnizar",
      "leche en polvo",
      "levadura",
      "margarina",
      "pan",
      "sal",
      "tocino"
    ],
    "contenido": "Pan de tocino Panadería Básica Harina Sal Leche en polvo Levadura Margarina Tocino Azucar Agua Huevo para barnizar Identificar y preparar componentes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro: sal, leche, margarina, malta y el 50% de agua. Amasar hasta obtener una masa suave, lisa y elástica. Agregar el tocino previamente desgrasado y amasar hasta incorporar. Dar forma deseada y dejar que doble su volumen. Barnizar con huevo y dejar secar. Hornear a 220°C durante 25 min. Conservación de 6-8 días envuelto en plástico."
  },
  {
    "nombre": "Panqué de naranja",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Huevo",
      "Mantequilla",
      "Margarina",
      "Royal",
      "Maizena",
      "Naranja → Una para jugo y otra para ralladura"
    ],
    "tecnica": [
      "Acremar la materia grasa y el azúcar hasta blanquear.",
      "Agregar las yemas poco a poco hasta integrar bien.",
      "Incorporar la harina, el royal y la maizena.",
      "Agregar el jugo de naranja y la ralladura.",
      "Incorporar las claras hasta integrar bien.",
      "Verter en un molde engrasado y enharinado.",
      "Hornear a 180°C durante 40 minutos."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar",
      "harina",
      "huevo",
      "maizena",
      "mantequilla",
      "margarina",
      "naranja",
      "naranja → una para jugo y otra para ralladura",
      "panqué",
      "royal"
    ],
    "contenido": "Panqué de naranja Panadería Básica Harina Azúcar Huevo Mantequilla Margarina Royal Maizena Naranja → Una para jugo y otra para ralladura Acremar la materia grasa y el azúcar hasta blanquear. Agregar las yemas poco a poco hasta integrar bien. Incorporar la harina, el royal y la maizena. Agregar el jugo de naranja y la ralladura. Incorporar las claras hasta integrar bien. Verter en un molde engrasado y enharinado. Hornear a 180°C durante 40 minutos. "
  },
  {
    "nombre": "Rebanadas",
    "categoria": "Panadería Básica",
    "urlCategoria": "categorias/panaderia-basica.html",
    "ingredientes": [
      "Masa de bizcocho",
      "Mantequilla",
      "Azúcar"
    ],
    "tecnica": [
      "Sacar la masa del refrigerador y dar forma ovalada.",
      "Colocar sobre una charola negra y dejar que fermente hasta que doble su volumen.",
      "Hornear a 200°C durante 20 minutos.",
      "Dejar enfriar.",
      "Rebanar el pan.",
      "Cubrir la superficie con mantequilla y espolvorear con azúcar."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar",
      "mantequilla",
      "masa de bizcocho",
      "rebanadas"
    ],
    "contenido": "Rebanadas Panadería Básica Masa de bizcocho Mantequilla Azúcar Sacar la masa del refrigerador y dar forma ovalada. Colocar sobre una charola negra y dejar que fermente hasta que doble su volumen. Hornear a 200°C durante 20 minutos. Dejar enfriar. Rebanar el pan. Cubrir la superficie con mantequilla y espolvorear con azúcar. "
  },
  {
    "nombre": "Pan español",
    "categoria": "Panadería Internacional",
    "urlCategoria": "categorias/panaderia-internacional.html",
    "ingredientes": [
      "Harina",
      "Manteca vegetal",
      "Sal",
      "Azúcar",
      "Levadura",
      "Leche en polvo",
      "Agua",
      "Leche Líquida, para barnizar"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Colocar al centro de la fuente: manteca vegetal, sal, azúcar, leche en polvo y el 50% de agua.",
      "Incorporar hasta obtener un premezclado.",
      "Agregar el resto del agua con la levadura.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Dejar reposar durante 5 min.",
      "Pesar porciones 60 grs. y dar forma deseada.",
      "Colocar en charola negra y dejar fermentar a que doble su volumen.",
      "Barnizar con leche y dejar secar.",
      "Hornear a 200°C durante 20 min.",
      "Presentar producto."
    ],
    "recomendaciones": [
      "No dejar la masa tan aguada; para evitar que se pierda la figura.",
      "No ocupar demasiada harina para evitar que se reseque."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "español",
      "harina",
      "leche en polvo",
      "leche líquida, para barnizar",
      "levadura",
      "manteca vegetal",
      "pan",
      "sal"
    ],
    "contenido": "Pan español Panadería Internacional Harina Manteca vegetal Sal Azúcar Levadura Leche en polvo Agua Leche Líquida, para barnizar Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Colocar al centro de la fuente: manteca vegetal, sal, azúcar, leche en polvo y el 50% de agua. Incorporar hasta obtener un premezclado. Agregar el resto del agua con la levadura. Amasar hasta obtener una masa suave, lisa y elástica. Dejar reposar durante 5 min. Pesar porciones 60 grs. y dar forma deseada. Colocar en charola negra y dejar fermentar a que doble su volumen. Barnizar con leche y dejar secar. Hornear a 200°C durante 20 min. Presentar producto. No dejar la masa tan aguada; para evitar que se pierda la figura. No ocupar demasiada harina para evitar que se reseque."
  },
  {
    "nombre": "Pan alemán",
    "categoria": "Panadería Internacional",
    "urlCategoria": "categorias/panaderia-internacional.html",
    "ingredientes": [
      "Harina",
      "Harina integral",
      "Harina de centeno",
      "Sal",
      "Azúcar",
      "Levadura",
      "Mantequilla",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con las harinas y la levadura por fuera.",
      "Incorporar al centro de la fuente: la sal, mantequilla, azúcar y el 50% del agua.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el resto del agua con la levadura.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Dar forma deseada y colocar sobre una charola negra.",
      "Dejar fermentar hasta que doble su volumen.",
      "Barnizar con agua, decorar con ajonjolí y hacer cortes con navaja.",
      "Hornear a 225°C durante 25 min.",
      "Dejar enfriar y presentar producto."
    ],
    "recomendaciones": [
      "Cortar con la navaja sezgada para evitar que se baje.",
      "Conservación de 5-7 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "alemán",
      "azúcar",
      "harina",
      "harina de centeno",
      "harina integral",
      "levadura",
      "mantequilla",
      "pan",
      "sal"
    ],
    "contenido": "Pan alemán Panadería Internacional Harina Harina integral Harina de centeno Sal Azúcar Levadura Mantequilla Agua Identificar y pesar ingredientes. Hacer una fuente con las harinas y la levadura por fuera. Incorporar al centro de la fuente: la sal, mantequilla, azúcar y el 50% del agua. Amasar hasta obtener un premezclado. Agregar el resto del agua con la levadura. Amasar hasta obtener una masa suave, lisa y elástica. Dar forma deseada y colocar sobre una charola negra. Dejar fermentar hasta que doble su volumen. Barnizar con agua, decorar con ajonjolí y hacer cortes con navaja. Hornear a 225°C durante 25 min. Dejar enfriar y presentar producto. Cortar con la navaja sezgada para evitar que se baje. Conservación de 5-7 días envuelto en plástico."
  },
  {
    "nombre": "Danés",
    "categoria": "Panadería Internacional",
    "urlCategoria": "categorias/panaderia-internacional.html",
    "ingredientes": [
      "Harina",
      "Huevo",
      "Agua",
      "Levadura",
      "Sal",
      "Azúcar",
      "Margarina",
      "Margarina feite azul para empastar"
    ],
    "tecnica": [
      "Mezclar todos los ingredientes en la batidora por aproximadamente 10 minutos, hasta que la masa se despegue del cazo.",
      "Dejar reposar hasta que doble su volumen.",
      "Extender la masa en forma de rectángulo.",
      "Dar 3 vueltas y dejar reposar."
    ],
    "recomendaciones": [
      "No se especificaron recomendaciones para esta receta."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "danés",
      "harina",
      "huevo",
      "levadura",
      "margarina",
      "margarina feite azul para empastar",
      "sal"
    ],
    "contenido": "Danés Panadería Internacional Harina Huevo Agua Levadura Sal Azúcar Margarina Margarina feite azul para empastar Mezclar todos los ingredientes en la batidora por aproximadamente 10 minutos, hasta que la masa se despegue del cazo. Dejar reposar hasta que doble su volumen. Extender la masa en forma de rectángulo. Dar 3 vueltas y dejar reposar. No se especificaron recomendaciones para esta receta."
  },
  {
    "nombre": "Piedra o Ladrillo",
    "categoria": "Panadería Internacional",
    "urlCategoria": "categorias/panaderia-internacional.html",
    "ingredientes": [
      "Pan",
      "Harina",
      "Royal",
      "Levadura",
      "Azúcar",
      "Margarina/mantequilla",
      "Canela en polvo",
      "Agua",
      "Cocoa"
    ],
    "tecnica": [
      "Amasar todos los ingredientes en la batidora por aproximadamente 10 minutos.",
      "Opcionalmente, se pueden agregar pasas o nueces."
    ],
    "recomendaciones": [
      "No se especificaron recomendaciones para esta receta."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "canela en polvo",
      "cocoa",
      "harina",
      "ladrillo",
      "levadura",
      "margarina/mantequilla",
      "pan",
      "piedra",
      "royal"
    ],
    "contenido": "Piedra o Ladrillo Panadería Internacional Pan Harina Royal Levadura Azúcar Margarina/mantequilla Canela en polvo Agua Cocoa Amasar todos los ingredientes en la batidora por aproximadamente 10 minutos. Opcionalmente, se pueden agregar pasas o nueces. No se especificaron recomendaciones para esta receta."
  },
  {
    "nombre": "Pan de queso",
    "categoria": "Panadería Salada",
    "urlCategoria": "categorias/panaderia-salada.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Mantequilla",
      "Sal",
      "Leche",
      "Levadura",
      "Queso manchego"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: el azúcar, sal, mantequilla y el 50% de la leche.",
      "Amasar hasta obtener un premezclado e incorporar el resto de la leche y seguir amasando; hasta obtener una masa suave, lisa y elástica.",
      "Dejar reposar durante 5 min.",
      "Extender la masa en forma rectangular, esparcir el queso previamente rallado.",
      "Enrollar de arriba hcia abajo y cortar porciones de 2 cm. aprox.",
      "Colocar sobre el molde previamente engrasado.",
      "Dejar fermentar para que doble su volumen y hornear a 215°C de 20 a 25 min.",
      "Barnizar con mantequilla, dejar enfriar, desmoldar y presentar el producto."
    ],
    "recomendaciones": [
      "Al momento de enrollar, apretar bien para evitar que se salga el queso, sellar los rollos por abajo para evitar que se pegue.",
      "La masa debe estar firme para evitar que se pegue a la hora de extenderla con el rodillo."
    ],
    "keywords": [
      "azúcar",
      "harina",
      "leche",
      "levadura",
      "mantequilla",
      "pan",
      "queso",
      "queso manchego",
      "sal"
    ],
    "contenido": "Pan de queso Panadería Salada Harina Azúcar Mantequilla Sal Leche Levadura Queso manchego Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro de la fuente: el azúcar, sal, mantequilla y el 50% de la leche. Amasar hasta obtener un premezclado e incorporar el resto de la leche y seguir amasando; hasta obtener una masa suave, lisa y elástica. Dejar reposar durante 5 min. Extender la masa en forma rectangular, esparcir el queso previamente rallado. Enrollar de arriba hcia abajo y cortar porciones de 2 cm. aprox. Colocar sobre el molde previamente engrasado. Dejar fermentar para que doble su volumen y hornear a 215°C de 20 a 25 min. Barnizar con mantequilla, dejar enfriar, desmoldar y presentar el producto. Al momento de enrollar, apretar bien para evitar que se salga el queso, sellar los rollos por abajo para evitar que se pegue. La masa debe estar firme para evitar que se pegue a la hora de extenderla con el rodillo."
  },
  {
    "nombre": "Pan Pico de Gallo",
    "categoria": "Panadería Salada",
    "urlCategoria": "categorias/panaderia-salada.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Azúcar",
      "Margarina",
      "Levadura",
      "Agua",
      "Cebolla",
      "Jitomate",
      "Cilantro",
      "Limón",
      "Chile",
      "Aceite"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro azúcar, sal, margarina y al 50% de agua.",
      "Amasar hasta obtener un premezclado e incorporar el resto del agua y la levadura.",
      "Agregar la cebolla con el jitomate, jugo de limón y chile previamente picado.",
      "Pesar y dar forma deseada.",
      "Dejar fermentar hasta que doble su volumen.",
      "Barnizar suavemente con el aceite.",
      "Hornear a 210°C durante 25 min.",
      "Desmoldar y presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 3 días envuelto en plástico."
    ],
    "keywords": [
      "aceite",
      "agua",
      "azúcar",
      "cebolla",
      "chile",
      "cilantro",
      "gallo",
      "harina",
      "jitomate",
      "levadura",
      "limón",
      "margarina",
      "pan",
      "pico",
      "sal"
    ],
    "contenido": "Pan Pico de Gallo Panadería Salada Harina Sal Azúcar Margarina Levadura Agua Cebolla Jitomate Cilantro Limón Chile Aceite Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro azúcar, sal, margarina y al 50% de agua. Amasar hasta obtener un premezclado e incorporar el resto del agua y la levadura. Agregar la cebolla con el jitomate, jugo de limón y chile previamente picado. Pesar y dar forma deseada. Dejar fermentar hasta que doble su volumen. Barnizar suavemente con el aceite. Hornear a 210°C durante 25 min. Desmoldar y presentar producto. Conservación de 3 días envuelto en plástico."
  },
  {
    "nombre": "Pizza",
    "categoria": "Panadería Salada",
    "urlCategoria": "categorias/panaderia-salada.html",
    "ingredientes": [
      "Masa de pizza",
      "Salsa roja",
      "Jamón",
      "Queso manchego",
      "Piña en almíbar"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta en forma redonda a un grosor de 4 mm.",
      "Colocarle salsa roja en toda la superficie.",
      "Agregar el relleno.",
      "Hornear a 180°C durante 20 min."
    ],
    "recomendaciones": [],
    "keywords": [
      "jamón",
      "masa de pizza",
      "pizza",
      "piña en almíbar",
      "queso manchego",
      "salsa roja"
    ],
    "contenido": "Pizza Panadería Salada Masa de pizza Salsa roja Jamón Queso manchego Piña en almíbar Identificar y preparar componentes. Extender la pasta en forma redonda a un grosor de 4 mm. Colocarle salsa roja en toda la superficie. Agregar el relleno. Hornear a 180°C durante 20 min. "
  },
  {
    "nombre": "Lasaña Casera — Alito al Sazón",
    "categoria": "Panadería Salada",
    "urlCategoria": "categorias/panaderia-salada.html",
    "ingredientes": [
      "Mantequilla",
      "Aceite de oliva",
      "Cebolla picada finamente",
      "Zanahoria grande rallada",
      "Ajo picado",
      "Carne molida de pulpa",
      "Tomate triturado",
      "Agua",
      "Sal y pimienta",
      "Orégano",
      "Paprika y pasta de tomate",
      "Mantequilla",
      "Harina",
      "Leche",
      "Sal y pimienta",
      "Nuez moscada",
      "Pasta para lasaña NO precocida",
      "Agua bien caliente",
      "Queso Chihuahua y asadero mezclados",
      "Queso parmesano opcional"
    ],
    "tecnica": [
      "Separar la mantequilla: 50-60 g para la bechamel y 30 g para la carne.",
      "Sofrito: En un sartén, agregar un toque de aceite de oliva y los 30 g de mantequilla. Sofreír primero la cebolla y la zanahoria rallada, luego el ajo. Añadir la carne molida y dorar. Reservar.",
      "Bechamel: En una olla aparte, derretir los 50-60 g de mantequilla, agregar la misma cantidad de harina y dorar batiendo con globo. Incorporar los 750 ml de leche en dos partes, sal y pimienta. Batir hasta espesar y terminar con un toque de nuez moscada.",
      "Terminar el relleno de carne: Cuando la carne y verdura no tengan líquido, agregar las 2 latas de tomate triturado y 1 lata de agua, sal y pimienta. Dejar que llegue a hervor a fuego bajo (debe quedar líquida, no espesa). Mover ocasionalmente por 10 minutes. Apagar y agregar el orégano al final.",
      "Preparar la pasta: Sumergir la pasta no precocida en agua bien caliente durante 15 minutos (no hervir) y separar las piezas.",
      "Precalentar el horno a 180 °C.",
      "Preparar el molde: Extraer un poco de jugo de la carne y aplicarlo en la base del refractario de vidrio.",
      "Armar las capas (3 veces): Capa de pasta, carne con su jugo, bechamel y mezcla de quesos (Chihuahua + asadero).",
      "Capa final (4ª): Solo pasta, bechamel, mezcla de quesos y parmesano opcional.",
      "Cubrir con papel aluminio, dejando espacio de aire arriba para que no se pegue al queso.",
      "Hornear durante 40 minutos cubierto.",
      "Gratinar: Retirar el aluminio, subir a la parte alta del horno y dejar 10 minutos más solo para dorar el queso.",
      "Reposo: Dejar reposar 20 minutos antes de cortar (innegociable para que no se desmorone)."
    ],
    "recomendaciones": [
      "La bechamel es clave para dar consistencia y evitar que la lasaña se desmorone al servir.",
      "El reposo de 20 minutos antes de cortar es innegociable.",
      "Usa pasta no precocida remojada en agua bien caliente para un mejor resultado.",
      "Si la salsa de carne espesa demasiado al hervir, la lasaña quedará seca. Debe quedar líquida antes de montar."
    ],
    "keywords": [
      "aceite de oliva",
      "agua",
      "agua bien caliente",
      "ajo picado",
      "alito",
      "carne molida de pulpa",
      "casera",
      "cebolla picada finamente",
      "harina",
      "lasaña",
      "leche",
      "mantequilla",
      "nuez moscada",
      "orégano",
      "paprika y pasta de tomate",
      "pasta para lasaña no precocida",
      "queso chihuahua y asadero mezclados",
      "queso parmesano opcional",
      "sal y pimienta",
      "sazón",
      "tomate triturado",
      "zanahoria grande rallada"
    ],
    "contenido": "Lasaña Casera — Alito al Sazón Panadería Salada Mantequilla Aceite de oliva Cebolla picada finamente Zanahoria grande rallada Ajo picado Carne molida de pulpa Tomate triturado Agua Sal y pimienta Orégano Paprika y pasta de tomate Mantequilla Harina Leche Sal y pimienta Nuez moscada Pasta para lasaña NO precocida Agua bien caliente Queso Chihuahua y asadero mezclados Queso parmesano opcional Separar la mantequilla: 50-60 g para la bechamel y 30 g para la carne. Sofrito: En un sartén, agregar un toque de aceite de oliva y los 30 g de mantequilla. Sofreír primero la cebolla y la zanahoria rallada, luego el ajo. Añadir la carne molida y dorar. Reservar. Bechamel: En una olla aparte, derretir los 50-60 g de mantequilla, agregar la misma cantidad de harina y dorar batiendo con globo. Incorporar los 750 ml de leche en dos partes, sal y pimienta. Batir hasta espesar y terminar con un toque de nuez moscada. Terminar el relleno de carne: Cuando la carne y verdura no tengan líquido, agregar las 2 latas de tomate triturado y 1 lata de agua, sal y pimienta. Dejar que llegue a hervor a fuego bajo (debe quedar líquida, no espesa). Mover ocasionalmente por 10 minutes. Apagar y agregar el orégano al final. Preparar la pasta: Sumergir la pasta no precocida en agua bien caliente durante 15 minutos (no hervir) y separar las piezas. Precalentar el horno a 180 °C. Preparar el molde: Extraer un poco de jugo de la carne y aplicarlo en la base del refractario de vidrio. Armar las capas (3 veces): Capa de pasta, carne con su jugo, bechamel y mezcla de quesos (Chihuahua + asadero). Capa final (4ª): Solo pasta, bechamel, mezcla de quesos y parmesano opcional. Cubrir con papel aluminio, dejando espacio de aire arriba para que no se pegue al queso. Hornear durante 40 minutos cubierto. Gratinar: Retirar el aluminio, subir a la parte alta del horno y dejar 10 minutos más solo para dorar el queso. Reposo: Dejar reposar 20 minutos antes de cortar (innegociable para que no se desmorone). La bechamel es clave para dar consistencia y evitar que la lasaña se desmorone al servir. El reposo de 20 minutos antes de cortar es innegociable. Usa pasta no precocida remojada en agua bien caliente para un mejor resultado. Si la salsa de carne espesa demasiado al hervir, la lasaña quedará seca. Debe quedar líquida antes de montar."
  },
  {
    "nombre": "Conchas",
    "categoria": "Panes Dulces",
    "urlCategoria": "categorias/panes-dulces.html",
    "ingredientes": [
      "Harina",
      "Levadura",
      "Azucar",
      "Sal",
      "Mantequilla",
      "Huevos"
    ],
    "tecnica": [
      "Colocar el harina haciendo una fuente con la levadura por fuera, dentro de la fuente colocar azucar, huevo, sal y la mantequilla.",
      "Incorporar los ingredientes, excepto la mantequilla.",
      "Se va tomando la levadura poco a poco; y al final se integra la mantequilla.",
      "Amasar hasta obtener una masa suave, lisa y elastica.",
      "Dejar reposar a que doble su tamaño.",
      "Ya que doblo su volumen se toman porciones de 60 grs. y se bolean.",
      "Esto se hace de la sig. manera, se coloca una bolita en la mano y se frota con la superficie de la mesa, haciendo mov. circulares.",
      "Cada bolita resultante se va colocando en charola previamente engrasada, y distribuyendolas de tal manera que quede espacio entre ellas para que al desarrollarse no se peguen.",
      "Se engrasa cada bolita con un poco de mantequilla acremada.",
      "Cubrir con la pasta para conchas, de la siguiente manera",
      "Forme bolitas un poco menores a las de la masa.",
      "Torteelas, y vaya colocando una encima de cada bolita, oprimalas por el centro, y vaya extendiendolas sobre la masa.",
      "Dar la forma deseada con el marcador para concha o con el cuchillo.",
      "Dejar reposar durante 2-3 hrs., hasta que desarrollen.",
      "Este punto lo puede detectar pues abren los zurcos dejados por el marcador, y se forman grietas sobre la cobertura.",
      "Introducir las charolas al horno precalentado a 210°C.",
      "Hornear por 12 minutos o hasta que adquieran un color dorado claro."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar",
      "conchas",
      "harina",
      "huevos",
      "levadura",
      "mantequilla",
      "sal"
    ],
    "contenido": "Conchas Panes Dulces Harina Levadura Azucar Sal Mantequilla Huevos Colocar el harina haciendo una fuente con la levadura por fuera, dentro de la fuente colocar azucar, huevo, sal y la mantequilla. Incorporar los ingredientes, excepto la mantequilla. Se va tomando la levadura poco a poco; y al final se integra la mantequilla. Amasar hasta obtener una masa suave, lisa y elastica. Dejar reposar a que doble su tamaño. Ya que doblo su volumen se toman porciones de 60 grs. y se bolean. Esto se hace de la sig. manera, se coloca una bolita en la mano y se frota con la superficie de la mesa, haciendo mov. circulares. Cada bolita resultante se va colocando en charola previamente engrasada, y distribuyendolas de tal manera que quede espacio entre ellas para que al desarrollarse no se peguen. Se engrasa cada bolita con un poco de mantequilla acremada. Cubrir con la pasta para conchas, de la siguiente manera Forme bolitas un poco menores a las de la masa. Torteelas, y vaya colocando una encima de cada bolita, oprimalas por el centro, y vaya extendiendolas sobre la masa. Dar la forma deseada con el marcador para concha o con el cuchillo. Dejar reposar durante 2-3 hrs., hasta que desarrollen. Este punto lo puede detectar pues abren los zurcos dejados por el marcador, y se forman grietas sobre la cobertura. Introducir las charolas al horno precalentado a 210°C. Hornear por 12 minutos o hasta que adquieran un color dorado claro. "
  },
  {
    "nombre": "Calabazas",
    "categoria": "Panes Dulces",
    "urlCategoria": "categorias/panes-dulces.html",
    "ingredientes": [
      "Masa de bizcocho",
      "Mantequilla",
      "Crema pastelera",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la masa del refrigerador y pesar porciones de 60 grs.",
      "Bolear y colocar sobre charola negra.",
      "Untar la superficie con mantequilla.",
      "Dejar fermentar a que se doble su volumen.",
      "Hornear a 180°C de 15 a 20 min.",
      "Dejar enfriar y cortar el centro en forma de V.",
      "Levantar y rellenar con crema pastelera.",
      "Espolvorear con azucar glass.",
      "Presentar en charola con carpeta."
    ],
    "recomendaciones": [
      "Espolvorear el azucar ya que el pan este frio, para evitar que la absorba."
    ],
    "keywords": [
      "azucar glass",
      "calabazas",
      "crema pastelera",
      "mantequilla",
      "masa de bizcocho"
    ],
    "contenido": "Calabazas Panes Dulces Masa de bizcocho Mantequilla Crema pastelera Azucar glass Identificar y preparar componentes. Sacar la masa del refrigerador y pesar porciones de 60 grs. Bolear y colocar sobre charola negra. Untar la superficie con mantequilla. Dejar fermentar a que se doble su volumen. Hornear a 180°C de 15 a 20 min. Dejar enfriar y cortar el centro en forma de V. Levantar y rellenar con crema pastelera. Espolvorear con azucar glass. Presentar en charola con carpeta. Espolvorear el azucar ya que el pan este frio, para evitar que la absorba."
  },
  {
    "nombre": "Pan de anís",
    "categoria": "Panes Dulces",
    "urlCategoria": "categorias/panes-dulces.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Anís en polvo",
      "Azúcar",
      "Levadura",
      "Leche",
      "Mantequilla",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar al centro: sal, azúcar, mantequilla, huevo y el 50% de la leche.",
      "Amasar hasta obtener un premezclado.",
      "Incorporar la levadura y el resto de la leche.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Agregar el anís y amasar hasta incorporar.",
      "Dar forma de trenza de un cabo.",
      "Dejar fermentar hasta que doble su volumen.",
      "Barnizar con huevo y dejar secar.",
      "Hornear a 210°C durante 15-20 minutos.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "No dejar la masa tan aguada para evitar que se pierda la figura.",
      "Conservación de 8-10 días cubierto con plástico."
    ],
    "keywords": [
      "anís",
      "anís en polvo",
      "azúcar",
      "harina",
      "huevo",
      "leche",
      "levadura",
      "mantequilla",
      "pan",
      "sal"
    ],
    "contenido": "Pan de anís Panes Dulces Harina Sal Anís en polvo Azúcar Levadura Leche Mantequilla Huevo Identificar y preparar los componentes. Hacer una fuente con la harina y la levadura por fuera. Incorporar al centro: sal, azúcar, mantequilla, huevo y el 50% de la leche. Amasar hasta obtener un premezclado. Incorporar la levadura y el resto de la leche. Amasar hasta obtener una masa suave, lisa y elástica. Agregar el anís y amasar hasta incorporar. Dar forma de trenza de un cabo. Dejar fermentar hasta que doble su volumen. Barnizar con huevo y dejar secar. Hornear a 210°C durante 15-20 minutos. Presentar el producto. No dejar la masa tan aguada para evitar que se pierda la figura. Conservación de 8-10 días cubierto con plástico."
  },
  {
    "nombre": "Pan de Leche",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Azucar",
      "Sal",
      "Levadura",
      "Huevo",
      "Mantequillla",
      "Agua",
      "Leche en polvo",
      "Ajonjolí"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con el harina y la levadura por fuera.",
      "Incorporar al centro azucar, sal, leche y huevo.",
      "Amasar hasta obtener un premezclado e incorporar el resto del agua y la levadura, agregar la mantequilla poco a poco y amasar hasta obtener una masa suave, lisa y elástica.",
      "Dejar reposar 10 min.",
      "Dar forma de trenza.",
      "Dejar fermentar a que doble su volumen",
      "Barnizar con huevo y decorar con ajonjolí.",
      "Hornear a 210°C durante 25 min."
    ],
    "recomendaciones": [
      "Conservación de 6-8 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "ajonjolí",
      "azucar",
      "harina",
      "huevo",
      "leche",
      "leche en polvo",
      "levadura",
      "mantequillla",
      "pan",
      "sal"
    ],
    "contenido": "Pan de Leche Panes Especiales Harina Azucar Sal Levadura Huevo Mantequillla Agua Leche en polvo Ajonjolí Identificar y pesar ingredientes. Hacer una fuente con el harina y la levadura por fuera. Incorporar al centro azucar, sal, leche y huevo. Amasar hasta obtener un premezclado e incorporar el resto del agua y la levadura, agregar la mantequilla poco a poco y amasar hasta obtener una masa suave, lisa y elástica. Dejar reposar 10 min. Dar forma de trenza. Dejar fermentar a que doble su volumen Barnizar con huevo y decorar con ajonjolí. Hornear a 210°C durante 25 min. Conservación de 6-8 días envuelto en plástico."
  },
  {
    "nombre": "Pan de Ajo",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Levadura",
      "Mantequilla",
      "Azucar",
      "Ajo",
      "Agua",
      "Conservación de 5-7 días envuelto en plástico."
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Hacer una fuente con el harina y la levadura por fuera",
      "Colocar al centro sal, azucar, mantequilla y el 50% de agua.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el resto del agua y levadura y amasar hasta obtener una masa suave, lisa y elastica.",
      "Incorporar el ajo previamente picado, acitronado y frio.",
      "Dar forma y hacer cortes en forma cuadriculada con una navaja.",
      "Dejar fermentar hasta que doble su volumen.",
      "Hornear de 200 a 225°C de 20 a 25 min.",
      "Barnizar con mantequilla, dejar enfriar y presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 5-7 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "ajo",
      "azucar",
      "conservación de 5-7 días envuelto en plástico.",
      "harina",
      "levadura",
      "mantequilla",
      "pan",
      "sal"
    ],
    "contenido": "Pan de Ajo Panes Especiales Harina Sal Levadura Mantequilla Azucar Ajo Agua Conservación de 5-7 días envuelto en plástico. Identificar y preparar componentes. Hacer una fuente con el harina y la levadura por fuera Colocar al centro sal, azucar, mantequilla y el 50% de agua. Amasar hasta obtener un premezclado. Agregar el resto del agua y levadura y amasar hasta obtener una masa suave, lisa y elastica. Incorporar el ajo previamente picado, acitronado y frio. Dar forma y hacer cortes en forma cuadriculada con una navaja. Dejar fermentar hasta que doble su volumen. Hornear de 200 a 225°C de 20 a 25 min. Barnizar con mantequilla, dejar enfriar y presentar producto. Conservación de 5-7 días envuelto en plástico."
  },
  {
    "nombre": "Pan de finas hierbas",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Harina de centeno",
      "Cebollín",
      "Cilantro",
      "Perejil",
      "Sal",
      "Levadura",
      "Ajo en polvo",
      "Aceite",
      "Azucar",
      "Leche líquida",
      "Aceite de olivo"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente con las harinas y la levadura por fuera.",
      "Agregar al centro la sal, azúcar, aceite y el 50% de leche.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el resto de la leche con la levadura.",
      "Amasar hasta obtener una masa suave lisa y elástica.",
      "Agregar las hierbas y amasar hasta integrar.",
      "Pesar porciones de 60 grs. y bolear.",
      "Colocar sobre charola negra y dejar fermentar hasta que doble su volumen.",
      "Barnizar con aceite de olivo",
      "Hornear a 200°C durante 25 min."
    ],
    "recomendaciones": [],
    "keywords": [
      "aceite",
      "aceite de olivo",
      "ajo en polvo",
      "azucar",
      "cebollín",
      "cilantro",
      "finas",
      "harina",
      "harina de centeno",
      "hierbas",
      "leche líquida",
      "levadura",
      "pan",
      "perejil",
      "sal"
    ],
    "contenido": "Pan de finas hierbas Panes Especiales Harina Harina de centeno Cebollín Cilantro Perejil Sal Levadura Ajo en polvo Aceite Azucar Leche líquida Aceite de olivo Identificar y pesar ingredientes. Hacer una fuente con las harinas y la levadura por fuera. Agregar al centro la sal, azúcar, aceite y el 50% de leche. Amasar hasta obtener un premezclado. Agregar el resto de la leche con la levadura. Amasar hasta obtener una masa suave lisa y elástica. Agregar las hierbas y amasar hasta integrar. Pesar porciones de 60 grs. y bolear. Colocar sobre charola negra y dejar fermentar hasta que doble su volumen. Barnizar con aceite de olivo Hornear a 200°C durante 25 min. "
  },
  {
    "nombre": "Pan de cebolla",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Levadura",
      "Mantequilla",
      "Azúcar",
      "Cebolla",
      "Agua",
      "Aceite de olivo",
      "Paprika y pimienta"
    ],
    "tecnica": [
      "Identificar y preparar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: sal, azúcar, mantequilla y el 50% del agua.",
      "Amasar hasta obtener un premezclado.",
      "Incorporar el resto del agua y la levadura, y amasar hasta obtener una masa suave, lisa y elástica.",
      "Incorporar la cebolla previamente blanqueada y fría.",
      "Pesar y dar la forma deseada.",
      "Condimentar con paprika, pimienta y aceite de olivo.",
      "Dejar fermentar hasta que doble su volumen.",
      "Hornear a 220°C por 20 a 25 minutos.",
      "Barnizar con aceite de olivo al salir del horno.",
      "Dejar enfriar, desmoldar y presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 4 a 6 días cubierto en plástico."
    ],
    "keywords": [
      "aceite de olivo",
      "agua",
      "azúcar",
      "cebolla",
      "harina",
      "levadura",
      "mantequilla",
      "pan",
      "paprika y pimienta",
      "sal"
    ],
    "contenido": "Pan de cebolla Panes Especiales Harina Sal Levadura Mantequilla Azúcar Cebolla Agua Aceite de olivo Paprika y pimienta Identificar y preparar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Incorporar al centro de la fuente: sal, azúcar, mantequilla y el 50% del agua. Amasar hasta obtener un premezclado. Incorporar el resto del agua y la levadura, y amasar hasta obtener una masa suave, lisa y elástica. Incorporar la cebolla previamente blanqueada y fría. Pesar y dar la forma deseada. Condimentar con paprika, pimienta y aceite de olivo. Dejar fermentar hasta que doble su volumen. Hornear a 220°C por 20 a 25 minutos. Barnizar con aceite de olivo al salir del horno. Dejar enfriar, desmoldar y presentar el producto. Conservación de 4 a 6 días cubierto en plástico."
  },
  {
    "nombre": "Pan de chorizo",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Azúcar",
      "Mantequilla",
      "Levadura",
      "Agua",
      "Chorizo"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar al centro de la fuente: sal, azúcar, mantequilla y el 50% del agua.",
      "Amasar hasta obtener un premezclado.",
      "Agregar el resto del agua y la levadura, amasar hasta obtener una masa suave, lisa y elástica.",
      "Incorporar el chorizo previamente desgrasado y frío.",
      "Pesar y dar forma deseada.",
      "Dejar fermentar hasta que doble su volumen.",
      "Hornear de 215°C a 220°C durante 25 minutos.",
      "Barnizar con mantequilla al salir del horno.",
      "Dejar enfriar y presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 5-7 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "chorizo",
      "harina",
      "levadura",
      "mantequilla",
      "pan",
      "sal"
    ],
    "contenido": "Pan de chorizo Panes Especiales Harina Sal Azúcar Mantequilla Levadura Agua Chorizo Identificar y preparar los componentes. Hacer una fuente con la harina y la levadura por fuera. Incorporar al centro de la fuente: sal, azúcar, mantequilla y el 50% del agua. Amasar hasta obtener un premezclado. Agregar el resto del agua y la levadura, amasar hasta obtener una masa suave, lisa y elástica. Incorporar el chorizo previamente desgrasado y frío. Pesar y dar forma deseada. Dejar fermentar hasta que doble su volumen. Hornear de 215°C a 220°C durante 25 minutos. Barnizar con mantequilla al salir del horno. Dejar enfriar y presentar el producto. Conservación de 5-7 días envuelto en plástico."
  },
  {
    "nombre": "Pan de tocino",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Sal",
      "Leche en polvo",
      "Levadura",
      "Margarina",
      "Tocino",
      "Azúcar",
      "Agua",
      "Huevo para barnizar"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar al centro: sal, leche, margarina y el 50% del agua.",
      "Amasar hasta obtener una masa suave, lisa y elástica.",
      "Agregar el tocino previamente desgrasado y amasar hasta incorporar.",
      "Dar forma deseada y dejar que doble su volumen.",
      "Barnizar con huevo y dejar secar.",
      "Hornear a 220°C durante 25 minutos."
    ],
    "recomendaciones": [
      "Conservación de 6-8 días envuelto en plástico."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "harina",
      "huevo para barnizar",
      "leche en polvo",
      "levadura",
      "margarina",
      "pan",
      "sal",
      "tocino"
    ],
    "contenido": "Pan de tocino Panes Especiales Harina Sal Leche en polvo Levadura Margarina Tocino Azúcar Agua Huevo para barnizar Identificar y preparar los componentes. Hacer una fuente con la harina y la levadura por fuera. Incorporar al centro: sal, leche, margarina y el 50% del agua. Amasar hasta obtener una masa suave, lisa y elástica. Agregar el tocino previamente desgrasado y amasar hasta incorporar. Dar forma deseada y dejar que doble su volumen. Barnizar con huevo y dejar secar. Hornear a 220°C durante 25 minutos. Conservación de 6-8 días envuelto en plástico."
  },
  {
    "nombre": "Rosca de Reyes \"La Gloria\"",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Levadura",
      "Azúcar",
      "Sal",
      "Huevo",
      "Mantequilla \"La Gloria\"",
      "Saborizante",
      "Harina",
      "Mantequilla",
      "Azúcar glass"
    ],
    "tecnica": [
      "Batir en el cazo de la batidora el azúcar, sal y huevo por 1 minuto.",
      "Agregar la harina con la levadura y batir durante cinco minutos.",
      "Añadir la mantequilla y continuar trabajando en segunda velocidad hasta que la masa se despegue del cazo.",
      "Acremar la mantequilla Gloria con el azúcar glass por 10 minutos en tercera velocidad.",
      "Incorporar la harina en forma envolvente.",
      "Extender la masa en forma rectangular y unir para formar la rosca.",
      "Barnizar con huevo y decorar con frutas secas (higo, ate de tres sabores).",
      "Formar pequeñas tortillitas delgadas con el betún y colocarlas sobre la rosca.",
      "Cocer a 160°C durante aproximadamente 30 minutos."
    ],
    "recomendaciones": [
      "Conservación de 7-10 días en refrigeración."
    ],
    "keywords": [
      "azúcar",
      "azúcar glass",
      "gloria",
      "harina",
      "huevo",
      "levadura",
      "mantequilla",
      "mantequilla \"la gloria\"",
      "reyes",
      "rosca",
      "saborizante",
      "sal"
    ],
    "contenido": "Rosca de Reyes \"La Gloria\" Panes Especiales Harina Levadura Azúcar Sal Huevo Mantequilla \"La Gloria\" Saborizante Harina Mantequilla Azúcar glass Batir en el cazo de la batidora el azúcar, sal y huevo por 1 minuto. Agregar la harina con la levadura y batir durante cinco minutos. Añadir la mantequilla y continuar trabajando en segunda velocidad hasta que la masa se despegue del cazo. Acremar la mantequilla Gloria con el azúcar glass por 10 minutos en tercera velocidad. Incorporar la harina en forma envolvente. Extender la masa en forma rectangular y unir para formar la rosca. Barnizar con huevo y decorar con frutas secas (higo, ate de tres sabores). Formar pequeñas tortillitas delgadas con el betún y colocarlas sobre la rosca. Cocer a 160°C durante aproximadamente 30 minutos. Conservación de 7-10 días en refrigeración."
  },
  {
    "nombre": "Rosca de Reyes",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Leche en polvo",
      "Levadura",
      "Mantequilla",
      "Margarina",
      "Huevo",
      "Agua",
      "Ralladura de naranja",
      "Ralladura de limón",
      "Fruta cristalizada",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar al centro el azúcar, sal, leche en polvo y huevo.",
      "Amasar hasta obtener un premezclado.",
      "Agregar agua poco a poco y seguir amasando hasta obtener una masa semielástica.",
      "Incorporar la materia grasa poco a poco hasta integrar.",
      "Seguir amasando hasta obtener una masa suave, lisa y elástica.",
      "Incorporar las ralladuras.",
      "Dejar reposar en charola engrasada con aceite.",
      "Refrigerar durante 24 horas.",
      "Extender la masa en forma de rectángulo.",
      "Esparcir la fruta cristalizada y los muñecos.",
      "Enrollar de arriba hacia abajo, apretando bien.",
      "Formar la rosca e introducir una de las uniones para evitar que se deshaga.",
      "Fermentar hasta que doble su volumen.",
      "Barnizar con huevo dos veces, dejando secar entre una y otra.",
      "Hornear a 180°C durante 25 minutos.",
      "Sacar del horno, dejar enfriar, brillar y presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 7-10 días en refrigeración."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "brillo",
      "fruta cristalizada",
      "harina",
      "huevo",
      "leche en polvo",
      "levadura",
      "mantequilla",
      "margarina",
      "ralladura de limón",
      "ralladura de naranja",
      "reyes",
      "rosca",
      "sal"
    ],
    "contenido": "Rosca de Reyes Panes Especiales Harina Azúcar Sal Leche en polvo Levadura Mantequilla Margarina Huevo Agua Ralladura de naranja Ralladura de limón Fruta cristalizada Brillo Identificar y pesar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Incorporar al centro el azúcar, sal, leche en polvo y huevo. Amasar hasta obtener un premezclado. Agregar agua poco a poco y seguir amasando hasta obtener una masa semielástica. Incorporar la materia grasa poco a poco hasta integrar. Seguir amasando hasta obtener una masa suave, lisa y elástica. Incorporar las ralladuras. Dejar reposar en charola engrasada con aceite. Refrigerar durante 24 horas. Extender la masa en forma de rectángulo. Esparcir la fruta cristalizada y los muñecos. Enrollar de arriba hacia abajo, apretando bien. Formar la rosca e introducir una de las uniones para evitar que se deshaga. Fermentar hasta que doble su volumen. Barnizar con huevo dos veces, dejando secar entre una y otra. Hornear a 180°C durante 25 minutos. Sacar del horno, dejar enfriar, brillar y presentar el producto. Conservación de 7-10 días en refrigeración."
  },
  {
    "nombre": "Polvorón rosa",
    "categoria": "Panes Especiales",
    "urlCategoria": "categorias/panes-especiales.html",
    "ingredientes": [
      "Manteca vegetal",
      "Azúcar glass",
      "Harina",
      "Royal",
      "Color vegetal"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Acremar la manteca vegetal con el azúcar glass hasta desaparecer grumos.",
      "Agregar la harina y el royal, luego incorporar.",
      "Incorporar el color vegetal y mezclar hasta obtener una pasta manejable.",
      "Extender a un grosor de medio centímetro.",
      "Cortar con un molde adecuado y colocar sobre una charola.",
      "Hornear a 180°C durante aproximadamente 15 minutos.",
      "Dejar enfriar y decorar con azúcar glass."
    ],
    "recomendaciones": [
      "Conservación de 15-20 días en recipiente hermético."
    ],
    "keywords": [
      "azúcar glass",
      "color vegetal",
      "harina",
      "manteca vegetal",
      "polvorón",
      "rosa",
      "royal"
    ],
    "contenido": "Polvorón rosa Panes Especiales Manteca vegetal Azúcar glass Harina Royal Color vegetal Identificar y pesar los ingredientes. Acremar la manteca vegetal con el azúcar glass hasta desaparecer grumos. Agregar la harina y el royal, luego incorporar. Incorporar el color vegetal y mezclar hasta obtener una pasta manejable. Extender a un grosor de medio centímetro. Cortar con un molde adecuado y colocar sobre una charola. Hornear a 180°C durante aproximadamente 15 minutos. Dejar enfriar y decorar con azúcar glass. Conservación de 15-20 días en recipiente hermético."
  },
  {
    "nombre": "Cuernos",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Masa de cuerno",
      "Harina",
      "Huevo"
    ],
    "tecnica": [
      "Sacar la masa del refrigerador y dar media vuelta.",
      "Extender la pasta a lo largo con el rodillo y sacar bandas de 15 cm. de ancho por 3 mm. de grosor.",
      "Cortar triángulos de 50 grs. aprox.",
      "Enrollar dejando un espacio para que puedan fermentarse.",
      "Colocar sobre charola negra.",
      "Dejar fermentar a que doble su volumen.",
      "Barnizar con huevo 2 veces dejando secar entre cada barnizada.",
      "Hornear 225°C durante 25 min.",
      "Dejar enfriar y presentar producto."
    ],
    "recomendaciones": [
      "Dejar la punta hacia abajo para evitar que se abra el cuerno.",
      "No ocupar demasiada harina para evitar que se reseque.",
      "Dejar secar bien para evitar que salga pinto.",
      "Conservación de 3-4 días cubiertas con plástico."
    ],
    "keywords": [
      "cuernos",
      "harina",
      "huevo",
      "masa de cuerno"
    ],
    "contenido": "Cuernos Pastelería Masa de cuerno Harina Huevo Sacar la masa del refrigerador y dar media vuelta. Extender la pasta a lo largo con el rodillo y sacar bandas de 15 cm. de ancho por 3 mm. de grosor. Cortar triángulos de 50 grs. aprox. Enrollar dejando un espacio para que puedan fermentarse. Colocar sobre charola negra. Dejar fermentar a que doble su volumen. Barnizar con huevo 2 veces dejando secar entre cada barnizada. Hornear 225°C durante 25 min. Dejar enfriar y presentar producto. Dejar la punta hacia abajo para evitar que se abra el cuerno. No ocupar demasiada harina para evitar que se reseque. Dejar secar bien para evitar que salga pinto. Conservación de 3-4 días cubiertas con plástico."
  },
  {
    "nombre": "Rollos de Canela",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Masa de cuerno",
      "Crema pastelera",
      "Canela en polvo",
      "Huevo",
      "Azucar"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la pasta del refrigerador.",
      "Extender la pasta en forma rectangular con un grosor de 3 mm.",
      "Untar una capa ligera de crema pastelera y espolvorear la superficie con canela.",
      "Enrollar la pasta e ir apretando.",
      "Cortar porciones de 5 cm de ancho y presionar el centro con la ayuda de un mango de un cuchillo.",
      "Colocar sobre charola negra y dejar fermentar.",
      "Barnizar con huevo y decorar con azucar.",
      "Hornear de 180°C - 200°C de 20-25 min.",
      "Dejar enfriar y presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 3 a 4 días envueltos en plástico."
    ],
    "keywords": [
      "azucar",
      "canela",
      "canela en polvo",
      "crema pastelera",
      "huevo",
      "masa de cuerno",
      "rollos"
    ],
    "contenido": "Rollos de Canela Pastelería Masa de cuerno Crema pastelera Canela en polvo Huevo Azucar Identificar y preparar componentes. Sacar la pasta del refrigerador. Extender la pasta en forma rectangular con un grosor de 3 mm. Untar una capa ligera de crema pastelera y espolvorear la superficie con canela. Enrollar la pasta e ir apretando. Cortar porciones de 5 cm de ancho y presionar el centro con la ayuda de un mango de un cuchillo. Colocar sobre charola negra y dejar fermentar. Barnizar con huevo y decorar con azucar. Hornear de 180°C - 200°C de 20-25 min. Dejar enfriar y presentar producto. Conservación de 3 a 4 días envueltos en plástico."
  },
  {
    "nombre": "Carteras",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Masa de cuerno",
      "Crema pastelera",
      "Huevo para barnizar",
      "Azucar"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la pasta del refrigerador.",
      "Extender la pasta a un grosor de 3 mm. por 15 cm. de ancho.",
      "Colocar la crema pastelera al centro de la banda con la ayuda de una manga.",
      "Cubrir la crema con la pasta y cortar porciones de 5 cm. de ancho.",
      "Colocar sobre charola negra dejando la unión hacia abajo.",
      "Dejar fermentar durante 30 min.",
      "Barnizar con huevo y decorar con azucar.",
      "Hornear a 180°C de 20 a 25 min.",
      "Dejar enfriar y presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días envuelta en plástico.",
      "Evitar el exceso de crema para que no se salga al hornear.",
      "No dejar fermentar hasta que doble su volumen para evitar que se baje."
    ],
    "keywords": [
      "azucar",
      "carteras",
      "crema pastelera",
      "huevo para barnizar",
      "masa de cuerno"
    ],
    "contenido": "Carteras Pastelería Masa de cuerno Crema pastelera Huevo para barnizar Azucar Identificar y preparar componentes. Sacar la pasta del refrigerador. Extender la pasta a un grosor de 3 mm. por 15 cm. de ancho. Colocar la crema pastelera al centro de la banda con la ayuda de una manga. Cubrir la crema con la pasta y cortar porciones de 5 cm. de ancho. Colocar sobre charola negra dejando la unión hacia abajo. Dejar fermentar durante 30 min. Barnizar con huevo y decorar con azucar. Hornear a 180°C de 20 a 25 min. Dejar enfriar y presentar producto. Conservación de 3-4 días envuelta en plástico. Evitar el exceso de crema para que no se salga al hornear. No dejar fermentar hasta que doble su volumen para evitar que se baje."
  },
  {
    "nombre": "Cronoles",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Pasta de hojaldre",
      "Crema pastelera",
      "Nuez molida",
      "Huevo para barnizar",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la pasta del refrigerador.",
      "Extender la pasta a un grosor de 3 mm. dandole un largo de 40 cm.",
      "Cortar tiras de 2 cm. de ancho.",
      "Enrollar sobre el molde de cono comenzando de la punta hacia abajo, sellando al terminar.",
      "Colocar sobre charola negra dejando la unión hacia abajo y barnizar con huevo.",
      "Dejar reposar durante 30 min.",
      "Hornear a 220°C durante 15 min.",
      "Dejar enfriar y desmoldar",
      "Rellenar hasta el tope con crema pastelera, sellar con nuez y brillar.",
      "Encapacillar y presentar producto."
    ],
    "recomendaciones": [
      "Al momento de enrollar, no estirar la pasta para evitar que se reviente.",
      "Conservación 2 días en refrigeración."
    ],
    "keywords": [
      "brillo",
      "crema pastelera",
      "cronoles",
      "huevo para barnizar",
      "nuez molida",
      "pasta de hojaldre"
    ],
    "contenido": "Cronoles Pastelería Pasta de hojaldre Crema pastelera Nuez molida Huevo para barnizar Brillo Identificar y preparar componentes. Sacar la pasta del refrigerador. Extender la pasta a un grosor de 3 mm. dandole un largo de 40 cm. Cortar tiras de 2 cm. de ancho. Enrollar sobre el molde de cono comenzando de la punta hacia abajo, sellando al terminar. Colocar sobre charola negra dejando la unión hacia abajo y barnizar con huevo. Dejar reposar durante 30 min. Hornear a 220°C durante 15 min. Dejar enfriar y desmoldar Rellenar hasta el tope con crema pastelera, sellar con nuez y brillar. Encapacillar y presentar producto. Al momento de enrollar, no estirar la pasta para evitar que se reviente. Conservación 2 días en refrigeración."
  },
  {
    "nombre": "Paves",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Genoise de chocolate",
      "Crema de mantequilla",
      "Jarabe",
      "Ganache",
      "Ron"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar en 2 capas el genoise.",
      "Tomar la primera capa y envinarla.",
      "Colocar un poco de crema de mantequilla mezclada con ganache.",
      "Colocar la otra capa de genoise, y envinar.",
      "Cortar circulos de 4 cm de diametro, con el molde adecuado.",
      "Cubrir cada pastelillo, con crema y colocar granillo.",
      "Poner un aro de crema en la superficie, con la ayuda de una manga con dulla rizada.",
      "Rellenar el centro del aro con ganache.",
      "Encapacillar y presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "crema de mantequilla",
      "ganache",
      "genoise de chocolate",
      "jarabe",
      "paves",
      "ron"
    ],
    "contenido": "Paves Pastelería Genoise de chocolate Crema de mantequilla Jarabe Ganache Ron Identificar y preparar componentes. Cortar en 2 capas el genoise. Tomar la primera capa y envinarla. Colocar un poco de crema de mantequilla mezclada con ganache. Colocar la otra capa de genoise, y envinar. Cortar circulos de 4 cm de diametro, con el molde adecuado. Cubrir cada pastelillo, con crema y colocar granillo. Poner un aro de crema en la superficie, con la ayuda de una manga con dulla rizada. Rellenar el centro del aro con ganache. Encapacillar y presentar producto. "
  },
  {
    "nombre": "Pithieviers",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Pasta de hojaldre",
      "Crema de almendra",
      "Huevo para barnizar",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Cortar 2 círculos de 20 cm de diametro.",
      "Colocar un circulo sobre charola negra.",
      "Barnizar la orilla con huevo.",
      "Rellenar el centro con crema de almendra.",
      "Cubrir con el otro disco de pasta de hojaldre.",
      "Sellar la orilla y barnizar con huevo.",
      "Dejar secar y cortar con navaja en forma sesgada.",
      "Espolvorear con azucar glass ligeramente.",
      "Hornear a 200°C DURANTE 25 MIN.",
      "Dejar enfriar y presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar glass",
      "crema de almendra",
      "huevo para barnizar",
      "pasta de hojaldre",
      "pithieviers"
    ],
    "contenido": "Pithieviers Pastelería Pasta de hojaldre Crema de almendra Huevo para barnizar Azucar glass Identificar y preparar componentes. Extender la pasta a un grosor de 3 mm. Cortar 2 círculos de 20 cm de diametro. Colocar un circulo sobre charola negra. Barnizar la orilla con huevo. Rellenar el centro con crema de almendra. Cubrir con el otro disco de pasta de hojaldre. Sellar la orilla y barnizar con huevo. Dejar secar y cortar con navaja en forma sesgada. Espolvorear con azucar glass ligeramente. Hornear a 200°C DURANTE 25 MIN. Dejar enfriar y presentar producto. "
  },
  {
    "nombre": "Rehiletes",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Feite danoise",
      "Huevo para barnizar",
      "Crema pastelera",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Cortar cuadros de 8 por 8 aproximadamente.",
      "Hacer cortes del centro a las puntas.",
      "Doblar las puntas hacia el centro saltandose una y pegarlas con huevo.",
      "Dejar fermentar y barnizar con huevo.",
      "Colocar al centro crema pastelera, con la ayuda de una manga CON DULLA RIZADA.",
      "Hornear de 180°C a 200°c DURANTE 25 MIN.",
      "Dejar enfriar y brillar.",
      "Presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "brillo",
      "crema pastelera",
      "feite danoise",
      "huevo para barnizar",
      "rehiletes"
    ],
    "contenido": "Rehiletes Pastelería Feite danoise Huevo para barnizar Crema pastelera Brillo Identificar y preparar componentes. Extender la pasta a un grosor de 3 mm. Cortar cuadros de 8 por 8 aproximadamente. Hacer cortes del centro a las puntas. Doblar las puntas hacia el centro saltandose una y pegarlas con huevo. Dejar fermentar y barnizar con huevo. Colocar al centro crema pastelera, con la ayuda de una manga CON DULLA RIZADA. Hornear de 180°C a 200°c DURANTE 25 MIN. Dejar enfriar y brillar. Presentar producto. "
  },
  {
    "nombre": "Lechuzas",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Feite danoise",
      "Huevo para barnizar",
      "Crema pastelera",
      "Cerezas",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Cortar cuadros de 8 por 8 aproximadamente.",
      "Doblar 2 puntas hacia el centro y pegarlas con huevo.",
      "Dejar fermentar y barnizar con huevo.",
      "Colocar crema pastelera, con la ayuda de una manga.",
      "Decorar con cerezas.",
      "Hornear de 180°C a 200°c DURANTE 25 MIN.",
      "Dejar enfriar y brillar.",
      "Presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "brillo",
      "cerezas",
      "crema pastelera",
      "feite danoise",
      "huevo para barnizar",
      "lechuzas"
    ],
    "contenido": "Lechuzas Pastelería Feite danoise Huevo para barnizar Crema pastelera Cerezas Brillo Identificar y preparar componentes. Extender la pasta a un grosor de 3 mm. Cortar cuadros de 8 por 8 aproximadamente. Doblar 2 puntas hacia el centro y pegarlas con huevo. Dejar fermentar y barnizar con huevo. Colocar crema pastelera, con la ayuda de una manga. Decorar con cerezas. Hornear de 180°C a 200°c DURANTE 25 MIN. Dejar enfriar y brillar. Presentar producto. "
  },
  {
    "nombre": "Short Cake",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Genoise de vainilla",
      "Crema Chantilly",
      "Fresas, duraznos o mangos",
      "Jarabe",
      "Ron",
      "Nuez molida",
      "Brillo",
      "Color vegetal rojo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar el genoise en 3 capas.",
      "Tomar una capa de genoise y pegarla con un poco de crema chantilly a un disco de cartón forrado con papel aluminio.",
      "Envinar la capa de genoise con el jarabe de ron.",
      "Colocarle crema chantilly en la superficie.",
      "Esparcir encima fresas picadas.",
      "Colocar la otra capa de genoise, envinarla, colocarle crema y cubrir con la última capa de genoise.",
      "Envinar la última capa y cubrir con chantilly todo el pastel.",
      "Colocarle nuez molida alrededor del pastel.",
      "Decorar con fresas y brillar.",
      "Decorar con la manga con crema chantilly.",
      "Decorar en charola con carpeta y presentar producto."
    ],
    "recomendaciones": [
      "No aplicar exceso de brillo.",
      "Conservación de 3-4 días en refrigeración, dependiendo el aspecto de las fresas."
    ],
    "keywords": [
      "brillo",
      "cake",
      "color vegetal rojo",
      "crema chantilly",
      "fresas, duraznos o mangos",
      "genoise de vainilla",
      "jarabe",
      "nuez molida",
      "ron",
      "short"
    ],
    "contenido": "Short Cake Pastelería Genoise de vainilla Crema Chantilly Fresas, duraznos o mangos Jarabe Ron Nuez molida Brillo Color vegetal rojo Identificar y preparar componentes. Cortar el genoise en 3 capas. Tomar una capa de genoise y pegarla con un poco de crema chantilly a un disco de cartón forrado con papel aluminio. Envinar la capa de genoise con el jarabe de ron. Colocarle crema chantilly en la superficie. Esparcir encima fresas picadas. Colocar la otra capa de genoise, envinarla, colocarle crema y cubrir con la última capa de genoise. Envinar la última capa y cubrir con chantilly todo el pastel. Colocarle nuez molida alrededor del pastel. Decorar con fresas y brillar. Decorar con la manga con crema chantilly. Decorar en charola con carpeta y presentar producto. No aplicar exceso de brillo. Conservación de 3-4 días en refrigeración, dependiendo el aspecto de las fresas."
  },
  {
    "nombre": "Pastel mil hojas",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Pasta de hojaldre",
      "Crema pastelera",
      "Fondant",
      "Ganache"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 4 mm. teniendo como largo 60 cm. y de ancho 20 cm.",
      "Picar la pasta con un cuchillo y dejarla reposar por 30 min.",
      "Hornear la pasta a 200°C por 25 min.",
      "Dejar enfriar.",
      "Cortar la pasta en 3 partes iguales.",
      "Tomar una parte de la pasta y esparcirle en la superficie crema pastelera.",
      "Colocar otra parte de la pasta y repetir la operación.",
      "Colocar la última parte de la pasta con la base hacia arriba.",
      "Cubrir la última capa con fondant previamente entibiado y semi-líquido.",
      "Decorar con ganache y enseguida rallar con la punta de un cuchillo.",
      "Emparejar los lados con un cuchillo sierra.",
      "Cubrir las paredes con crema pastelera y moruza de la pasta de hojaldre.",
      "Colocar el pastel en una charola con carpeta."
    ],
    "recomendaciones": [
      "Tener el fondant y el ganache preparados al mismo tiempo para evitar que se seque el fondant.",
      "Conservación de 1-2 días en refrigeración."
    ],
    "keywords": [
      "crema pastelera",
      "fondant",
      "ganache",
      "hojas",
      "mil",
      "pasta de hojaldre",
      "pastel"
    ],
    "contenido": "Pastel mil hojas Pastelería Pasta de hojaldre Crema pastelera Fondant Ganache Identificar y preparar componentes. Extender la pasta a un grosor de 4 mm. teniendo como largo 60 cm. y de ancho 20 cm. Picar la pasta con un cuchillo y dejarla reposar por 30 min. Hornear la pasta a 200°C por 25 min. Dejar enfriar. Cortar la pasta en 3 partes iguales. Tomar una parte de la pasta y esparcirle en la superficie crema pastelera. Colocar otra parte de la pasta y repetir la operación. Colocar la última parte de la pasta con la base hacia arriba. Cubrir la última capa con fondant previamente entibiado y semi-líquido. Decorar con ganache y enseguida rallar con la punta de un cuchillo. Emparejar los lados con un cuchillo sierra. Cubrir las paredes con crema pastelera y moruza de la pasta de hojaldre. Colocar el pastel en una charola con carpeta. Tener el fondant y el ganache preparados al mismo tiempo para evitar que se seque el fondant. Conservación de 1-2 días en refrigeración."
  },
  {
    "nombre": "Garibaldi",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Azucar",
      "Manteca vegetal",
      "Margarina",
      "Huevo",
      "Royal",
      "Harina"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar materia grasa con azucar a punto de pomada.",
      "Agregar huevo poco a poco y airear.",
      "Incorporar harina y royal hasta que quede una masa homogenea o ligada.",
      "Incorporar en una manga y poner en molde de cake 4/4.",
      "Hornear de 180°C a 200°C durante 15-20 min.",
      "Dejar reposar durante 24 hrs. dentro del refrigerador.",
      "Envinar con jarabe.",
      "Brillar y revolver con gragea de colores.",
      "Presentar en capacillos."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días en refrigeración."
    ],
    "keywords": [
      "azucar",
      "garibaldi",
      "harina",
      "huevo",
      "manteca vegetal",
      "margarina",
      "royal"
    ],
    "contenido": "Garibaldi Pastelería Azucar Manteca vegetal Margarina Huevo Royal Harina Identificar y pesar ingredientes. Acremar materia grasa con azucar a punto de pomada. Agregar huevo poco a poco y airear. Incorporar harina y royal hasta que quede una masa homogenea o ligada. Incorporar en una manga y poner en molde de cake 4/4. Hornear de 180°C a 200°C durante 15-20 min. Dejar reposar durante 24 hrs. dentro del refrigerador. Envinar con jarabe. Brillar y revolver con gragea de colores. Presentar en capacillos. Conservación de 3-4 días en refrigeración."
  },
  {
    "nombre": "Pie de manzana",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Pasta sablee",
      "Manzana",
      "Azucar",
      "Canela en polvo",
      "Mantequilla",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta sablee a un grosor de 3 mm.",
      "Forrar un molde parar pie.",
      "Colocar la manzana rallada dentro del molde.",
      "Espolvorear azucar y canela.",
      "Agregar la mantequilla.",
      "Cubrir con tiras de la misma formando un enrejado.",
      "Barnizar con huevo y dejar secar.",
      "Hornear a 180°C durante 25 min.",
      "Dejar enfriar y brillar.",
      "Presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 2-3 días en refrigeración.",
      "Servir caliente o a temperatura ambiente."
    ],
    "keywords": [
      "azucar",
      "brillo",
      "canela en polvo",
      "mantequilla",
      "manzana",
      "pasta sablee",
      "pie"
    ],
    "contenido": "Pie de manzana Pastelería Pasta sablee Manzana Azucar Canela en polvo Mantequilla Brillo Identificar y preparar componentes. Extender la pasta sablee a un grosor de 3 mm. Forrar un molde parar pie. Colocar la manzana rallada dentro del molde. Espolvorear azucar y canela. Agregar la mantequilla. Cubrir con tiras de la misma formando un enrejado. Barnizar con huevo y dejar secar. Hornear a 180°C durante 25 min. Dejar enfriar y brillar. Presentar producto. Conservación de 2-3 días en refrigeración. Servir caliente o a temperatura ambiente."
  },
  {
    "nombre": "Pastel savarín",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Savarín",
      "Crema pastelera",
      "Crema chantilly",
      "Jarabe",
      "Durazno en almíbar",
      "Ron",
      "Cerezas"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Emparejar el savarín quitándole la costra.",
      "Colocar el savarín dentro del molde.",
      "Envinar con el jarabe tibio mezclado con el ron.",
      "Dejar reposar durante 5 min.",
      "Colocar el savarín sobre un disco y brillarlo.",
      "Mezclar la crema pastelera con el 50% de la crema chantilly.",
      "Rellenar el centro del pastel con la mezcla anterior y el durazno picado.",
      "Decorar el centro con crema chantilly con la ayuda de una manga con dulla rizada.",
      "Colocar la cereza en forma decorativa.",
      "Colocar en charola con carpeta y presentar producto.",
      "Crema pastelera véase en pág 5."
    ],
    "recomendaciones": [
      "No excederse de la cantidad de jarabe porque se deshace el pan.",
      "Conservación máximo 3 días en refrigeración."
    ],
    "keywords": [
      "cerezas",
      "crema chantilly",
      "crema pastelera",
      "durazno en almíbar",
      "jarabe",
      "pastel",
      "ron",
      "savarín"
    ],
    "contenido": "Pastel savarín Pastelería Savarín Crema pastelera Crema chantilly Jarabe Durazno en almíbar Ron Cerezas Identificar y preparar componentes. Emparejar el savarín quitándole la costra. Colocar el savarín dentro del molde. Envinar con el jarabe tibio mezclado con el ron. Dejar reposar durante 5 min. Colocar el savarín sobre un disco y brillarlo. Mezclar la crema pastelera con el 50% de la crema chantilly. Rellenar el centro del pastel con la mezcla anterior y el durazno picado. Decorar el centro con crema chantilly con la ayuda de una manga con dulla rizada. Colocar la cereza en forma decorativa. Colocar en charola con carpeta y presentar producto. Crema pastelera véase en pág 5. No excederse de la cantidad de jarabe porque se deshace el pan. Conservación máximo 3 días en refrigeración."
  },
  {
    "nombre": "Masa de trenza inglesa",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Levadura",
      "Mantequilla",
      "Leche",
      "Huevo"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Hacer una fuente; con el harina y la levadura por fuera.",
      "Al centro de la fuente: sal, huevo y el 50% de leche.",
      "Hacer un premezclado, agregando poco a poco la leche.",
      "Amasar hasta obtener una masa semi elástica.",
      "Agregar la mantequilla, acremarla y untarla poco a poco, hasta obtener una masa suave, lisa y elástica.",
      "Dejar reposar de 5 a 10 min.",
      "Se da forma."
    ],
    "recomendaciones": [
      "Conservación de 2-3 días en refrigeración.",
      "La masa debe estar a temperatura ambiente antes de usar."
    ],
    "keywords": [
      "azúcar",
      "harina",
      "huevo",
      "inglesa",
      "leche",
      "levadura",
      "mantequilla",
      "masa",
      "sal",
      "trenza"
    ],
    "contenido": "Masa de trenza inglesa Pastelería Harina Azúcar Sal Levadura Mantequilla Leche Huevo Identificar y pesar ingredientes. Hacer una fuente; con el harina y la levadura por fuera. Al centro de la fuente: sal, huevo y el 50% de leche. Hacer un premezclado, agregando poco a poco la leche. Amasar hasta obtener una masa semi elástica. Agregar la mantequilla, acremarla y untarla poco a poco, hasta obtener una masa suave, lisa y elástica. Dejar reposar de 5 a 10 min. Se da forma. Conservación de 2-3 días en refrigeración. La masa debe estar a temperatura ambiente antes de usar."
  },
  {
    "nombre": "Trenza inglesa",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Masa de trenza inglesa",
      "Mermelada de fresa",
      "Pasas",
      "Almendra trozada"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Extender la masa en forma rectangular.",
      "Marcar en 3 partes iguales a lo largo y colocar sobre charola negra.",
      "Colocar al centro mermelada, almendras y pasas.",
      "Cortar los lados en tiras de 1.5 cm en forma diagonal.",
      "Barnizar con huevo la orilla del relleno.",
      "Cubrir el relleno con las tiras formando una trenza.",
      "Dejar fermentar durante 30 min.",
      "Barnizar con huevo y dejar secar.",
      "Volver a barnizar y dejar secar.",
      "Hornear de 180 a 200°C de 20-25 min.",
      "Dejar enfriar y presentar producto."
    ],
    "recomendaciones": [
      "No dejar tan aguada la masa, para evitar que se pierda la figura."
    ],
    "keywords": [
      "almendra trozada",
      "inglesa",
      "masa de trenza inglesa",
      "mermelada de fresa",
      "pasas",
      "trenza"
    ],
    "contenido": "Trenza inglesa Pastelería Masa de trenza inglesa Mermelada de fresa Pasas Almendra trozada Identificar y pesar ingredientes. Extender la masa en forma rectangular. Marcar en 3 partes iguales a lo largo y colocar sobre charola negra. Colocar al centro mermelada, almendras y pasas. Cortar los lados en tiras de 1.5 cm en forma diagonal. Barnizar con huevo la orilla del relleno. Cubrir el relleno con las tiras formando una trenza. Dejar fermentar durante 30 min. Barnizar con huevo y dejar secar. Volver a barnizar y dejar secar. Hornear de 180 a 200°C de 20-25 min. Dejar enfriar y presentar producto. No dejar tan aguada la masa, para evitar que se pierda la figura."
  },
  {
    "nombre": "Soletas",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Huevo",
      "Harina",
      "Azúcar",
      "Azúcar glass",
      "Vainilla"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Desclarar el huevo.",
      "Mezclar las yemas con la vainilla.",
      "Batir las claras a punto de nieve e ir agregando el azúcar poco a poco.",
      "Batir hasta formar un merengue y agregar las yemas suavemente.",
      "Incorporar el harina en forma de lluvia.",
      "Cortar sobre charola engrasada con la ayuda de una manga.",
      "Espolvorear con azúcar glass.",
      "Hornear a 180°C durante 15 min."
    ],
    "recomendaciones": [
      "Conservación de 7-10 días en recipiente hermético.",
      "Mantener en lugar fresco y seco."
    ],
    "keywords": [
      "azúcar",
      "azúcar glass",
      "harina",
      "huevo",
      "soletas",
      "vainilla"
    ],
    "contenido": "Soletas Pastelería Huevo Harina Azúcar Azúcar glass Vainilla Identificar y pesar ingredientes. Desclarar el huevo. Mezclar las yemas con la vainilla. Batir las claras a punto de nieve e ir agregando el azúcar poco a poco. Batir hasta formar un merengue y agregar las yemas suavemente. Incorporar el harina en forma de lluvia. Cortar sobre charola engrasada con la ayuda de una manga. Espolvorear con azúcar glass. Hornear a 180°C durante 15 min. Conservación de 7-10 días en recipiente hermético. Mantener en lugar fresco y seco."
  },
  {
    "nombre": "Saint-Christophe",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Biscuit",
      "Mousse de fresa",
      "Mermelada de fresa",
      "Brillo",
      "Color vegetal rojo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Colocar la banda de biscuit sobre papel estraza con azúcar.",
      "Cubrir la superficie con mermelada de fresa, previamente licuada con el color vegetal.",
      "Enrollar de arriba hacia abajo, apretando lo más que se pueda.",
      "Refrigerar el rollo durante 20 min.",
      "Cortar el rollo del biscuit en rebanadas de 0.5 cm. de grosor.",
      "Forrar por dentro un bowl con las rebanadas del rollo.",
      "Vaciar el mousse de fresa dentro del bowl.",
      "Refrigerar hasta cuajar.",
      "Desmoldar y brillar.",
      "Presentar en charola con carpeta.",
      "Si se es posible, decorar con crema chantilly alrededor."
    ],
    "recomendaciones": [
      "Conservación de 2-3 días en refrigeración.",
      "Servir frío."
    ],
    "keywords": [
      "biscuit",
      "brillo",
      "christophe",
      "color vegetal rojo",
      "mermelada de fresa",
      "mousse de fresa",
      "saint"
    ],
    "contenido": "Saint-Christophe Pastelería Biscuit Mousse de fresa Mermelada de fresa Brillo Color vegetal rojo Identificar y preparar componentes. Colocar la banda de biscuit sobre papel estraza con azúcar. Cubrir la superficie con mermelada de fresa, previamente licuada con el color vegetal. Enrollar de arriba hacia abajo, apretando lo más que se pueda. Refrigerar el rollo durante 20 min. Cortar el rollo del biscuit en rebanadas de 0.5 cm. de grosor. Forrar por dentro un bowl con las rebanadas del rollo. Vaciar el mousse de fresa dentro del bowl. Refrigerar hasta cuajar. Desmoldar y brillar. Presentar en charola con carpeta. Si se es posible, decorar con crema chantilly alrededor. Conservación de 2-3 días en refrigeración. Servir frío."
  },
  {
    "nombre": "Pastel de naranja",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Crema de naranja",
      "Panque de naranja",
      "Fondant frio",
      "Azúcar glass"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar el panque en 3 discos iguales.",
      "Rellenar el panque con crema de naranja.",
      "Cubrir el pastel ligeramente con crema de naranja.",
      "Refrigerar durante 30 min aprox.",
      "Extender el fondant a un grosor de 3 mm.",
      "Cubrir el pastel por completo con el fondant.",
      "Decorar con glass royal.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar glass",
      "crema de naranja",
      "fondant frio",
      "naranja",
      "panque de naranja",
      "pastel"
    ],
    "contenido": "Pastel de naranja Pastelería Crema de naranja Panque de naranja Fondant frio Azúcar glass Identificar y preparar componentes. Cortar el panque en 3 discos iguales. Rellenar el panque con crema de naranja. Cubrir el pastel ligeramente con crema de naranja. Refrigerar durante 30 min aprox. Extender el fondant a un grosor de 3 mm. Cubrir el pastel por completo con el fondant. Decorar con glass royal. Presentar el producto en charola con carpeta. "
  },
  {
    "nombre": "Panque de naranja",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Huevo",
      "Mantequilla",
      "Margarina",
      "Royal",
      "Maizena",
      "Naranja - Una para jugo y otra para ralladura"
    ],
    "tecnica": [
      "Acremar la materia grasa y el azúcar hasta blanquear.",
      "Agregar las yemas poco a poco hasta integrar bien.",
      "Incorporar el harina, royal y maizena.",
      "Agregar el jugo de naranja y la ralladura.",
      "Incorporar las claras hasta integrar bien.",
      "Verter al molde engrasado y enharinado.",
      "Hornear a 180°C durante 40 min."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días en refrigeración.",
      "Servir a temperatura ambiente."
    ],
    "keywords": [
      "azúcar",
      "harina",
      "huevo",
      "maizena",
      "mantequilla",
      "margarina",
      "naranja",
      "naranja - una para jugo y otra para ralladura",
      "panque",
      "royal"
    ],
    "contenido": "Panque de naranja Pastelería Harina Azúcar Huevo Mantequilla Margarina Royal Maizena Naranja - Una para jugo y otra para ralladura Acremar la materia grasa y el azúcar hasta blanquear. Agregar las yemas poco a poco hasta integrar bien. Incorporar el harina, royal y maizena. Agregar el jugo de naranja y la ralladura. Incorporar las claras hasta integrar bien. Verter al molde engrasado y enharinado. Hornear a 180°C durante 40 min. Conservación de 3-4 días en refrigeración. Servir a temperatura ambiente."
  },
  {
    "nombre": "Mantecadas",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Harina",
      "Leche en polvo",
      "Azúcar",
      "Levadura",
      "Royal",
      "Huevo",
      "Aceite",
      "Ralladura de naranja"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Colocar en un bowl: aceite y azúcar; posteriormente batir con el globo hasta incorporar.",
      "Incorporar el huevo poco a poco y seguir batiendo hasta obtener una mezcla ligera.",
      "Agregar el harina, royal, levadura y leche en polvo hasta incorporar.",
      "Incorporar la ralladura de naranja.",
      "Llenar moldes de cake a 3/4 partes previamente encapacillados.",
      "Hornear a 200°C durante 20 min.",
      "Presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 8-10 días envuelto en plástico."
    ],
    "keywords": [
      "aceite",
      "azúcar",
      "harina",
      "huevo",
      "leche en polvo",
      "levadura",
      "mantecadas",
      "ralladura de naranja",
      "royal"
    ],
    "contenido": "Mantecadas Pastelería Harina Leche en polvo Azúcar Levadura Royal Huevo Aceite Ralladura de naranja Identificar y preparar componentes. Colocar en un bowl: aceite y azúcar; posteriormente batir con el globo hasta incorporar. Incorporar el huevo poco a poco y seguir batiendo hasta obtener una mezcla ligera. Agregar el harina, royal, levadura y leche en polvo hasta incorporar. Incorporar la ralladura de naranja. Llenar moldes de cake a 3/4 partes previamente encapacillados. Hornear a 200°C durante 20 min. Presentar producto. Conservación de 8-10 días envuelto en plástico."
  },
  {
    "nombre": "Pastel especial de Navidad",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Batido de aceite",
      "Merengue",
      "Figuras de azúcar"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Colocar el batido sobre un disco.",
      "Cubrir el batido con merengue.",
      "Colocar las figuras de azúcar en forma decorativa.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días en refrigeración.",
      "Mantener en lugar fresco y seco."
    ],
    "keywords": [
      "batido de aceite",
      "especial",
      "figuras de azúcar",
      "merengue",
      "navidad",
      "pastel"
    ],
    "contenido": "Pastel especial de Navidad Pastelería Batido de aceite Merengue Figuras de azúcar Identificar y pesar los ingredientes. Colocar el batido sobre un disco. Cubrir el batido con merengue. Colocar las figuras de azúcar en forma decorativa. Presentar el producto en charola con carpeta. Conservación de 3-4 días en refrigeración. Mantener en lugar fresco y seco."
  },
  {
    "nombre": "Bastón navideño",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Sal",
      "Levadura",
      "Margarina",
      "Huevo",
      "Agua",
      "Fruta cristalizada",
      "Brillo",
      "Cerezas"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Hacer una fuente con la harina y la levadura por fuera.",
      "Incorporar hasta obtener un premezclado.",
      "Agregar agua poco a poco y seguir amasando hasta obtener una masa semielástica.",
      "Incorporar margarina poco a poco y mezclar hasta integrar.",
      "Seguir amasando hasta obtener una masa suave, lisa y elástica.",
      "Refrigerar durante 30 minutos.",
      "Extender en forma de rectángulo, esparcir la fruta y enrollar.",
      "Cortar en 3 partes iguales, trenzar y dar forma.",
      "Fermentar hasta que doble su volumen.",
      "Barnizar con huevo y dejar secar.",
      "Hornear a 180°C durante 20 minutos.",
      "Brillar y decorar con cerezas."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días en refrigeración.",
      "Mantener en lugar fresco y seco."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "bastón",
      "brillo",
      "cerezas",
      "fruta cristalizada",
      "harina",
      "huevo",
      "levadura",
      "margarina",
      "navideño",
      "sal"
    ],
    "contenido": "Bastón navideño Pastelería Harina Azúcar Sal Levadura Margarina Huevo Agua Fruta cristalizada Brillo Cerezas Identificar y pesar los ingredientes. Hacer una fuente con la harina y la levadura por fuera. Incorporar hasta obtener un premezclado. Agregar agua poco a poco y seguir amasando hasta obtener una masa semielástica. Incorporar margarina poco a poco y mezclar hasta integrar. Seguir amasando hasta obtener una masa suave, lisa y elástica. Refrigerar durante 30 minutos. Extender en forma de rectángulo, esparcir la fruta y enrollar. Cortar en 3 partes iguales, trenzar y dar forma. Fermentar hasta que doble su volumen. Barnizar con huevo y dejar secar. Hornear a 180°C durante 20 minutos. Brillar y decorar con cerezas. Conservación de 3-4 días en refrigeración. Mantener en lugar fresco y seco."
  },
  {
    "nombre": "Fruit Cake",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Harina",
      "Azúcar mascabado",
      "Royal",
      "Huevo",
      "Mantequilla",
      "Sal",
      "Ron",
      "Almendra tostada",
      "Cerezas",
      "Pasas",
      "Nuez",
      "Fruta cristalizada",
      "Clavo molido",
      "Nuez moscada",
      "Aceite",
      "Brillo"
    ],
    "tecnica": [
      "Macerar la fruta en ron y aceite.",
      "Acremar mantequilla con azúcar mascabado y sal hasta blanquear.",
      "Incorporar huevo poco a poco.",
      "Mezclar harina, royal, clavo y nuez moscada.",
      "Incorporar la mezcla en forma envolvente.",
      "Agregar la fruta macerada e integrar.",
      "Vaciar en molde engrasado y enharinado.",
      "Decorar con fruta y hornear a 180°C durante 30 minutos.",
      "Envinar y reposar 15 minutos.",
      "Brillar y presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 5-7 días en refrigeración.",
      "Mantener en lugar fresco y seco."
    ],
    "keywords": [
      "aceite",
      "almendra tostada",
      "azúcar mascabado",
      "brillo",
      "cake",
      "cerezas",
      "clavo molido",
      "fruit",
      "fruta cristalizada",
      "harina",
      "huevo",
      "mantequilla",
      "nuez",
      "nuez moscada",
      "pasas",
      "ron",
      "royal",
      "sal"
    ],
    "contenido": "Fruit Cake Pastelería Harina Azúcar mascabado Royal Huevo Mantequilla Sal Ron Almendra tostada Cerezas Pasas Nuez Fruta cristalizada Clavo molido Nuez moscada Aceite Brillo Macerar la fruta en ron y aceite. Acremar mantequilla con azúcar mascabado y sal hasta blanquear. Incorporar huevo poco a poco. Mezclar harina, royal, clavo y nuez moscada. Incorporar la mezcla en forma envolvente. Agregar la fruta macerada e integrar. Vaciar en molde engrasado y enharinado. Decorar con fruta y hornear a 180°C durante 30 minutos. Envinar y reposar 15 minutos. Brillar y presentar el producto. Conservación de 5-7 días en refrigeración. Mantener en lugar fresco y seco."
  },
  {
    "nombre": "Biscuit de chocolate",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Huevo",
      "Azúcar",
      "Harina",
      "Colores vegetales"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Desclarar el huevo.",
      "Batir las claras a punto de nieve.",
      "Incorporar el azúcar poco a poco mientras se sigue batiendo hasta formar un merengue.",
      "Incorporar las yemas y batir suavemente.",
      "Agregar en forma envolvente la harina previamente mezclada con la cocoa.",
      "Vaciar en una charola previamente engrasada y emparejar.",
      "Hornear a 180°C durante 20 minutos."
    ],
    "recomendaciones": [
      "Conservación de 2-3 días en refrigeración.",
      "Mantener en lugar fresco y seco."
    ],
    "keywords": [
      "azúcar",
      "biscuit",
      "chocolate",
      "colores vegetales",
      "harina",
      "huevo"
    ],
    "contenido": "Biscuit de chocolate Pastelería Huevo Azúcar Harina Colores vegetales Identificar y pesar los ingredientes. Desclarar el huevo. Batir las claras a punto de nieve. Incorporar el azúcar poco a poco mientras se sigue batiendo hasta formar un merengue. Incorporar las yemas y batir suavemente. Agregar en forma envolvente la harina previamente mezclada con la cocoa. Vaciar en una charola previamente engrasada y emparejar. Hornear a 180°C durante 20 minutos. Conservación de 2-3 días en refrigeración. Mantener en lugar fresco y seco."
  },
  {
    "nombre": "Tronco de Navidad",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Biscuit de chocolate",
      "Crema de mantequilla",
      "Ganache",
      "Hongos de merengue",
      "Cocoa",
      "Coco rallado",
      "Color vegetal verde"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Mezclar la crema de mantequilla con el ganache.",
      "Colocar la plancha de biscuit sobre un papel de estraza.",
      "Extender la crema de chocolate sobre la plancha.",
      "Enrollar la plancha con la ayuda del papel de estraza.",
      "Cortar un extremo en forma sesgada y colocarlo en forma de tronco.",
      "Cubrir con crema de chocolate y rallar con un tenedor.",
      "Decorar con coco rallado teñido de verde y los hongos espolvoreados con cocoa.",
      "Decorar con crema de mantequilla.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días en refrigeración.",
      "Mantener en lugar fresco y seco."
    ],
    "keywords": [
      "biscuit de chocolate",
      "coco rallado",
      "cocoa",
      "color vegetal verde",
      "crema de mantequilla",
      "ganache",
      "hongos de merengue",
      "navidad",
      "tronco"
    ],
    "contenido": "Tronco de Navidad Pastelería Biscuit de chocolate Crema de mantequilla Ganache Hongos de merengue Cocoa Coco rallado Color vegetal verde Identificar y pesar los ingredientes. Mezclar la crema de mantequilla con el ganache. Colocar la plancha de biscuit sobre un papel de estraza. Extender la crema de chocolate sobre la plancha. Enrollar la plancha con la ayuda del papel de estraza. Cortar un extremo en forma sesgada y colocarlo en forma de tronco. Cubrir con crema de chocolate y rallar con un tenedor. Decorar con coco rallado teñido de verde y los hongos espolvoreados con cocoa. Decorar con crema de mantequilla. Presentar el producto. Conservación de 3-4 días en refrigeración. Mantener en lugar fresco y seco."
  },
  {
    "nombre": "Cake decorado",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Harina",
      "Royal",
      "Mantequilla",
      "Margarina",
      "Azúcar",
      "Huevo",
      "Agua",
      "Fondant",
      "Cerezas"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Acremar la materia grasa con el azúcar hasta obtener un punto de pomada.",
      "Incorporar el huevo poco a poco y airear.",
      "Agregar la harina y el royal, y mezclar suavemente.",
      "Incorporar el agua.",
      "Vaciar en moldes de cake previamente encapacillados hasta 3/4 partes del molde.",
      "Hornear a 180°C durante 20 minutos.",
      "Desmoldar y dejar enfriar.",
      "Decorar con fondant y cerezas.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [
      "Conservación de 3-4 días en refrigeración.",
      "Mantener en lugar fresco y seco."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "cake",
      "cerezas",
      "decorado",
      "fondant",
      "harina",
      "huevo",
      "mantequilla",
      "margarina",
      "royal"
    ],
    "contenido": "Cake decorado Pastelería Harina Royal Mantequilla Margarina Azúcar Huevo Agua Fondant Cerezas Identificar y pesar los ingredientes. Acremar la materia grasa con el azúcar hasta obtener un punto de pomada. Incorporar el huevo poco a poco y airear. Agregar la harina y el royal, y mezclar suavemente. Incorporar el agua. Vaciar en moldes de cake previamente encapacillados hasta 3/4 partes del molde. Hornear a 180°C durante 20 minutos. Desmoldar y dejar enfriar. Decorar con fondant y cerezas. Presentar el producto en charola con carpeta. Conservación de 3-4 días en refrigeración. Mantener en lugar fresco y seco."
  },
  {
    "nombre": "Carlota de pera",
    "categoria": "Pastelería",
    "urlCategoria": "categorias/pasteleria.html",
    "ingredientes": [
      "Soletas",
      "Crema de pera",
      "Pera natural",
      "Cereza",
      "Brillo"
    ],
    "tecnica": [
      "Identificar y preparar los componentes.",
      "Preparar un aro para mousse.",
      "Colocar las soletas alrededor del aro por dentro.",
      "Colocar una capa de genoise en un disco y envinarla con jarabe con ron.",
      "Vaciar la crema de pera en el aro.",
      "Refrigerar hasta cuajar.",
      "Decorar finalmente con la pera natural y la cereza.",
      "Aplicar brillo y desmoldar el producto.",
      "Presentar en charola con carpeta."
    ],
    "recomendaciones": [
      "Conservación de 2-3 días en refrigeración."
    ],
    "keywords": [
      "brillo",
      "carlota",
      "cereza",
      "crema de pera",
      "pera",
      "pera natural",
      "soletas"
    ],
    "contenido": "Carlota de pera Pastelería Soletas Crema de pera Pera natural Cereza Brillo Identificar y preparar los componentes. Preparar un aro para mousse. Colocar las soletas alrededor del aro por dentro. Colocar una capa de genoise en un disco y envinarla con jarabe con ron. Vaciar la crema de pera en el aro. Refrigerar hasta cuajar. Decorar finalmente con la pera natural y la cereza. Aplicar brillo y desmoldar el producto. Presentar en charola con carpeta. Conservación de 2-3 días en refrigeración."
  },
  {
    "nombre": "Fondant",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Azucar glass",
      "Goma de tragacanto",
      "Glucosa",
      "Miel Caro",
      "Agua"
    ],
    "tecnica": [
      "Cernir el azucar glass con la goma de tragacanto y hacer una fuente.",
      "Disolver en el agua la glucosa e incorporarla al centro de la fuente.",
      "Mezclar hasta formar una pasta.",
      "Agregar la miel y seguir amasando hasta obtener una pasta suave.",
      "Dejar reposar por 1 día."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azucar glass",
      "fondant",
      "glucosa",
      "goma de tragacanto",
      "miel caro"
    ],
    "contenido": "Fondant Pasteles Decorados Azucar glass Goma de tragacanto Glucosa Miel Caro Agua Cernir el azucar glass con la goma de tragacanto y hacer una fuente. Disolver en el agua la glucosa e incorporarla al centro de la fuente. Mezclar hasta formar una pasta. Agregar la miel y seguir amasando hasta obtener una pasta suave. Dejar reposar por 1 día. "
  },
  {
    "nombre": "Pastel cubierto con fondant",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Base de panque de vainilla",
      "Mermelada de fresa",
      "Mermelada de chabacano",
      "Fondant"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Emparejar y cortar el panque en 3 capas.",
      "Rellenar el panque con mermelada de fresa.",
      "Mezclar a parte todo el recorte del panque con mermelada de chabacano y mezclar hasta formar una pasta.",
      "Cubrir las paredes del pastel con la pasta anterior.",
      "Extender el fondant con azucar glass a un grosor de 3 mm.",
      "Cubrir el pastel con el fondant jalando hacia afuera para evitar que se formen olanes.",
      "Decorar al gusto."
    ],
    "recomendaciones": [],
    "keywords": [
      "base de panque de vainilla",
      "con",
      "cubierto",
      "fondant",
      "mermelada de chabacano",
      "mermelada de fresa",
      "pastel"
    ],
    "contenido": "Pastel cubierto con fondant Pasteles Decorados Base de panque de vainilla Mermelada de fresa Mermelada de chabacano Fondant Identificar y preparar componentes. Emparejar y cortar el panque en 3 capas. Rellenar el panque con mermelada de fresa. Mezclar a parte todo el recorte del panque con mermelada de chabacano y mezclar hasta formar una pasta. Cubrir las paredes del pastel con la pasta anterior. Extender el fondant con azucar glass a un grosor de 3 mm. Cubrir el pastel con el fondant jalando hacia afuera para evitar que se formen olanes. Decorar al gusto. "
  },
  {
    "nombre": "Pastel de rompope",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Genoise de vainilla",
      "Crema de mantequilla",
      "Rompope",
      "Jarabe",
      "Granillo",
      "Ganache"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Mezclar el rompope con el jarabe.",
      "Cortar el genoise en 3 partes.",
      "Colocar una parte del genoise y envinarla.",
      "Esparcir crema de mantequilla.",
      "Colocar la sig. capa de genoise y envinarla.",
      "Esparcir crema de mantequilla y colocar la ultima parte del genoise.",
      "Envinarla y cubrir el pastel con la crema de mantequilla.",
      "Colocar granillo alrededor y decorar con manga y dulla rizada.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [
      "Si la crema de mantequilla esta fria, suavizarla ligeramente para evitar que se cuartee.",
      "Conservación de 2-3 días en refrigeración."
    ],
    "keywords": [
      "crema de mantequilla",
      "ganache",
      "genoise de vainilla",
      "granillo",
      "jarabe",
      "pastel",
      "rompope"
    ],
    "contenido": "Pastel de rompope Pasteles Decorados Genoise de vainilla Crema de mantequilla Rompope Jarabe Granillo Ganache Identificar y preparar componentes. Mezclar el rompope con el jarabe. Cortar el genoise en 3 partes. Colocar una parte del genoise y envinarla. Esparcir crema de mantequilla. Colocar la sig. capa de genoise y envinarla. Esparcir crema de mantequilla y colocar la ultima parte del genoise. Envinarla y cubrir el pastel con la crema de mantequilla. Colocar granillo alrededor y decorar con manga y dulla rizada. Presentar el producto en charola con carpeta. Si la crema de mantequilla esta fria, suavizarla ligeramente para evitar que se cuartee. Conservación de 2-3 días en refrigeración."
  },
  {
    "nombre": "Pastel americano",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Genoise de Chocolate",
      "Crema de mantequilla",
      "Jarabe",
      "Ron",
      "Ganache",
      "Granillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Corrar el genoise en 3 partes iguales.",
      "Poner una capa de genoise sobre un disco de cartón.",
      "Envinar el genoise con jarabe con ron y untar con crema de mantequilla.",
      "Colocar la sig. capa de genoise y repetir la operacion anterior.",
      "Colocar la ultima capa de genoise y envinarla.",
      "Cubrir el pastel con la crema de mantequilla.",
      "Decorar con picos con crema de mantequilla.",
      "Rayar con ganache los picos y cubrir las paredes con granillo.",
      "Presentar el pastel en charola con carpeta."
    ],
    "recomendaciones": [
      "Suavizar el ganache antes de aplicarlo.",
      "Conservación de 2-3 días en refrigeración."
    ],
    "keywords": [
      "americano",
      "crema de mantequilla",
      "ganache",
      "genoise de chocolate",
      "granillo",
      "jarabe",
      "pastel",
      "ron"
    ],
    "contenido": "Pastel americano Pasteles Decorados Genoise de Chocolate Crema de mantequilla Jarabe Ron Ganache Granillo Identificar y preparar componentes. Corrar el genoise en 3 partes iguales. Poner una capa de genoise sobre un disco de cartón. Envinar el genoise con jarabe con ron y untar con crema de mantequilla. Colocar la sig. capa de genoise y repetir la operacion anterior. Colocar la ultima capa de genoise y envinarla. Cubrir el pastel con la crema de mantequilla. Decorar con picos con crema de mantequilla. Rayar con ganache los picos y cubrir las paredes con granillo. Presentar el pastel en charola con carpeta. Suavizar el ganache antes de aplicarlo. Conservación de 2-3 días en refrigeración."
  },
  {
    "nombre": "Pastel De Nuez",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Genoise de Vainilla",
      "Jarabe",
      "Ron",
      "Crema de mantequilla",
      "Nuez molida"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Cortar el genoise en 3 partes iguales.",
      "Preparar crema de mantequilla con nuez bien molida.",
      "Colocar la primera capa de genoise sobre un disco y envinarla con jarabe de ron.",
      "Esparcir crema de mantequilla con nuez.",
      "Repetir la operación con las partes restantes.",
      "Cubrir el pastel con la crema de nuez y cubrir las paredes con nuez.",
      "Decorar con dulla y manga rizada.",
      "Presentar producto en charola con carpeta."
    ],
    "recomendaciones": [
      "La crema de mantequilla se puede poner sola y la nuez en el relleno.",
      "Conservación de 2-3 días en refrigeración."
    ],
    "keywords": [
      "crema de mantequilla",
      "genoise de vainilla",
      "jarabe",
      "nuez",
      "nuez molida",
      "pastel",
      "ron"
    ],
    "contenido": "Pastel De Nuez Pasteles Decorados Genoise de Vainilla Jarabe Ron Crema de mantequilla Nuez molida Identificar y preparar componentes. Cortar el genoise en 3 partes iguales. Preparar crema de mantequilla con nuez bien molida. Colocar la primera capa de genoise sobre un disco y envinarla con jarabe de ron. Esparcir crema de mantequilla con nuez. Repetir la operación con las partes restantes. Cubrir el pastel con la crema de nuez y cubrir las paredes con nuez. Decorar con dulla y manga rizada. Presentar producto en charola con carpeta. La crema de mantequilla se puede poner sola y la nuez en el relleno. Conservación de 2-3 días en refrigeración."
  },
  {
    "nombre": "Pastel Selva Negra",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Genoise de Chocolate",
      "Crema de mantequilla",
      "Ganache",
      "Jarabe",
      "Ron",
      "Granillo",
      "Cobertura",
      "Azucar glass",
      "Cerezas"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Preparar crema de chocolate mezclando crema de mantequilla y ganache.",
      "Cortar el genoise en 3 partes.",
      "Colocar una capa de genoise en un disco y envinarla con jarabe con ron.",
      "Untar crema de chocolate y rellenar con cerezas picadas.",
      "Colocar la sig. capa de genoise y envinarla.",
      "Untar crema de chocolate y colocar la ultima capa de genoise.",
      "Envinar y cubrir el pastel con crema de chocolate.",
      "Colocar granillo en las paredes y decorar con un contorno con la ayuda de una manga con dulla rizada.",
      "Colocar al centro la cobertura rallada y espolvorearla con azucar glass.",
      "Decorar con azucar glass.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [
      "El chocolate rallado se pone ya que se va a presentar.",
      "Conservación de 2-3 días en refrigeración."
    ],
    "keywords": [
      "azucar glass",
      "cerezas",
      "cobertura",
      "crema de mantequilla",
      "ganache",
      "genoise de chocolate",
      "granillo",
      "jarabe",
      "negra",
      "pastel",
      "ron",
      "selva"
    ],
    "contenido": "Pastel Selva Negra Pasteles Decorados Genoise de Chocolate Crema de mantequilla Ganache Jarabe Ron Granillo Cobertura Azucar glass Cerezas Identificar y preparar componentes. Preparar crema de chocolate mezclando crema de mantequilla y ganache. Cortar el genoise en 3 partes. Colocar una capa de genoise en un disco y envinarla con jarabe con ron. Untar crema de chocolate y rellenar con cerezas picadas. Colocar la sig. capa de genoise y envinarla. Untar crema de chocolate y colocar la ultima capa de genoise. Envinar y cubrir el pastel con crema de chocolate. Colocar granillo en las paredes y decorar con un contorno con la ayuda de una manga con dulla rizada. Colocar al centro la cobertura rallada y espolvorearla con azucar glass. Decorar con azucar glass. Presentar el producto en charola con carpeta. El chocolate rallado se pone ya que se va a presentar. Conservación de 2-3 días en refrigeración."
  },
  {
    "nombre": "Pastel Ajedrez",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Genoise de vainilla",
      "Genoise de chocolate",
      "Crema",
      "Jarabe",
      "Ron",
      "Ganache",
      "Granillo"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Colocar una capa de genoise de vainilla sobre un disco.",
      "Envinar la capa de genoise y untarla con crema de mantequilla mezclada con ganache.",
      "Colocar una capa de genoise de chocolate y envinarla.",
      "Untar con crema de chocolate y colar otra capa de genoise de vainilla.",
      "Envinar y cubrir ligeramente el pastel con crema de chocolate.",
      "Colocar granillo alrededor del pastel.",
      "Decorar con manga y dulla rizada intercalando crema blanca y crema de chocolate.",
      "Presentar en producto en charola con carpeta."
    ],
    "recomendaciones": [
      "Se puede decorar formando rombos o cuadros.",
      "Conservación de 2-3 días en refrigeración."
    ],
    "keywords": [
      "ajedrez",
      "crema",
      "ganache",
      "genoise de chocolate",
      "genoise de vainilla",
      "granillo",
      "jarabe",
      "pastel",
      "ron"
    ],
    "contenido": "Pastel Ajedrez Pasteles Decorados Genoise de vainilla Genoise de chocolate Crema Jarabe Ron Ganache Granillo Identificar y preparar componentes. Colocar una capa de genoise de vainilla sobre un disco. Envinar la capa de genoise y untarla con crema de mantequilla mezclada con ganache. Colocar una capa de genoise de chocolate y envinarla. Untar con crema de chocolate y colar otra capa de genoise de vainilla. Envinar y cubrir ligeramente el pastel con crema de chocolate. Colocar granillo alrededor del pastel. Decorar con manga y dulla rizada intercalando crema blanca y crema de chocolate. Presentar en producto en charola con carpeta. Se puede decorar formando rombos o cuadros. Conservación de 2-3 días en refrigeración."
  },
  {
    "nombre": "Fondant Frío",
    "categoria": "Pasteles Decorados",
    "urlCategoria": "categorias/pasteles-decorados.html",
    "ingredientes": [
      "Azucar glass",
      "Margarina",
      "Glucosa"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Incorporar margarina hasta desaparecer grumos.",
      "Agregar el azucar glass y mezclar hasta obtener una pasta manejable.",
      "Dar color deseado.",
      "Refrigerar 30 min aprox."
    ],
    "recomendaciones": [],
    "keywords": [
      "azucar glass",
      "fondant",
      "frío",
      "glucosa",
      "margarina"
    ],
    "contenido": "Fondant Frío Pasteles Decorados Azucar glass Margarina Glucosa Identificar y preparar componentes. Incorporar margarina hasta desaparecer grumos. Agregar el azucar glass y mezclar hasta obtener una pasta manejable. Dar color deseado. Refrigerar 30 min aprox. "
  },
  {
    "nombre": "Donas",
    "categoria": "Postres Fritos",
    "urlCategoria": "categorias/postres-fritos.html",
    "ingredientes": [
      "Masa de donas",
      "Harina"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Sacar la masa del refrigerador y dar 2 vueltas.",
      "Extender la masa hasta obtener un grosor de 1 cm.",
      "Cortar con molde adecuado y colocar en charola negra previamente engrasada.",
      "Dejar fermentar hasta que doble su volumen.",
      "Freir en aceite y dejar escurrir.",
      "Decorar y presentar producto."
    ],
    "recomendaciones": [
      "Conservación de 5 días cubiertas en plástico."
    ],
    "keywords": [
      "donas",
      "harina",
      "masa de donas"
    ],
    "contenido": "Donas Postres Fritos Masa de donas Harina Identificar y preparar componentes. Sacar la masa del refrigerador y dar 2 vueltas. Extender la masa hasta obtener un grosor de 1 cm. Cortar con molde adecuado y colocar en charola negra previamente engrasada. Dejar fermentar hasta que doble su volumen. Freir en aceite y dejar escurrir. Decorar y presentar producto. Conservación de 5 días cubiertas en plástico."
  },
  {
    "nombre": "Soletas",
    "categoria": "Postres Fritos",
    "urlCategoria": "categorias/postres-fritos.html",
    "ingredientes": [
      "Huevo",
      "Harina",
      "Azúcar",
      "Azúcar glass",
      "Vainilla"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Desclarar el huevo.",
      "Mezclar las yemas con la vainilla.",
      "Batir las claras a punto de nieve e ir agregando el azúcar poco a poco.",
      "Batir hasta formar un merengue y agregar las yemas suavemente.",
      "Incorporar la harina en forma de lluvia.",
      "Colocar la mezcla sobre una charola engrasada con la ayuda de una manga.",
      "Espolvorear con azúcar glass.",
      "Hornear a 180°C durante 15 minutos."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar",
      "azúcar glass",
      "harina",
      "huevo",
      "soletas",
      "vainilla"
    ],
    "contenido": "Soletas Postres Fritos Huevo Harina Azúcar Azúcar glass Vainilla Identificar y pesar los ingredientes. Desclarar el huevo. Mezclar las yemas con la vainilla. Batir las claras a punto de nieve e ir agregando el azúcar poco a poco. Batir hasta formar un merengue y agregar las yemas suavemente. Incorporar la harina en forma de lluvia. Colocar la mezcla sobre una charola engrasada con la ayuda de una manga. Espolvorear con azúcar glass. Hornear a 180°C durante 15 minutos. "
  },
  {
    "nombre": "Gelatina de Agua",
    "categoria": "Postres de Gelatina",
    "urlCategoria": "categorias/postres-gelatina.html",
    "ingredientes": [
      "Agua",
      "Azúcar",
      "Grenetina",
      "Sabor",
      "Color"
    ],
    "tecnica": [
      "Mezclar en seco grenetina y azúcar.",
      "Hervir el agua.",
      "Agregar la mezcla de azúcar y grenetina.",
      "Batir enérgicamente.",
      "Dar sabor y color deseado."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "azúcar",
      "color",
      "gelatina",
      "grenetina",
      "sabor"
    ],
    "contenido": "Gelatina de Agua Postres de Gelatina Agua Azúcar Grenetina Sabor Color Mezclar en seco grenetina y azúcar. Hervir el agua. Agregar la mezcla de azúcar y grenetina. Batir enérgicamente. Dar sabor y color deseado. "
  },
  {
    "nombre": "Gelatina de Leche",
    "categoria": "Postres de Gelatina",
    "urlCategoria": "categorias/postres-gelatina.html",
    "ingredientes": [
      "Leche",
      "Azúcar",
      "Grenetina",
      "Rompope"
    ],
    "tecnica": [
      "Mezclar en seco la grenetina y el azúcar.",
      "Hervir la leche.",
      "Agregar la mezcla de azúcar y grenetina.",
      "Batir enérgicamente.",
      "Incorporar el rompope."
    ],
    "recomendaciones": [],
    "keywords": [
      "azúcar",
      "gelatina",
      "grenetina",
      "leche",
      "rompope"
    ],
    "contenido": "Gelatina de Leche Postres de Gelatina Leche Azúcar Grenetina Rompope Mezclar en seco la grenetina y el azúcar. Hervir la leche. Agregar la mezcla de azúcar y grenetina. Batir enérgicamente. Incorporar el rompope. "
  },
  {
    "nombre": "Gelatina Combinada",
    "categoria": "Postres de Gelatina",
    "urlCategoria": "categorias/postres-gelatina.html",
    "ingredientes": [
      "Gelatina de agua",
      "Gelatina de rompope",
      "Ciruela pasa",
      "Nuez",
      "Cereza"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Colocar una capa de 5 mm. de grosor de gelatina de agua sin color en el molde y refrigerar hasta cuajar.",
      "Colocar encima la fruta en forma decorativa boca abajo.",
      "Vaciar sobre la fruta y poco más de gelatina sin color solo para que se pegue la fruta; refrigerar hasta cuajar.",
      "Vaciar la gelatina de agua tibia y refrigerar hasta cuajar.",
      "Vaciar la gelatina de rompope tibia y refrigerar hasta cuajar totalmente.",
      "Para desmoldar sumergir el molde de la gelatina en agua tibia."
    ],
    "recomendaciones": [
      "La gelatina líquida debe de estar tibia para permitir que pegue con la siguiente capa.",
      "Conservación de 3-5 días en refrigeración."
    ],
    "keywords": [
      "cereza",
      "ciruela pasa",
      "combinada",
      "gelatina",
      "gelatina de agua",
      "gelatina de rompope",
      "nuez"
    ],
    "contenido": "Gelatina Combinada Postres de Gelatina Gelatina de agua Gelatina de rompope Ciruela pasa Nuez Cereza Identificar y pesar ingredientes. Colocar una capa de 5 mm. de grosor de gelatina de agua sin color en el molde y refrigerar hasta cuajar. Colocar encima la fruta en forma decorativa boca abajo. Vaciar sobre la fruta y poco más de gelatina sin color solo para que se pegue la fruta; refrigerar hasta cuajar. Vaciar la gelatina de agua tibia y refrigerar hasta cuajar. Vaciar la gelatina de rompope tibia y refrigerar hasta cuajar totalmente. Para desmoldar sumergir el molde de la gelatina en agua tibia. La gelatina líquida debe de estar tibia para permitir que pegue con la siguiente capa. Conservación de 3-5 días en refrigeración."
  },
  {
    "nombre": "Gelatina de Piña y Zanahoria",
    "categoria": "Postres de Gelatina",
    "urlCategoria": "categorias/postres-gelatina.html",
    "ingredientes": [
      "Agua",
      "Leche condensada",
      "Zanahoria rallada",
      "Jugo de piña",
      "Media crema",
      "Grenetina",
      "Piña en almibar, cortada en cuadritos"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Poner a hervir el agua con la leche condensada.",
      "Hidratar la grenetina con 100 mls. de agua fria.",
      "Verter la leche caliente a la grenetina y mezclar hasta disolver.",
      "Entibiar un poco la mezcla anterior.",
      "Incorporar el jugo de piña y la media crema.",
      "Colocar en el molde la zanahoria y la piña.",
      "Vaciar la gelatina al molde y refrigerar hasta cuajar.",
      "Presentar producto en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "agua",
      "gelatina",
      "grenetina",
      "jugo de piña",
      "leche condensada",
      "media crema",
      "piña",
      "piña en almibar, cortada en cuadritos",
      "zanahoria",
      "zanahoria rallada"
    ],
    "contenido": "Gelatina de Piña y Zanahoria Postres de Gelatina Agua Leche condensada Zanahoria rallada Jugo de piña Media crema Grenetina Piña en almibar, cortada en cuadritos Identificar y pesar ingredientes. Poner a hervir el agua con la leche condensada. Hidratar la grenetina con 100 mls. de agua fria. Verter la leche caliente a la grenetina y mezclar hasta disolver. Entibiar un poco la mezcla anterior. Incorporar el jugo de piña y la media crema. Colocar en el molde la zanahoria y la piña. Vaciar la gelatina al molde y refrigerar hasta cuajar. Presentar producto en charola con carpeta. "
  },
  {
    "nombre": "Gelatina Mosaico",
    "categoria": "Postres de Gelatina",
    "urlCategoria": "categorias/postres-gelatina.html",
    "ingredientes": [
      "Gelatina de leche",
      "Gelatina de limón",
      "Gelatina de piña",
      "Gelatina de naranja",
      "Gelatina de grosella"
    ],
    "tecnica": [
      "Identificar y preparar ingredientes.",
      "Cortar las gelatinas de colores en cubitos.",
      "Acomodar los cubitos de gelatina en el molde deseado.",
      "Vaciar la gelatina de leche tibia al molde.",
      "Refrigerar hasta cuajar.",
      "Desmoldar."
    ],
    "recomendaciones": [],
    "keywords": [
      "gelatina",
      "gelatina de grosella",
      "gelatina de leche",
      "gelatina de limón",
      "gelatina de naranja",
      "gelatina de piña",
      "mosaico"
    ],
    "contenido": "Gelatina Mosaico Postres de Gelatina Gelatina de leche Gelatina de limón Gelatina de piña Gelatina de naranja Gelatina de grosella Identificar y preparar ingredientes. Cortar las gelatinas de colores en cubitos. Acomodar los cubitos de gelatina en el molde deseado. Vaciar la gelatina de leche tibia al molde. Refrigerar hasta cuajar. Desmoldar. "
  },
  {
    "nombre": "Carnaval de frutas",
    "categoria": "Postres de Gelatina",
    "urlCategoria": "categorias/postres-gelatina.html",
    "ingredientes": [
      "Mazapan",
      "Ciruela pasa",
      "Almendras",
      "Nuez en mitad",
      "Datil",
      "Azucar",
      "Glucosa",
      "Limones",
      "Colores vegetales"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Colorear el mazapan de 4 colores.",
      "Rellenar ciruelas pasas y datiles con el mazapan de colores.",
      "Formar figuras con el mazapan de colores y colocar en la superficie una nuez o una almendra.",
      "Dejar secar las figuras.",
      "Poner a cocer azucar con agua y la glucosa hasta obtener un caramelo claro.",
      "Bañar las figuras con el caramelo.",
      "Encapacillar las figuras.",
      "Presentar el producto en charola con carpeta."
    ],
    "recomendaciones": [
      "Asegurarse de que el caramelo esté en el punto correcto antes de bañar las figuras.",
      "Mantener las figuras en un lugar fresco y seco después de prepararlas."
    ],
    "keywords": [
      "almendras",
      "azucar",
      "carnaval",
      "ciruela pasa",
      "colores vegetales",
      "datil",
      "frutas",
      "glucosa",
      "limones",
      "mazapan",
      "nuez en mitad"
    ],
    "contenido": "Carnaval de frutas Postres de Gelatina Mazapan Ciruela pasa Almendras Nuez en mitad Datil Azucar Glucosa Limones Colores vegetales Identificar y pesar ingredientes. Colorear el mazapan de 4 colores. Rellenar ciruelas pasas y datiles con el mazapan de colores. Formar figuras con el mazapan de colores y colocar en la superficie una nuez o una almendra. Dejar secar las figuras. Poner a cocer azucar con agua y la glucosa hasta obtener un caramelo claro. Bañar las figuras con el caramelo. Encapacillar las figuras. Presentar el producto en charola con carpeta. Asegurarse de que el caramelo esté en el punto correcto antes de bañar las figuras. Mantener las figuras en un lugar fresco y seco después de prepararlas."
  },
  {
    "nombre": "Cheese Cake",
    "categoria": "Postres con Queso",
    "urlCategoria": "categorias/postres-queso.html",
    "ingredientes": [
      "Queso crema",
      "Mantequilla",
      "Crema",
      "Azúcar",
      "Leche en polvo",
      "Maizena",
      "Huevo",
      "Agua"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar azúcar, mantequilla y queso crema hasta desaparecer los grumos.",
      "Agregar el huevo poco a poco y mezclar.",
      "Mezclar en un bowl leche, agua, crema y maizena; e incorporarla en la primer mezcla."
    ],
    "recomendaciones": [
      "Conservación de 3 a 4 días en refigeración."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "cake",
      "cheese",
      "crema",
      "huevo",
      "leche en polvo",
      "maizena",
      "mantequilla",
      "queso crema"
    ],
    "contenido": "Cheese Cake Postres con Queso Queso crema Mantequilla Crema Azúcar Leche en polvo Maizena Huevo Agua Identificar y pesar ingredientes. Acremar azúcar, mantequilla y queso crema hasta desaparecer los grumos. Agregar el huevo poco a poco y mezclar. Mezclar en un bowl leche, agua, crema y maizena; e incorporarla en la primer mezcla. Conservación de 3 a 4 días en refigeración."
  },
  {
    "nombre": "Cheese Cake Individual",
    "categoria": "Postres con Queso",
    "urlCategoria": "categorias/postres-queso.html",
    "ingredientes": [
      "Pasta sablee",
      "Cheese cake",
      "Durazno en almíbar",
      "Chantilly"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Enrollar la pasta en el rodillo y extenderla sobre los moldes.",
      "Cortar con las manos hasta el borde del molde.",
      "Rellenar con cheese cake.",
      "Hornear 180°C durante 25 min.",
      "Dejar enfriar y desmoldar.",
      "Brillar la superficie para que se pegue la fruta.",
      "Decorar con fruta y brillar.",
      "Colocar una rosita de crema chantilly.",
      "Encapacillar y presentar producto."
    ],
    "recomendaciones": [
      "Conservación sin fruta una semana en refigeración."
    ],
    "keywords": [
      "cake",
      "chantilly",
      "cheese",
      "cheese cake",
      "durazno en almíbar",
      "individual",
      "pasta sablee"
    ],
    "contenido": "Cheese Cake Individual Postres con Queso Pasta sablee Cheese cake Durazno en almíbar Chantilly Identificar y preparar componentes. Extender la pasta a un grosor de 3 mm. Enrollar la pasta en el rodillo y extenderla sobre los moldes. Cortar con las manos hasta el borde del molde. Rellenar con cheese cake. Hornear 180°C durante 25 min. Dejar enfriar y desmoldar. Brillar la superficie para que se pegue la fruta. Decorar con fruta y brillar. Colocar una rosita de crema chantilly. Encapacillar y presentar producto. Conservación sin fruta una semana en refigeración."
  },
  {
    "nombre": "Relleno de empanada gallega",
    "categoria": "Rellenos Salados",
    "urlCategoria": "categorias/rellenos-salados.html",
    "ingredientes": [
      "Carne",
      "Cebolla",
      "Pimiento rojo",
      "Jitomate",
      "Ajo",
      "Vino blanco",
      "Aceite de oliva",
      "Chorizo",
      "Sal al gusto"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Freir la cebolla en el aceite de oliva.",
      "Incorporar el chorizo previamente picado.",
      "Una vez frito, agregar la carne picada.",
      "Incorporar el pimiento picado.",
      "Agregar el jitomate picado y dejar hervir.",
      "Incorporar el vino blanco y condimentar.",
      "Dejar hervir hasta sazonar.",
      "Retirar del fuego y dejar enfriar."
    ],
    "recomendaciones": [],
    "keywords": [
      "aceite de oliva",
      "ajo",
      "carne",
      "cebolla",
      "chorizo",
      "empanada",
      "gallega",
      "jitomate",
      "pimiento rojo",
      "relleno",
      "sal al gusto",
      "vino blanco"
    ],
    "contenido": "Relleno de empanada gallega Rellenos Salados Carne Cebolla Pimiento rojo Jitomate Ajo Vino blanco Aceite de oliva Chorizo Sal al gusto Identificar y pesar ingredientes. Freir la cebolla en el aceite de oliva. Incorporar el chorizo previamente picado. Una vez frito, agregar la carne picada. Incorporar el pimiento picado. Agregar el jitomate picado y dejar hervir. Incorporar el vino blanco y condimentar. Dejar hervir hasta sazonar. Retirar del fuego y dejar enfriar. "
  },
  {
    "nombre": "Paté de Atún",
    "categoria": "Rellenos Salados",
    "urlCategoria": "categorias/rellenos-salados.html",
    "ingredientes": [
      "Atún",
      "Mantequilla",
      "Crema",
      "Jugo de limón",
      "Sal",
      "Pimienta"
    ],
    "tecnica": [
      "Escurrir el atún de todo su aceite.",
      "Desmenuzar el atún y colocarlo en un bowl.",
      "Acremar la mantequilla.",
      "Incorporar el atún, mantequilla, crema y jugo de limón.",
      "Sazonar con sal y pimienta.",
      "Refrigerar hasta que tenga una consistencia firme."
    ],
    "recomendaciones": [],
    "keywords": [
      "atún",
      "crema",
      "jugo de limón",
      "mantequilla",
      "paté",
      "pimienta",
      "sal"
    ],
    "contenido": "Paté de Atún Rellenos Salados Atún Mantequilla Crema Jugo de limón Sal Pimienta Escurrir el atún de todo su aceite. Desmenuzar el atún y colocarlo en un bowl. Acremar la mantequilla. Incorporar el atún, mantequilla, crema y jugo de limón. Sazonar con sal y pimienta. Refrigerar hasta que tenga una consistencia firme. "
  },
  {
    "nombre": "Pierna",
    "categoria": "Rellenos Salados",
    "urlCategoria": "categorias/rellenos-salados.html",
    "ingredientes": [
      "Pierna",
      "Almendras peladas",
      "Aceitunas deshuesadas",
      "Leche evaporada",
      "Cebolla",
      "Ajo",
      "Hierbas de olor",
      "Chile ancho",
      "Chile guajillo",
      "Aceite",
      "Mantequilla",
      "Pimienta",
      "Sal"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Mechar la pierna con las aceitunas y las almendras.",
      "Marinar la pierna durante 24 horas en el 50% de la leche, previamente licuada con cebolla y ajo.",
      "Cocer la pierna con mantequilla, sal y pimienta en la marinada.",
      "Agregar el resto de la leche durante la cocción.",
      "Cuando la pierna tenga un color dorado, cubrirla con papel aluminio.",
      "Dejar dentro del horno hasta que se cocine aprox. por 1 hora.",
      "Rebanar la pierna.",
      "Preparar un adobo con el chile ancho, chile guajillo, ajo, cebolla e hierbas de olor.",
      "Freír en el aceite y sazonar con sal y pimienta.",
      "Bañar la carne con el adobo y hornear durante 20 minutos."
    ],
    "recomendaciones": [],
    "keywords": [
      "aceite",
      "aceitunas deshuesadas",
      "ajo",
      "almendras peladas",
      "cebolla",
      "chile ancho",
      "chile guajillo",
      "hierbas de olor",
      "leche evaporada",
      "mantequilla",
      "pierna",
      "pimienta",
      "sal"
    ],
    "contenido": "Pierna Rellenos Salados Pierna Almendras peladas Aceitunas deshuesadas Leche evaporada Cebolla Ajo Hierbas de olor Chile ancho Chile guajillo Aceite Mantequilla Pimienta Sal Identificar y pesar los ingredientes. Mechar la pierna con las aceitunas y las almendras. Marinar la pierna durante 24 horas en el 50% de la leche, previamente licuada con cebolla y ajo. Cocer la pierna con mantequilla, sal y pimienta en la marinada. Agregar el resto de la leche durante la cocción. Cuando la pierna tenga un color dorado, cubrirla con papel aluminio. Dejar dentro del horno hasta que se cocine aprox. por 1 hora. Rebanar la pierna. Preparar un adobo con el chile ancho, chile guajillo, ajo, cebolla e hierbas de olor. Freír en el aceite y sazonar con sal y pimienta. Bañar la carne con el adobo y hornear durante 20 minutos. "
  },
  {
    "nombre": "Pavo",
    "categoria": "Rellenos Salados",
    "urlCategoria": "categorias/rellenos-salados.html",
    "ingredientes": [
      "Pavo",
      "Carne molida",
      "Almendras",
      "Pasas",
      "Nueces",
      "Cebolla",
      "Sal",
      "Mantequilla",
      "Pimienta",
      "Jugo de naranja"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Freír la carne en aceite con cebolla.",
      "Agregar pasas, nueces y almendras.",
      "Cocer y sazonar con sal y pimienta.",
      "Rellenar el pavo con la carne y coserlo con hilo cáñamo.",
      "Hornear el pavo con mantequilla, sal y pimienta hasta que tome un color dorado.",
      "Agregar el jugo de naranja y cubrir el pavo con papel aluminio.",
      "Hornear el pavo durante aproximadamente 2 horas."
    ],
    "recomendaciones": [],
    "keywords": [
      "almendras",
      "carne molida",
      "cebolla",
      "jugo de naranja",
      "mantequilla",
      "nueces",
      "pasas",
      "pavo",
      "pimienta",
      "sal"
    ],
    "contenido": "Pavo Rellenos Salados Pavo Carne molida Almendras Pasas Nueces Cebolla Sal Mantequilla Pimienta Jugo de naranja Identificar y pesar los ingredientes. Freír la carne en aceite con cebolla. Agregar pasas, nueces y almendras. Cocer y sazonar con sal y pimienta. Rellenar el pavo con la carne y coserlo con hilo cáñamo. Hornear el pavo con mantequilla, sal y pimienta hasta que tome un color dorado. Agregar el jugo de naranja y cubrir el pavo con papel aluminio. Hornear el pavo durante aproximadamente 2 horas. "
  },
  {
    "nombre": "Cake 4/4",
    "categoria": "Repostería",
    "urlCategoria": "categorias/reposteria.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Mantequilla",
      "Margarina",
      "Huevo",
      "Royal",
      "Agua",
      "Vainilla"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acremar materia grasa con azúcar a blanquear, hasta obtener un punto de pomada.",
      "Batir el huevo y la vainilla en una taza, incorporar poco a poco y airear.",
      "Agregar el harina mezclada con el royal e incorporar hasta desaparecer los grumos.",
      "Incorporar el agua suavemente.",
      "Colocar la pasta en una manga, cortar sobre la placa de cake previamente encapacillado y llenar a 3/4 partes de capacillo.",
      "Hornear a 180°C durante 20 min.",
      "Dejar enfriar y presentar productos."
    ],
    "recomendaciones": [
      "La materia grasa debe estar a temperatura ambiente.",
      "Al momento de agregar el huevo, trabajar hasta incorporar para evitar que se ligue.",
      "Agregar el huevo poco a poco para evitar que se corte."
    ],
    "keywords": [
      "agua",
      "azúcar",
      "cake",
      "harina",
      "huevo",
      "mantequilla",
      "margarina",
      "royal",
      "vainilla"
    ],
    "contenido": "Cake 4/4 Repostería Harina Azúcar Mantequilla Margarina Huevo Royal Agua Vainilla Identificar y pesar ingredientes. Acremar materia grasa con azúcar a blanquear, hasta obtener un punto de pomada. Batir el huevo y la vainilla en una taza, incorporar poco a poco y airear. Agregar el harina mezclada con el royal e incorporar hasta desaparecer los grumos. Incorporar el agua suavemente. Colocar la pasta en una manga, cortar sobre la placa de cake previamente encapacillado y llenar a 3/4 partes de capacillo. Hornear a 180°C durante 20 min. Dejar enfriar y presentar productos. La materia grasa debe estar a temperatura ambiente. Al momento de agregar el huevo, trabajar hasta incorporar para evitar que se ligue. Agregar el huevo poco a poco para evitar que se corte."
  },
  {
    "nombre": "Panque de Pasas/Nuez",
    "categoria": "Repostería",
    "urlCategoria": "categorias/reposteria.html",
    "ingredientes": [
      "Harina",
      "Azúcar",
      "Royal",
      "Mantequilla",
      "Margarina",
      "Huevo",
      "Pasas o nuez",
      "Vainilla"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Desclarar el huevo.",
      "Acremar materia grasa con azúcar a blanquear hasta obtener un punto de pomada.",
      "Incorporar las yemas poco a poco con la vainilla.",
      "Incorporar la harina previamente mezclada con el royal hasta desaparecer los grumos.",
      "Agregar pasas o nuez enharinadas e incorporar.",
      "Batir las claras a punto de nieve, e incorporar en forma envolvente.",
      "Vaciar al molde previamente engrasado y enharinado.",
      "Hornear a 180° C durante 45 min.",
      "Hacer la prueba con el palillo.",
      "Desmoldar y dejar enfriar."
    ],
    "recomendaciones": [
      "Cuidar la temperatura del horno para evitar que se queme de la parte de arriba.",
      "Conservación de al menos 2 semanas envuelto en plástico."
    ],
    "keywords": [
      "azúcar",
      "harina",
      "huevo",
      "mantequilla",
      "margarina",
      "nuez",
      "panque",
      "pasas",
      "pasas o nuez",
      "royal",
      "vainilla"
    ],
    "contenido": "Panque de Pasas/Nuez Repostería Harina Azúcar Royal Mantequilla Margarina Huevo Pasas o nuez Vainilla Identificar y pesar los ingredientes. Desclarar el huevo. Acremar materia grasa con azúcar a blanquear hasta obtener un punto de pomada. Incorporar las yemas poco a poco con la vainilla. Incorporar la harina previamente mezclada con el royal hasta desaparecer los grumos. Agregar pasas o nuez enharinadas e incorporar. Batir las claras a punto de nieve, e incorporar en forma envolvente. Vaciar al molde previamente engrasado y enharinado. Hornear a 180° C durante 45 min. Hacer la prueba con el palillo. Desmoldar y dejar enfriar. Cuidar la temperatura del horno para evitar que se queme de la parte de arriba. Conservación de al menos 2 semanas envuelto en plástico."
  },
  {
    "nombre": "Panque de Zanahoria",
    "categoria": "Repostería",
    "urlCategoria": "categorias/reposteria.html",
    "ingredientes": [
      "Harina",
      "Huevo",
      "Mantequilla",
      "Nuez picada",
      "Leche condensada",
      "Zanahoria rallada",
      "Royal",
      "Azucar glass"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Engrasar y enharinar el molde.",
      "Incorporar leche condensada, mantequilla y yemas.",
      "Agregar la zanahoria y la nuez.",
      "Incorporar el harina y el royal",
      "Batir las claras a punto de nieve, e incorporarlas a la mezcla anterior suavemente.",
      "Vaciar la mezcla al molde y hornear a 180°C durante 30 min.",
      "Desmoldar y dejar enfriar.",
      "Colocar una plantilla y esparcir con azucar glass."
    ],
    "recomendaciones": [
      "No dejar la masa tan aguada, para evitar que se baje el pan con el peso del puré.",
      "Conservación de 8-10 días envuelto en plástico."
    ],
    "keywords": [
      "azucar glass",
      "harina",
      "huevo",
      "leche condensada",
      "mantequilla",
      "nuez picada",
      "panque",
      "royal",
      "zanahoria",
      "zanahoria rallada"
    ],
    "contenido": "Panque de Zanahoria Repostería Harina Huevo Mantequilla Nuez picada Leche condensada Zanahoria rallada Royal Azucar glass Identificar y pesar ingredientes. Engrasar y enharinar el molde. Incorporar leche condensada, mantequilla y yemas. Agregar la zanahoria y la nuez. Incorporar el harina y el royal Batir las claras a punto de nieve, e incorporarlas a la mezcla anterior suavemente. Vaciar la mezcla al molde y hornear a 180°C durante 30 min. Desmoldar y dejar enfriar. Colocar una plantilla y esparcir con azucar glass. No dejar la masa tan aguada, para evitar que se baje el pan con el peso del puré. Conservación de 8-10 días envuelto en plástico."
  },
  {
    "nombre": "Brownie en Microondas",
    "categoria": "Repostería",
    "urlCategoria": "categorias/reposteria.html",
    "ingredientes": [
      "Chocolate semi-amargo",
      "Mantequilla",
      "Huevos",
      "Azúcar",
      "Leche",
      "Harina",
      "Polvo para hornear",
      "Nueces troceadas",
      "Azúcar glas"
    ],
    "tecnica": [
      "Funde el chocolate con la mantequilla en el microondas por 3 minutos.",
      "Mientras tanto, bate los huevos con el azúcar.",
      "Saca la mezcla de chocolate y mantequilla del microondas con cuidado, ya que está caliente.",
      "Añade la mezcla de huevo y azúcar a la mezcla de chocolate y mantequilla.",
      "Agrega la leche, la harina, el polvo para hornear y las nueces troceadas a la mezcla.",
      "Mezcla bien y vierte en un molde de silicona apto para microondas.",
      "Introduce en el microondas por 5 minutos.",
      "Deja enfriar en la nevera unos minutos.",
      "Corta el brownie en cubos.",
      "Espolvorea con azúcar glas."
    ],
    "recomendaciones": [
      "Tiempo de preparación: 15 minutos",
      "Tiempo de cocinado: 5 minutos",
      "Tiempo total: 20 minutos",
      "Raciones: 8 a 10 unidades"
    ],
    "keywords": [
      "azúcar",
      "azúcar glas",
      "brownie",
      "chocolate semi-amargo",
      "harina",
      "huevos",
      "leche",
      "mantequilla",
      "microondas",
      "nueces troceadas",
      "polvo para hornear"
    ],
    "contenido": "Brownie en Microondas Repostería Chocolate semi-amargo Mantequilla Huevos Azúcar Leche Harina Polvo para hornear Nueces troceadas Azúcar glas Funde el chocolate con la mantequilla en el microondas por 3 minutos. Mientras tanto, bate los huevos con el azúcar. Saca la mezcla de chocolate y mantequilla del microondas con cuidado, ya que está caliente. Añade la mezcla de huevo y azúcar a la mezcla de chocolate y mantequilla. Agrega la leche, la harina, el polvo para hornear y las nueces troceadas a la mezcla. Mezcla bien y vierte en un molde de silicona apto para microondas. Introduce en el microondas por 5 minutos. Deja enfriar en la nevera unos minutos. Corta el brownie en cubos. Espolvorea con azúcar glas. Tiempo de preparación: 15 minutos Tiempo de cocinado: 5 minutos Tiempo total: 20 minutos Raciones: 8 a 10 unidades"
  },
  {
    "nombre": "Salsa Salada",
    "categoria": "Salsas y Aderezos",
    "urlCategoria": "categorias/salsas-aderezos.html",
    "ingredientes": [
      "Leche Líquida",
      "Crema",
      "Huevo",
      "Sal",
      "Pimienta"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Incorporar leche y crema.",
      "Agregar el huevo y batir hasta incorporar.",
      "Condimentar con sal y pimienta."
    ],
    "recomendaciones": [
      "Conservación aproximada de 3 - 4 días en refrigeración."
    ],
    "keywords": [
      "crema",
      "huevo",
      "leche líquida",
      "pimienta",
      "sal",
      "salada",
      "salsa"
    ],
    "contenido": "Salsa Salada Salsas y Aderezos Leche Líquida Crema Huevo Sal Pimienta Identificar y pesar los ingredientes. Incorporar leche y crema. Agregar el huevo y batir hasta incorporar. Condimentar con sal y pimienta. Conservación aproximada de 3 - 4 días en refrigeración."
  },
  {
    "nombre": "Salsa Bechamel",
    "categoria": "Salsas y Aderezos",
    "urlCategoria": "categorias/salsas-aderezos.html",
    "ingredientes": [
      "Harina",
      "Mantequilla",
      "Leche Líquida",
      "Crema",
      "Pimienta, sal y nuez",
      "Moscada",
      "Cebolla",
      "Apio"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Dorar el harina en seco ligeramente.",
      "Agregar la mantequilla, cebolla, apio y dejar acitronar.",
      "Incorporar la leche y la crema.",
      "Condimentar con sal, pimienta y nuez moscada.",
      "Dejar hervir hasta espesar.",
      "Vaciar a un bowl y dejar enfriar."
    ],
    "recomendaciones": [],
    "keywords": [
      "apio",
      "bechamel",
      "cebolla",
      "crema",
      "harina",
      "leche líquida",
      "mantequilla",
      "moscada",
      "pimienta, sal y nuez",
      "salsa"
    ],
    "contenido": "Salsa Bechamel Salsas y Aderezos Harina Mantequilla Leche Líquida Crema Pimienta, sal y nuez Moscada Cebolla Apio Identificar y pesar ingredientes. Dorar el harina en seco ligeramente. Agregar la mantequilla, cebolla, apio y dejar acitronar. Incorporar la leche y la crema. Condimentar con sal, pimienta y nuez moscada. Dejar hervir hasta espesar. Vaciar a un bowl y dejar enfriar. "
  },
  {
    "nombre": "Salsa Roja",
    "categoria": "Salsas y Aderezos",
    "urlCategoria": "categorias/salsas-aderezos.html",
    "ingredientes": [
      "Puré de jitomate",
      "Jitomate natural",
      "Cebolla",
      "Ajo",
      "Vino blanco",
      "Azúcar",
      "Sal, orégano, pimienta",
      "Hierbas de olor",
      "Maizena"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Acitronar cebolla y ajo previamente pelados y picados, añadir el vino blanco y dejar sazonar.",
      "Incorporar el puré de jitomate.",
      "Condimentar con sal, pimienta, orégano y hierbas de olor.",
      "Incorporar la maizena previamente disuelta en agua.",
      "Dejar hervir para sazonar y espesar.",
      "Agregar el azúcar.",
      "Retirar del fuego y vaciar en un bowl.",
      "Dejar enfriar."
    ],
    "recomendaciones": [
      "No dejarla aguada para que no se extienda en el horno.",
      "Conservación de 5 a 7 días en refrigeración."
    ],
    "keywords": [
      "ajo",
      "azúcar",
      "cebolla",
      "hierbas de olor",
      "jitomate natural",
      "maizena",
      "puré de jitomate",
      "roja",
      "sal, orégano, pimienta",
      "salsa",
      "vino blanco"
    ],
    "contenido": "Salsa Roja Salsas y Aderezos Puré de jitomate Jitomate natural Cebolla Ajo Vino blanco Azúcar Sal, orégano, pimienta Hierbas de olor Maizena Identificar y pesar ingredientes. Acitronar cebolla y ajo previamente pelados y picados, añadir el vino blanco y dejar sazonar. Incorporar el puré de jitomate. Condimentar con sal, pimienta, orégano y hierbas de olor. Incorporar la maizena previamente disuelta en agua. Dejar hervir para sazonar y espesar. Agregar el azúcar. Retirar del fuego y vaciar en un bowl. Dejar enfriar. No dejarla aguada para que no se extienda en el horno. Conservación de 5 a 7 días en refrigeración."
  },
  {
    "nombre": "Tartaletas",
    "categoria": "Tartaletas y Pasteles Individuales",
    "urlCategoria": "categorias/tartaletas-pasteles.html",
    "ingredientes": [
      "Pasta sablee",
      "Crema pastelera",
      "Piña en almíbar",
      "Duraznos en almíbar",
      "Fresa natural",
      "Brillo",
      "Cereza"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta sablee a 3 mm de grosor.",
      "Enrollar la pasta en el rodillo y extenderla sobre los moldes, cortar con la mano hasta el borde del molde.",
      "Colocar sobre charola negra y hornear a 180°C durante 15 min., previamente picados con un tenedor para evitar que se inflen.",
      "Dejar enfriar y desmoldar.",
      "Brillar los fondos y rellenar con crema pastelera hasta el ras.",
      "Decorar con la fruta deseada, brillar y encapasillar.",
      "Presentar el producto."
    ],
    "recomendaciones": [
      "No trabajar demasiado la pasta para evitar que se queme.",
      "Este producto se puede conservar de 2 a 3 días en refrigeración."
    ],
    "keywords": [
      "brillo",
      "cereza",
      "crema pastelera",
      "duraznos en almíbar",
      "fresa natural",
      "pasta sablee",
      "piña en almíbar",
      "tartaletas"
    ],
    "contenido": "Tartaletas Tartaletas y Pasteles Individuales Pasta sablee Crema pastelera Piña en almíbar Duraznos en almíbar Fresa natural Brillo Cereza Identificar y preparar componentes. Extender la pasta sablee a 3 mm de grosor. Enrollar la pasta en el rodillo y extenderla sobre los moldes, cortar con la mano hasta el borde del molde. Colocar sobre charola negra y hornear a 180°C durante 15 min., previamente picados con un tenedor para evitar que se inflen. Dejar enfriar y desmoldar. Brillar los fondos y rellenar con crema pastelera hasta el ras. Decorar con la fruta deseada, brillar y encapasillar. Presentar el producto. No trabajar demasiado la pasta para evitar que se queme. Este producto se puede conservar de 2 a 3 días en refrigeración."
  },
  {
    "nombre": "Tartaleta de limón",
    "categoria": "Tartaletas y Pasteles Individuales",
    "urlCategoria": "categorias/tartaletas-pasteles.html",
    "ingredientes": [
      "Pasta sablee",
      "Crema de limón",
      "Brillo",
      "Cerezas"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Enrollar la pasta en el rodillo y extenderla sobre los moldes, cortar con la mano hasta el borde del molde.",
      "Rellenar con la crema y colocar sobre charola negra.",
      "Hornear a 180°C durante 25 min.",
      "Decorar y brillar.",
      "Encapacillar y presentar producto."
    ],
    "recomendaciones": [
      "Cuidar la temperatura del horno para evitar que la orilla de la tartaleta se queme.",
      "Conservación de 2-3 días en refrigeración."
    ],
    "keywords": [
      "brillo",
      "cerezas",
      "crema de limón",
      "limón",
      "pasta sablee",
      "tartaleta"
    ],
    "contenido": "Tartaleta de limón Tartaletas y Pasteles Individuales Pasta sablee Crema de limón Brillo Cerezas Identificar y preparar componentes. Extender la pasta a un grosor de 3 mm. Enrollar la pasta en el rodillo y extenderla sobre los moldes, cortar con la mano hasta el borde del molde. Rellenar con la crema y colocar sobre charola negra. Hornear a 180°C durante 25 min. Decorar y brillar. Encapacillar y presentar producto. Cuidar la temperatura del horno para evitar que la orilla de la tartaleta se queme. Conservación de 2-3 días en refrigeración."
  },
  {
    "nombre": "Tarta Combinada",
    "categoria": "Tartaletas y Pasteles Individuales",
    "urlCategoria": "categorias/tartaletas-pasteles.html",
    "ingredientes": [
      "Pasta brisse",
      "Pasta de hojaldre",
      "Crema pastelera",
      "Duraznos",
      "Piña",
      "Ciruela pasa",
      "Fresas",
      "Brillo",
      "Cereza"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta brisse a un grosor de 3 mm. y cortar en forma de flor de 8 pétalos.",
      "Barnizar la orilla con huevo.",
      "Colocar una tira de 1.5 cm de ancho de pasta de hojaldre alrededor del octágono.",
      "Barnizar con huevo y dejar reposar 30 min.",
      "Hornear a 200°C durante 20 min.",
      "Rellenar con crema pastelera.",
      "Decorar con la fruta y brillar.",
      "Presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "brillo",
      "cereza",
      "ciruela pasa",
      "combinada",
      "crema pastelera",
      "duraznos",
      "fresas",
      "pasta brisse",
      "pasta de hojaldre",
      "piña",
      "tarta"
    ],
    "contenido": "Tarta Combinada Tartaletas y Pasteles Individuales Pasta brisse Pasta de hojaldre Crema pastelera Duraznos Piña Ciruela pasa Fresas Brillo Cereza Identificar y preparar componentes. Extender la pasta brisse a un grosor de 3 mm. y cortar en forma de flor de 8 pétalos. Barnizar la orilla con huevo. Colocar una tira de 1.5 cm de ancho de pasta de hojaldre alrededor del octágono. Barnizar con huevo y dejar reposar 30 min. Hornear a 200°C durante 20 min. Rellenar con crema pastelera. Decorar con la fruta y brillar. Presentar producto. "
  },
  {
    "nombre": "Pie de queso con piña",
    "categoria": "Tartaletas y Pasteles Individuales",
    "urlCategoria": "categorias/tartaletas-pasteles.html",
    "ingredientes": [
      "Pasta para pie",
      "Relleno"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Forrar un molde adecuado para pie.",
      "Vaciar el relleno.",
      "Hornear a 180°C durante 20 min.",
      "Dejarlo enfriar y presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "con",
      "pasta para pie",
      "pie",
      "piña",
      "queso",
      "relleno"
    ],
    "contenido": "Pie de queso con piña Tartaletas y Pasteles Individuales Pasta para pie Relleno Identificar y preparar componentes. Extender la pasta a un grosor de 3 mm. Forrar un molde adecuado para pie. Vaciar el relleno. Hornear a 180°C durante 20 min. Dejarlo enfriar y presentar producto. "
  },
  {
    "nombre": "Tarta de espinaca",
    "categoria": "Tartas Saladas",
    "urlCategoria": "categorias/tartas-saladas.html",
    "ingredientes": [
      "Pasta brisse",
      "Salsa salada",
      "Espinacas",
      "Tocino"
    ],
    "tecnica": [
      "Identificar y pesar ingredientes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Forrar un molde adecuado con esta pasta.",
      "Colocar en el molde las espinacas y el tocino desgrasado.",
      "Rellenar con la salsa salada.",
      "Hornear a 180°C durante 25 min.",
      "Dejar enfriar y desmoldar.",
      "Presentar producto en charola con carpeta."
    ],
    "recomendaciones": [],
    "keywords": [
      "espinaca",
      "espinacas",
      "pasta brisse",
      "salsa salada",
      "tarta",
      "tocino"
    ],
    "contenido": "Tarta de espinaca Tartas Saladas Pasta brisse Salsa salada Espinacas Tocino Identificar y pesar ingredientes. Extender la pasta a un grosor de 3 mm. Forrar un molde adecuado con esta pasta. Colocar en el molde las espinacas y el tocino desgrasado. Rellenar con la salsa salada. Hornear a 180°C durante 25 min. Dejar enfriar y desmoldar. Presentar producto en charola con carpeta. "
  },
  {
    "nombre": "Quiche Lorraine",
    "categoria": "Tartas Saladas",
    "urlCategoria": "categorias/tartas-saladas.html",
    "ingredientes": [
      "Pasta Brisse",
      "Salsa salada",
      "Jamón picado",
      "Tocino picado y desgrasado",
      "Queso roquefort"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender la pasta a un grosor de 3 mm.",
      "Forrar el molde deseado sin cortar el sobrante para evitar que se encoja.",
      "Esparcir el jamón y el tocino en el fondo del molde.",
      "Licuar el queso roquefort con la salsa y vaciar al molde.",
      "Cortar el sobrante de la pasta.",
      "Hornear a 180 °C durante 25 min. hasta que el relleno se haya cuajado.",
      "Dejar entibiar y desmoldar."
    ],
    "recomendaciones": [
      "Dejar perfectamente forrado el molde con la pasta, para evitar que la salsa se pegue al mismo.",
      "Conservación de 3-4 días en refrigeración"
    ],
    "keywords": [
      "jamón picado",
      "lorraine",
      "pasta brisse",
      "queso roquefort",
      "quiche",
      "salsa salada",
      "tocino picado y desgrasado"
    ],
    "contenido": "Quiche Lorraine Tartas Saladas Pasta Brisse Salsa salada Jamón picado Tocino picado y desgrasado Queso roquefort Identificar y preparar componentes. Extender la pasta a un grosor de 3 mm. Forrar el molde deseado sin cortar el sobrante para evitar que se encoja. Esparcir el jamón y el tocino en el fondo del molde. Licuar el queso roquefort con la salsa y vaciar al molde. Cortar el sobrante de la pasta. Hornear a 180 °C durante 25 min. hasta que el relleno se haya cuajado. Dejar entibiar y desmoldar. Dejar perfectamente forrado el molde con la pasta, para evitar que la salsa se pegue al mismo. Conservación de 3-4 días en refrigeración"
  },
  {
    "nombre": "Pastel de champiñones",
    "categoria": "Tartas Saladas",
    "urlCategoria": "categorias/tartas-saladas.html",
    "ingredientes": [
      "Pasta brisse",
      "Salsa bechamel",
      "Champiñones",
      "Huevo para barnizar"
    ],
    "tecnica": [
      "Identificar y preparar componentes.",
      "Extender dos terceras partes de la pasta a 3 mm. de grosor.",
      "Forrar un molde adecuado.",
      "Rellenar con salsa bechamel y champiñones.",
      "Extender el resto de la pasta y cubrir el molde.",
      "Barnizar con huevo y decorar la orilla.",
      "Perforar la tapa ligeramente.",
      "Hornear a 180°C durante 25 min.",
      "Desmoldar y presentar producto."
    ],
    "recomendaciones": [],
    "keywords": [
      "champiñones",
      "huevo para barnizar",
      "pasta brisse",
      "pastel",
      "salsa bechamel"
    ],
    "contenido": "Pastel de champiñones Tartas Saladas Pasta brisse Salsa bechamel Champiñones Huevo para barnizar Identificar y preparar componentes. Extender dos terceras partes de la pasta a 3 mm. de grosor. Forrar un molde adecuado. Rellenar con salsa bechamel y champiñones. Extender el resto de la pasta y cubrir el molde. Barnizar con huevo y decorar la orilla. Perforar la tapa ligeramente. Hornear a 180°C durante 25 min. Desmoldar y presentar producto. "
  },
  {
    "nombre": "Empanada gallega",
    "categoria": "Tartas Saladas",
    "urlCategoria": "categorias/tartas-saladas.html",
    "ingredientes": [
      "Hojaldre envinado",
      "Relleno para empanada"
    ],
    "tecnica": [
      "Identificar y pesar los ingredientes.",
      "Extender la masa en forma rectangular de 3 mm de grosor.",
      "Dividir la masa por mitad.",
      "Dejar reposar por 10 minutos.",
      "Agregar el relleno para empanada.",
      "Colocar la otra parte de la masa encima del relleno y cerrarla.",
      "Colocar con brocha agua en la orilla de la masa para que se pegue.",
      "Cerrar con los dedos toda la orilla, presionando bien para evitar que se salga el relleno.",
      "Con un cuchillo, hacer marcas sobre el hojaldre para decorar.",
      "Barnizar con huevo y dejar reposar por 10 minutos.",
      "Hornear a 200°C hasta que dore, por aproximadamente 20 minutos."
    ],
    "recomendaciones": [],
    "keywords": [
      "empanada",
      "gallega",
      "hojaldre envinado",
      "relleno para empanada"
    ],
    "contenido": "Empanada gallega Tartas Saladas Hojaldre envinado Relleno para empanada Identificar y pesar los ingredientes. Extender la masa en forma rectangular de 3 mm de grosor. Dividir la masa por mitad. Dejar reposar por 10 minutos. Agregar el relleno para empanada. Colocar la otra parte de la masa encima del relleno y cerrarla. Colocar con brocha agua en la orilla de la masa para que se pegue. Cerrar con los dedos toda la orilla, presionando bien para evitar que se salga el relleno. Con un cuchillo, hacer marcas sobre el hojaldre para decorar. Barnizar con huevo y dejar reposar por 10 minutos. Hornear a 200°C hasta que dore, por aproximadamente 20 minutos. "
  }
];

// Exportar el índice para uso en main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RECETAS_INDEX;
}
