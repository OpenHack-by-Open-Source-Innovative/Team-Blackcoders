import path = require('path');
import fs = require('fs')
import * as vscode from 'vscode';

export const saveUrl = (url : string) => {

    let workspacePath = vscode.workspace.workspaceFolders;

    let srcPath: string = "";
    if (workspacePath !== undefined){
        srcPath = workspacePath[0].uri.fsPath;
    }
    

    if(srcPath !== ""){
        vscode.window.showInformationMessage(srcPath);
        let data = {
            youtubeLink : url
        }

        fs.mkdir(path.join(srcPath,'.vscode'),(_)=>{
            fs.writeFileSync(path.join(srcPath,'.vscode','yotubed.json'), JSON.stringify(data))

        })
    }
    else
        vscode.window.showErrorMessage("Undefined")
    
}