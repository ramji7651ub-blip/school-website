export async function onRequestPost(context) {
  const data = await context.request.json();
  const id = Date.now().toString();
  // KV Namespace ka naam 'DATA' rakhein dashboard mein
  await context.env.DATA.put(id, JSON.stringify(data));
  
  return new Response("Saved", { headers: { "Access-Control-Allow-Origin": "*" } });
}

