import {build} from 'esbuild';
import {mkdir,readFile,writeFile,cp,rm} from 'node:fs/promises';
import {routeList} from './src/data.js';
await rm('dist',{recursive:true,force:true});
await mkdir('dist/assets',{recursive:true});
await cp('public','dist',{recursive:true});
await build({entryPoints:['src/main.jsx'],bundle:true,minify:true,outfile:'dist/assets/site.js',loader:{'.html':'text'},define:{'process.env.NODE_ENV':'"production"'},jsx:'automatic',target:['es2020']});
const html=await readFile('index.html','utf8');
for(const route of routeList){const dir='dist'+(route==='/'?'':route);await mkdir(dir,{recursive:true});await writeFile(dir+'/index.html',html);}
await writeFile('dist/404.html',html);
console.log('Built '+routeList.length+' React Router entrypoints with shared assets.');
