import { component$, } from "@builder.io/qwik"
export interface buttonProps {
   text: string
   url: string
}

export const Button = component$((props: buttonProps) => {
   return (
      <a class="text-neutral-600 font-bold hover:text-zinc-100 w-full hover:scale-[1.05] transition duration-100" href={props.url} title={props.text}>
         <button
            class="px-6 py-4 rounded-lg bg-zinc-100 border-2 hover:bg-neutral-600 w-full" 
         >
            {props.text}
         </button>
      </a>
   )
})