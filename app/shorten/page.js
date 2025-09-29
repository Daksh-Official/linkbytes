"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
  const myheaders = new Headers();
  myheaders.append("Content-Type", "application/json");

  const [generated, setgenerated] = useState(false);
  const [shorturl, setshorturl] = useState("");
  const [data, setdata] = useState({ url: "", shorturl: "" });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }
  const generate = async () => {
    const raw = JSON.stringify({
      url: data.url,
      shorturl: data.shorturl
    })

    const requestOptions = {
      method: "POST",
      headers: myheaders,
      body: raw,
      redirect: "follow"
    }
    console.log(requestOptions)
    const request = await fetch("/api/generate", requestOptions);
    const response = await request.json();
    if (response.success) {
      alert(response.message);
      setshorturl(data.shorturl);
      setgenerated(true);
      setdata({ url: "", shorturl: "" });
    }
    else {
      alert(response.message);
    }
  }
  return (
    <div className='py-8'>
      <div className='mx-auto flex flex-col items-center gap-8 px-6 py-8 bg-blue-100 rounded-lg border border-gray-800 w-fit min-w-1/3'>
        <div className='font-bold text-xl'>Link<span className='text-blue-400'>Bytes</span></div>
        <div className='flex flex-col w-full'>
          <label htmlFor="link">Enter your URL:</label>
          <input type="text" value={data.url} onChange={(e) => { handleChange(e) }} className='bg-white border border-gray-800 px-2 py-1 rounded-md' name="url" id="url" placeholder='https://www.example.com/...' />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="short">Enter your preferred short URL text:</label>
          <input type="text" value={data.shorturl} onChange={(e) => { handleChange(e) }} className='bg-white border border-gray-800 px-2 py-1 rounded-md' name="shorturl" id="shorturl" placeholder='carrot' />
        </div>
        <button onClick={generate} className='bg-gray-800 font-bold cursor-pointer hover:bg-gray-700 text-white px-3 py-2 rounded-xl'>Generate</button>
        {generated && <div>
          <h3 className='font-bold'>Your short URL:</h3>
          <div className='flex gap-3'>
            <Link target='_blank' href={`${process.env.NEXT_PUBLIC_URL}/${shorturl}`}><p className='text-blue-600 underline hover:text-blue-800'>{`${process.env.NEXT_PUBLIC_URL}/${shorturl}`}</p></Link>
            <span><button className='font-bold cursor-pointer' onClick={() => { navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/${shorturl}`); alert("url copied to clipboard!") }}>Copy</button></span></div>
        </div>}
      </div>
    </div>
  )
}

export default Shorten
