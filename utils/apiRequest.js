import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  postName,
  reset
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXTAUTH_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);
    console.log(data);

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${postName} Created Successfully`);
      reset();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("Fill In All The Necessary Data");
      } else {
        toast.error(`Error: ${response.statusText}`);
        console.log(response);
      }
    }
  } catch (error) {
    setLoading(false);
    console.error("Error in makePostRequest:", error);
  }
}
