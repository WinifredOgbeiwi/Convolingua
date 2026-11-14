import legal from './legal/pl.js'

export default {
  lang: {
    pl: 'PL',
    en: 'EN',
    label: 'Język',
  },
  nav: {
    home: 'Strona główna',
    adults: 'Profesjonaliści',
    robotics: 'AI i robotyka',
    kids: 'Dzieci',
    about: 'O nas',
    courses: 'Kursy',
    contact: 'Kontakt',
    cta: 'Zaloguj się',
    menuOpen: 'Otwórz menu',
    menuClose: 'Zamknij menu',
  },
  login: {
    title: 'Witaj ponownie',
    lead: 'Zaloguj się na konto ucznia, żeby kontynuować naukę.',
    email: 'E-mail',
    emailPlaceholder: 'ty@example.com',
    password: 'Hasło',
    passwordPlaceholder: 'Wpisz hasło',
    submit: 'Zaloguj się',
    forgot: 'Nie pamiętasz hasła?',
    errorRequired: 'Podaj e-mail i hasło.',
    errorInvalid: 'E-mail lub hasło wygląda na niepoprawne. Spróbuj ponownie.',
  },
  forgotPassword: {
    title: 'Zresetuj hasło',
    lead: 'Podaj e-mail powiązany z kontem ucznia — wyślemy instrukcję resetu.',
    email: 'E-mail',
    emailPlaceholder: 'ty@example.com',
    submit: 'Wyślij link resetujący',
    backToLogin: 'Wróć do logowania',
    errorRequired: 'Podaj adres e-mail.',
    success: 'Jeśli ten e-mail jest zarejestrowany, instrukcja resetu już do Ciebie idzie.',
  },
  home: {
    eyebrow: 'ConvoLingua English Academy',
    title: 'Jedna akademia, trzy ścieżki rozwoju',
    subtitle: 'Wybierz ścieżkę dopasowaną do Ciebie lub Twojej rodziny.',
    programsLabel: 'Nasze programy',
    programs: {
      adults: {
        tag: 'Dla dorosłych',
        title: 'Angielski dla profesjonalistów',
        description:
          'Mów pewnie na spotkaniach, prezentacjach i negocjacjach. Lekcje na żywo dopasowane do Twojej kariery.',
        points: [
          'Lekcje na żywo',
          'Słownictwo biznesowe i branżowe',
          'Elastyczny harmonogram',
        ],
        cta: 'Poznaj ofertę',
        imageAlt: 'Współpracownicy uczący się angielskiego przy laptopie',
      },
      robotics: {
        tag: 'Przyszli twórcy',
        title: 'Programowanie AI i robotyki',
        description:
          'Naucz się kodować, budować roboty i wykorzystywać AI w praktycznych projektach, w których kreatywność spotyka prawdziwą technologię.',
        points: [
          'Praktyczne projekty z robotami',
          'Podstawy programowania',
          'AI w prostym wydaniu',
        ],
        cta: 'Poznaj ofertę',
        imageAlt: 'Ilustracja przyjaznego robota programisty',
      },
      kids: {
        tag: 'Dla dzieci',
        title: 'Angielski dla dzieci',
        description:
          'Zabawne lekcje z piosenkami, historiami i grami, które budują prawdziwą pewność siebie, krok po kroku.',
        points: [
          'Gry, piosenki i historie',
          'Przyjaźni, wspierający nauczyciele',
          'Postępy widoczne dla rodziców',
        ],
        cta: 'Poznaj ofertę',
        imageAlt: 'Dzieci uczące się razem przy laptopach',
      },
    },
    about: {
      label: 'O nas',
      title: 'Nauka, która zaczyna się od prawdziwej rozmowy',
      p1: 'ConvoLingua to warszawska akademia oparta na prostym przekonaniu: najlepiej uczymy się, działając. Mówienie, budowanie i zabawa zawsze wygrywają z wkuwaniem.',
      p2: 'Niezależnie od tego, czy rozwijasz karierę, wychowujesz ciekawe świata dziecko, czy odkrywasz technologię, każdą lekcję dopasowujemy do ucznia, z jasnymi celami i przyjazną opieką.',
      imageAlt: 'Nauczycielka prowadząca lekcję online na żywo',
      values: [
        {
          title: 'Uczeń na pierwszym miejscu',
          text: 'Każdy plan zaczyna się od Twoich celów, poziomu i tempa.',
        },
        {
          title: 'Praktyka zamiast teorii',
          text: 'Rozmowy, projekty i gry sprawiają, że każda lekcja jest aktywna.',
        },
        {
          title: 'Elastycznie z założenia',
          text: 'Lekcje na żywo, które pasują do pracy, szkoły i życia rodzinnego.',
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      title: 'Porozmawiajmy',
      desc: 'Napisz, dla kogo są lekcje i co chcesz osiągnąć. Odpowiemy, wskazując najlepszy kolejny krok.',
      callPrompt: 'Wolisz porozmawiać?',
      callCta: 'Zadzwoń',
    },
  },
  booking: {
    cta: 'Zarezerwuj',
    label: 'Rezerwacja sesji',
    title: 'Zarezerwuj teraz',
    lead: 'Podaj dane i preferowany termin. Wkrótce potwierdzimy Twoją sesję.',
    firstName: 'Imię',
    lastName: 'Nazwisko',
    email: 'E-mail',
    phone: 'Telefon (opcjonalnie)',
    package: 'Interesujący pakiet',
    selectPackage: 'Wybierz pakiet',
    date: 'Preferowana data',
    time: 'Preferowana godzina',
    notes: 'Uwagi (opcjonalnie)',
    notesPlaceholder: 'Coś, co powinniśmy wiedzieć przed sesją…',
    submit: 'Zarezerwuj',
    sending: 'Wysyłanie…',
    successTitle: 'Prośba o rezerwację wysłana',
    successText: 'Dziękujemy. Wkrótce potwierdzimy preferowaną datę i godzinę e-mailem.',
    bookAnother: 'Zarezerwuj kolejną sesję',
    programs: {
      professionals: 'Angielski dla profesjonalistów',
      robotics: 'Programowanie AI i robotyki',
      kids: 'Angielski dla dzieci',
    },
  },
  professionals: {
    tag: 'Dla dorosłych',
    title: 'Angielski dla profesjonalistów',
    lead: 'Mów pewnie na spotkaniach, prezentacjach i negocjacjach. Lekcje na żywo dopasowane do Twojej kariery, branży i harmonogramu.',
    ctaPricing: 'Zobacz cennik',
    ctaContact: 'Zarezerwuj',
    imageAlt: 'Współpracownicy uczący się angielskiego przy laptopie',
    badge: 'Lekcje na żywo',
    facts: [
      { title: 'Na żywo', text: 'Zajęcia z doświadczonymi coachami — indywidualne lub w grupie.' },
      { title: 'Elastycznie', text: 'Terminy dopasowane do pracy, także wieczory i weekendy.' },
      { title: 'Na miarę', text: 'Słownictwo z Twojej branży.' },
      { title: 'Mierzalnie', text: 'Testy poziomu zgodne z CEFR i raporty postępów.' },
    ],
    steps: {
      label: 'Jak to działa',
      title: 'Od pierwszej lekcji do swobody w trzech krokach',
      items: [
        { title: 'Test poziomu i cele', text: 'Sprawdzamy, na jakim jesteś etapie, do czego potrzebujesz angielskiego i ile masz czasu.' },
        { title: 'Twój osobisty plan', text: 'Otrzymujesz plan oparty na Twojej branży, celach i kalendarzu.' },
        { title: 'Lekcje na żywo i postępy', text: 'Ćwiczysz z coachem co tydzień i śledzisz postępy w regularnych raportach.' },
      ],
    },
    pricing: {
      note: 'Programy dla dorosłych oferujemy jako pakiety (np. 6-sesyjny program prezentacyjny), a nie jako prostą stawkę godzinową. Ceny orientacyjne — napisz o celach, a potwierdzimy najlepszy wybór.',
    },
    cta: {
      title: 'Gotowy mówić z pewnością siebie?',
      text: 'Opowiedz o swoich celach, a dopasujemy odpowiedniego coacha.',
      button: 'Zarezerwuj',
    },
  },
  robotics: {
    tag: 'Wiek 9–15 lat',
    title: 'Programowanie AI i robotyki',
    lead: 'Nie tylko korzystaj z technologii — naucz się ją tworzyć. Scratch, roboty i przyjazne AI w praktycznych projektach, które się ruszają i świecą.',
    ctaPricing: 'Zobacz cennik',
    ctaContact: 'Zarezerwuj',
    badge: 'Scratch · Roboty · AI',
    ages: 'Dla dzieci i nastolatków — początkujący mile widziani',
    facts: [
      { title: 'Myśl', text: 'Myślenie komputacyjne: dziel problemy na jasne, logiczne kroki.' },
      { title: 'Koduj', text: 'Najpierw bloki, potem głębsze podstawy wraz z rozwojem umiejętności.' },
      { title: 'Buduj', text: 'Roboty, sensory i projekty cyfrowe, które widać i da się ulepszać.' },
      { title: 'Twórz', text: 'Gry, animacje i pokazy, którymi pochwalisz się w domu i w szkole.' },
    ],
    gallery: {
      label: 'W labie',
      title: 'Tu pomysły stają się maszynami',
      desc: 'Scratch na ekranie. Układy na stole. Roboty, które jeżdżą, czują i reagują.',
      items: [
        {
          caption: 'Scratch i kod',
          alt: 'Dzieci programujące na laptopie obok projektu robotycznego',
        },
        {
          caption: 'Budowa robotów',
          alt: 'Dzieci składające edukacyjne zestawy robotów w klasie STEM',
        },
        {
          caption: 'Układy i sensory',
          alt: 'Dzieci podłączające silniki i sensory do podwozia robota',
        },
      ],
    },
    focus: {
      label: 'Czego nauczą się uczniowie',
      title: 'Umiejętności, które zostają, bo je budują',
      desc: 'Uczymy przez działanie — najpierw kod wizualny i bloki, potem bogatsze projekty. Bez wcześniejszego doświadczenia.',
      items: [
        {
          title: 'Myślenie komputacyjne',
          text: 'Dziel złożone problemy na mniejsze kroki i buduj logiczne rozwiązania.',
        },
        {
          title: 'Podstawy programowania',
          text: 'Sekwencje, pętle, zmienne, warunki i debugowanie — krok po kroku.',
        },
        {
          title: 'Scratch i projekty cyfrowe',
          text: 'Gry, historie i animacje, które uczą prawdziwej logiki przez zabawę.',
        },
        {
          title: 'Budowa robotów',
          text: 'Składanie zestawów, podłączanie silników i sensorów, potem ożywianie bota.',
        },
        {
          title: 'Rozwiązywanie problemów',
          text: 'Eksperymentuj, znajduj błędy i ulepszaj rozwiązania z pewnością siebie.',
        },
        {
          title: 'Samodzielne myślenie',
          text: 'Planuj projekty, testuj pomysły i domykaj pokazy bez gotowego scenariusza.',
        },
      ],
    },
    steps: {
      label: 'Jak to działa',
      title: 'Od pierwszej lekcji do własnego projektu',
      items: [
        {
          title: 'Poznanie i dopasowanie',
          text: 'Sprawdzamy wiek, poziom i zainteresowania, potem proponujemy grupę — także dla początkujących.',
        },
        {
          title: 'Budowanie tydzień po tygodniu',
          text: 'Praktyczne projekty od bloków Scratch po bogatsze kodowanie i robotykę.',
        },
        {
          title: 'Pokaz i kolejne kroki',
          text: 'Pokaz tego, co powstało, feedback i wybór kolejnego projektu.',
        },
      ],
    },
    pricing: {
      label: 'Cennik',
      title: 'Plany dla ciekawych twórców',
      desc: 'Premium to najpełniejsza ścieżka. Standard to nasza rekomendowana równowaga. Essential zostawia start prosty.',
      popular: 'Rekomendowany',
      perMonth: '/ miesiąc',
      custom: 'Indywidualnie',
      note: 'Orientacyjne pakiety dla wieku 9–15 — napisz o wieku i celach, a potwierdzimy najlepszy wybór.',
      plans: {
        premium: {
          name: 'Premium',
          description: 'Kodowanie + komunikacja po angielsku + rozwiązywanie problemów — pełniejszy rozwój.',
          features: [
            'Kodowanie, robotyka i rozwiązywanie problemów',
            'Angielski do prezentowania projektów',
            'Bogatsze wyzwania projektowe',
            'Indywidualne notatki o postępach',
            'Priorytetowe miejsca w grupach',
          ],
          cta: 'Zarezerwuj',
        },
        standard: {
          name: 'Standard',
          description: 'Nasza podstawowa ścieżka — kodowanie i programowanie z praktyczną robotyką.',
          features: [
            'Scratch i podstawy programowania',
            'Budowy robotów i sensory',
            'Kreatywne projekty cyfrowe',
            'Mierzalne efekty nauki',
            'Miesięczna notatka dla rodziców',
          ],
          cta: 'Zarezerwuj',
        },
        essential: {
          name: 'Essential',
          description: 'Solidny start w kodowaniu z zabawną praktyką i jasnymi celami.',
          features: [
            'Zajęcia Scratch dla początkujących',
            'Prowadzone projekty startowe',
            'Gry rozwijające myślenie logiczne',
            'Proste pomysły do ćwiczeń w domu',
          ],
          cta: 'Zarezerwuj',
        },
      },
    },
    cta: {
      title: 'Myśl logicznie. Twórz cyfrowo. Buduj przyszłość.',
      text: 'Napisz o wieku ucznia i o tym, co chce stworzyć. Wskażemy najlepszy kolejny krok.',
      button: 'Zarezerwuj',
    },
  },
  kids: {
    tag: 'Wiek 6–8 lat',
    title: 'Literacja, logika i angielski',
    lead: 'Mocne podstawy dla pewnych siebie myślicieli — czytanie, pisanie, mówienie i zabawne rozumowanie, które zostaje na lata.',
    ctaPricing: 'Zobacz cennik',
    ctaContact: 'Zarezerwuj',
    imageAlt: 'Dzieci uczące się razem w jasnej klasie',
    badge: 'Nauka przez zabawę',
    ages: 'Dla ciekawskich 6–8-latków',
    mascotAlt: 'Przyjazna dziewczynka-kreskówka machająca na powitanie',
    facts: [
      { title: 'Czytaj', text: 'Płynność, słownictwo i historie, które dzieci naprawdę chcą dokończyć.' },
      { title: 'Pisz', text: 'Jasne zdania, ortografia i kreatywne pisanie w formie zabawy.' },
      { title: 'Myśl', text: 'Łamigłówki, wzorce i logika, które budują niezależne myślenie.' },
      { title: 'Mów', text: 'Pewność, by dzielić się pomysłami na głos — także nieśmiałe dzieci.' },
    ],
    gallery: {
      label: 'W klasie',
      title: 'Tu nauka pachnie zabawą',
      desc: 'Historie na dywanie. Gry na podłodze. Pomysły, które stają się prawdziwymi umiejętnościami.',
      items: [
        { caption: 'Czas na bajkę', alt: 'Nauczycielka czytająca książkę małym dzieciom w klasie' },
        { caption: 'Baw się i ucz', alt: 'Dziecko bawiące się drewnianymi torami i edukacyjnymi zabawkami' },
        { caption: 'Wyobraźnia razem', alt: 'Dzieci bawiące się kreatywnie w jasnej sali zabaw' },
      ],
    },
    focus: {
      label: 'Czego dzieci ćwiczą',
      title: 'Literacja + logika na każdej lekcji',
      desc: 'Łączymy angielską literację z ćwiczeniami rozumowania, żeby dzieci rozumiały to, czego się uczą — i umiały to stosować samodzielnie.',
      items: [
        {
          title: 'Czytanie',
          text: 'Płynność, rozumienie, słownictwo i wnioski z historii oraz tekstów.',
        },
        {
          title: 'Pisanie',
          text: 'Zdania, ortografia, interpunkcja i kreatywne pisanie jak przygoda.',
        },
        {
          title: 'Mówienie i słuchanie',
          text: 'Wyrażanie pomysłów, udział w rozmowie i pewne odpowiedzi.',
        },
        {
          title: 'Łamigłówki logiczne',
          text: 'Wzorce, sekwencje, klasyfikacja i wyzwania problemowe.',
        },
        {
          title: 'Myślenie krytyczne',
          text: 'Porównywanie idei, wnioskowanie i wyjaśnianie, skąd wzięła się odpowiedź.',
        },
        {
          title: 'Ciekawy umysł',
          text: 'Gry, storytelling i odkrywanie, które nagradzają pytania tak samo jak odpowiedzi.',
        },
      ],
    },
    steps: {
      label: 'Jak to działa',
      title: 'Prosta ścieżka dla dzieci i rodziców',
      items: [
        {
          title: 'Przyjazna rozmowa wstępna',
          text: 'Poznajemy wiek, mocne strony i cele dziecka, potem proponujemy najlepszą grupę.',
        },
        {
          title: 'Cotygodniowe przygody',
          text: 'Lekcje na żywo z historiami, grami, łamigłówkami i małymi sukcesami.',
        },
        {
          title: 'Postępy, które widać',
          text: 'Jasne informacje dla rodziców i dumne momenty, którymi dziecko pochwali się w domu.',
        },
      ],
    },
    pricing: {
      label: 'Cennik',
      title: 'Dzieci 6–8 lat: wybierz ścieżkę',
      desc: 'Premium jako najpełniejszy program. Standard to rekomendowana równowaga ceny i wartości. Essential to jasny, przystępny start.',
      popular: 'Rekomendowany',
      perMonth: '/ miesiąc',
      custom: 'Indywidualnie',
      note: 'Orientacyjne ceny programów dla dzieci w Mokotowie — napisz do nas, żeby potwierdzić dostępność i najlepszy wybór.',
      plans: {
        premium: {
          name: 'Premium',
          description: 'Angielski + literacja + logika i rozumowanie — nasz najpełniejszy program dla dzieci.',
          features: [
            'Angielski, literacja i myślenie krytyczne',
            'Ćwiczenia logiki i rozumowania',
            'Indywidualne raporty postępów',
            'Dodatkowe korzyści edukacyjne i feedback',
            'Bardziej kompleksowa ścieżka nauki',
          ],
          cta: 'Zarezerwuj',
        },
        standard: {
          name: 'Standard',
          description: 'Angielski + literacja — nasz podstawowy program ze strukturalną komunikacją.',
          features: [
            'Rozwój angielskiego i literacji',
            'Strukturalne ćwiczenia komunikacji',
            'Ustrukturyzowane lekcje z jasnymi efektami',
            'Mierzalne postępy w nauce',
            'Najlepsza równowaga ceny i wartości',
          ],
          cta: 'Zarezerwuj',
        },
        essential: {
          name: 'Essential',
          description: 'Konwersacje po angielsku — wartościowy, bardziej przystępny start.',
          features: [
            'Zajęcia konwersacyjne z angielskiego',
            'Ćwiczenia mówienia budujące pewność',
            'Angażujące aktywności na lekcji',
            'Mniej dodatkowych usług niż w Standard',
          ],
          cta: 'Zarezerwuj',
        },
      },
    },
    cta: {
      title: 'Gotowi na ciekawskich, pewnych siebie uczniów?',
      text: 'Opowiedz o swoim dziecku. Pomożemy wybrać właściwą ścieżkę literacji i logiki.',
      button: 'Zarezerwuj',
    },
  },
  seo: {
    default: {
      title: 'ConvoLingua — Angielski dla profesjonalistów, AI i robotyka, angielski dla dzieci',
      description:
        'ConvoLingua English Academy: lekcje angielskiego na żywo dla profesjonalistów i dzieci oraz praktyczne programowanie AI i robotyki.',
      keywords:
        'angielski dla profesjonalistów, angielski biznesowy, angielski dla dzieci, programowanie AI, robotyka dla dzieci, lekcje online, Warszawa',
    },
    pages: {
      home: {
        title: 'ConvoLingua — Jedna akademia, trzy ścieżki rozwoju',
        description:
          'Angielski dla profesjonalistów, programowanie AI i robotyki oraz lekcje angielskiego dla dzieci. Wybierz swoją ścieżkę w ConvoLingua English Academy.',
      },
      professionals: {
        title: 'Angielski dla profesjonalistów — ConvoLingua',
        description:
          'Coaching angielskiego na żywo: spotkania, prezentacje i negocjacje. Elastyczne plany dopasowane do Twojej kariery.',
      },
      robotics: {
        title: 'Programowanie AI i robotyki — ConvoLingua',
        description:
          'Wiek 9–15: Scratch, robotyka i myślenie komputacyjne. Uczysz się, tworząc — początkujący mile widziani w ConvoLingua.',
      },
      kids: {
        title: 'Literacja, logika i angielski dla dzieci — ConvoLingua',
        description:
          'Program dla dzieci 6–8 lat: czytanie, pisanie, mówienie i zabawne rozumowanie. Nauka przez zabawę w ConvoLingua.',
      },
      about: {
        title: 'O nas i metoda — ConvoLingua',
        description:
          'Poznaj ConvoLingua: coaching zgodny z CEFR, doświadczeni trenerzy i spersonalizowane ścieżki rozwoju.',
      },
      courses: {
        title: 'Kursy i programy — ConvoLingua',
        description:
          'Angielski biznesowy, szkolenia korporacyjne, przygotowanie do egzaminów i programy dla kadry zarządzającej.',
      },
      contact: {
        title: 'Kontakt — ConvoLingua',
        description:
          'Napisz w sprawie kursów, szkoleń firmowych lub coachingu. Elastyczne terminy w różnych strefach czasowych.',
      },
      login: {
        title: 'Logowanie — ConvoLingua',
        description: 'Zaloguj się na konto ucznia ConvoLingua, żeby kontynuować naukę.',
      },
      forgotPassword: {
        title: 'Reset hasła — ConvoLingua',
        description: 'Zresetuj hasło do konta ucznia ConvoLingua.',
      },
      assessment: {
        title: 'Bezpłatny test poziomu angielskiego — ConvoLingua',
        description:
          'Bezpłatny test — 10 losowych pytań z bazy 100. Wynik i spersonalizowany plan na e-mail.',
      },
      privacy: {
        title: 'Polityka prywatności — ConvoLingua',
        description:
          'Jak ConvoLingua zbiera, wykorzystuje i chroni Twoje dane osobowe.',
      },
      terms: {
        title: 'Regulamin — ConvoLingua',
        description:
          'Warunki korzystania ze strony i usług ConvoLingua.',
      },
    },
  },
  hero: {
    badge: 'Zaufali nam profesjonaliści na całym świecie',
    title: 'Opanuj angielski zawodowy na',
    titleHighlight: 'arenie międzynarodowej',
    subtitle:
      'Coaching na żywo, program dopasowany do branży i praktyka w realnych sytuacjach — dla liderów, którzy potrzebują pewności na spotkaniach, w negocjacjach i w zespołach międzynarodowych.',
    emailLabel: 'E-mail służbowy',
    emailPlaceholder: 'Wpisz swój e-mail służbowy',
    cta: 'Bezpłatny test poziomu',
    note: 'Sprawdź poziom w kilka minut · Plan na e-mail',
    cards: [
      {
        label: 'Forma nauki',
        value: 'Lekcje na żywo',
        meta: 'Rozmawiaj z dedykowanym coachem i otrzymuj feedback dopasowany do celów.',
      },
      {
        label: 'Harmonogram',
        value: 'Elastyczny',
        meta: 'Rezerwuj sesje wokół kalendarza — także wieczory i weekendy.',
      },
      {
        label: 'Fokus programu',
        value: 'Angielski biznesowy',
        meta: 'Spotkania, prezentacje, e-mail i komunikacja z klientem.',
      },
    ],
  },
  whyUs: {
    label: 'Dlaczego my',
    title: 'Wszystko, czego potrzebujesz, by odnieść sukces w angielskim',
    desc: 'Profesjonalny coaching dopasowany do Twoich celów, harmonogramu i budżetu.',
    items: {
      instructors: {
        title: 'Doświadczeni instruktorzy',
        description:
          'Ucz się z certyfikowanymi, doświadczonymi nauczycielami angielskiego, którzy zapewniają spersonalizowane wsparcie na każdym etapie.',
      },
      scheduling: {
        title: 'Elastyczny harmonogram',
        description:
          'Wybieraj terminy dopasowane do rutyny i ucz się we własnym tempie dzięki materiałom do samodzielnej nauki.',
      },
      pricing: {
        title: 'Przystępne ceny',
        description:
          'Doskonała edukacja bez przepłacania. Oferujemy konkurencyjne ceny i elastyczne opcje płatności.',
      },
      interactive: {
        title: 'Interaktywne lekcje',
        description:
          'Ćwicz angielski w realnych scenariuszach — odgrywanie ról, dyskusje i angażujące aktywności.',
      },
    },
  },
  pillars: {
    title: 'Opanuj angielski z łatwością, szybko i elastycznie.',
    items: [
      {
        label: 'Skutecznie',
        description: 'Sprawdzone strategie trwałej poprawy języka.',
      },
      {
        label: 'Efektywnie',
        description: 'Inteligentne metody, które przyspieszają postępy.',
      },
      {
        label: 'Angażująco',
        description: 'Interaktywne lekcje, które sprawiają, że nauka jest przyjemna.',
      },
    ],
  },
  corporate: {
    label: 'Szkolenia korporacyjne',
    title: 'Programy angielskiego dla całego zespołu',
    p1: 'Współpracujemy z HR i L&D, aby rozwijać pracowników na każdym poziomie — od nowych osób po kadrę zarządzającą. Programy skalują się między działami, zachowując osobiste podejście i powiązanie z celami biznesowymi.',
    p2: 'Niezależnie od tego, czy zespół potrzebuje płynności na spotkaniach, pewności w kontakcie z klientem czy standardów komunikacji pisemnej — projektujemy wdrożenie dopasowane do harmonogramu, budżetu i wymogów compliance.',
    benefits: [
      'Ścieżki nauki dopasowane do celów firmy i KPI',
      'Format grupowy i indywidualny w różnych strefach czasowych',
      'Słownictwo branżowe: finanse, tech, prawo i inne',
      'Panele postępów dla HR i liderów zespołów',
      'Onboarding i dedykowany opiekun konta',
    ],
    cta: 'Zapytaj o ofertę korporacyjną',
    imageAlt: 'Zespół korporacyjny na szkoleniu',
  },
  method: {
    label: 'Nasza metoda',
    title: 'Coaching dopasowany do kariery — nie odwrotnie',
    p1: 'Zaczynamy od diagnozy realnych luk — prezentacje, rozmowy z klientem, deliverables — potem budujemy spersonalizowaną ścieżkę. Coach od pierwszego dnia pracuje w słownictwie Twojej branży.',
    benefits: [
      'Oceny zgodne z CEFR i kwartalne raporty postępów',
      'Coachowie z doświadczeniem korporacyjnym i komunikacji na poziomie MBA',
      'Elastyczne terminy w różnych strefach — przed pracą lub w przerwie',
      'Nagrania i feedback AI: wymowa i klarowność',
      'Dedykowany opiekun dla planów zespołowych i enterprise',
    ],
    cta: 'Poznaj programy',
    imageAlt: 'Coach i profesjonalista na sesji',
  },
  courses: {
    sectionLabel: 'Ścieżki nauki',
    sectionTitle: 'Programy dopasowane do Twojej pracy',
    sectionDesc:
      'Każdy track łączy coaching na żywo ze scenariuszami zawodowymi — ćwiczysz angielski, którego naprawdę używasz.',
    homeTitle: 'Popularne programy dla profesjonalistów',
    pageLabel: 'Wszystkie programy',
    pageTitle: 'Wybierz ścieżkę dopasowaną do celów',
    pageDesc:
      'Elastyczne formaty dla osób i zespołów. Każdy program obejmuje sesje na żywo i śledzenie postępów.',
    viewAll: 'Zobacz wszystkie kursy',
    items: {
      'business-english': {
        title: 'Angielski biznesowy',
        description:
          'E-maile, raporty, negocjacje i komunikacja ze stakeholderami — dopasowane do branży.',
      },
      'corporate-training': {
        title: 'Szkolenia korporacyjne',
        description:
          'Programy dla zespołów z KPI, panelami admina i dedykowanym success managerem.',
      },
      'professional-fluency': {
        title: 'Płynność zawodowa',
        description:
          'Pewność na spotkaniach, prezentacjach i rozmowach liderskich w środowisku międzynarodowym.',
      },
      'general-english': {
        title: 'Angielski ogólny',
        description:
          'Strukturalny rozwój od poziomu średniozaawansowanego z praktyką na żywo i mierzalnymi kamieniami milowymi.',
      },
      'exam-preparation': {
        title: 'Przygotowanie do egzaminów',
        description:
          'Coaching pod IELTS, Cambridge i inne certyfikaty — testy próbne i feedback eksperta.',
      },
      'executive-coaching': {
        title: 'Coaching executive',
        description:
          'Zajęcia indywidualne dla C-level i senior leadership — dyskrecja, elastyczność i szybkie efekty.',
      },
    },
  },
  testimonials: {
    label: 'Opinie',
    title: 'Co mówią nasi kursanci',
    desc: 'Liderzy i eksperci, którzy potrzebowali angielskiego na miarę ambicji zawodowych.',
    stars: '5 na 5 gwiazdek',
    items: [
      {
        quote:
          'W trzy miesiące prowadziłam rozmowy z inwestorami po angielsku. Coachowie znali terminologię finansową i stawiali na klarowność, nie na ćwiczenia gramatyczne.',
        name: 'Elena Vasquez',
        role: 'CFO, SaaS w fazie wzrostu',
      },
      {
        quote:
          'Liderzy techniczni w Berlinie i Singapurze wreszcie komunikują się bez tarć. ConvoLingua zbudowała program pod stand-upy i design review.',
        name: 'James Okonkwo',
        role: 'VP Engineering, Enterprise Tech',
      },
      {
        quote:
          'Od unikania networkingu doszłam do prowadzenia paneli. Sam moduł negocjacji był wart każdego euro.',
        name: 'Marie Dubois',
        role: 'Dyrektor, consulting zarządczy',
      },
    ],
  },
  cta: {
    badge: 'Test gratis',
    label: 'Zacznij dziś',
    title: 'Sprawdź swój poziom angielskiego w kilka minut',
    desc: 'Bezpłatny test poziomu angielskiego zawodowego. Natychmiastowy wynik, szczegółowy raport i plan na e-mail.',
    assessment: 'Bezpłatny test poziomu',
    courses: 'Przeglądaj kursy',
    perks: [
      'Elastyczne terminy na całym świecie',
      'Program dopasowany do branży',
      'Mierzalne efekty',
    ],
    imageAlt: 'Coach angielskiego na sesji na żywo',
  },
  pricing: {
    label: 'Cennik',
    title: 'Dorośli i firmy: wybierz ścieżkę',
    desc: 'Premium jako najpełniejszy coaching. Standard to rekomendowana równowaga ceny i wartości. Essential pasuje do zespołów zaczynających od szkoleń grupowych.',
    popular: 'Rekomendowany',
    perMonth: '/ miesiąc',
    custom: 'Indywidualnie',
    assessmentCta: 'Umów konsultację',
    plans: {
      premium: {
        name: 'Premium',
        description: 'Indywidualny coaching prezentacji dopasowany do branży — nasz najpełniejszy program dla dorosłych.',
        features: [
          'Indywidualny coaching prezentacji i wystąpnień publicznych',
          'Komunikacja branżowa dopasowana do Twojego zawodu',
          'Struktura wystąpień, klarowność i zaangażowanie odbiorców',
          'Radzenie sobie z tremą i sesjami pytań',
          'Rozwój w formie pakietów (np. programy 6-sesyjne)',
        ],
        cta: 'Zarezerwuj',
      },
      standard: {
        name: 'Standard',
        description: 'Indywidualny angielski zawodowy — nasz podstawowy program komunikacji w pracy.',
        features: [
          'Lekcje 1:1 wokół Twoich celów zawodowych',
          'Rozmowy w pracy, spotkania i negocjacje',
          'Słownictwo biznesowe i terminologia branżowa',
          'Profesjonalne maile, raporty i dyskusje',
          'Najlepsza równowaga ceny i wartości',
        ],
        cta: 'Zarezerwuj',
      },
      essential: {
        name: 'Essential',
        description: 'Korporacyjne szkolenia grupowe z komunikacji — wartościowy, bardziej przystępny start dla zespołów.',
        features: [
          'Grupowe szkolenia komunikacyjne dla zespołów firmowych',
          'Praktyczny angielski zawodowy w wspólnym środowisku',
          'Spotkania, dyskusje i język w kontakcie z klientem',
          'Mniej usług indywidualnych niż w Standard lub Premium',
        ],
        cta: 'Zarezerwuj',
      },
    },
  },
  about: {
    heroLabel: 'O nas',
    heroTitle: 'Coaching angielskiego dla ambitnych karier',
    heroDesc:
      'Pomagamy komunikować się z klarownością, wpływem i pewnością — na każdym spotkaniu, w każdym mailu i na każdej prezentacji.',
    whoLabel: 'Kim jesteśmy',
    whoTitle: 'Dopasowani do tempa współczesnego biznesu',
    whoP1:
      'ConvoLingua powstała z przekonania, że nauka języka powinna odzwierciedlać sposób pracy profesjonalistów — szybko, konkretnie i w kontekście branży. Nasi coachowie łączą doświadczenie dydaktyczne z praktyką korporacyjną.',
    whoP2:
      'Niezależnie od tego, czy przygotowujesz się do awansu, prowadzisz globalny zespół, czy wchodzisz na nowy rynek — każda sesja ma mierzalne efekty do natychmiastowego użycia.',
    proImageAlt: 'Profesjonaliści we współpracy',
    whyLabel: 'Dlaczego my',
    whyTitle: 'Partner w rozwoju — nie tylko szkoła językowa',
    values: [
      {
        title: 'Spersonalizowane ścieżki',
        text: 'Każdy uczący się zaczyna od diagnozy zgodnej z CEFR i celami kariery.',
      },
      {
        title: 'Płynność branżowa',
        text: 'Od finansów po tech i prawo — uczymy słownictwa i tonu wymaganego w Twojej dziedzinie.',
      },
      {
        title: 'Odpowiedzialność',
        text: 'Raporty, nagrania sesji i feedback coacha utrzymują tempo.',
      },
    ],
    talkCta: 'Porozmawiaj z zespołem',
  },
  contact: {
    heroLabel: 'Kontakt',
    heroTitle: 'Zaplanujmy Twój kolejny krok w angielskim',
    heroDesc:
      'Zapytaj o bezpłatny test, programy korporacyjne lub porozmawiaj z naszym zespołem.',
    getInTouch: 'Napisz do nas',
    lead: 'Opowiedz o celach — dopasujemy coacha i program. Zapytania firmowe i zespołowe mile widziane.',
    address: 'Adres',
    email: 'E-mail',
    phone: 'Telefon',
    responseTime: 'Czas odpowiedzi',
    responseValue: 'W ciągu kilku minut',
    preferTest: 'Wolisz najpierw szybki test poziomu?',
    assessmentLink: 'Bezpłatny test poziomu',
    formTitle: 'Wyślij wiadomość',
    formLead: 'Wypełnij formularz — odezwiemy się wkrótce.',
    firstName: 'Imię',
    lastName: 'Nazwisko',
    workEmail: 'E-mail',
    company: 'Firma (opcjonalnie)',
    interest: 'Interesuje mnie',
    selectProgram: 'Wybierz program',
    message: 'Wiadomość',
    messagePlaceholder: 'Opisz cele, harmonogram i obecny poziom...',
    send: 'Wyślij wiadomość',
    sending: 'Wysyłanie…',
    successTitle: 'Wiadomość wysłana',
    successText:
      'Dziękujemy za kontakt. Odpowiemy w ciągu kilku minut z kolejnymi krokami.',
    takeAssessment: 'Bezpłatny test poziomu',
    sendAnother: 'Wyślij kolejną wiadomość',
    interests: {
      adults: 'Angielski dla profesjonalistów',
      robotics: 'Programowanie AI i robotyki',
      kids: 'Angielski dla dzieci',
      assessment: 'Bezpłatny test poziomu',
      business: 'Angielski biznesowy',
      corporate: 'Szkolenia korporacyjne',
      exam: 'Przygotowanie do egzaminów',
      executive: 'Coaching executive',
      other: 'Jeszcze nie wiem',
    },
  },
  assessment: {
    label: 'Bezpłatny test',
    title: 'Test poziomu angielskiego',
    intro:
      'Każda sesja losuje {{count}} pytań z bazy 100 zawodowych zadań. Otrzymasz wynik i szczegółowy raport na e-mail.',
    beforeTitle: 'Zanim zaczniemy',
    beforeDesc:
      'Podaj dane, aby rozpocząć. Za każdym razem otrzymasz {{count}} innych pytań.',
    firstName: 'Imię',
    firstNamePlaceholder: 'Twoje imię',
    email: 'Adres e-mail',
    emailPlaceholder: 'ty@firma.pl',
    start: 'Rozpocznij test',
    errFirstName: 'Podaj imię.',
    errEmail: 'Podaj prawidłowy adres e-mail.',
    progressStart: 'Na start',
    progressStep: 'Krok {{current}} z {{total}}',
    progressComplete: 'Ukończono',
    questionOf: 'Pytanie {{n}} z {{total}}',
    back: 'Wstecz',
    yourLevel: 'Szacowany poziom',
    score: 'Wynik: {{score}} / {{max}}',
    reportReady:
      'Pełny raport — błędne odpowiedzi z wyjaśnieniami, mocne strony, obszary do poprawy i plan — jest gotowy do wysłania na',
    sendReport: 'Wyślij szczegółowy raport na e-mail',
    sending: 'Wysyłanie…',
    sent: 'Raport wysłany na e-mail',
    sentHint: 'Sprawdź skrzynkę i folder spam.',
    sendError: 'Nie udało się wysłać raportu. Spróbuj ponownie lub skontaktuj się z nami.',
    configHint: 'Dodaj klucze EmailJS do .env. Ustaw w szablonie pole To na {{email}}.',
    bookConsult: 'Umów bezpłatną konsultację',
    viewCourses: 'Zobacz kursy',
  },
  footer: {
    tagline:
      'Angielski dla profesjonalistów, programowanie AI i robotyki oraz angielski dla dzieci. Nauka, która zaczyna się od prawdziwej rozmowy.',
    programs: 'Programy',
    company: 'Firma',
    links: {
      adults: 'Angielski dla profesjonalistów',
      robotics: 'Programowanie AI i robotyki',
      kids: 'Angielski dla dzieci',
      business: 'Angielski biznesowy',
      corporate: 'Szkolenia korporacyjne',
      exam: 'Przygotowanie do egzaminów',
      executive: 'Coaching executive',
      about: 'O nas',
      method: 'Nasza metoda',
      assessment: 'Bezpłatny test',
      contact: 'Kontakt',
    },
    rights: 'Wszelkie prawa zastrzeżone.',
    privacyLink: 'Polityka prywatności',
    termsLink: 'Regulamin',
  },
  legal,
  coursesPage: {
    heroLabel: 'Kursy',
    heroTitle: 'Programy dopasowane do harmonogramu i ambicji',
    heroDesc:
      'Od komunikacji biznesowej po egzaminy — każdy kurs łączy coaching na żywo, strukturę i mierzalne kamienie milowe.',
  },
}
