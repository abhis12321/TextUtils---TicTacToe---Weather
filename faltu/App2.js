const user = {
    id:'01',
    imgURl:'https://th.bing.com/th/id/OIP.qtPLjKW-exCIYSiBlVRmeAAAAA?pid=ImgDet&rs=1',
    name:'Captain Jack Sparrow',
    imgSize:'50px',
}

export default function App() {
    <>
    <h1>{user.name}</h1>
      <img
        className="avatar"  //class
        src={user.imageUrl}  //image url
        alt={'Photo of ' + user.name} //alt
        style = {{ //css
          width: user.imageSize,
          height: user.imageSize
        }} 
      />

      <h1>{user.name}</h1>
      <img src="user.imgURL" alt={"IMAGE OF " + user.name} 
        style={{border:'solid blue 1rem',
            //   border-radius:'1rem',
              }}
      />
      </>
}