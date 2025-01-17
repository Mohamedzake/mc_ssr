export async function createcompany(data1) {
  console.log(data1);
  const BASE_URL2 =
    "https://mycashback.mycashtest.com/api/companyRequest/create";

  try {
    const response = await fetch(BASE_URL2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Company could not be created");
  }
}
