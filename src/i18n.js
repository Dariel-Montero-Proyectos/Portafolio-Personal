import { createI18n } from 'vue-i18n';

const messages = {
    es: {
        home: {
            greeting: 'Hola, soy',
            name: 'Dariel Montero',
            roles: [
                'Desarrollador Full-Stack',
                'QA Automation',
                'Estudiante de Ingeniería Informática'
            ],
            welcome: 'Desarrollo aplicaciones web y automatizo pruebas para crear soluciones funcionales, confiables y fáciles de usar.',
            call: 'Llamar',
            email: 'Correo Electrónico',
            profileAlt: 'Foto de perfil - Dariel Montero'
        },
        modal: {
            title: 'Selecciona tu idioma',
            select: 'Select your language'
        },
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            portfolio: 'Portafolio'
        },
        about: {
            title: 'Sobre Mí',
            skills: 'Habilidades Técnicas',
            tabs: {
                frontend: 'Frontend & Backend',
                database: 'Bases de Datos',
                tools: 'Herramientas y QA'
            },
            description1: 'Soy Dariel Montero, desarrollador Full-Stack de Costa Rica y estudiante de Ingeniería Informática en la Universidad Castro Carazo. He desarrollado más de 18 proyectos digitales, entre sitios web, tiendas en línea y sistemas de gestión. Trabajo con tecnologías como JavaScript, TypeScript, React, Vue.js, PHP y Laravel, además de bases de datos relacionales. Me enfoco en comprender las necesidades de cada proyecto y convertirlas en aplicaciones funcionales, con interfaces adaptables a distintos dispositivos y código organizado que facilite su mantenimiento.',
            description2: 'Complemento mi experiencia en desarrollo con conocimientos en aseguramiento de la calidad y automatización de pruebas. De mayo a septiembre de 2026 realicé mi pasantía en GSB Solutions, donde trabajé con Cypress y JavaScript en pruebas End-to-End y de regresión. También participé en la detección, documentación y seguimiento de defectos en Azure DevOps, colaborando con el equipo de desarrollo para revisar incidencias y mejorar la estabilidad del producto. Me caracterizo por la responsabilidad, la comunicación clara y la disposición para aprender y aportar tanto de forma autónoma como en equipo.',
            profileAlt: 'Foto de perfil - Dariel Montero'
        },
        portfolio: {
            title: 'Proyectos Desarrollados',
            subtitle: 'Explora los proyectos en los que he trabajado hasta ahora',
            projects: [
                {
                    id: 1,
                    name: 'FastWay Box',
                    imageUrl: 'Fatway',
                    status: 'Sitio web corporativo con un diseño limpio, funcional y orientado a destacar servicios de mensajería y logística, optimizando la experiencia del usuario y la presentación de información clave.',
                    tech: 'HTML, CSS, JavaScript'
                },
                {
                    id: 2,
                    name: 'ProPlastCR',
                    imageUrl: 'ProPlastCR',
                    status: 'Sitio web corporativo moderno y responsivo, diseñado con énfasis en la usabilidad y una estética visual atractiva que refuerza la identidad de una marca.',
                    tech: 'HTML, CSS, JavaScript'
                },
                {
                    id: 3,
                    name: 'LexIA',
                    imageUrl: 'LexIA',
                    status: 'Asistente legal impulsado por IA que ayuda a los usuarios a navegar por el sistema legal con respuestas precisas y rápidas.',
                    tech: 'React, Tailwind, TypeScript, AI Integration'
                },
                {
                    id: 4,
                    name: 'Luz de Plata',
                    imageUrl: 'Luz de plata',
                    status: 'Tienda en línea de joyería con diseño elegante y funcional, orientada a brindar una experiencia de usuario intuitiva.',
                    tech: 'React, Vue , TypeScript, Tailwind CSS'
                },
                {
                    id: 6,
                    name: 'Grupo Barak',
                    imageUrl: 'GrupoBarak',
                    status: 'Sitio web corporativo moderno y responsivo, diseñado con enfoque en usabilidad y una estética visual cuidada para proyectar una imagen profesional.',
                    tech: 'HTML, CSS, JavaScript'
                },
                {
                    id: 7,
                    name: 'BizVentory',
                    imageUrl: 'BizVentory',
                    status: 'Sistema de gestión de inventario inteligente con análisis en tiempo real y predicciones de demanda.',
                    tech: 'TypeScript, React, Laravel, MySQL'
                },
                {
                    id: 8,
                    name: 'VitalForma',
                    imageUrl: 'VitalForma',
                    status: 'Sitio web corporativo con diseño atractivo y profesional, enfocado en destacar servicios de salud y bienestar de forma clara y accesible.',
                    tech: 'HTML, CSS, JavaScript'
                },
                {
                    id: 9,
                    name: 'Bella Natura',
                    imageUrl: 'Bella Natura',
                    status: 'Tienda en línea de productos naturales y orgánicos con un diseño limpio y funcional, enfocada en la sostenibilidad y el aumento de ventas a gran escala.',
                    tech: 'React, TypeScript, Tailwind'
                },
                {
                    id: 10,
                    name: 'Cafe Nativo',
                    imageUrl: 'Cafe Nativo',
                    status: 'Sitio web corporativo con diseño atractivo y funcional, enfocado en resaltar productos y servicios relacionados con el café de manera clara y visualmente agradable.',
                    tech: 'HTML, CSS, JavaScript'
                },
                {
                    id: 12,
                    name: 'Belleza Divina',
                    imageUrl: 'Belleza Divina',
                    status: 'Sitio web corporativo para Belleza Divina, con un diseño atractivo y funcional que destaca sus servicios de belleza y bienestar.',
                    tech: 'Vue.js, Tailwind CSS'
                },
                {
                    id: 13,
                    name: 'EcoVida',
                    imageUrl: 'EcoVida',
                    status: 'Tienda en línea de productos ecológicos con un diseño limpio y funcional, enfocada en la sostenibilidad y el comercio justo.',
                    tech: 'PHP, Laravel, Oracle'
                },
                {
                    id: 14,
                    name: 'MoneyWise',
                    imageUrl: 'MoneyWise',
                    status: 'Herramienta de colaboración para que los usuarios manejen mejor sus finanzas personales.',
                    tech: 'React, TypeScript, Tailwind'
                },
                {
                    id: 15,
                    name: 'Sabores del Alma',
                    imageUrl: 'Sabores del alma',
                    status: 'Sitio web corporativo con diseño atractivo y funcional, enfocado en destacar el menú y los platos más representativos de la marca.',
                    tech: 'HTML, CSS, JavaScript'
                },
                {
                    id: 16,
                    name: 'TecnoPlus',
                    imageUrl: 'TecnoPlus',
                    status: 'Tienda en línea de tecnología con un diseño moderno y funcional, enfocada en la experiencia del usuario.',
                    tech: 'React, TypeScript, Tailwind'
                },
                {
                    id: 17,
                    name: 'HRIS PRO',
                    imageUrl: 'HRIS PRO',
                    status: 'Sistema de gestión de recursos humanos que optimiza la administración del personal con funcionalidades avanzadas.',
                    tech: 'Laravel, Vue.js, MySQL'
                },
                {
                    id: 18,
                    name: 'TicoBarbers',
                    imageUrl: 'TicoBarbers',
                    status: 'Plataforma de e-commerce para gestión de citas y venta de productos de barbería, con un diseño moderno y funcional.',
                    tech: 'React, TypeScript, PHP, MySQL'
                },
                {
                    id: 19,
                    name: 'Moda Urbana',
                    imageUrl: 'Moda Urbana',
                    status: 'Sitio web profesional con diseño atractivo y funcional, enfocado en destacar productos de moda urbana y potenciar las ventas en línea.',
                    tech: 'React, Tailwind CSS',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 20,
                    name: 'Registro Horas',
                    imageUrl: 'HorasApp',
                    status: 'Un registro de horas intuitivo y fácil de usar para freelancers y equipos.',
                    tech: 'React, PHP, Oracle',
                    github: 'null',
                    demo: 'null'
                }
            ]
        }
    },
    en: {
        home: {
            greeting: 'Hi, I am',
            name: 'Dariel Montero',
            roles: [
                'Full-Stack Developer',
                'QA Automation',
                'Computer Engineering Student'
            ],
            welcome: 'I develop web applications and automate tests to build practical, reliable, and user-friendly solutions.',
            call: 'Call',
            email: 'Email',
            profileAlt: 'Profile picture - Dariel Montero'
        },
        modal: {
            title: 'Selecciona tu idioma',
            select: 'Select your language'
        },
        nav: {
            home: 'Home',
            about: 'About Me',
            portfolio: 'Portfolio'
        },
        about: {
            title: 'About Me',
            skills: 'Technical Skills',
            tabs: {
                frontend: 'Frontend & Backend',
                database: 'Databases',
                tools: 'Tools & QA'
            },
            description1: 'I am Dariel Montero, a Full-Stack developer from Costa Rica and a Computer Engineering student at Castro Carazo University. I have developed more than 18 digital projects, including websites, online stores, and management systems. I work with technologies such as JavaScript, TypeScript, React, Vue.js, PHP, and Laravel, as well as relational databases. I focus on understanding the needs of each project and turning them into functional applications with responsive interfaces and organized, maintainable code.',
            description2: 'I complement my development experience with skills in quality assurance and test automation. From May to September 2026, I completed an internship at GSB Solutions, where I worked with Cypress and JavaScript on End-to-End and regression testing. I also helped identify, document, and track defects in Azure DevOps, collaborating with the development team to investigate issues and improve product stability. I bring responsibility, clear communication, and a willingness to learn and contribute, both independently and as part of a team.',
            profileAlt: 'Profile picture - Dariel Montero'
        },
        portfolio: {
            title: 'Developed Projects',
            subtitle: 'Explore the projects I have worked on so far',
            projects: [
                {
                    id: 1,
                    name: 'FastWay Box',
                    imageUrl: 'Fatway',
                    status: 'Corporate website with a clean, functional design, focused on highlighting courier and logistics services, optimizing user experience and key information presentation.',
                    tech: 'HTML, CSS, JavaScript',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 2,
                    name: 'ProPlastCR',
                    imageUrl: 'ProPlastCR',
                    status: 'Modern and responsive corporate website, designed with emphasis on usability and attractive visual aesthetics that reinforce brand identity.',
                    tech: 'HTML, CSS, JavaScript',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 3,
                    name: 'LexIA',
                    imageUrl: 'LexIA',
                    status: 'AI-powered legal assistant that helps users navigate the legal system with precise and fast answers.',
                    tech: 'React, Tailwind, TypeScript, AI Integration',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 4,
                    name: 'Luz de Plata',
                    imageUrl: 'Luz de plata',
                    status: 'Online jewelry store with an elegant and functional design, aimed at providing an intuitive user experience.',
                    tech: 'React, Vue , TypeScript, Tailwind CSS',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 6,
                    name: 'Grupo Barak',
                    imageUrl: 'GrupoBarak',
                    status: 'Modern and responsive corporate website, designed with a focus on usability and polished visual aesthetics to project a professional image.',
                    tech: 'HTML, CSS, JavaScript',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 7,
                    name: 'BizVentory',
                    imageUrl: 'BizVentory',
                    status: 'Intelligent inventory management system with real-time analytics and demand predictions.',
                    tech: 'TypeScript, React, Laravel, MySQL',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 8,
                    name: 'VitalForma',
                    imageUrl: 'VitalForma',
                    status: 'Corporate website with attractive and professional design, focused on highlighting health and wellness services in a clear and accessible way.',
                    tech: 'HTML, CSS, JavaScript',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 9,
                    name: 'Bella Natura',
                    imageUrl: 'Bella Natura',
                    status: 'Online store for natural and organic products with a clean and functional design, focused on sustainability and large-scale sales growth.',
                    tech: 'React, TypeScript, Tailwind',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 10,
                    name: 'Cafe Nativo',
                    imageUrl: 'Cafe Nativo',
                    status: 'Corporate website with attractive and functional design, focused on highlighting coffee-related products and services in a clear and visually pleasing way.',
                    tech: 'HTML, CSS, JavaScript',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 12,
                    name: 'Belleza Divina',
                    imageUrl: 'Belleza Divina',
                    status: 'Corporate website for Belleza Divina, with an attractive and functional design that highlights its beauty and wellness services.',
                    tech: 'Vue.js, Tailwind CSS',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 13,
                    name: 'EcoVida',
                    imageUrl: 'EcoVida',
                    status: 'Online store for ecological products with a clean and functional design, focused on sustainability and fair trade.',
                    tech: 'PHP, Laravel, Oracle',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 14,
                    name: 'MoneyWise',
                    imageUrl: 'MoneyWise',
                    status: 'Collaboration tool for users to better manage their personal finances.',
                    tech: 'React, TypeScript, Tailwind',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 15,
                    name: 'Sabores del Alma',
                    imageUrl: 'Sabores del alma',
                    status: 'Corporate website with attractive and functional design, focused on highlighting the menu and the brand\'s most representative dishes.',
                    tech: 'HTML, CSS, JavaScript',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 16,
                    name: 'TecnoPlus',
                    imageUrl: 'TecnoPlus',
                    status: 'Online technology store with a modern and functional design, focused on user experience.',
                    tech: 'React, TypeScript, Tailwind',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 17,
                    name: 'HRIS PRO',
                    imageUrl: 'HRIS PRO',
                    status: 'Human resources management system that optimizes personnel administration with advanced functionalities.',
                    tech: 'Laravel, Vue.js, MySQL',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 18,
                    name: 'TicoBarbers',
                    imageUrl: 'TicoBarbers',
                    status: 'E-commerce platform for appointment management and barbershop product sales, with a modern and functional design.',
                    tech: 'React, TypeScript, PHP, MySQL',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 19,
                    name: 'Moda Urbana',
                    imageUrl: 'Moda Urbana',
                    status: 'Professional website with attractive and functional design, focused on highlighting urban fashion products and boosting online sales.',
                    tech: 'React, Tailwind CSS',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 20,
                    name: 'Registro Horas',
                    imageUrl: 'HorasApp',
                    status: 'An intuitive and easy-to-use Time tracker for freelancers and teams.',
                    tech: 'React, PHP, Oracle',
                    github: 'null',
                    demo: 'null'
                }
            ]
        }
    }
};

const i18n = createI18n({
    legacy: false, // Use Composition API mode
    globalInjection: true,
    locale: 'es', // Set default locale
    fallbackLocale: 'es',
    messages,
});

export default i18n;