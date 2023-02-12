import * as React from "react";
import {toast} from "react-toastify"
import Refresh from "./../icons/Refresh";

const Password = () => {

	function Copy(msg: string) {
		navigator.clipboard.writeText(msg);
		toast.info("Passwort kopiert")
	}

	type passwordType = {
		a: string;
		b: string;
		c: string;
		d: string;
	};

	const [password, setPassword] = React.useState<passwordType>({
		a: "",
		b: "",
		c: "",
		d: "",
	});

	React.useEffect(() => {
		setPassword(generatePassword());
		return () => {};
	}, []);

	function newPasswords() {
		setPassword(generatePassword());
	}

	return (
		<div className="card relative">
			<div onClick={newPasswords} className="cursor-pointer absolute top-2 right-2 w-fit">
				<Refresh size={30} />
			</div>
			<h3>Passwörter</h3>
			<h4>8 Zeichen</h4>
			<div className="copy" onClick={() => Copy(password.a)}>
				{password.a}
			</div>
			<h4>10 Zeichen</h4>
			<div className="copy" onClick={() => Copy(password.b)}>
				{password.b}
			</div>
			<h4>18 Zeichen</h4>
			<div className="copy" onClick={() => Copy(password.c)}>
				{password.c}
			</div>
			<h4>30 Zeichen</h4>
			<div className="copy" onClick={() => Copy(password.d)}>
				{password.d}
			</div>
		</div>
	);
};

export default Password;

const generatePassword = () => {
	return {
		a: getPassword(8),
		b: getPassword(10),
		c: getPassword(18),
		d: getPassword(30),
	};
};

const getPassword = (length: number) => {
	let password: string = "";
	for (let i = 0; i < length; i++) {
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
	return password;
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
