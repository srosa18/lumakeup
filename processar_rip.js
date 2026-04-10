const fs = require('fs');

try {
    let html = fs.readFileSync('ever.html', 'utf-8');

    const translations = [
        ['Ever Beauty In Every Detail', 'Lu Make Up | Beleza em Cada Detalhe'],
        ['>Lash Extension<', '>Extensão de Cílios<'],
        ['>Stem Cell Lash Regrowth<', '>Regeneração de Cílios com Células Tronco<'],
        ['>Brow &amp; Face Threading<', '>Design de Sobrancelha e Depilação Facial com Linha<'],
        ['>Manicure<', '>Manicure<'],
        ['>Nail Art<', '>Nail Art<'],
        ['>Pedicure<', '>Pedicure<'],
        ['>Waxing<', '>Depilação<'],
        ['>Semi Permanent Make Up<', '>Maquiagem Semipermanente<'],
        ['>Everbody<', '>Tratamentos Corporais<'],
        ['>\\/&nbsp;OUR&nbsp;STORY<', '>\\/ NOSSA HISTÓRIA<'],
        ['>\\/&nbsp;JOURNAL<', '>\\/ DIÁRIO<'],
        ['>\\/&nbsp;LOCATION<', '>\\/ LOCALIZAÇÃO<'],
        ['>\\/ SERVICES<', '>\\/ SERVIÇOS<'],
        ['>FOR&nbsp;BOOKING<', '>PARA AGENDAMENTO<'],
        ['>\\/ SCHEDULE&nbsp;VIA WHATSAPP<', '>\\/ AGENDAR VIA WHATSAPP<'],
        ['>\\/ SCHEDULE&nbsp;VIA&nbsp;CALL<', '>\\/ AGENDAR POR TELEFONE<'],
        ['>CONTACT&nbsp;US<', '>ENTRE EM CONTATO<'],
        ['>MAKE&nbsp;AN&nbsp;APPOINTMENT<', '>AGENDAR HORÁRIO<'],
        ['>beauty in every detail<', '>beleza em cada detalhe<'],
        ['>Scroll to explore<', '>Role para explorar<'],
        ['>“ Your beauty is celebrated through every precise touch. ”<', '>“ Sua beleza é celebrada através de cada toque preciso. ”<'],
        ['>the art of Understated Beauty<', '>a arte da Beleza Discreta<'],
        ['Every detail is designed with care to enhance your natural beauty without losing authenticity.', 'Cada detalhe é desenhado com cuidado para realçar sua beleza natural sem perder a autenticidade.'],
        ['>BEAUTY IN EVER DETAILS<', '>BELEZA EM CADA DETALHE<'],
        ['Lashes that sit effortlessly, yet make all the difference. Design to flatter the natural shape of your eyes, each set is applied with precision—whether soft and subtle or full and bold. Light as air, lasting as long as you need.', 'Cílios que se acomodam sem esforço, mas que fazem toda a diferença. Desenvolvidos para valorizar o formato natural dos seus olhos, cada conjunto é aplicado com precisão — seja suave e sutil ou volumoso e marcante. Leves como o ar, durando o tempo que você precisar.'],
        ['>Treatment<', '>Tratamento<'],
        ['Brows, but better. Subtle lifts, soft arches, and defined lines—crafted to frame your face naturally. From threading and waxing to the signature brow bomber, each technique is tailored to create balance without looking overdone.', 'Sobrancelhas, mas melhores. Elevações sutis, arcos suaves e linhas definidas — elaboradas para emoldurar seu rosto naturalmente. Da depilação com linha e cera ao exclusivo brow bomber, cada técnica é adaptada para criar equilíbrio sem parecer exagerada.'],
        ['>Brow Wax<', '>Depilação de Sobrancelha<'],
        ['Nails that feel as good as they look. Clean finishes, soft edges, and lasting polish—whether you prefer a classic manicure or something more intricate. Each nail set is designed to keep your nails strong and healthy.', 'Unhas que dão uma sensação tão boa quanto sua aparência. Acabamentos limpos, bordas suaves e esmalte duradouro — seja uma manicure clássica ou algo mais elaborado. Cada conjunto de unhas é projetado para mantê-las fortes e saudáveis.'],
        ['Smooth skin without distress. Gently and effective. Our best treatment are designed to leave your skin soft. Particularly from brows to body, every section is quick, precise, and tailored to your comfort.', 'Pele lisa e sem irritações. Delicada e eficaz. Nossos melhores tratamentos são desenvolvidos para deixar sua pele macia. Especialmente das sobrancelhas ao corpo, cada sessão é rápida, precisa e adaptada ao seu conforto.'],
        ['>Brow Waxing<', '>Depilação de Sobrancelha<'],
        ['>Body Waxing<', '>Depilação Corporal<'],
        ['>Face Waxing<', '>Depilação Facial<'],
        ['Beauty that stays with you. Expertly applied semi-permanent makeup enhances your natural features with subtle definition. From microblading to soft lip tinting, every stroke is placed with care for a look that lasts.', 'Beleza que acompanha você. A maquiagem semipermanente aplicada por especialistas realça seus traços naturais com definição sutil. Do microblading ao preenchimento labial suave, cada traço é feito com cuidado para um visual duradouro.'],
        ['>Special Guest: HOW Korea<', '>Convidado Especial: HOW Korea<'],
        ['>Lips Blush<', '>Revitalização Labial<'],
        ['>Semi Permanent  Eyebrow<', '>Sobrancelha Semipermanente<'],
        ['Quiet luxury for your body. Sculpting, shaping, and releasing tension. Our signature lymphatic drainage ritual are designed to bring you back to center. Gentle yet effective, with proven results that help you feel where true wellness lives.', 'Luxo silencioso para o seu corpo. Esculpindo, modelando e liberando tensões. Nosso ritual exclusivo de drenagem linfática foi desenhado para trazer você de volta ao seu centro. Suave e eficaz, com resultados comprovados que ajudam você a sentir onde vive o verdadeiro bem-estar.'],
        ['>Prenatal Calm for Mama<', '>Calma Pré-natal para Mamães<'],
        ['>Wood Sculpt<', '>Escultura em Madeira (Maderoterapia)<'],
        ['>Signature Lymphatic Massage<', '>Massagem Linfática Exclusiva<'],
        ['>ENDLESS&nbsp;POSSIBILLITY&nbsp;WITH<', '>POSSIBILIDADES INFINITAS COM<'],
        ['>PERSONALISED<', '>PERSONALIZADOS<'],
        ['>SERVICES<', '>SERVIÇOS<'],
        ['At EVER, no detail is overlooked. Each service is carefully crafted to complement your natural features—because true beauty is personal', 'Na Lu Make Up, nenhum detalhe é esquecido. Cada serviço é cuidadosamente elaborado para complementar seus traços naturais — porque a verdadeira beleza é pessoal'],
        ['>CHECK ALL SERVICES<', '>VER TODOS OS SERVIÇOS<'],
        ['>Your Moment of Glow<', '>Seu Momento de Brilho<'],
        ['>Begins Here<', '>Começa Aqui<'],
        ['Let’s make this about you. A quiet moment for thoughtful treatments designed to restore balance and highlight your natural charm. Because feeling good starts here.', 'Vamos focar em você. Um momento tranquilo para tratamentos cuidadosos, desenhados para restaurar o equilíbrio e destacar o seu charme natural. Porque sentir-se bem começa aqui.'],
        ['>FIND&nbsp;US<', '>ENCONTRE-NOS<'],
        ['>Frequently Asked Questions<', '>Perguntas Frequentes<'],
        ['>Didn&#x27;t find the answer to your question?<', '>Não encontrou a resposta para a sua dúvida?<'],
        ['>Send it to us by chat. We will be happy to answer you!<', '>Envie-nos pelo chat. Teremos prazer em lhe responder!<'],
        ['>Contact<', '>Contato<'],
        ['>What type of payment is accepted?<', '>Quais formas de pagamento são aceitas?<'],
        ['We accept all kinds of payments, but we do prefer cashless for smoother and faster transactions.', 'Aceitamos todos os tipos de pagamento, mas preferimos transações eletrônicas por serem mais rápidas e práticas.'],
        ['>Where is Ever House located? What are the opening hours?<', '>Onde a Lu Make Up está localizada? Quais são os horários de funcionamento?<'],
        ['>Please refer to this <', '>Por favor, consulte <'],
        ['> to see each one of salon’s operational hour<', '> para ver os horários de funcionamento de cada local<'],
        ['>Why do some people say having treatments at Ever is more expensive?<', '>Por que algumas pessoas dizem que os tratamentos na Lu Make Up são mais caros?<'],
        ['a. We do not take shortcuts in our service: We trained all of our lash therapists extensively to ensure Proper lash application. Some of our proper lash application: no lash sticks to one another, no lash stuck on your eyelid, no stacking heavier single lashes to create a denser volume look. These will ensure you are comfortable and to care for your natural lashes for years to come.', 'a. Não pegamos atalhos em nosso serviço: Treinamos todos os nossos terapeutas intensivamente para garantir a aplicação adequada. Nossas práticas incluem: nenhum cílio colado no outro, nenhum cílio grudado na pálpebra, sem sobreposição de fios pesados para criar volume falso. Isso garante o seu conforto e cuida dos seus cílios naturais a longo prazo.'],
        ['b. We do not take shortcuts in our products: we use the best products that are safe for you', 'b. Não economizamos na qualidade dos produtos: usamos os melhores e mais seguros do mercado para você.'],
        ['c. We take pride in giving you a comfortable treatment. We offer private treatment rooms in all our branches, we sanitize our tools properly, and use disposable sheet and freshly laundered towels. We love to hear from our clients, do send us feedbacks via email, Instagram DM, or our call Cienter.', 'c. Temos orgulho em oferecer um tratamento confortável. Contamos com salas privadas em todas as nossas unidades, higienizamos nossas ferramentas corretamente, usamos lençóis descartáveis e toalhas recém-lavadas. Adoramos ouvir nossos clientes, envie seu feedback por e-mail, DM no Instagram ou pela nossa central.'],
        ['>It is my first time at Ever, what information should I know?<', '>É minha primeira vez na Lu Make Up, o que devo saber?<'],
        ['a. There are two types of therapists with slightly different price points; Technicians and stylists. Both are properly trained, but more complex designs such as Artisan’s Choice are only available by stylists. If you would like Artisan’s Choice (MangaLash, Wispy Kylie, Glam Kim, Foxy) or have thin/sparse lashes/ non symmetrical eyes: we highly advise booking an appointment withStylist.', 'a. Existem dois perfis de profissionais com preços ligeiramente diferentes: Técnicas e Estilistas. Ambas são devidamente treinadas, mas designs complexos estão disponíveis apenas com as Estilistas. Para estilos complexos ou se você tiver cílios finos/esparsos ou olhos não simétricos, recomendamos agendar com uma Estilista.'],
        ['b. We do Patch Test for testing any allergic reaction. If you would like this, make a separate appointment first and if no reactions occur after 48 hours, you can come back and make another appointment for your actual treatment.', 'b. Realizamos um Teste de Alergia. Se você quiser, agende primeiro apenas este teste e, se não houver reação após 48 horas, pode marcar outra sessão para o seu tratamento de fato.'],
        ['c. We offer weekly retouch prices for your eyelash extension infill that can be done in any of the Ever House salons.', 'c. Oferecemos pacotes semanais para manutenção da sua extensão de cílios, que pode ser feita em qualquer unidade.'],
        ['d. We love feedbacks. Do tell us how you like or give us constructive feedbacks. Please allow us to take photos of your desirable results so we know your preferences.', 'd. Adoramos feedbacks. Diga-nos sua opinião ou nos dê avaliações construtivas. Por favor, permita que tiremos fotos dos resultados que você gostou para que conheçamos melhor suas preferências.'],
        ['e. We offer Home Services with additional transport and mobile service fee', 'e. Oferecemos Atendimento a Domicílio com taxas adicionais de transporte e serviço móvel.'],
        ['>How can I shorten my treatment time?<', '>Como posso diminuir o tempo do meu tratamento?<'],
        ['i.) Come with clean face, make up free', 'i.) Venha com o rosto limpo, sem maquiagem.'],
        ['ii.) Have an idea of what you like/don’t like. Bring or show us reference photos.', 'ii.) Tenha uma ideia do que você gosta ou não. Traga ou nos mostre fotos de referência.'],
        ['iii.) Minimize interruptions (checking phone, fidgeting, talking during treatment and go to the toilet before your treatment)', 'iii.) Minimize as interrupções (evite checar o celular, mexer-se muito, falar durante o tratamento e vá ao banheiro antes de começar).'],
        ['>What determines how long the treatment time?<', '>O que determina a duração geral do tratamento?<'],
        ['i.) The quality and quantity of your natural lash. If you have long, strong natural lash it is much easier to place the extension than when you have thin, brittle, sparse lashes.', 'i.) A qualidade e quantidade dos seus cílios naturais. Se você tiver cílios longos e fortes, é muito mais fácil fazer a extensão.'],
        ['>ii.) Fluttering eyes<', '>ii.) Olhos muito instáveis<'],
        ['Not all clients can close their eyes firmly, some have fluttery eyes, this can be very challenging to put lashes on. We can still give the best treatment results if clients do not rush us. Refrain from taking caffeine 24 hours before the treatment.', 'Nem todos os clientes conseguem fechar os olhos com firmeza. Alguns piscam muito, o que dificulta aplicar os cílios. Ainda assim podemos dar os melhores resultados se não formos apressadas. Evite cafeína 24 horas antes do tratamento.'],
        ['>iii.) Interruptions<', '>iii.) Interrupções<'],
        ['No Phone calls, taking videos, selfies during the treatment. Interruptions can increase your treatment time, affect your results, expose your eyes to fumes from drying lash glue.', 'Nada de ligações, vídeos ou selfies durante a sessão. Isso pode aumentar o tempo de tratamento, afetar os resultados e expor seus olhos aos vapores da cola ao secar.'],
        ['iv.) The type of treatments you choose. Depending on the type of lashes, the difficulty level may differ. For example Glam Volume requires more lash extensions to be put on and naturally will take a longer time.', 'iv.) O tipo de tratamento longo. Dependendo do estilo, o nível de dificuldade muda. Ex: Glam Volume exige colocar mais extensões e, logicamente, levará mais tempo.'],
        ['>Company<', '>A Empresa<'],
        ['>OUR&nbsp;STORY<', '>NOSSA HISTÓRIA<'],
        ['>JOURNAL<', '>DIÁRIO<'],
        ['>SERVICE<', '>SERVIÇO<'],
        ['>LOCATIONs<', '>LOCALIZAÇÕES<'],
        ['>SCHEDULE&nbsp;AN&nbsp;APPOINTMENT<', '>AGENDAR UM HORÁRIO<'],
        ['>ChAT&nbsp;WITH&nbsp;CONSULTANT<', '>FALAR COM UM CONSULTOR<'],
        ['>Follow Us<', '>Siga-nos<'],
        ['>© 2025 LIT GROUP INDONESIA. All rights reserved.<', '>© 2026 Lu Make Up. Todos os direitos reservados.<'],
        ['>Website Build By<', '>Desenvolvido por<'],
        ['>The Carrot Cake Studio<', '>Lu Make Up<'],
        ['>Privacy Policy<', '>Política de Privacidade<'],
        ['>Terms of Service<', '>Termos de Serviço<'],
        ['>Cookies Settings<', '>Configurações de Cookies<'],
        ['>Explore Cada Detalhe da Lu Make Up<', '>Explore Cada Detalhe da Lu Make Up<'],
        ['ENDLESS\u00a0POSSIBILLITY\u00a0WITH', 'POSSIBILIDADES INFINITAS COM'],
        ['ENDLESS POSSIBILLITY WITH', 'POSSIBILIDADES INFINITAS COM'],
        ['PERSONALISED<br/>SERVICES', 'SERVIÇOS<br/>PERSONALIZADOS'],
        ['MAKE\u00a0AN\u00a0APPOINTMENT', 'AGENDAR HORÁRIO'],
        ['SCHEDULE\u00a0AN\u00a0APPOINTMENT', 'AGENDAR UM HORÁRIO'],
        ['>HOW Korea<', '>HOW Korea<'],
        ['>Endless Possibility With<', '>Possibilidades Infinitas com<'],
        ['>Personalised&nbsp;Services<', '>Serviços Personalizados<'],
        [' EVER ', ' LU MAKE UP '],
        [' Ever ', ' Lu Make Up '],
        [' EVER<', ' LU MAKE UP<'],
        ['>EVER<', '>LU MAKE UP<'],
        ['>Ever<', '>Lu Make Up<'],
        ['Everlash', 'Lu Make Up']
    ];

    // Basic replacements
    html = html.replace(/<title>.*?<\/title>/gi, '<title>Lu Make Up | Beleza em Cada Detalhe</title>');

    // Background Image Replacement & Height Adjustment
    const heroImageStyle = `
    <style>
    .header83-image-background { 
        background-image: 
            linear-gradient(180deg, transparent 20%, var(--color--background) 80%), 
            url("imagens%20do%20site/imagem%20hero.png") !important;
        background-position: top center !important;
        background-size: 100% auto !important; /* Forces full width to eliminate side bleed */
        background-repeat: no-repeat !important;
        background-color: var(--color--background) !important;
        min-height: 25vh !important;
    }
    /* Restoration of text size and reduction of hero padding */
    .header83-image-background .padding-section-large {
        padding-top: 2rem !important;
        padding-bottom: 3rem !important;
    }
    </style>`;
    html = html.replace('</head>', heroImageStyle + '</head>');

    translations.forEach(([eng, pt]) => {
        // split join to replace all occurrences globally without regex escaping issues
        html = html.split(eng).join(pt);
    });

    html = html.replace(/href="[^"]*everlash[^"]*"/gi, 'href="#"');
    html = html.replace(/href="[^"]*ever\.co\.id[^"]*"/gi, 'href="#"');

    fs.writeFileSync('index.html', html);
    
    console.log("Translation successfully applied to index.html");
} catch (e) {
    console.error(e);
}
