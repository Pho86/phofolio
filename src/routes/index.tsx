import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Project } from '~/components/project/project';
import { Logo } from '~/components/logo/logo';
export default component$(() => {
  return (
    <div class="flex flex-col gap-10">
      <h1>
        Hi, I'm Philip Ho, a Front-end Developer.
      </h1>
      <div>

        <h2>Introduction</h2>
        <p>I am currently an aspiring Front-end Developer studying at BCIT's Digital Design and Development program. I am always looking for new challenges and opportunities to work with innovative technologies and improve my skills and currently looking for a practicum. Thank you for visiting my site, and I hope you enjoy exploring my work.</p>
      </div>
      <div>
        <h2>Skills</h2>
        <div class="grid grid-cols-6 gap-2 items-center md:grid-cols-8">
          <Logo text="HTML" image="/logos/html.png" />
          <Logo text="CSS" image="/logos/css.png" />
          <Logo text="Javascript" image="/logos/javascript.png" />
          <Logo text="Typescript" image="/logos/typescript.png" />
          <Logo text="Next JS" image="/logos/nextjs.png" />
          <Logo text="React" image="/logos/react.png" />
          <Logo text="React Native" image="/logos/reactnative.png" />
          <Logo text="Nuxt 3" image="/logos/nuxt3.png" />
          <Logo text="Vue" image="/logos/vue.png" />
          <Logo text="TailwindCSS" image="/logos/tailwindcss.png" />
          <Logo text="Styled-components" image="/logos/styled-components.png" />
          <Logo text="SASS" image="/logos/sass.png" />
          <Logo text="Storybook" image="/logos/storybook.png" />
          <Logo text="Firebase" image="/logos/firebase.webp" />
          <Logo text="SQLite" image="/logos/sqlite.png" />
          <Logo text="Figma" image="/logos/Figma.png" />
        </div>
      </div>

      <div>
        <h2>Projects</h2>
        <div class="flex flex-col gap-8">
          <Project title="LocalToMe" url="/projects/localtome" image="/localtome/LocalToMe1.png" text="LocalToMe is a web application that locates and provides low-income families/individuals with free & accessible food resources near their area within their budgets." tools="Next JS, React, Styled-components, Framer-motion, Material UI, Storybook, Firebase, Mapbox, Algolia" giturl="https://github.com/phoenixlai833/localtome" liveurl="https://localtome.vercel.app/" />
          <Project title="RainCheck" url="/projects/raincheck" image="/raincheck/RainChecks.png" text="RainCheck is an interactive map web application providing insights on the Vancouver housing market and lets you know how long it takes you to afford one. Created during BCIT’s QDS 2023 Hackathon." tools="Next JS, React, Styled-components, TailwindCSS, Framer-motion, React Leaflet, Axios, Chart Js" giturl="https://github.com/null-name-qds/hackathon" liveurl="https://qds-raincheck.vercel.app/welcome" />
          <Project title="AquaPal" url="/projects/aquapal" image="/aquapal/AquaPals.png" text="AquaPal is a web application that helps you reach your water goals, to aid you reaching your goals, you can choose between having a monkey or an otter as a pet. They help you in having fun while drinking your water." tools="Express, EJS, SQLite3, SQLite, Axios" giturl="https://github.com/Pho86/WaterTracker" liveurl="https://aquapal.onrender.com/" />
          <Project title="ShareFood" url="/projects/sharefood" doubleimage={["/sharefood/ShareFoodMain.png", "/sharefood/ShareFood.png"]} text="ShareFood is a web application that has the goal to save food by sharing it with others; whether, it be receiving or giving away leftover foods. It tells you details about the food and has many fun stories to explore." tools="Next JS, React, Styled-components, Material UI" giturl="https://github.com/Pho86/ShareFood" liveurl="https://sharefood.vercel.app/" />
          <Project title="Genshinfy" url="/projects/genshinfy" image="/genshinfy/Genshinfys.png" text="Genshinfy is a music player web application that allows people to upload and listen to music, mainly from the game Genshin Impact. Developed the application as an individual as a solo project to explore using the framework Nuxt 3/Vue Js." tools="Nuxt 3, Vue JS, Typescript, TailwindCSS, Howler JS, Firebase, Pinia, Vee-Validate" giturl="https://github.com/Pho86/Genshinfy" liveurl="https://genshinfy.vercel.app/" />
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
