import { BuildOptions } from 'esbuild'
import { CleanPlugin } from '../plugins/CleanPlugin'
import { HtmlPlugin} from '../plugins/HtmlPlugin'
import path from 'path'
import { livereloadPlugin } from '@jgoz/esbuild-plugin-livereload'

const mode = process.env.MODE || 'development'

const isProd = mode === 'production'
const isDev = mode === 'development'

const resolveRoot = (...segments: string[]) => {
   return path.resolve(__dirname, '..', '..', ...segments) 
}

const config: BuildOptions ={
   outdir: resolveRoot('dist'),
   entryPoints: [resolveRoot('src','index.ts')],
   entryNames: '[dir]/bundle.[name]-[hash]',
   allowOverwrite: true,
   bundle: true,
   metafile: true,
   minify: isProd,
   sourcemap: isDev,
   tsconfig: resolveRoot('tsconfig.json'),
   loader: {
      '.png': 'file',
      '.svg': 'file',
      ".jpg": 'file'
   },
   plugins: [
      CleanPlugin, 
      HtmlPlugin({
         title: 'ESBuild2023'
      }),
      // livereloadPlugin()
   ]
}
 
export default config

