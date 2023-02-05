import { component$, } from "@builder.io/qwik"
export interface logoProps {
   text: string
   image: string
}

export const Logo = component$((props: logoProps) => {
   return (
      <a title={props.text} class="hover:scale-110 flex flex-col h-full justify-between self-start transition duration-75">
         <img src={props.image} alt={props.text} />
         <p class="text-center mt-3 text-xs"> {props.text} </p>
      </a>
   )
})