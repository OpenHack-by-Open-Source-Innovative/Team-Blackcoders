import path = require('path');
import fs = require("fs");
import * as vscode from 'vscode';

export const openUrl = async() => {

    let workspacePath = vscode.workspace.workspaceFolders;

    let srcPath: string = "";
    if (workspacePath !== undefined){
        srcPath = workspacePath[0].uri.fsPath;
    }

    var dataArray = JSON.parse(fs.readFileSync(path.join(srcPath,'.vscode','yotubed.json'), 'utf-8'));
    vscode.env.openExternal(vscode.Uri.parse(dataArray.youtubeLink));
}
