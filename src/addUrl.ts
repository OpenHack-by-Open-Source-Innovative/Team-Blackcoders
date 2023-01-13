import * as vscode from 'vscode';

export const addUrl = async() => {
    const searchQuery = await vscode.window.showInputBox({
        placeHolder: "Enter youtube link",
        prompt: "Add your youtube link",
        // value: ''
      });
      if (searchQuery !== undefined)
        vscode.window.showInformationMessage(searchQuery);
    //   return searchQuery
    //   if(searchQuery === ''){
    //     console.log(searchQuery);
    //     vscode.window.showErrorMessage('A search query is mandatory to execute this action');
    //   }
}
