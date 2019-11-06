import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

export interface FilePorp {
    name: string;
    path: string;
    type: string;
}

const filePath = path.resolve('d://');
const readdirAsync = promisify(fs.readdir);
const statAsync = promisify(fs.stat);

async function fileStatsAsync(filepath: string) {
    let result: FilePorp = {
        name: path.basename(filepath),
        path: filepath,
        type: ''
    };
    try {
        let stats = await statAsync(filepath);
        if (stats.isDirectory()) {
            result.type = 'directory';
        }
        if (stats.isFile()) {
            result.type = 'file'
        }
    } catch (error) {
        console.warn(error);
    }
    return result;
}

export default async function fileDisplayAsync(filepath: string) {
    let results: FilePorp[] = [];
    let files = await readdirAsync(filepath);
    for (let filename of files) {
        let filedir = path.join(filepath, filename);
        let result = await fileStatsAsync(filedir);
        results.push(result);
    }
    return results;
}

(async()=>{
    let results =await fileDisplayAsync(filePath);
    console.log(results);
})()

