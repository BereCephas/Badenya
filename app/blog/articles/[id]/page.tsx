"use client"
// import Article from "../../../../components/Article";
import Article from "../../../../components/Article"

export default function test({params}:any){
    return (
        <Article id={params.id}/>
    )
}