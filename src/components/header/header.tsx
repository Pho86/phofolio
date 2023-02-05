import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="bg-zinc-800 flex border-b-sky-600 border-b-8 justify-between">
      <a class="flex justify-center hover:bg-neutral-900" href="/" title="Go Back Home">
        <div class="flex px-8 items-center font-bold text-2xl ">
          Home
        </div>
      </a>
      <div>
        <ul class="m-0 pl-1 flex-1 flex text-center p-2">
          <a href="https://github.com/Pho86" target="_blank" class="px-8 py-4 hover:bg-neutral-900" >
            <li class="inline-block h-full">
              Github
            </li>
          </a>
          <a href="https://github.com/Pho86/" class="px-8 py-4 hover:bg-neutral-900">
            <li class="inline-block">
              Resume
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
});
