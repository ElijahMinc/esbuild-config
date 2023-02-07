import { Plugin } from "esbuild"
import { rm } from 'fs/promises'

export const CleanPlugin: Plugin = {
   name: 'CleanPlugin',
   setup(build) {
      build.onStart(async () => {
         try {
            // 1) get path folder 
            const outdir = build.initialOptions.outdir 

            if(outdir){
              await rm(outdir, { recursive: true })
            }
         } catch (error) {
            
         }
      })
   },
 }