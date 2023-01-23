import { component$, } from "@builder.io/qwik"
import { Button } from "../button/button";
import { twMerge } from 'tailwind-merge'
export interface projectProps {
   title: string
   url: string
   text: string
   image?: string
   doubleimage?: string[]
   tools: string
   giturl: string
   liveurl: string
   align?: boolean
   fadeIn?: boolean
}

export const Project = component$((props: projectProps) => {
   return (
      <div class={twMerge(
         props.fadeIn ? "animate-fadeInLeft delay-1000" : "animate-fadeInRight delay-1000",
         "w-full bg-gradient-to-l from-stone-700 to-neutral-800 rounded-2xl px-6 py-6 grid grid-cols-1 gap-6 md:grid-cols-2"
      )}>
         {props.align ? <>
            <div class="flex justify-center w-full">
               {props.doubleimage &&
                  <div class="flex justify-between w-full gap-2">
                     <img src={props.doubleimage[0]} class="w-1/2 justify-self-center" />
                     <img src={props.doubleimage[1]} class="w-1/2 justify-self-center" />
                  </div>
               }
               {props.image && <img src={props.image} class="rounded justify-self-center md:w-full" />}
            </div>
            <div class="flex flex-col justify-between gap-3">
               <div class="flex justify-between">
                  <a href={props.url} title={props.title}>
                     <h2 class="text-2xl">{props.title}</h2>
                  </a>
                  <div class="flex gap-2">
                     <a href={props.giturl} title={"See Github"}>
                        <img src="/github.png" class="w-8 hover:scale-125 transition duration-75 hover:drop-shadow-lg" />
                     </a>
                     <a href={props.liveurl} title={"See Live Site"}>
                        <img src="/external.png" class="w-8 hover:scale-125 transition duration-75 hover:drop-shadow-lg" />
                     </a>
                  </div>
               </div>
               <p>{props.text}</p>
               <p><b>Tech used:</b> {props.tools}</p>
               <Button text="Learn More" url={props.url} />
            </div>
         </> :
            <>
               <div class="flex justify-center w-full">
                  <div class="flex flex-col justify-between gap-3">
                     <div class="flex justify-between">
                        <a href={props.url} title={props.title}>
                           <h2 class="text-2xl">{props.title}</h2>
                        </a>
                        <div class="flex gap-2">
                           <a href={props.giturl} title={"See Github"}>
                              <img src="/github.png" class="w-8 hover:scale-125 transition duration-75 hover:drop-shadow-lg" />
                           </a>
                           <a href={props.liveurl} title={"See Live Site"}>
                              <img src="/external.png" class="w-8 hover:scale-125 transition duration-75 hover:drop-shadow-lg" />
                           </a>
                        </div>
                     </div>
                     <p>{props.text}</p>
                     <p><b>Tech used:</b> {props.tools}</p>
                     <Button text="Learn More" url={props.url} />
                  </div>
               </div>
                  {props.doubleimage &&
                     <div class="flex justify-between w-full gap-2">
                        <img src={props.doubleimage[0]} class="w-1/2 justify-self-center" />
                        <img src={props.doubleimage[1]} class="w-1/2 justify-self-center" />
                     </div>
                  }
                  {props.image && <img src={props.image} class="rounded justify-self-center md:w-full" />}
            </>
         }

      </div>
   )
})