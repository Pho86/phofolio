import { component$, } from "@builder.io/qwik"
export interface buttonProps {
   text: string
   color?: string
   url: string
}

export const Button = component$((props: buttonProps) => {
   return (
      <a class="text-zinc-900 font-bold hover:text-zinc-50 w-full" href={props.url} title={props.text}>
         <button
            class="px-6 py-4 rounded-lg bg-zinc-50 transition duration-100 border-2 hover:bg-zinc-600 w-full" 
         >
            {props.text}
         </button>
      </a>
   )
})