import videos from "../../json/db.json"
import Card from "../Card"

export default function SectionCards(){
    return <section className="flex justify-center mb-20">
        <div className="container flex gap-4 justify-center flex-wrap">
            {videos.map((video)=>{
                return(
                    <Card 
                    {...video}
                    key={video.id}
                    />
                )
            })}
        </div>
    </section>
}