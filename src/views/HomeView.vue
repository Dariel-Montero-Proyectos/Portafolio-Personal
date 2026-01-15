<template>
  <main
    class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
    <div class="space-y-2 text-center md:text-left px-10">
      <p class="text-amber-200">{{ $t('home.greeting') }}</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">{{ $t('home.name') }}</h1>
      <div class="py-2">
        <h1
          class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up"
          ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-white pr-4 fade-in-from-left">{{ $t('home.welcome') }} <span class="wave">👋🏼</span></p>
      <br>
      <div class="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        <button
          @click="contactPhone"
          class="fadein-bot fade-500 flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-4 h-4">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-1.164.912.26 2.336 1.424 1.424 2.235.395 2.336.26l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
          </svg>
          {{ $t('home.call') }}
        </button>
        <button
          @click="contactEmail"
          class="fadein-bot fade-700 flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-4 h-4">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
          </svg>
          {{ $t('home.email') }}
        </button>
      </div>
    </div>
   <div class="flex justify-center md:justify-start fadein-right">
  <img :alt="$t('home.profileAlt')" 
       fetchpriority="high" 
       width="350" 
       height="350" 
       decoding="async" 
       data-nimg="1"
       class="w-85 h-85 md:w-80 md:h-80 rounded-full border-4 border-amber-200 pict object-cover object-center" 
       src="/img/Foto Mia.jpg">
</div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: this.$tm('home.roles'),
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
    contactPhone() {
      const phoneNumber = "50663986348";
      window.location.href = `tel:+${phoneNumber}`;
    },
    contactEmail() {
      const email = "alandarielmontero11@gmail.com";
      const subject = "Contacto desde tu sitio web";
      const body = "Hola Dariel,\n\nMe interesa contactarte.\n\nSaludos.";
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }
  },
  watch: {
    '$i18n.locale'() {
      this.toRotate = this.$tm('home.roles');
      this.loopNum = 0;
      this.isDeleting = false;
      this.txt = '';
    }
  }
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10deg)
  }

  60% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(0deg)
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
-webkit-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
-moz-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-1 {
  animation-delay: 200ms;
}
.fadein-2 {
  animation-delay: 400ms;
}
.fadein-3 {
  animation-delay: 600ms;
}
.fade-500 {
  animation-delay: 500ms;
}
.fade-700 {
  animation-delay: 700ms;
}
</style>