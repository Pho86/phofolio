import { component$, } from "@builder.io/qwik"
import { Button } from "../button/button"
export interface projectProps {
   title: string
   url: string
   image: string
   text: string
}

export const Project = component$((props: projectProps) => {
   return (
      <div class="w-full bg-gradient-to-t from-zinc-800 to-zinc-900 rounded-2xl p-6 grid grid-cols-1 gap-10 md:grid-cols-2">
         <div class="flex justify-center w-full">
            <img src={props.image} class="w-11/12 justify-self-center md:w-full" />
         </div>
         <div class="flex flex-col justify-evenly">
            <a href={props.url} title={props.title}>
               <h1>{props.title}</h1>
            </a>
            <p>{props.text}</p>
            <div class="flex justify-evenly flex-col gap-2 md:flex-row md:gap-2">
               <Button text="Learn More" url={props.url} />
               {/* <Button text="Live Site" url="https://localtome.vercel.app/" /> */}
            </div>
         </div>
      </div>
   )
})