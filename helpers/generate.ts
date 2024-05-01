export const generateRadomString = (length: number): string => {
	let result: string = "";
	const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for( var i = 0; i <= length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
}


export const generateRadomNumber = (length: number): string => {
	let result: string = "";
	const characters: string = "0123456789";

	for( var i = 0; i <= length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
}