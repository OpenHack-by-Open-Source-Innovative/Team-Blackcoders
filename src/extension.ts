import * as vscode from 'vscode';
import { addUrl } from './addUrl';

export async function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "youtubed" is now active!');

	let disposable = vscode.commands.registerCommand('youtubed.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from YouTubeD!');
	});

	context.subscriptions.push(disposable);

	let au = vscode.commands.registerCommand('youtubed.addUrl', addUrl);
}

// This method is called when your extension is deactivated
export function deactivate() {}
