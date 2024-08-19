const HEAD = 
(
    <div style={{
        width:"50px",
        height:"50px",
        borderRadius:"100%",
        border:"10px solid black",
        position:"absolute",
        top:"50px",
        right:"-30px"
    }}/>
)

const BODY = 
(
    <div style={{
        width:"10px",
        height:"120px",
        background:"black",
        position:"absolute",
        top:"118px",
        right:"0px"
    }}/>
)

const RIGHT_ARM = 
(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"150px",
        right:"-90px",
        rotate:"30deg"
    }}/>
)

const LEFT_ARM = 
(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"150px",
        right:"0px",
        rotate:"-30deg"
    }}/>
)

const RIGHT_LEG = 
(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"255px",
        right:"-90px",
        rotate:"30deg"
    }}/>
)

const LEFT_LEG = 
(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"255px",
        right:"0px",
        rotate:"-30deg"
    }}/>
)




const HangmanDrawing = () => {
  return (
    <div style={{position: "relative"}}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
      <div style={{ height:"50px", width:"10px", background: "black", top:0, right:0, position:"absolute"}}/>  
      <div style={{ height:"10px", width:"200px", background: "black", marginLeft:"120px"}}/> 
      <div style={{ height:"400px", width:"10px", background: "black", marginLeft:"120px"}}/>  
      <div style={{ height:"10px", width:"250px", background: "black"}}/>
    </div>
  )
}

export default HangmanDrawing
