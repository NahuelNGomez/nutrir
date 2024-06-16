const Card = (theme = 'light')=>{

}


const stats = (theme = 'light') => ({
  container: { padding: "20px" },
  title: { paddingBottom: "10px", paddingTop: "20px", fontSize: "22px", fontWeight: "700" },
  subtitle : { paddingBottom: "10px", paddingTop: "20px", fontSize: "18px", fontWeight: "700" },
  card: Card(theme)
})

export default stats