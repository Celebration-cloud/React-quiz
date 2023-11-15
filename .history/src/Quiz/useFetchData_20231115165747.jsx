import {useEffect} from 'react'

export default function useFetchData(a) {
  -useEffect(() => {
    async function list() {
      try {
        const data = await fetch(
          "https://react-quiz-api-zez9.onrender.com/Quiz",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        if (!data.ok) throw new Error("Something went wrong");
        const res = await data.json();
        dispatch({ type: "questionList", payload: res });
      } catch (error) {
        dispatch({ type: "error" });
      }
    }
    list();
  }, []);
}
