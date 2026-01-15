import { createI18n } from 'vue-i18n';

const messages = {
    es: {
        home: {
            greeting: 'Hola, soy',
            name: 'Dariel Montero',
            roles: [
                'Desarrollador Full-Stack',
                'Estudiante de Ingeniería',
                'Apasionado de la tecnología'
            ],
            welcome: 'Bienvenido a mi sitio web personal.',
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
                tools: 'Herramientas'
            }
        },
        portfolio: {
            title: 'Proyectos Desarrollados',
            subtitle: 'Explora los proyectos en los que he trabajado hasta ahora'
        }
    },
    en: {
        home: {
            greeting: 'Hi, I am',
            name: 'Dariel Montero',
            roles: [
                'Full-Stack Developer',
                'Engineering Student',
                'Tech Enthusiast'
            ],
            welcome: 'Welcome to my personal website.',
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
                tools: 'Tools'
            }
        },
        portfolio: {
            title: 'Developed Projects',
            subtitle: 'Explore the projects I have worked on so far'
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
