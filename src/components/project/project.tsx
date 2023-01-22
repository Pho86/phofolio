import { component$, } from "@builder.io/qwik"
import { Button } from "../button/button"
export interface projectProps {
   title: string
   url: string
   image: string
   text: string
   doubleimage: array[]
   tools: string
}

export const Project = component$((props: projectProps) => {
   return (
      <div class="w-full bg-gradient-to-t from-neutral-700 to-neutral-800 rounded-2xl px-4 py-6 grid grid-cols-1 gap-4 md:grid-cols-2">
         <div class="flex justify-center w-full">
            {props.doubleimage &&
            <div class="flex justify-between w-full gap-2">
               <img src={props.doubleimage[0]} class="w-1/2 justify-self-center" />
               <img src={props.doubleimage[1]} class="w-1/2 justify-self-center" />
            </div>
            }
            {props.image && <img src={props.image} class="w-11/12 h-11/12 justify-self-center md:w-full" /> }
         </div>
         <div class="flex flex-col justify-between gap-3">
            <a href={props.url} title={props.title}>
               <h2 class="text-2xl">{props.title}</h2>
            </a>
            <p>{props.text}</p>
            <p><b>Tech:</b> {props.tools}</p>
            <Button text="Learn More" url={props.url} />
         </div>
      </div>
   )
})