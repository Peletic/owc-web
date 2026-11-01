'use server'


export async function GET(req: Request) {
    console.log(JSON.stringify(req));
    return new Response(null, {status: 200, headers: req.headers});
}