// Booklist.jsx

export const Booklist = ({ language, getData }) => {
   const result = getData?.(language);

   return (
    <>
        <p>this is {result} list component</p>
    </>
   );
} ;
