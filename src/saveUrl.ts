import path = require('path');
import fs = require('fs')
import * as vscode from 'vscode';

export const saveUrl = (url : string) => {

    let filePath = vscode.window.activeTextEditor?.document.uri;
    let srcPath: string | undefined;
    if(filePath !== undefined)
        srcPath = vscode.workspace.getWorkspaceFolder(filePath)?.uri.fsPath;

    if(srcPath !== undefined){
        vscode.window.showInformationMessage(srcPath);
        let data = {
            youtubeLink : url
        }

        fs.mkdir(path.join(srcPath,'.vscode'),(_)=>{})
        fs.writeFileSync(path.join(srcPath,'.vscode','yotubed.json'), JSON.stringify(data))
    }
    else
        vscode.window.showErrorMessage("Undefined")
    
}