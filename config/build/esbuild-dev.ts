import ESBuild from 'esbuild'
import config from './esbuild-config'

const PORT = process.env.PORT ? +process.env.PORT : 3000


const runWatchAndServer = async () => {
   const ctx = await ESBuild.context(config)

    await ctx.watch()

    const { host, port } = await ctx.serve({
      servedir:config.outdir ,
      port: PORT,
    })
      
    return new Promise<{host: string, port: number}>((res, rej) => {
      res({host, port})
    })
}

runWatchAndServer()
  .then(({host, port}) =>  console.log(`Server started on PORT=${port}; HOST=${host}`))
  .catch(console.error)

