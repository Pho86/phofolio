import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="bg-zinc-800 flex border-b-sky-600 border-b-8">
      <div class="flex px-5 items-center font-bold text-2xl ">
        <a class="flex justify-center" href="/" title="Go Back Home">
          Philip Ho Portfolio
        </a>
      </div>
      <ul class="m-0 pl-1 text-right flex-1 p-2">
        <a href="https://github.com/Pho86" class="px-8 py-4 hover:font-bold hover:bg-neutral-900" >
          <li class="inline-block h-full">
            Github
          </li>
        </a>
        <a href="https://qwik.builder.io/examples/introduction/hello-world/" class="px-8 py-4 hover:font-bold hover:bg-neutral-900">
          <li class="inline-block">
            See Resume
          </li>
        </a>
      </ul>
    </header>
  );
});
