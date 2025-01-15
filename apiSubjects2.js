// import axios from "axios";

// export async function apiSubject2(id, task) {
//   const token = localStorage.getItem("token");

//   let url = `http://localhost:5000/api/v1/types?course=${id}`;
//   console.log(task);

//   if (!task) {
//     url += `&type[ne]=Task`;
//   } else {
//     url += `&keyword=Task`;
//   }
//   console.log(url);
//   const res = await fetch(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const { data, error } = await res.json();
//   if (error) {
//     console.error(error);
//     throw new Error("Subject could not be loaded");
//   }

//   return data;
// }
// export async function deleteSubject2(idOfCourse) {
//   const token = localStorage.getItem("token");
//   console.log(idOfCourse);
//   const { data, error } = await axios.delete(
//     `http://localhost:5000/api/v1/types/${idOfCourse}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   if (error) {
//     console.error(error);
//     throw new Error("Subject could not be deleted");
//   }
//   return data;
// }
// export async function createSubject2(data1) {
//   const token = localStorage.getItem("token");
//   console.log(data1);
//   const { data, error } = await axios.post(
//     "http://localhost:5000/api/v1/types",
//     data1,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   if (error) {
//     console.error(error);
//     throw new Error("Subject could not be created");
//   }

//   return data;
// }

// export async function editSubject2(newData2, idOfUser) {
//   const token = localStorage.getItem("token");
//   console.log(newData2, idOfUser);

//   const { data, error } = await axios.put(
//     `http://localhost:5000/api/v1/types/${idOfUser}`,
//     newData2,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         // "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//   if (error) {
//     console.log(error.message);
//     console.error(error);
//     throw new Error("User could not be  edited");
//   }
//   console.log(data);
//   return data;
// }
import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/app/v1/tours";

export async function apiSubject2() {
  let url = BASE_URL;

  console.log(url);

  const res = await fetch(url);
  const { data, error } = await res.json();

  if (error) {
    console.error(error);
    throw new Error("Subject could not be loaded");
  }
  console.log(data);
  return data;
}

// export async function deleteSubject2(idOfCourse) {
//   console.log(idOfCourse);

//   try {
//     const { data } = await axios.delete(`${BASE_URL}/${idOfCourse}`);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Subject could not be deleted");
//   }
// }

export async function createSubject2(data1) {
  console.log(data1);

  try {
    const { data } = await axios.post(BASE_URL, data1);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Subject could not be created");
  }
}

// export async function editSubject2(newData2, idOfUser) {
//   console.log(newData2, idOfUser);

//   try {
//     const { data } = await axios.put(`${BASE_URL}/${idOfUser}`, newData2);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("User could not be edited");
//   }
// }
export async function createcompany(data1) {
  console.log(data1);
  const BASE_URL2 =
    "https://mycashback.mycashtest.com/api/companyRequest/create";
  try {
    const { data } = await axios.post(BASE_URL2, data1);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("company could not be created");
  }
}
