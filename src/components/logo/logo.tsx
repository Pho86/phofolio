import { component$, } from "@builder.io/qwik"
export interface logoProps {
   text: string
   image: string
}

export const Logo = component$((props: logoProps) => {
   return (
      <a title={props.text} class="hover:scale-110 transition duration-75">
         <img src={props.image} alt={props.text} />
      </a>
   )
})