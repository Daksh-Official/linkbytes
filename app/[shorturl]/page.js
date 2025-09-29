import React from 'react'
import mongoClient from "@/lib/mongodb"
import { redirect,notFound } from 'next/navigation'

const page =async ({params}) => {
  params= await params;
  const client = await mongoClient;
  const db= await client.db("linkbytes");
  const collection = db.collection("links"); 
  let check = await collection.findOne({shorturl:params.shorturl})

  if (check){
    redirect(check.url);
  }
  else{
    notFound();
  }
  return (
    <div>
    </div>
  )
}

export default page
