import mongoClient from "@/lib/mongodb"

export async function POST(request) {
    const client = await mongoClient;
    const db= await client.db("linkbytes");
    const collection = db.collection("links");
    let data= await request.json();

    let check= await collection.findOne({shorturl:data.shorturl});
    if(check){
        return Response.json({success:false,message:"Error! ShortURL already exists please select another name"});
    }
    else{
    await collection.insertOne({url:data.url,shorturl:data.shorturl});
    return Response.json({success:true,message:"short url generated successfully!!!"});
    }
}