import * as React from "react";
import * as Daisy from "react-daisyui";
import Refresh from "./../icons/Refresh";

const Password = () => {
	const [copy, setCopy] = React.useState(false);

	function Copy(msg) {
		navigator.clipboard.writeText(msg);
		setCopy(true);
		setTimeout(() => {
			setCopy(false);
		}, 3 * 1000);
	}

	const [password, setPassword] = React.useState({
		8: "",
		10: "",
		18: "",
		30: "",
	});

	React.useEffect(() => {
		setPassword(generatePassword());
		return () => {};
	}, []);

	function newPasswords() {
		setPassword(generatePassword());
	}

	return (
		<div className="break-inside-avoid w-full flex flex-col child:p-2 h-fit bg-base-300 text-base-content rounded p-1 relative">
			<div onClick={newPasswords} className="cursor-pointer absolute top-2 right-2 w-fit"><Refresh size={30} /></div>
			<h3>Passwörter</h3>
			<h4>8 Zeichen</h4>
			<div className="font-monospace font-bold text-lg cursor-pointer" onClick={() => Copy(password[8])}>
				{password[8]}
			</div>
			<h4>10 Zeichen</h4>
			<div className="font-monospace font-bold text-lg cursor-pointer" onClick={() => Copy(password[10])}>
				{password[10]}
			</div>
			<h4>18 Zeichen</h4>
			<div className="font-monospace font-bold text-lg cursor-pointer" onClick={() => Copy(password[18])}>
				{password[18]}
			</div>
			<h4>30 Zeichen</h4>
			<div className="font-monospace font-bold text-base sm:text-lg cursor-pointer" onClick={() => Copy(password[30])}>
				{password[30]}
			</div>
			{copy && (
				<Daisy.Alert className="col-span-2 text-center" status="info">
					Passwort kopiert.
				</Daisy.Alert>
			)}
		</div>
	);
};

export default Password;

const generatePassword = () => {
	let passwords = {
		8: "",
		10: "",
		18: "",
		30: "",
	};

	[8, 10, 18, 30].forEach((passwordLength) => {
		let password = "";
		for (let i = 0; i < passwordLength; i++) {
			let choice = random(0, 3);
			if (choice === 0) {
				password += randomLower();
			} else if (choice === 1) {
				password += randomUpper();
			} else if (choice === 2) {
				password += randomSymbol();
			} else if (choice === 3) {
				password += random(0, 9);
			} else {
				i--;
			}
		}
		passwords[passwordLength] = password;
	});
	return passwords;
};

const random = (min = 0, max = 1) => {
	return Math.floor(Math.random() * (max + 1 - min) + min);
};

const randomLower = () => {
	return String.fromCharCode(random(97, 122));
};

const randomUpper = () => {
	return String.fromCharCode(random(65, 90));
};

const randomSymbol = () => {
	const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
	return symbols[random(0, symbols.length - 1)];
};
