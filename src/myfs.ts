import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

const filePath = path.resolve('c://');
// fileDisplay(filePath);
const readdirAsync = promisify(fs.readdir);
const statAsync = promisify(fs.stat);

async function fileDisplayAsync(filepath: string) {
    try {
        let files = await readdirAsync(filepath);
        files.forEach(async (filename) => {
            let filedir = path.join(filepath, filename);
            try {
                let stats = await statAsync(filedir);
                if (stats.isDirectory()) {
                    console.log(filedir + '\\');
                }
                if (stats.isFile()) {
                    console.log(filedir);
                }
            } catch (error) {
                console.warn(error);
            }
        })
    } catch (err) {
        console.warn(err);
    }
}
fileDisplayAsync(filePath);
// import fs from "fs";
// import path from "path";

// interface Result {
//     file: string;
//     path: string;
//     type: string;
// }

// async function inspectFileAsync(filepath){

// }


// function inspectFile(filepath: string, callback: (err: NodeJS.ErrnoException | null, result?: Result) => void): void {
//     let result: Result = {
//         file: path.basename(filepath),
//         path: filepath,
//         type: ''
//     };
//     fs.stat(filepath, (err, stat) => {
//         if (err) {
//             callback(err);
//         } else {
//             if (stat.isFile()) {
//                 result.type = 'file';
//             }
//             if (stat.isDirectory()) {
//                 result.type = 'directory';
//             }
//             callback(err,result)
//         }
//     });
// }

// function inpectFolder(folderPath:string,files:Array<string>) {
//     files.forEach((file)=>{
//         const resolveFilePath=path.resolve(folderPath,file);
//         inspectFile(resolveFilePath)
//     })
// }