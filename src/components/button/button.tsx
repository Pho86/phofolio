import { component$, useStylesScoped$ } from "@builder.io/qwik"
import styles from "./button.css?inline"
export interface buttonProps {
   text: string
   color?: string
   type?: "button" | "submit" | "reset"
   url: string
}

export const Button = component$((props: buttonProps) => {
   useStylesScoped$(styles);
   return (
      <a class="text" href={props.url} target="_blank">
         <button
            class="button"
            type={props.type ?? "button"}
         >
            {props.text}
         </button>
      </a>
   )
})