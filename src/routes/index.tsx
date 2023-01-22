import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Project } from '~/components/project/project';
export default component$(() => {
  return (
    <div class="flex flex-col gap-10">
      <h1>
        Hi, I'm Philip Ho, a Front-end Developer.
      </h1>

      <div>
        <h2>Skills</h2>
        <div class="grid grid-cols-8 gap-2 items-center">
          <img src="/logos/javascript.png" class="" />
          <img src="/logos/typescript.png" class="" />
          <img src="/logos/nextjs.png" class="" />
          <img src="/logos/react.png" class="" />
          <img src="/logos/reactnative.png" class="" />
          <img src="/logos/nuxt3.png" class="" />
          <img src="/logos/tailwindcss.png" class="" />
          <img src="/logos/styled-components.png" class="" />
          <img src="/logos/storybook.png" class="" />
          <img src="/logos/firebase.webp" class="" />
          <img src="/logos/sqlite.png" class="" />
        </div>
      </div>

      <div>
        <h2>Projects</h2>
        <div class="flex flex-col gap-8">
          <Project title="LocalToMe" url="/projects/localtome" image="/localtome/LocalToMe1.png" text="LocalToMe is a web application that locates and provides low-income families/individuals with free & accessible food resources near their area within their budgets." tools="Next JS, React, Styled-components, Material UI, Storybook, Firebase, Mapbox,  Algolia"/>
          <Project title="RainCheck" url="/projects/raincheck" image="/raincheck/Raincheck.png" text="RainCheck is an interactive map web application providing insights on the Vancouver housing market and lets you know how long it takes you to afford one. Created during BCIT’s QDS 2023 Hackathon." tools="Next JS, React, Styled-components, TailwindCSS, React Leaflet, Axios, Chart Js"/>
          <Project title="AquaPal" url="/projects/aquapal" image="/aquapal/AquaPal.png" text="AquaPal is a web application that helps you reach your water goals, to aid you reaching your goals, you can choose between having a monkey or an otter as a pet. They help you in having fun while drinking your water." tools="Express, EJS, SQLite3, SQLite, Axios"/>
          <Project title="ShareFood" url="/projects/sharefood" doubleimage={["/sharefood/ShareFoodMain.png", "/sharefood/ShareFood.png"]} text="ShareFood is a web application that has the goal to save food by sharing it with others; whether, it be receiving or giving away leftover foods. It tells you details about the food and has many fun stories to explore." tools="Next JS, React, Styled-components, Material UI"/>
          <Project title="Genshinfy" url="/projects/genshinfy" image="/genshinfy/Genshinfy.png" text="Genshinfy is a music player web application that allows people to upload and listen to music, mainly from the game Genshin Impact. Developed the application as an individual as a solo project to explore using the framework Nuxt 3/Vue Js." tools="Nuxt 3, Vue JS, Typescript, TailwindCSS, Howler JS, Firebase, Pinia, Vee-Validate"/>
        </div>
      </div>



    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
