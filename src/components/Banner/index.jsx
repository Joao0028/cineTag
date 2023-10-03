export default function Banner({imagem, alt}){
    return <div className="w-full">
        <img src={`imagens/banner-${imagem}.png`} alt={alt} />
    </div>
}