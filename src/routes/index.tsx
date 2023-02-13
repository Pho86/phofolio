import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Project } from '~/components/project/project';
import { Logo } from '~/components/logo/logo';
export default component$(() => {
  return (
    <div class="flex flex-col gap-12">
      <div class="max-w-[100%] flex flex-col gap-5 animate-fadeInDown md:max-w-[75%]">
        <h1 class="text-5xl leading-tight">
          Front-End Developer, <br /> <span class="text-sky-400 text-6xl">Philip Ho</span>
        </h1>
        <hr class="my-0"/>
        <div class="animate-fadeInDown delay-75">
          <h2 class="font-medium">I am an aspiring Front-End Developer who develops for web and mobile with a focus on providing users with the most seamless experience possible.</h2>
        </div>
      </div>
      <div class="animate-fadeInDown delay-100">
        <h2 class="mb-5">Technology Stack</h2>
        <div class="grid grid-cols-4 justify-start gap-5 items-center md:grid-cols-8">
          <Logo text="Next JS" image="/logos/nextjs.png" />
          <Logo text="React" image="/logos/react.png" />
          <Logo text="React Native" image="/logos/reactnative.png" />
          <Logo text="Nuxt 3" image="/logos/nuxt3.png" />
          <Logo text="Vue" image="/logos/vue.png" />
          <Logo text="Javascript" image="/logos/javascript.png" />
          <Logo text="Typescript" image="/logos/typescript.png" />
          <Logo text="HTML" image="/logos/html.png" />
          <Logo text="CSS" image="/logos/css.png" />
          <Logo text="TailwindCSS" image="/logos/tailwindcss.png" />
          <Logo text="SASS" image="/logos/sass.png" />
          <Logo text="Styled-components" image="/logos/styled-components.png" />
          <Logo text="Storybook" image="/logos/story.png" />
          <Logo text="Firebase" image="/logos/firebase.webp" />
          <Logo text="SQLite" image="/logos/sqlite.png" />
          <Logo text="Figma" image="/logos/Figma.png" />
        </div>
      </div>

      <div>
        <h2 class="mb-5">Projects</h2>
        <div class="flex flex-col gap-10">
          <Project title="LocalToMe" url="/projects/localtome" image="/localtome/LocalToMe1.png" text="LocalToMe is a web application that locates and provides low-income families/individuals with free & accessible food resources near their area within their budgets." tech="Next JS, React, Styled-components, Framer-motion, Storybook, Firebase, Mapbox, Algolia" giturl="https://github.com/phoenixlai833/localtome" liveurl="https://localtome.vercel.app/" align={true} fadeIn={true} />
          <Project title="RainCheck" url="/projects/raincheck" image="/raincheck/RainChecks.png" text="RainCheck is an interactive map web application providing insights on the Vancouver housing market and lets you know how long it takes you to afford one. Created during BCIT’s QDS 2023 Hackathon." tech="Next JS, React, Styled-components, TailwindCSS, Framer-motion, React Leaflet, Axios" giturl="https://github.com/null-name-qds/hackathon" liveurl="https://qds-raincheck.vercel.app/welcome" />
          <Project title="AquaPal" url="/projects/aquapal" image="/aquapal/AquaPals.png" text="AquaPal is a web application that helps you reach your water goals, to aid you reaching your goals, you can choose between having a monkey or an otter as a pet. They help you in having fun while drinking your water." tech="Express, EJS, SQLite, Axios" giturl="https://github.com/Pho86/WaterTracker" liveurl="https://aquapal.onrender.com/" align={true} fadeIn={true} />
          <Project title="Genshinfy" url="/projects/genshinfy" image="/genshinfy/Genshinfys.png" text="Genshinfy is a music player web application that allows people to upload and listen to music, mainly from the game Genshin Impact. Developed the application as an individual as a solo project to explore using the framework Nuxt 3/Vue Js." tech="Nuxt 3, Vue JS, Typescript, TailwindCSS, Howler JS, Firebase, Pinia, Vee-Validate" giturl="https://github.com/Pho86/Genshinfy" liveurl="https://genshinfy.vercel.app/"  fadeIn={true} />
          <Project title="ShareFood" url="/projects/sharefood" doubleimage={["/sharefood/ShareFoodMain.png", "/sharefood/ShareFood.png"]} text="ShareFood is a web application that has the goal to save food by sharing it with others; whether, it be receiving or giving away leftover foods. It tells you details about the food and has many fun stories to explore." tech="Next JS, React, Styled-components" giturl="https://github.com/Pho86/ShareFood" liveurl="https://sharefood.vercel.app/" align={true}/>
        </div>
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Philip Ho Portfolio',
  meta: [
    {
      name: 'Philip Ho Portfolio for front end development made in Qwik.',
      content: 'Philip Ho Portfolio for front end development made in Qwik.',
    },
  ],
};
