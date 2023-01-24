import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class="bg-gradient-to-t from-zinc-900 to-neutral-900 scroll-auto">
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="text-zinc-50 flex gap-5 justify-center font-bold text-lg ">
        <a href="https://github.com/Pho86/" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/philippho/" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:philip03ho@gmail.com" target="_blank">
          Email
        </a>
        <a href="https://github.com/Pho86/" target="_blank">
          Resume
        </a>
      </footer>
    </>
  );
});

