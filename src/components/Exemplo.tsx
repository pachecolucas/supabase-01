import { revalidatePath } from "next/cache";
import { getCountries, addCountry } from "./service";

export default async function Exemplo() {
  const countries = await getCountries();

  async function add() {
    "use server";
    console.log("increment...");
    await addCountry();
    revalidatePath("/");
  }

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((c) => (
          <li key={c.id}>
            {c.id} - {c.name}
          </li>
        ))}
      </ul>
      <form action={add}>
        <button type="submit">Increment</button>
      </form>
    </div>
  );
}
