<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Avanzado'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Avanzado'
        },
        {
          id: 3,
          name: 'JavaScript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: 'Avanzado'
        },
        {
          id: 4,
          name: 'React',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Intermedio'
        },
        {
          id: 5,
          name: 'Vue.js',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Intermedio'
        },
        {
          id: 6,
          name: 'TypeScript',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png',
          status: 'Intermedio'
        },
        {
          id: 7,
          name: 'Tailwind',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
          status: 'Avanzado'
        },
        {
          id: 8,
          name: 'Python',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/python-3628999-3030224.png',
          status: 'Basico'
        },
        {
          id: 9,
          name: 'Java',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png',
          status: 'Intermedio'
        },
        {
          id: 10,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Intermedio'
        },
        {
          id: 11,
          name: 'C#',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/c-sharp-569564.png',
          status: 'Basico'
        },
        {
          id: 12,
          name: 'Laravel',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
          status: 'Intermedio'
        }
      ],
      databases: [
        {
          id: 1,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Base de Datos'
        },
        {
          id: 2,
          name: 'Oracle',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/oracle-6-569258.png',
          status: 'Base de Datos'
        }
      ],
      tools: [
        {
          id: 1,
          name: 'VS Code',
          imageUrl: 'https://code.visualstudio.com/assets/images/code-stable.png',
          status: 'Editor de Código'
        },
        {
          id: 2,
          name: 'Visual Studio',
          imageUrl: 'https://visualstudio.microsoft.com/wp-content/uploads/2021/10/Product-Icon.svg',
          status: 'IDE'
        },
        {
          id: 3,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Control de Versiones'
        },
        {
          id: 4,
          name: 'GitHub',
          imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          status: 'Repositorio Git'
        },
        {
          id: 5,
          name: 'Docker',
          imageUrl: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
          status: 'Contenedores'
        },
        {
          id: 6,
          name: 'NetBeans',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg',
          status: 'IDE'
        },
        {
          id: 7,
          name: 'Android Studio',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg',
          status: 'IDE Móvil'
        },
        {
          id: 8,
          name: 'PhpStorm',
          imageUrl: 'https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg',
          status: 'IDE PHP'
        },
        {
          id: 9,
          name: 'Postman',
          imageUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
          status: 'API Testing'
        },
        {
          id: 10,
          name: 'XAMPP',
          imageUrl: 'https://www.apachefriends.org/images/xampp-logo-ac950edf.svg',
          status: 'Servidor Local'
        },
        {
          id: 11,
          name: 'Oracle SQL Developer',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/oracle-6-569258.png',
          status: 'Base de Datos'
        },
        {
          id: 12,
          name: 'DBeaver',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg',
          status: 'Gestor de BD'
        }
      ]
    };
  }
}
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          {{ $t('about.title') }} &nbsp;
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
  <div class="flex justify-center">
    <img class="w-64 h-64 md:w-72 md:h-72 rounded-full mb-3 fadein-up object-cover object-center"
         src="/img/Foto Mia.jpg" 
         :alt="$t('about.profileAlt')">
  </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; {{ $t('about.description1') }}
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; {{ $t('about.description2') }}
          </p>
        </div>

      </section>

    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; {{ $t('about.skills') }}
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">{{ $t('about.tabs.frontend') }}</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">{{ $t('about.tabs.database') }}</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 3 }" @click="activeTab = 3">{{ $t('about.tabs.tools') }}</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img :alt="item.name" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in databases" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img :alt="item.name" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 3">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img :alt="item.name" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
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
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>