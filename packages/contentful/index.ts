import * as contentful from "contentful";

const client = contentful.createClient({
  space: "jrsoa0cvn629",
  accessToken: "9ijajscdeJeTG3BB1wA1e_yzHntyfvxB6asNmBnBOkA",
});

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token

const getHomePage = async (): Promise<string> => {
  return client
    .getEntry("2cayfg7wVF5WezADCHgSgL")
    .then((entry: contentful.Entry) => entry.fields.internalName)
    .catch((err: any) => err);
};

export { getHomePage };
