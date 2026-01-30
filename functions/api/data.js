export async function onRequestGet(context) {
  const list = await context.env.DATA.list();
  const results = await Promise.all(
    list.keys.map(async (key) => {
      const val = await context.env.DATA.get(key.name);
      return JSON.parse(val);
    })
  );
  // Naye admissions upar dikhane ke liye sort
  results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" }
  });
}

