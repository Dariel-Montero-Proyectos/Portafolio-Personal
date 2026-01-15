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
            },
            description1: 'Dariel, desarrollador web y estudiante de Ingeniería Informática en la Universidad Castro Carazo (7.º cuatrimestre de 8). Se caracteriza por un alto nivel de responsabilidad, puntualidad y ética profesional, así como por sólidas competencias interpersonales que le permiten integrarse y aportar valor tanto en equipos multidisciplinarios como en funciones desempeñadas de manera autónoma, manteniendo siempre estándares elevados de calidad y profesionalismo.',
            description2: 'Estudiante con más de 2 años de experiencia en proyectos digitales, desarrollo de servicios digitales y aplicaciones móviles. Especializado en frontend y backend, combinando conocimientos en diseño responsivo, programación y gestión de bases de datos para optimizar la presencia digital.',
            profileAlt: 'Foto de perfil - Dariel Montero'
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
            email: 'Email'
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
            },
            description1: 'Dariel, web developer and Systems Engineering student at Castro Carazo University (7th quarter of 8). Characterized by a high level of responsibility, punctuality, and professional ethics, as well as solid interpersonal skills that allow him to integrate and add value both in multidisciplinary teams and in autonomous roles, always maintaining elevated standards of quality and professionalism.',
            description2: 'Student with over 2 years of experience in digital projects, digital service development, and mobile applications. Specialized in frontend and backend, combining knowledge in responsive design, programming, and database management to optimize digital presence.',
            profileAlt: 'Profile picture - Dariel Montero'
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
