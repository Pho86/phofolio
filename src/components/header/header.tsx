import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="flex ml-5 items-center font-bold text-2xl">
        <a class="flex justify-center" href="/" title="Go Back Home">
          Philip Ho Portfolio
        </a>
      </div>
      <ul>
        <li>
          <a href="https://github.com/Pho86">
            Github
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/">
            See Resume
          </a>
        </li>
      </ul>
    </header>
  );
});
