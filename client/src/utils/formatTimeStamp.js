import { distanceInWords } from "date-fns";

const formatTimeStamp = date => {
	return distanceInWords(new Date(), date, { addSuffix: true });
};

export default formatTimeStamp;
