import sql from "@/lib/db";

export async function getCountries() {
  const rows = await sql`select id, name, abbr from countries`;
  return rows;
}

export async function addCountry() {
  await sql`insert into countries (name, abbr) values ('Coisa2', 'CO2')`;
}
