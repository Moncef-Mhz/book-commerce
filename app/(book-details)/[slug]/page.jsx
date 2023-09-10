import DetailsPage from "@components/DetailsPage";
import Books from "@models/Books";
import { connectToDB } from "@utils/ConnectToDB";

async function Page({ params: { slug } }) {
  connectToDB();
  const book = await Books.findOne({ slug });
  console.log(book);
  return (
    <>
      <DetailsPage book={book} />
    </>
  );
}

export default Page;
