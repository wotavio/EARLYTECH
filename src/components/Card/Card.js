function Card(props){
    const pegarNoticias=()=>{
        axios.get('http://localhost:8000/news')
        .then(response  => props.setNews(response.data))
        .catch(error => console.error(error))
    }

    useEffect( ()=> {
        pegarNoticias()
    },[])
    
    return(
        <>
        Card
        </>
    )
}
export default Card