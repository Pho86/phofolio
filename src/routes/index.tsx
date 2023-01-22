import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Project } from '~/components/project/project';
export default component$(() => {
  return (
    <div class="flex flex-col gap-10">
      <h1>
        Hello, I'm Philip Ho, a Front-end Developer.
      </h1>

      <div>
        <h2>Skills</h2>
        <div class="grid grid-cols-8 gap-4 items-center">
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
        <div>
          <Project title="LocalToMe" url="/projects/localtome" image="/localtome/LocalToMe1.png" text="LocalToMe is a web application that locates and provides low-income families/individuals with free & accessible food resources near their area within their budgets." />
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
