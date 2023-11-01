import { IAnyObject } from "types";

const getObjectFieldValue = (path: string, object: IAnyObject) => {
    const delimiter = path.match(/(\/)/g)?.join("") || " ";

    const splitPath = path.split(delimiter);

    const objectFieldValue = splitPath.reduce((obj: IAnyObject, key) => {
        if (obj && typeof obj === "object" && obj.hasOwnProperty(key)) {
            return obj[key];
        }
        return undefined;
    }, object);

    return objectFieldValue;
};

export { getObjectFieldValue };
