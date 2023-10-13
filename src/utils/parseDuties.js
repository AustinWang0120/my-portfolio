export const parseDuties = text => {
	return text.split("\n").filter(line => line.trim() !== "");
};
