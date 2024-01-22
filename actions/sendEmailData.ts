"use server";

export const sendEmailData = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("message"));
};
