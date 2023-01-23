import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
   return (
      <div class="flex flex-col gap-10">
         <h1>About Page</h1>
            
      </div>
   )
})

export const head: DocumentHead = {
   title: 'About Page',
   meta: [
      {
         name: 'Philip Ho Portfolio for front end development made in Qwik.',
         content: 'Philip Ho Portfolio for front end development made in Qwik.',
      },
   ],
};