import { toast } from "react-toastify";

const Copy = (toCopy: string, msg: string) => {
	navigator.clipboard.writeText(toCopy);
	toast.info(msg);
};
export default Copy;
