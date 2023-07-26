import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
	.prompt([
		{
			message: 'Enter a URL:',
			name: 'URL',
		},
	])
	.then((answers) => {
		const url = answers.URL;
		const qr_svg = qr.image(url);
		qr_svg.pipe(fs.createWriteStream('qr_img.png'));

		fs.writeFile('message.md', url, (err) => {
			if (err) {
				throw err;
			} else {
				console.log('File has been saved');
			}
		});
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});
