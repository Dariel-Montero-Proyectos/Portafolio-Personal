<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: 'FastWay Box',
          imageUrl: 'Fatway',
          status: 'Sitio web corporativo con un diseño limpio, funcional y orientado a destacar servicios de mensajería y logística, optimizando la experiencia del usuario y la presentación de información clave.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/Dariel-Montero-Proyectos/Fastway',
          demo: 'https://fastway-rho.vercel.app/'
        },
        {
          id: 2,
          name: 'ProPlastCR',
          imageUrl: 'ProPlastCR',
          status: 'Sitio web corporativo moderno y responsivo, diseñado con énfasis en la usabilidad y una estética visual atractiva que refuerza la identidad de una marca.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/Dariel-Montero-Proyectos/ProPlast',
          demo: 'https://pro-plast.vercel.app/'
        },
        {
          id: 3,
          name: 'LexIA',
          imageUrl: 'LexIA',
          status: 'Asistente legal impulsado por IA que ayuda a los usuarios a navegar por el sistema legal con respuestas precisas y rápidas.',
          tech: 'React, Tailwind, TypeScript, AI Integration',
          github: 'https://github.com/Dariel-Montero-Proyectos/LexIA',
          demo: 'https://lex-ia-hazel.vercel.app/'
        },
        {
          id: 4,
          name: 'Luz de Plata',
          imageUrl: 'Luz de plata',
          status: 'Tienda en línea de joyería con diseño elegante y funcional, orientada a brindar una experiencia de usuario intuitiva.',
          tech: 'React, Vue , TypeScript, Tailwind CSS',
          github: 'https://github.com/Dariel-Montero-Proyectos/Luz-de-Plata',
          demo: 'https://luz-de-plata.vercel.app/'
        },
        {
          id: 6,
          name: 'Grupo Barak',
          imageUrl: 'GrupoBarak',
          status: 'Sitio web corporativo moderno y responsivo, diseñado con enfoque en usabilidad y una estética visual cuidada para proyectar una imagen profesional.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/Dariel-Montero-Proyectos/barak',
          demo: 'https://barak-tau.vercel.app/'
        },
        {
          id: 7,
          name: 'BizVentory',
          imageUrl: 'BizVentory',
          status: 'Sistema de gestión de inventario inteligente con análisis en tiempo real y predicciones de demanda.',
          tech: 'TypeScript, React, Laravel, MySQL',
          github: 'null',
          demo: 'null'
        },
        {
          id: 8,
          name: 'VitalForma',
          imageUrl: 'VitalForma',
          status: 'Sitio web corporativo con diseño atractivo y profesional, enfocado en destacar servicios de salud y bienestar de forma clara y accesible.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/Dariel-Montero-Proyectos/VitalForma',
          demo: 'https://vital-forma.vercel.app/'
        },
        {
          id: 9,
          name: 'Bella Natura',
          imageUrl: 'Bella Natura',
          status: 'Tienda en línea de productos naturales y orgánicos con un diseño limpio y funcional, enfocada en la sostenibilidad y el aumento de ventas a gran escala.',
          tech: 'React, TypeScript, Tailwind',
          github: 'https://github.com/Dariel-Montero-Proyectos/Bella-Natura',
          demo: 'https://bella-natura.vercel.app/'
        },
        {
          id: 10,
          name: 'Cafe Nativo',
          imageUrl: 'Cafe Nativo',
          status: 'Sitio web corporativo con diseño atractivo y funcional, enfocado en resaltar productos y servicios relacionados con el café de manera clara y visualmente agradable.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/Dariel-Montero-Proyectos/Cafe-Nativo',
          demo: 'https://cafe-nativo-three.vercel.app/'
        },
        {
          id: 12,
          name: 'Belleza Divina',
          imageUrl: 'Belleza Divina',
          status: 'Sitio web corporativo para Belleza Divina, con un diseño atractivo y funcional que destaca sus servicios de belleza y bienestar.',
          tech: 'Vue.js, Tailwind CSS',
          github: 'https://github.com/Dariel-Montero-Proyectos/Belleza-Divina',
          demo: 'https://belleza-divina.vercel.app/'
        },
        {
          id: 13,
          name: 'EcoVida',
          imageUrl: 'EcoVida',
          status: 'Tienda en línea de productos ecológicos con un diseño limpio y funcional, enfocada en la sostenibilidad y el comercio justo.',
          tech: 'PHP, Laravel, Oracle',
          github: 'https://github.com/Dariel-Montero-Proyectos/EcoVida',
          demo: 'https://eco-vida-xi.vercel.app/'
        },
        {
          id: 14,
          name: 'MoneyWise',
          imageUrl: 'MoneyWise',
          status: 'Herramienta de colaboración para que los usuarios manejen mejor sus finanzas personales.',
          tech: 'React, TypeScript, Tailwind',
          github: 'https://github.com/Dariel17-mo/MoneyWise',
          demo: 'https://moneywise--lilac.vercel.app/'
        },
        {
          id: 15,
          name: 'Sabores del Alma',
          imageUrl: 'Sabores del alma',
          status: 'Sitio web corporativo con diseño atractivo y funcional, enfocado en destacar el menú y los platos más representativos de la marca.',
          tech: 'HTML, CSS, JavaScript',
          github: 'https://github.com/Dariel-Montero-Proyectos/Sabores-del-Alma',
          demo: 'https://sabores-del-alma.vercel.app/'
        },
        {
          id: 16,
          name: 'TecnoPlus',
          imageUrl: 'TecnoPlus',
          status: 'Tienda en línea de tecnología con un diseño moderno y funcional, enfocada en la experiencia del usuario.',
          tech: 'React, TypeScript, Tailwind',
          github: 'https://github.com/Dariel-Montero-Proyectos/TecnoPlus',
          demo: 'https://tecno-plus.vercel.app/'
        },
        {
          id: 17,
          name: 'HRIS PRO',
          imageUrl: 'HRIS PRO',
          status: 'Sistema de gestión de recursos humanos que optimiza la administración del personal con funcionalidades avanzadas.',
          tech: 'Laravel, Vue.js, MySQL',
          github: 'null',
          demo: 'null'
        },
        {
          id: 18,
          name: 'TicoBarbers',
          imageUrl: 'TicoBarbers',
          status: 'Plataforma de e-commerce para gestión de citas y venta de productos de barbería, con un diseño moderno y funcional.',
          tech: 'React, TypeScript, PHP, MySQL',
          github: 'null',
          demo: 'null'
        },
        {
          id: 19,
          name: 'Moda Urbana',
          imageUrl: 'Moda Urbana',
          status: 'Sitio web profesional con diseño atractivo y funcional, enfocado en destacar productos de moda urbana y potenciar las ventas en línea.',
          tech: 'React, Tailwind CSS',
          github: 'https://github.com/Dariel-Montero-Proyectos/Moda-Urbana',
          demo: 'https://moda-urbana-ten.vercel.app/'
        },
        {
          id: 20,
          name: 'Registro Horas',
          imageUrl: 'HorasApp',
          status: 'Un registro de horas intuitivo y fácil de usar para freelancers y equipos.',
          tech: 'React, PHP, Oracle',
          github: 'https://github.com/Dariel17-mo/APPAPI',
          demo: 'https://appapi-lemon.vercel.app/'
        }
      ]
    };
  }
}
</script>

<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <!-- <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"></div> -->
          <h4>Proyectos Desarrollados</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            Explora los proyectos en los que he trabajado hasta ahora</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <div v-for="item in items" :key="item.id">
              <div
                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 ">
                <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                  <img alt="Project Image" loading="lazy" decoding="async" data-nimg="1" class="drop-shadow-xl rounded rounded-xl"
                    :src="'/img/' + item.imageUrl + '.png'">
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                  <div class="title-text font-medium text-secondary">{{ item.name }}
                  </div>
                  <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                  <div class="w-full mt-4 text-normal text-sm text-left text-amber-200">
                    {{ item.tech }}
                  </div>
                  <div class="w-full flex justify-end">
                    <div class="flex cursor-pointer items-end gap-2 text-primary">
                      <a v-if="item.github !== 'null'"
                        :href="item.github" target="_blank" rel="noreferrer"
                        title="Ver repositorio en GitHub" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg>
                      </a>
                      <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        title="Ver proyecto terminado" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #ffdb70;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>