import * as vscode from 'vscode';
import { saveUrl } from './saveUrl';

export const addUrl = async() => {
    vscode.window.showInputBox({
        placeHolder: "Enter youtube link",
        prompt: "Add your youtube link",
      }).then(url => {
        if (url !== undefined){
            vscode.window.showInformationMessage(url);
            saveUrl(url)
        }
        if(url === ''){
            console.log(url);
            vscode.window.showErrorMessage('A search query is mandatory to execute this action');
        }
      })
      

   


}
